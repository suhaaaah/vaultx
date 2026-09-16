type FormType = "contact" | "landing-lead";

type FormSourceConfig = {
  label: string;
  formType: FormType;
  route: "/contact/" | "/lp/storage-solutions/" | "/lp/logistics-solutions/";
  requiredFields: readonly FormField[];
};

type FormField = "name" | "email" | "phone" | "company" | "service" | "message";

type ValidatedFormSubmission = {
  formType: FormType;
  source: keyof typeof formSources;
  sourceLabel: string;
  route: string;
  submittedAt: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
};

type FormEmailResult = {
  message: string;
  status: number;
};

const fieldLimits: Record<FormField, number> = {
  name: 120,
  email: 254,
  phone: 40,
  company: 160,
  service: 140,
  message: 2000,
};

const formSources = {
  "contact-page": {
    label: "Contact page",
    formType: "contact",
    route: "/contact/",
    requiredFields: ["name", "email", "phone", "message"],
  },
  "landing-storage-hero": {
    label: "Storage landing hero quote form",
    formType: "landing-lead",
    route: "/lp/storage-solutions/",
    requiredFields: ["name", "email", "phone", "service"],
  },
  "landing-storage-bottom": {
    label: "Storage landing bottom quote form",
    formType: "landing-lead",
    route: "/lp/storage-solutions/",
    requiredFields: ["name", "email", "phone", "service"],
  },
  "landing-logistics-hero": {
    label: "Logistics landing hero quote form",
    formType: "landing-lead",
    route: "/lp/logistics-solutions/",
    requiredFields: ["name", "email", "phone", "service"],
  },
  "landing-logistics-bottom": {
    label: "Logistics landing bottom quote form",
    formType: "landing-lead",
    route: "/lp/logistics-solutions/",
    requiredFields: ["name", "email", "phone", "service"],
  },
} as const satisfies Record<string, FormSourceConfig>;

const successMessage = "Thanks. Your request has been sent to VaultX. Our team will contact you within 24 hours.";
const configurationMessage =
  "Email submission is not configured yet. Please call, email, or WhatsApp VaultX directly.";
const sendFailureMessage =
  "We could not send your request right now. Please call, email, or WhatsApp VaultX directly.";
const invalidMessage = "Please check the highlighted details and try again.";
const spamMessage = "Unable to process this request.";

export async function sendPublicFormEmail(payload: unknown): Promise<FormEmailResult> {
  const validation = validateSubmission(payload);

  if (!validation.ok) {
    return { message: validation.message, status: validation.status };
  }

  const config = getEmailConfig();

  if (!config.ok) {
    return { message: configurationMessage, status: 503 };
  }

  const email = buildEmail(validation.submission);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: config.fromEmail,
        to: config.toEmails,
        reply_to: validation.submission.email,
        subject: email.subject,
        html: email.html,
        text: email.text,
      }),
    });

    if (!response.ok) {
      return { message: sendFailureMessage, status: 502 };
    }
  } catch {
    return { message: sendFailureMessage, status: 502 };
  }

  return { message: successMessage, status: 200 };
}

function validateSubmission(payload: unknown):
  | { ok: true; submission: ValidatedFormSubmission }
  | { ok: false; message: string; status: number } {
  if (!isRecord(payload)) {
    return { ok: false, message: invalidMessage, status: 400 };
  }

  if (readOptional(payload, "website", 200)) {
    return { ok: false, message: spamMessage, status: 400 };
  }

  const source = readOptional(payload, "source", 80);
  if (!source || !isFormSource(source)) {
    return { ok: false, message: invalidMessage, status: 400 };
  }

  const config = formSources[source];
  const formType = readOptional(payload, "formType", 40);
  if (formType !== config.formType) {
    return { ok: false, message: invalidMessage, status: 400 };
  }

  const route = readOptional(payload, "page", 160);
  if (route !== config.route) {
    return { ok: false, message: invalidMessage, status: 400 };
  }

  const values = {
    name: readOptional(payload, "name", fieldLimits.name),
    email: readOptional(payload, "email", fieldLimits.email),
    phone: readOptional(payload, "phone", fieldLimits.phone),
    company: readOptional(payload, "company", fieldLimits.company),
    service: readOptional(payload, "service", fieldLimits.service),
    message: readOptional(payload, "message", fieldLimits.message),
  };

  if (hasOversizedField(payload)) {
    return { ok: false, message: invalidMessage, status: 400 };
  }

  for (const field of config.requiredFields) {
    if (!values[field]) {
      return { ok: false, message: invalidMessage, status: 400 };
    }
  }

  if (!values.email || !isValidEmail(values.email)) {
    return { ok: false, message: invalidMessage, status: 400 };
  }

  return {
    ok: true,
    submission: {
      formType: config.formType,
      source,
      sourceLabel: config.label,
      route: config.route,
      submittedAt: new Date().toISOString(),
      name: values.name ?? "",
      email: values.email,
      phone: values.phone,
      company: values.company,
      service: values.service,
      message: values.message,
    },
  };
}

