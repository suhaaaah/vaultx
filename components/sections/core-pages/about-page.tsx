import {
  aboutPromises,
  aboutSpecialties,
  certifications,
  leadershipTeam,
} from "@/lib/core-pages-data";
import { Reveal, RevealArticle, RevealSection } from "@/components/motion/reveal";
import { stats } from "@/lib/site-data";
import { AboutFaqAccordion } from "./about-faq-accordion";

export function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative flex h-[60vh] min-h-[400px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/dubai-business-district-warehouse.webp"
            alt="About VaultX"
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>
        <Reveal className="site-container relative z-10 text-center" y={30}>
          <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-yellow-500">ABOUT US</p>
          <h1 className="mb-6 text-4xl font-extralight text-white sm:text-5xl md:text-7xl lg:text-8xl">
            About VaultX
          </h1>
          <p className="mx-auto max-w-3xl text-lg font-light leading-relaxed text-gray-300 md:text-xl">
            Dubai&apos;s trusted partner for premium logistics and warehousing solutions since 2020
          </p>
        </Reveal>
      </section>

      <RevealSection className="border-y border-gray-800 bg-gray-900/50 py-8" y={20}>
        <div className="site-container grid grid-cols-2 gap-6 text-center sm:gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} className="min-w-0" delay={index * 0.05} scale={0.9} y={18}>
              <p className="text-2xl font-extralight leading-none text-yellow-500 md:text-3xl">{stat.number}</p>
              <p className="mt-2 text-xs tracking-wider text-gray-400">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </RevealSection>

      <div className="site-container py-16 md:py-32">
        <RevealSection className="mb-16 md:mb-32">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal x={-30} y={0}>
              <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-yellow-500">OUR STORY</p>
              <h2 className="mb-8 text-4xl font-extralight text-white md:text-5xl">Building Trust Since 2020</h2>
              <div className="space-y-6 font-light leading-relaxed text-gray-400">
                <p>
                  VaultX was founded with a simple mission: to provide businesses and individuals in
                  Dubai with reliable, secure, and efficient logistics and warehousing solutions. What
                  started as a small storage facility in Al Qusais has grown into one of the UAE&apos;s
                  most trusted logistics partners.
                </p>
                <p>
                  Today, we operate state-of-the-art facilities spanning over 100,000 square feet,
                  serving clients ranging from e-commerce startups to multinational corporations. Our
                  growth is a testament to our unwavering commitment to excellence and customer
                  satisfaction.
                </p>
                <p>
                  With a team of over 150 dedicated professionals, we handle everything from personal
                  storage to complex international freight forwarding, always with the same attention to
                  detail and care that has defined VaultX from day one.
                </p>
              </div>
            </Reveal>
            <Reveal className="relative" x={30} y={0}>
              <img
                src="/images/warehouse-racking-dubai.webp"
                alt="VaultX warehouse"
                className="h-[400px] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-8 left-4 bg-yellow-500 p-8 sm:-left-8">
                <p className="text-4xl font-extralight text-black">5+</p>
                <p className="text-sm text-black/70">Years of Excellence</p>
              </div>
            </Reveal>
          </div>
        </RevealSection>

        <RevealSection className="mb-16 md:mb-32">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
            <RevealArticle className="border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-transparent p-8 md:p-12">
              <div className="mb-6 flex h-16 w-16 items-center justify-center bg-yellow-500/20">
                <span className="text-2xl font-extralight text-yellow-500">01</span>
              </div>
              <h3 className="mb-4 text-2xl font-extralight text-white">Our Mission</h3>
              <p className="font-light leading-relaxed text-gray-400">
                To deliver exceptional logistics and warehousing solutions that empower businesses to
                grow, expand globally, and operate with confidence. We strive to be the backbone of our
                clients&apos; supply chains, providing reliable, secure, and innovative services that
                exceed expectations.
              </p>
            </RevealArticle>
            <RevealArticle className="border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent p-8 md:p-12" delay={0.08}>
              <div className="mb-6 flex h-16 w-16 items-center justify-center bg-blue-500/20">
                <span className="text-2xl font-extralight text-blue-400">02</span>
              </div>
              <h3 className="mb-4 text-2xl font-extralight text-white">Our Vision</h3>
              <p className="font-light leading-relaxed text-gray-400">
                To be the Middle East&apos;s most trusted and innovative logistics partner, setting new
                standards in warehousing, freight forwarding, and supply chain management. We envision a
                future where every business, regardless of size, has access to world-class logistics
                infrastructure.
              </p>
            </RevealArticle>
          </div>
        </RevealSection>

        <RevealSection className="mb-16 md:mb-32">
          <p className="mb-4 text-center text-xs font-light uppercase tracking-[0.3em] text-yellow-500">
            WHAT WE DO BEST
          </p>
          <h2 className="mb-16 text-center text-4xl font-extralight text-white md:text-5xl">Our Specialties</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {aboutSpecialties.map((specialty, index) => (
              <RevealArticle key={specialty.title} className="feature-card" delay={index * 0.05}>
                <span className="mb-4 block text-sm font-light text-yellow-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-3 text-xl font-light text-white">{specialty.title}</h3>
                <p className="text-sm font-light leading-relaxed text-gray-400">{specialty.description}</p>
              </RevealArticle>
            ))}
          </div>
        </RevealSection>

        <RevealSection className="mb-16 border border-yellow-500/20 bg-gradient-to-r from-yellow-500/5 via-yellow-500/10 to-yellow-500/5 p-8 md:mb-32 md:p-16">
          <p className="mb-4 text-center text-xs font-light uppercase tracking-[0.3em] text-yellow-500">
            THE VAULTX COMMITMENT
          </p>
          <h2 className="mb-8 text-center text-4xl font-extralight text-white md:text-5xl">Our Promise to You</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
            {aboutPromises.map((promise, index) => (
              <Reveal key={promise.title} className="text-center" delay={index * 0.05} scale={0.92}>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center bg-yellow-500">
                  <span className="font-bold text-black">{index + 1}</span>
                </div>
                <h3 className="mb-2 text-lg font-light text-white">{promise.title}</h3>
                <p className="text-sm font-light leading-relaxed text-gray-400">{promise.description}</p>
              </Reveal>
            ))}
          </div>
        </RevealSection>

        <RevealSection className="mb-16 md:mb-32">
          <p className="mb-4 text-center text-xs font-light uppercase tracking-[0.3em] text-yellow-500">
            LEADERSHIP
          </p>
          <h2 className="mb-16 text-center text-4xl font-extralight text-white md:text-5xl">Meet Our Team</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {leadershipTeam.map((member) => (
              <RevealArticle key={member.name} className="border border-gray-800 p-8 text-center">
                <h3 className="mb-1 text-xl font-light text-white">{member.name}</h3>
                <p className="text-sm text-yellow-500">{member.role}</p>
              </RevealArticle>
            ))}
          </div>
        </RevealSection>

        <RevealSection className="mb-16 md:mb-32">
          <p className="mb-4 text-center text-xs font-light uppercase tracking-[0.3em] text-yellow-500">
            CERTIFICATIONS & MEMBERSHIPS
          </p>
          <h2 className="mb-16 text-center text-4xl font-extralight text-white md:text-5xl">
            Industry Recognition
          </h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {certifications.map((cert) => (
              <Reveal key={cert} className="border border-gray-800 px-8 py-4 text-sm font-light text-gray-400" y={20}>
                {cert}
              </Reveal>
            ))}
          </div>
        </RevealSection>

        <RevealSection>
          <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-yellow-500">ABOUT FAQS</p>
          <h2 className="mb-8 text-3xl font-extralight text-white sm:text-4xl md:mb-12 md:text-6xl">
            Questions About VaultX
          </h2>
          <AboutFaqAccordion />
        </RevealSection>
      </div>
    </main>
  );
}
