import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealArticle, RevealSection } from "@/components/motion/reveal";
import {
  blogCards,
  features,
  logisticsServices,
  stats,
  storageServices,
} from "@/lib/site-data";
import { HeroSlider } from "./hero-slider";
import { FaqAccordion } from "./faq-accordion";

export function HomePage() {
  return (
    <main className="relative w-full bg-black text-white">
      <HeroSlider />

      <Section
        kicker="WHY CHOOSE US"
        title="Why Choose VaultX"
        description="We provide comprehensive storage and logistics solutions tailored to your business needs. Our commitment to excellence, combined with state-of-the-art facilities and experienced professionals, makes us the preferred choice for businesses across the UAE."
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <RevealArticle key={feature.title} className="feature-card" delay={index * 0.05}>
              <h3 className="mb-4 text-xl font-light text-white transition-colors duration-300 group-hover:text-yellow-500">
                {feature.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-gray-400">{feature.desc}</p>
            </RevealArticle>
          ))}
        </div>
      </Section>

      <RevealSection className="border-t border-gray-800 bg-black py-16 md:py-32">
        <div className="site-container grid grid-cols-2 gap-6 text-center sm:gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} className="min-w-0" delay={index * 0.05} scale={0.9} y={20}>
              <p className="mb-3 text-4xl font-extralight leading-none text-yellow-500 sm:text-5xl md:text-6xl">
                {stat.number}
              </p>
              <p className="text-sm font-light text-gray-400">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </RevealSection>

      <Section
        kicker="OUR SERVICES"
        title="Storage Solutions"
        description="Comprehensive storage options designed for every need, from personal items to large-scale business inventory. All our facilities feature climate control, 24/7 security, and flexible access."
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
          {storageServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06}>
              <Link href={service.href} className="feature-card block p-8 md:p-10">
                <h3 className="mb-4 text-2xl font-light text-white transition-colors duration-300 group-hover:text-yellow-500">
                  {service.title}
                </h3>
                <p className="mb-6 font-light leading-relaxed text-gray-400">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-light text-gray-300">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        kicker="GLOBAL LOGISTICS"
        title="Logistics Solutions"
        description="Global logistics expertise with local knowledge to move your goods safely and efficiently. From express air freight to cost-effective sea shipping, we have the solution for your cargo."
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {logisticsServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <Link href={service.href} className="feature-card block">
                <h3 className="mb-3 text-xl font-light text-white transition-colors duration-300 group-hover:text-yellow-500">
                  {service.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-gray-400">{service.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        kicker="INSIGHTS & NEWS"
        title="Latest from Our Blog"
        headerAction={
          <Link href="/blog/" className="text-sm text-yellow-500 transition-colors hover:text-yellow-400">
            View All Posts
          </Link>
        }
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {blogCards.map((post, index) => (
            <Reveal key={post.id} delay={index * 0.05}>
              <Link href={post.href} className="group block">
                <div className="relative mb-4 h-48 overflow-hidden bg-gray-900">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute left-3 top-3 bg-yellow-500 px-2 py-1 text-xs font-medium text-black">
                    {post.category}
                  </div>
                </div>
                <p className="mb-2 text-xs text-gray-500">{post.readTime}</p>
                <h3 className="mb-2 line-clamp-2 text-lg font-light text-white transition-colors duration-300 group-hover:text-yellow-500">
                  {post.title}
                </h3>
                <p className="line-clamp-2 text-sm font-light leading-relaxed text-gray-400">{post.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        kicker="HAVE QUESTIONS?"
        title="Frequently Asked Questions"
        description="Find answers to common questions about our storage and logistics services. Can't find what you're looking for? Contact our team for personalized assistance."
      >
        <FaqAccordion />
      </Section>

      <RevealSection className="border-t border-gray-800 bg-black py-16 text-center md:py-32">
        <div className="site-container">
          <p className="mb-4 text-xs font-light uppercase text-yellow-500">GET STARTED TODAY</p>
          <h2 className="mb-8 text-4xl font-extralight text-white md:text-6xl">Ready to Get Started?</h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg font-light leading-relaxed text-gray-400">
            Contact our team today for a free consultation and custom quote. We&apos;re here to help you
            find the perfect storage and logistics solution for your needs.
          </p>
          <Link href="/contact/" className="site-button site-button-primary">
            GET FREE QUOTE
          </Link>
        </div>
      </RevealSection>
    </main>
  );
}

function Section({
  kicker,
  title,
  description,
  headerAction,
  children,
}: {
  kicker: string;
  title: string;
  description?: string;
  headerAction?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <RevealSection className="border-t border-gray-800 bg-black py-16 md:py-32">
      <div className="site-container">
        <div className="mb-12 flex flex-col justify-between gap-4 md:mb-20 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-light uppercase text-yellow-500">{kicker}</p>
            <h2 className="mb-6 text-3xl font-extralight text-white sm:text-4xl md:text-6xl">{title}</h2>
            {description ? <p className="max-w-3xl text-lg font-light leading-relaxed text-gray-400">{description}</p> : null}
          </div>
          {headerAction}
        </div>
        {children}
      </div>
    </RevealSection>
  );
}