function getEmailConfig():
  | { ok: true; apiKey: string; toEmails: string[]; fromEmail: string }
  | { ok: false } {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const toEmails = parseRecipientEmails(process.env.VAULTX_FORM_TO_EMAIL);
  const fromEmail = process.env.VAULTX_FORM_FROM_EMAIL?.trim();

  if (!apiKey || toEmails.length === 0 || !fromEmail) {
    return { ok: false };
  }

  return { ok: true, apiKey, toEmails, fromEmail };
}

function parseRecipientEmails(value: string | undefined) {
  if (!value) {
    return [];
  }

  const recipients = value
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);

  if (recipients.length === 0 || recipients.some((email) => !isValidEmail(email))) {
    return [];
  }

  return Array.from(new Set(recipients));
}

function buildEmail(submission: ValidatedFormSubmission) {
  const subject = `New VaultX ${submission.formType === "contact" ? "contact" : "quote"} request from ${submission.name}`;
  const candidateRows: [string, string | undefined][] = [
    ["Form source", submission.sourceLabel],
    ["Page", submission.route],
    ["Submitted", submission.submittedAt],
    ["Name", submission.name],
    ["Email", submission.email],
    ["Phone", submission.phone],
    ["Company", submission.company],
    ["Service", submission.service],
    ["Message", submission.message],
  ];
  const rows = candidateRows.filter((row): row is [string, string] => Boolean(row[1]));

  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding: 10px 16px; width: 150px; color: #64748b; font-size: 13px; font-weight: 700; vertical-align: top;">${escapeHtml(label)}</td>
          <td style="padding: 10px 16px; color: #111827; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(value ?? "")}</td>
        </tr>
      `,
    )
    .join("");

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  const html = `
<!doctype html>
<html lang="en">
  <body style="margin: 0; padding: 0; background: #f4f4f5; font-family: Arial, sans-serif;">
    <table role="presentation" style="width: 100%; border-collapse: collapse;">
      <tr>
        <td align="center" style="padding: 32px 16px;">
          <table role="presentation" style="width: 100%; max-width: 640px; border-collapse: collapse; overflow: hidden; border-radius: 12px; background: #ffffff;">
            <tr>
              <td style="background: #000000; padding: 28px 32px;">
                <p style="margin: 0; color: #ffc727; font-size: 13px; letter-spacing: 0.2em; text-transform: uppercase;">VaultX Website</p>
                <h1 style="margin: 12px 0 0; color: #ffffff; font-size: 24px; font-weight: 400;">New Public Form Submission</h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 24px 16px;">
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  ${htmlRows}
                </table>
              </td>
            </tr>
            <tr>
              <td style="border-top: 1px solid #e5e7eb; padding: 18px 32px; color: #64748b; font-size: 12px;">
                This email was generated by the public VaultX website. Reply directly to the submitted email address if appropriate.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim();

  return { subject, html, text };
}

function readOptional(payload: Record<string, unknown>, key: string, maxLength: number) {
  const value = payload[key];

  if (typeof value !== "string") {
    return undefined;
  }

  const cleaned = value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim();

  if (!cleaned || cleaned.length > maxLength) {
    return undefined;
  }

  return cleaned;
}

function hasOversizedField(payload: Record<string, unknown>) {
  return (Object.keys(fieldLimits) as FormField[]).some((field) => {
    const value = payload[field];
    return typeof value === "string" && value.trim().length > fieldLimits[field];
  });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isFormSource(source: string): source is keyof typeof formSources {
  return Object.hasOwn(formSources, source);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
