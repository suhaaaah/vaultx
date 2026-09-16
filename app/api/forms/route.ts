import { sendPublicFormEmail } from "@/lib/form-email";

const maxBodySize = 20_000;

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";

  if (!contentType.includes("application/json")) {
    return Response.json({ message: "Invalid request." }, { status: 415 });
  }

  const body = await request.text();

  if (body.length > maxBodySize) {
    return Response.json({ message: "Invalid request." }, { status: 413 });
  }

  let payload: unknown;

  try {
    payload = JSON.parse(body);
  } catch {
    return Response.json({ message: "Invalid request." }, { status: 400 });
  }

  const result = await sendPublicFormEmail(payload);

  return Response.json({ message: result.message }, { status: result.status });
}
