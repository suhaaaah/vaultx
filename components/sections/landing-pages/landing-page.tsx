import type { LandingPageData } from "@/lib/landing-pages-data";
import { Reveal, RevealArticle, RevealSection } from "@/components/motion/reveal";
import { LandingFaqAccordion } from "./landing-faq-accordion";
import { LandingLeadForm } from "./landing-lead-form";

export function LandingPage({ page }: { page: LandingPageData }) {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero page={page} />
      <Services page={page} />
      <Stats page={page} />
      <Faq page={page} />
      <BottomCta page={page} />
    </main>
  );
}

function Hero({ page }: { page: LandingPageData }) {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="absolute inset-0">
        <img
          src={page.hero.image}
          alt={page.hero.imageAlt}
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/70" />
      </div>

      <div className="site-container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal x={-30} y={0}>
            <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-yellow-500">{page.hero.eyebrow}</p>
            <h1 className="mb-6 text-4xl font-extralight leading-tight text-white md:text-5xl lg:text-6xl">
              {page.hero.title}
            </h1>
            <p className="mb-8 text-xl font-light leading-relaxed text-gray-300">{page.hero.description}</p>

            <div className="mb-8 space-y-4">
              {page.hero.benefits.map((benefit, index) => (
                <Reveal key={benefit.title} className="flex items-start gap-3" delay={index * 0.05} y={16}>
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-500/20" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full bg-yellow-500" />
                  </span>
                  <div>
                    <h3 className="mb-1 text-base font-normal text-white">{benefit.title}</h3>
                    <p className="text-sm font-light text-gray-400">{benefit.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6">
              {page.hero.stats.map((stat, index) => (
                <Reveal key={`${stat.number}-${stat.label}`} className="text-center" delay={index * 0.05} scale={0.9} y={14}>
                  <div className="mb-1 text-2xl font-light text-yellow-500">{stat.number}</div>
                  <div className="text-xs font-light text-gray-400">{stat.label}</div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-8" x={30} y={0} delay={0.1}>
            <h3 className="mb-2 text-2xl font-light text-white">{page.form.heading}</h3>
            <p className="mb-6 text-sm font-light text-gray-400">{page.form.description}</p>
            <LandingLeadForm page={page} buttonLabel={page.form.primaryButton} section="hero" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Services({ page }: { page: LandingPageData }) {
  return (
    <RevealSection className="bg-gradient-to-b from-black to-gray-900 py-16 md:py-24">
      <div className="site-container">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-yellow-500">{page.services.eyebrow}</p>
          <h2 className="mb-6 text-4xl font-extralight text-white md:text-5xl">{page.services.title}</h2>
          <p className="mx-auto max-w-3xl text-lg font-light leading-relaxed text-gray-400">
            {page.services.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {page.services.cards.map((service, index) => (
            <RevealArticle
              key={service.title}
              className="group rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
              delay={index * 0.05}
            >
              <h3 className="mb-4 text-xl font-normal text-white transition-colors group-hover:text-yellow-500">
                {service.title}
              </h3>
              <p className="mb-6 text-sm font-light leading-relaxed text-gray-400">{service.desc}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm font-light text-gray-400">
                    <span className="mt-1 text-yellow-500" aria-hidden="true">
                      *
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </RevealArticle>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

function Stats({ page }: { page: LandingPageData }) {
  return (
    <RevealSection className="bg-gray-900 py-16 md:py-24" y={20}>
      <div className="site-container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {page.stats.map((stat, index) => (
            <Reveal key={`${stat.number}-${stat.label}`} className="text-center" delay={index * 0.05} scale={0.9} y={18}>
              <div className="mb-2 text-4xl font-extralight text-yellow-500 md:text-5xl">{stat.number}</div>
              <div className="text-sm font-light text-gray-400">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

function Faq({ page }: { page: LandingPageData }) {
  return (
    <RevealSection className="bg-black py-16 md:py-24">
      <div className="site-container max-w-4xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-yellow-500">COMMON QUESTIONS</p>
          <h2 className="mb-6 text-4xl font-extralight text-white md:text-5xl">Frequently Asked Questions</h2>
        </div>
        <LandingFaqAccordion faqs={page.faqs} />
      </div>
    </RevealSection>
  );
}

function BottomCta({ page }: { page: LandingPageData }) {
  return (
    <RevealSection className="bg-gradient-to-b from-gray-900 to-black py-16 md:py-24">
      <div className="site-container max-w-4xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-yellow-500">{page.bottomCta.eyebrow}</p>
          <h2 className="mb-6 text-4xl font-extralight text-white md:text-5xl">{page.bottomCta.title}</h2>
          <p className="text-lg font-light leading-relaxed text-gray-400">{page.bottomCta.description}</p>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-12">
          <LandingLeadForm page={page} buttonLabel={page.form.bottomButton} layout="wide" section="bottom" />
        </div>

        <div className="mt-12 grid gap-6 text-center md:grid-cols-3">
          <Reveal y={20}>
            <div className="mb-1 font-normal text-white">Call Us</div>
            <a href="tel:+971586992781" className="text-sm text-gray-400 transition-colors hover:text-yellow-500">
              +971 58 699 2781
            </a>
          </Reveal>
          <Reveal y={20} delay={0.05}>
            <div className="mb-1 font-normal text-white">Email Us</div>
            <a href="mailto:info@vaultx.ae" className="text-sm text-gray-400 transition-colors hover:text-yellow-500">
              info@vaultx.ae
            </a>
          </Reveal>
          <Reveal y={20} delay={0.1}>
            <div className="mb-1 font-normal text-white">Office Hours</div>
            <div className="text-sm text-gray-400">09:00 - 20:00 Daily</div>
          </Reveal>
        </div>
      </div>
    </RevealSection>
  );
}
