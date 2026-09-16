import Link from "next/link";
import { Reveal, RevealArticle, RevealSection } from "@/components/motion/reveal";
import { thankYouResources, thankYouSteps } from "@/lib/utility-pages-data";

export function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4 py-24 text-white">
      <Reveal className="w-full max-w-3xl text-center" y={28}>
        <div className="mb-8 mt-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-yellow-500/20">
          <CheckIcon className="h-12 w-12 text-yellow-500" />
        </div>

        <h1 className="mb-4 text-4xl font-extralight text-white md:text-5xl">Thank You for Reaching Out!</h1>
        <p className="mb-12 text-xl font-light text-gray-300">
          Your message has been successfully submitted. We appreciate your interest in VaultX.
        </p>

        <RevealSection className="mb-12 border border-white/10 bg-white/5 p-8 md:p-12" y={24}>
          <h2 className="mb-8 flex items-center justify-center gap-3 text-2xl font-normal text-white">
            <ClockIcon className="h-6 w-6 text-yellow-500" />
            What Happens Next?
          </h2>

          <div className="mx-auto max-w-2xl space-y-6 text-left">
            {thankYouSteps.map((step, index) => (
              <RevealArticle key={step.title} className="flex gap-4" delay={index * 0.05} y={16}>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-500/20 font-normal text-yellow-500">
                  {index + 1}
                </div>
                <div>
                  <h3 className="mb-2 font-normal text-white">{step.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-gray-400">{step.description}</p>
                </div>
              </RevealArticle>
            ))}
          </div>

          <div className="mt-8 border-t border-white/10 pt-8">
            <div className="inline-flex items-center gap-2 border border-yellow-500/30 bg-yellow-500/10 px-6 py-3">
              <ClockIcon className="h-5 w-5 text-yellow-500" />
              <span className="font-light text-white">
                <span className="font-normal text-yellow-500">Expected Response Time:</span> Within 24 Hours
              </span>
            </div>
          </div>
        </RevealSection>

        <RevealSection className="mb-12" y={24}>
          <h2 className="mb-6 text-xl font-normal text-white">Need Immediate Assistance?</h2>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:+971586992781"
              className="inline-flex items-center justify-center gap-2 border border-white/10 bg-white/5 px-6 py-3 text-white transition-colors duration-300 hover:bg-white/10"
            >
              <PhoneIcon className="h-5 w-5 text-yellow-500" />
              <span className="font-light">+971 58 699 2781</span>
            </a>
            <a
              href="mailto:info@vaultx.ae"
              className="inline-flex items-center justify-center gap-2 border border-white/10 bg-white/5 px-6 py-3 text-white transition-colors duration-300 hover:bg-white/10"
            >
              <MailIcon className="h-5 w-5 text-yellow-500" />
              <span className="font-light">info@vaultx.ae</span>
            </a>
          </div>
        </RevealSection>

        <RevealSection>
          <h2 className="mb-6 text-xl font-normal text-white">While You Wait, Explore Our Services</h2>
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {thankYouResources.map((resource, index) => (
              <Reveal key={resource.href} delay={index * 0.05} y={20}>
                <Link
                  href={resource.href}
                  className="group border border-white/10 bg-white/5 p-6 text-left transition-colors duration-300 hover:bg-white/10"
                >
                  <h3 className="mb-2 font-normal text-white transition-colors group-hover:text-yellow-500">
                    {resource.title}
                  </h3>
                  <p className="mb-4 text-sm font-light text-gray-400">{resource.description}</p>
                  <div className="flex items-center gap-2 text-sm text-yellow-500">
                    <span>Learn More</span>
                    <span aria-hidden="true">&gt;</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Link href="/" className="site-button site-button-primary">
            Return to Homepage
          </Link>
        </RevealSection>
      </Reveal>
    </main>
  );
}

function CheckIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

function ClockIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function PhoneIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.67 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.54 2.81.67A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MailIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}
