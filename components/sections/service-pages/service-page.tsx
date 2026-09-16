import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Fragment } from "react";
import { Reveal, RevealArticle, RevealSection } from "@/components/motion/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import type { ServiceCard, ServicePageData, ServiceSection } from "@/lib/service-pages-data";
import { buildServicePageStructuredData } from "@/lib/structured-data";
import { ServiceFaqAccordion } from "./service-faq-accordion";

const gridClasses = {
  two: "sm:grid-cols-2",
  three: "sm:grid-cols-2 lg:grid-cols-3",
  four: "sm:grid-cols-2 lg:grid-cols-4",
  five: "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
};

export function ServicePage({ page }: { page: ServicePageData }) {
  return (
    <main className="min-h-screen bg-black text-white">
      <JsonLd data={buildServicePageStructuredData(page)} />
      <Hero page={page} />
      {page.stats ? <Stats stats={page.stats} /> : null}

      <div className="site-container py-16 md:py-32">
        {page.intro ? <Intro intro={page.intro} /> : null}

        {page.sections.map((section) => (
          <Section key={`${page.id}-${section.eyebrow}-${section.title}`} section={section} />
        ))}

        {page.faqs ? (
          <RevealSection className="mb-16 border-t border-gray-800 pt-16 md:mb-32 md:pt-32">
            <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-yellow-500">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="mb-8 text-3xl font-extralight text-white sm:text-4xl md:mb-12 md:text-6xl">
              {page.hero.title.join(" ")} FAQs
            </h2>
            <ServiceFaqAccordion faqs={page.faqs} />
          </RevealSection>
        ) : null}

        <Cta page={page} />
      </div>
    </main>
  );
}

function Hero({ page }: { page: ServicePageData }) {
  return (
    <section
      className={`relative flex ${page.hero.heightClass ?? "h-[70vh] min-h-[500px]"} items-center justify-center overflow-hidden`}
    >
      <div className="absolute inset-0">
        <img
          src={page.hero.image}
          alt={page.hero.imageAlt}
          className="h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
      </div>

      <Reveal className="site-container relative z-10 pt-24 text-center" y={30}>
        {page.backHref ? (
          <Link
            href={page.backHref}
            className="mb-6 inline-flex items-center gap-2 text-sm font-light tracking-wider text-yellow-500 transition-colors hover:text-yellow-400"
          >
            <ArrowRight className="h-4 w-4 rotate-180" aria-hidden="true" />
            {page.backLabel}
          </Link>
        ) : null}
        <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-yellow-500">{page.hero.eyebrow}</p>
        <h1 className="mb-6 text-4xl font-extralight leading-tight text-white sm:text-5xl md:text-7xl lg:text-8xl">
          {page.hero.title.map((line, index) => (
            <Fragment key={line}>
              <span className="block">{line}</span>
              {index < page.hero.title.length - 1 ? " " : null}
            </Fragment>
          ))}
        </h1>
        <p className="mx-auto mb-10 max-w-3xl text-lg font-light leading-relaxed text-gray-300 md:text-xl">
          {page.hero.description}
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href={page.hero.primaryHref} className="site-button site-button-primary">
            {page.hero.primaryCta}
          </Link>
          {page.hero.secondaryHref && page.hero.secondaryCta ? (
            <a href={page.hero.secondaryHref} className="site-button site-button-secondary">
              {page.hero.secondaryCta}
            </a>
          ) : null}
        </div>
      </Reveal>
    </section>
  );
}

