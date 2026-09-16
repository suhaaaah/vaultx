"use client";

import { AnimatePresence, motion } from "framer-motion";
import { type FormEvent, useState } from "react";
import { serviceOptions } from "@/lib/core-pages-data";

type FormStatus = "idle" | "pending" | "success" | "error";

const fallbackErrorMessage = "We could not send your request right now. Please call, email, or WhatsApp VaultX directly.";
const thankYouRedirectPath = "/thank-you/";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [notice, setNotice] = useState("");

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
          formType: "contact",
          source: "contact-page",
          page: "/contact/",
          website: formData.get("website"),
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          company: formData.get("company"),
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
      setNotice("Request sent. Redirecting...");
      form.reset();
      window.location.assign(thankYouRedirectPath);
    } catch {
      setStatus("error");
      setNotice(fallbackErrorMessage);
    }
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
        <input
          type="text"
          name="name"
          placeholder="Full Name *"
          required
          className="contact-field"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          required
          className="contact-field"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          required
          className="contact-field"
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className="contact-field"
        />
      </div>

      <div className="relative">
        <select name="service" className="contact-field appearance-none bg-black" defaultValue="">
          {serviceOptions.map((option) => (
            <option key={option.value || "empty"} value={option.value} className="bg-black">
              {option.label}
            </option>
          ))}
        </select>
        <span
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xl leading-none text-gray-600"
          aria-hidden="true"
        >
          v
        </span>
      </div>

      <textarea
        name="message"
        placeholder="Tell us about your requirements..."
        rows={6}
        required
        className="contact-field resize-none"
      />

      <AnimatePresence initial={false}>
        {notice ? (
          <motion.p
            className={`border px-4 py-3 text-sm font-light leading-relaxed ${
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

      <div className="flex flex-col gap-4 sm:flex-row">
        <button type="submit" className="site-button site-button-primary disabled:cursor-not-allowed disabled:opacity-60" disabled={status === "pending"}>
          {status === "pending" ? "Sending..." : "Submit Request"}
        </button>
        <a
          href="https://wa.me/971586992781"
          target="_blank"
          rel="noopener noreferrer"
          className="site-button site-button-secondary"
        >
          WhatsApp Us
        </a>
      </div>
    </form>
  );
}
