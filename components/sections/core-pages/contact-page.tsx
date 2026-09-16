import { contactCards, contactLocations } from "@/lib/core-pages-data";
import { Reveal, RevealArticle, RevealSection } from "@/components/motion/reveal";
import { ContactForm } from "./contact-form";

export function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-500/10 via-black to-black pb-20 pt-32 lg:h-[50vh] lg:pb-0 lg:pt-0">
        <Reveal className="site-container relative z-10 text-center" y={30}>
          <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-yellow-500">GET IN TOUCH</p>
          <h1 className="mb-6 text-4xl font-extralight text-white sm:text-5xl md:text-7xl">Let&apos;s Talk</h1>
          <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-gray-400">
            Ready to transform your logistics and storage operations? We&apos;re here to help you succeed.
          </p>
        </Reveal>
      </section>

      <RevealSection className="relative z-20 -mt-16" y={20}>
        <div className="site-container grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((item, index) => (
            <RevealArticle
              key={item.label}
              className="group border border-gray-800 bg-gray-900/80 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-yellow-500/50"
              delay={index * 0.05}
            >
              <ContactIcon icon={item.icon} />
              <p className="mb-1 text-xs font-light tracking-wider text-gray-500">{item.label}</p>
              <p className="mb-4 font-light text-white">{item.value}</p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-sm font-light text-yellow-500 transition-colors duration-300 hover:text-yellow-400"
                >
                  {item.action}
                  <span aria-hidden="true">&gt;</span>
                </a>
              ) : (
                <span className="text-sm font-light text-gray-600">{item.action}</span>
              )}
            </RevealArticle>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="py-16 md:py-32">
        <div className="site-container grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-3" x={-30} y={0}>
            <div className="border border-gray-800 p-8 md:p-12">
              <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-yellow-500">SEND A MESSAGE</p>
              <h2 className="mb-8 text-3xl font-extralight text-white md:text-4xl">Request a Free Quote</h2>
              <ContactForm />
            </div>
          </Reveal>

          <Reveal className="space-y-8 lg:col-span-2" x={30} y={0} delay={0.08}>
            <div className="border border-gray-800 p-8">
              <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-yellow-500">VISIT US</p>
              <h2 className="mb-6 text-2xl font-extralight text-white">Our Location</h2>
              <div className="flex items-start gap-4">
                <ContactIcon icon="pin" compact />
                <div>
                  <p className="font-light text-white">VaultX Secure Logistics L.L.C</p>
                  <p className="text-sm font-light text-gray-400">79VV+R8W, Al Qusais Industrial Area 3</p>
                  <p className="text-sm font-light text-gray-400">Dubai, United Arab Emirates</p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Al+Qusais+Industrial+Area+3+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-light text-yellow-500 transition-colors duration-300 hover:text-yellow-400"
              >
                Get Directions
                <span aria-hidden="true">&gt;</span>
              </a>
            </div>

            <div className="border border-gray-800 p-8">
              <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-yellow-500">BUSINESS HOURS</p>
              <h2 className="mb-6 text-2xl font-extralight text-white">When We&apos;re Open</h2>
              <div className="space-y-3">
                {[
                  { day: "Office Hours", hours: "09:00 - 20:00" },
                  { day: "Warehouse Hours", hours: "24/7" },
                ].map((item) => (
                  <div key={item.day} className="flex items-center justify-between border-b border-gray-800 py-2 last:border-0">
                    <span className="text-sm font-light text-gray-400">{item.day}</span>
                    <span className="text-sm font-light text-white">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-yellow-500/30 bg-yellow-500/5 p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-green-500" aria-hidden="true" />
                <span className="text-sm font-light text-green-500">We&apos;re Online</span>
              </div>
              <h2 className="mb-3 text-xl font-extralight text-white">Quick Response Guaranteed</h2>
              <p className="text-sm font-light leading-relaxed text-gray-400">
                Our team typically responds within 2 hours during business hours. For urgent inquiries,
                call us directly.
              </p>
            </div>
          </Reveal>
        </div>
      </RevealSection>

      <RevealSection className="bg-gray-900/30 py-16 md:py-32">
        <div className="site-container">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-yellow-500">OUR LOCATIONS</p>
            <h2 className="mb-4 text-4xl font-extralight text-white md:text-5xl">Visit Our Warehouses</h2>
            <p className="mx-auto max-w-2xl text-lg font-light text-gray-400">
              We operate multiple state-of-the-art facilities across Dubai
            </p>
          </div>

          <div className="space-y-12">
            {contactLocations.map((location, index) => (
              <RevealArticle
                key={location.title}
                className="overflow-hidden border border-gray-800 bg-gray-900/50 transition-all duration-500 hover:-translate-y-1 hover:border-yellow-500/50"
                delay={index * 0.06}
              >
                <div className="p-6 md:p-8">
                  <h3 className="mb-2 text-2xl font-light text-white">{location.title}</h3>
                  <p className="mb-6 font-light text-gray-400">{location.description}</p>
                  <div className="mb-4 h-[320px] w-full overflow-hidden rounded bg-black md:h-[400px]">
                    <iframe
                      title={`${location.title} map`}
                      src={location.mapSrc}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  {location.mapsHref ? (
                    <a
                      href={location.mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-light text-yellow-500 transition-colors duration-300 hover:text-yellow-400"
                    >
                      Open in Google Maps
                      <span aria-hidden="true">&gt;</span>
                    </a>
                  ) : null}
                </div>
              </RevealArticle>
            ))}
          </div>
        </div>
      </RevealSection>
    </main>
  );
}

function ContactIcon({ icon, compact = false }: { icon: string; compact?: boolean }) {
  const className = compact
    ? "mt-1 h-5 w-5 shrink-0 text-yellow-500"
    : "mb-4 h-8 w-8 text-yellow-500 transition-transform duration-300 group-hover:scale-110";

  if (icon === "phone") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.67 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.54 2.81.67A2 2 0 0 1 22 16.92Z" />
      </svg>
    );
  }

  if (icon === "mail") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
        <path d="m22 6-10 7L2 6" />
      </svg>
    );
  }

  if (icon === "message") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
      </svg>
    );
  }

  if (icon === "pin") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