function Stats({ stats }: { stats: ServicePageData["stats"] }) {
  if (!stats) {
    return null;
  }

  return (
    <RevealSection className="border-y border-gray-800 bg-gray-900/50 py-8" y={20}>
      <div className="site-container flex flex-wrap items-center justify-center gap-8 text-center md:gap-16">
        {stats.map((stat, index) => (
          <Reveal key={`${stat.value}-${stat.label}`} className="min-w-28" delay={index * 0.05} scale={0.9} y={18}>
            <p className="text-2xl font-extralight leading-none text-yellow-500 md:text-3xl">{stat.value}</p>
            <p className="mt-2 text-xs tracking-wider text-gray-400">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </RevealSection>
  );
}

function Intro({ intro }: { intro: NonNullable<ServicePageData["intro"]> }) {
  return (
    <RevealSection className="mb-16 md:mb-32">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal x={-30} y={0}>
          <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-yellow-500">{intro.eyebrow}</p>
          <h2 className="mb-8 text-4xl font-extralight text-white md:text-5xl">{intro.title}</h2>
          <div className="space-y-6 font-light leading-relaxed text-gray-400">
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {intro.bullets.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="h-2 w-2 shrink-0 bg-yellow-500" aria-hidden="true" />
                <span className="text-sm font-light text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="relative" x={30} y={0} delay={0.08}>
          <img src={intro.image} alt={intro.imageAlt} className="h-auto w-full object-cover" loading="lazy" />
          <div className="absolute -bottom-8 left-4 bg-yellow-500 p-6 text-black sm:-left-8">
            <p className="text-4xl font-extralight">{intro.badgeValue}</p>
            <p className="text-sm">{intro.badgeLabel}</p>
          </div>
        </Reveal>
      </div>
    </RevealSection>
  );
}

function Section({ section }: { section: ServiceSection }) {
  if (section.layout === "split") {
    return <SplitSection section={section} />;
  }

  if (section.layout === "steps") {
    return <StepsSection section={section} />;
  }

  if (section.layout === "testimonials") {
    return <TestimonialsSection section={section} />;
  }

  return <CardsSection section={section} />;
}

function SectionHeading({ section, center = false }: { section: ServiceSection; center?: boolean }) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-yellow-500">{section.eyebrow}</p>
      <h2 className="mb-6 text-3xl font-extralight text-white sm:text-4xl md:text-6xl">{section.title}</h2>
      {section.description ? (
        <p className={`mb-12 text-lg font-light leading-relaxed text-gray-400 ${center ? "mx-auto max-w-3xl" : "max-w-3xl"}`}>
          {section.description}
        </p>
      ) : null}
    </div>
  );
}

function CardsSection({ section }: { section: ServiceSection }) {
  const columns = section.columns ?? "three";

  return (
    <RevealSection className="mb-16 border-t border-gray-800 pt-16 md:mb-32 md:pt-32">
      <SectionHeading section={section} center />
      <div className={`grid grid-cols-1 gap-6 md:gap-8 ${gridClasses[columns]}`}>
        {section.items.map((item, index) => (
          <ServiceCardBlock key={`${item.title}-${index}`} item={item} index={index} />
        ))}
      </div>
    </RevealSection>
  );
}

function ServiceCardBlock({ item, index }: { item: ServiceCard; index: number }) {
  return (
    <RevealArticle className="feature-card h-full" delay={index * 0.05}>
      <span className="mb-4 block text-sm font-light text-yellow-500">
        {item.value ?? String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mb-3 text-xl font-light text-white">{item.title}</h3>
      {item.size || item.price ? (
        <div className="mb-4 border border-yellow-500/25 bg-yellow-500/10 px-4 py-3">
          {item.size ? (
            <p className="text-xs font-light uppercase tracking-[0.2em] text-yellow-500">{item.size}</p>
          ) : null}
          {item.price ? <p className="mt-1 text-sm font-light leading-relaxed text-white">{item.price}</p> : null}
        </div>
      ) : null}
      {item.description ? <p className="text-sm font-light leading-relaxed text-gray-400">{item.description}</p> : null}
      {item.features ? (
        <ul className="mt-5 space-y-2">
          {item.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm font-light text-gray-400">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-yellow-500" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {item.detail ? <p className="mt-5 border-t border-gray-800 pt-4 text-sm font-light text-gray-500">{item.detail}</p> : null}
    </RevealArticle>
  );
}

function StepsSection({ section }: { section: ServiceSection }) {
  const columns = section.columns ?? "four";

  return (
    <RevealSection className="mb-16 border-t border-gray-800 pt-16 md:mb-32 md:pt-32">
      <SectionHeading section={section} center />
      <div className={`grid gap-4 ${gridClasses[columns]}`}>
        {section.items.map((item, index) => (
          <RevealArticle key={item.title} className="relative border border-gray-800 p-6" delay={index * 0.05}>
            <p className="mb-4 text-3xl font-extralight text-yellow-500">{item.value}</p>
            <h3 className="mb-2 font-light text-white">{item.title}</h3>
            <p className="text-sm font-light leading-relaxed text-gray-400">{item.description}</p>
          </RevealArticle>
        ))}
      </div>
    </RevealSection>
  );
}

function SplitSection({ section }: { section: ServiceSection }) {
  return (
    <RevealSection className="mb-16 border-t border-gray-800 pt-16 md:mb-32 md:pt-32">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal x={-30} y={0}>
          <SectionHeading section={section} />
          <div className="space-y-6">
            {section.items.map((item, index) => (
              <RevealArticle
                key={item.title}
                className="border-l-2 border-yellow-500/30 p-4 transition-colors hover:border-yellow-500"
                delay={index * 0.05}
              >
                <h3 className="mb-3 text-xl font-light text-white">{item.title}</h3>
                {item.description ? <p className="mb-4 text-sm font-light leading-relaxed text-gray-400">{item.description}</p> : null}
                {item.features ? (
                  <ul className="space-y-2">
                    {item.features.map((feature) => (
                      <li key={feature} className="text-sm font-light text-gray-400">
                        {feature}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </RevealArticle>
            ))}
          </div>
        </Reveal>
        {section.imageGrid ? (
          <Reveal className="grid grid-cols-2 gap-4" x={30} y={0} delay={0.08}>
            {section.imageGrid.map((image) => (
              <img key={image.src} src={image.src} alt={image.alt} className="h-48 w-full object-cover" loading="lazy" />
            ))}
          </Reveal>
        ) : null}
      </div>
    </RevealSection>
  );
}

function TestimonialsSection({ section }: { section: ServiceSection }) {
  const columns = section.columns ?? "four";

  return (
    <RevealSection className="mb-16 border-t border-gray-800 pt-16 md:mb-32 md:pt-32">
      <SectionHeading section={section} center />
      <div className={`grid grid-cols-1 gap-6 md:gap-8 ${gridClasses[columns]}`}>
        {section.items.map((item, index) => (
          <RevealArticle key={item.title} className="border border-gray-800 p-6" delay={index * 0.05}>
            <p className="mb-4 text-sm font-light leading-relaxed text-gray-400">{item.description}</p>
            <h3 className="font-light text-white">{item.title}</h3>
            {item.detail ? <p className="mt-1 text-xs font-light text-yellow-500">{item.detail}</p> : null}
          </RevealArticle>
        ))}
      </div>
    </RevealSection>
  );
}

function Cta({ page }: { page: ServicePageData }) {
  return (
    <RevealSection className="border-t border-gray-800 pb-16 pt-16 text-center md:pb-32 md:pt-32">
      <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-yellow-500">{page.cta.eyebrow}</p>
      <h2 className="mb-6 text-3xl font-extralight text-white sm:text-4xl md:text-6xl">{page.cta.title}</h2>
      <p className="mx-auto mb-12 max-w-2xl text-lg font-light leading-relaxed text-gray-400">{page.cta.description}</p>
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <Link href={page.cta.primaryHref} className="site-button site-button-primary">
          {page.cta.primaryCta}
        </Link>
        {page.cta.whatsappHref && page.cta.whatsappCta ? (
          <a href={page.cta.whatsappHref} target="_blank" rel="noopener noreferrer" className="site-button site-button-secondary">
            {page.cta.whatsappCta}
          </a>
        ) : null}
        {page.cta.secondaryHref && page.cta.secondaryCta ? (
          <a href={page.cta.secondaryHref} className="site-button site-button-secondary">
            {page.cta.secondaryCta}
          </a>
        ) : null}
      </div>
    </RevealSection>
  );
}
