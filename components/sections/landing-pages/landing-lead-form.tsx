"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { type FormEvent, useState } from "react";
import type { LandingPageData } from "@/lib/landing-pages-data";

type FormStatus = "idle" | "pending" | "success" | "error";
type LandingFormSection = "hero" | "bottom";

const sourceMap: Record<LandingPageData["id"], Record<LandingFormSection, string>> = {
  "storage-solutions": {
    hero: "landing-storage-hero",
    bottom: "landing-storage-bottom",
  },
  "logistics-solutions": {
    hero: "landing-logistics-hero",
    bottom: "landing-logistics-bottom",
  },
};

const fallbackErrorMessage = "We could not send your request right now. Please call, email, or WhatsApp VaultX directly.";
const thankYouRedirectPath = "/thank-you/";

export function LandingLeadForm({
  page,
  buttonLabel,
  layout = "compact",
  section = "hero",
}: {
  page: LandingPageData;
  buttonLabel: string;
  layout?: "compact" | "wide";
  section?: LandingFormSection;
}) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [notice, setNotice] = useState("");
  const fields = page.form.fields;
  const source = sourceMap[page.id][section];
  const honeypotId = `${source}-website`;
  const fieldClass =
    "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-all duration-300 hover:translate-x-1 hover:border-white/20 focus:translate-x-0 focus:border-yellow-500 focus:outline-none";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("pending");
    setNotice("");

    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "landing-lead",
          source,
          page: page.metadata.canonical,
          website: formData.get("website"),
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          service: formData.get("service"),
          message: formData.get("message"),
        }),
      });
      const data = (await response.json().catch(() => ({}))) as { message?: string };

      if (!response.ok) {
        setStatus("error");
        setNotice(data.message ?? fallbackErrorMessage);
        return;
      }

      setStatus("success");
      setNotice("Quote request sent. Redirecting...");
      form.reset();
      window.location.assign(thankYouRedirectPath);
    } catch {
      setStatus("error");
      setNotice(fallbackErrorMessage);
    }
  }

  return (
    <form
      className={layout === "wide" ? "space-y-6" : "space-y-4"}
      onSubmit={handleSubmit}
    >
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor={honeypotId}>Website</label>
        <input id={honeypotId} type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={layout === "wide" ? "grid gap-6 md:grid-cols-2" : "space-y-4"}>
        {fields.slice(0, 2).map((field) => (
          <input
            key={field.name}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            required={field.required}
            className={fieldClass}
          />
        ))}
      </div>

      <div className={layout === "wide" ? "grid gap-6 md:grid-cols-2" : "space-y-4"}>
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone *"
          required
          className={fieldClass}
        />
        <select name="service" required className={`${fieldClass} bg-gray-950`} defaultValue="">
          <option value="" className="bg-gray-950">
            {page.form.selectPlaceholder}
          </option>
          {page.form.fields
            .find((field) => field.type === "select")
            ?.options?.map((option) => (
              <option key={option} value={option} className="bg-gray-950">
                {option}
              </option>
            ))}
        </select>
      </div>

      <textarea
        name="message"
        placeholder={page.form.messagePlaceholder}
        rows={layout === "wide" ? 5 : 4}
        className={`${fieldClass} resize-none`}
      />

      <AnimatePresence initial={false}>
        {notice ? (
          <motion.p
            className={`rounded-lg border px-4 py-3 text-sm font-light leading-relaxed ${
              status === "success"
                ? "border-emerald-400/40 bg-emerald-400/5 text-emerald-200"
                : "border-yellow-500/30 bg-yellow-500/5 text-yellow-200"
            }`}
            aria-live="polite"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {notice}
          </motion.p>
        ) : null}
      </AnimatePresence>

      <button
        type="submit"
        className="w-full rounded-lg bg-yellow-500 px-6 py-3 font-normal text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-400 active:translate-y-0 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
        disabled={status === "pending"}
      >
        {status === "pending" ? "Sending..." : buttonLabel}
      </button>

      <p className="text-center text-xs font-light text-gray-500">
        By submitting, you agree to our{" "}
        <Link href="/privacy/" className="text-yellow-500 hover:underline">
          Privacy Policy
        </Link>
        {layout === "wide" ? (
          <>
            {" "}
            and{" "}
            <Link href="/terms/" className="text-yellow-500 hover:underline">
              Terms of Service
            </Link>
          </>
        ) : null}
      </p>
    </form>
  );
}
