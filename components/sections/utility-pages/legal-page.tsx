import { RevealArticle, RevealSection } from "@/components/motion/reveal";
import type { LegalPageData } from "@/lib/utility-pages-data";

export function LegalPage({ page }: { page: LegalPageData }) {
  return (
    <main className="min-h-screen bg-black pb-32 pt-32 text-white">
      <div className="site-container">
        <RevealSection className="mb-12 md:mb-16" y={28}>
          <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-yellow-500">{page.eyebrow}</p>
          <h1 className="text-5xl font-extralight text-white md:text-6xl">{page.title}</h1>
        </RevealSection>

        <RevealSection className="max-w-4xl space-y-8 border-t border-gray-800 pt-10 font-light text-gray-300 md:pt-12" y={24}>
          {page.sections.map((section, index) => (
            <RevealArticle key={section.title} delay={index * 0.04} y={20}>
              <h2 className="mb-4 text-xl font-light text-white">{section.title}</h2>
              <p className="leading-relaxed">{section.body}</p>
            </RevealArticle>
          ))}
        </RevealSection>
      </div>
    </main>
  );
}
