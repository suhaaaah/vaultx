import Link from "next/link";
import { Reveal, RevealArticle, RevealSection } from "@/components/motion/reveal";
import type { BlogPost } from "@/lib/blog-data";

export function BlogListingPage({ posts }: { posts: BlogPost[] }) {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/vaultx-blog-insights-desk.webp"
            alt="VaultX Blog"
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>

        <Reveal className="site-container relative z-10 pt-24 text-center" y={30}>
          <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-yellow-500">INSIGHTS & NEWS</p>
          <h1 className="mb-6 text-4xl font-extralight text-white sm:text-5xl md:text-7xl lg:text-8xl">
            VaultX Blog
          </h1>
          <p className="mx-auto max-w-3xl text-lg font-light leading-relaxed text-gray-300 md:text-xl">
            Industry insights, logistics tips, and news from Dubai&apos;s leading storage and logistics provider
          </p>
        </Reveal>
      </section>

      <RevealSection className="site-container py-16 md:py-32">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.05}>
              <Link href={`/blog/${post.slug}/`} className="group block">
                <RevealArticle y={0}>
                <div className="relative mb-6 h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute left-4 top-4 bg-yellow-500 px-3 py-1">
                    <span className="text-xs font-medium text-black">{post.category}</span>
                  </div>
                </div>
                <div className="mb-3 flex items-center gap-4">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h2 className="mb-3 text-2xl font-light text-white transition-colors duration-300 group-hover:text-yellow-500">
                  {post.title}
                </h2>
                <p className="mb-4 font-light leading-relaxed text-gray-400">{post.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-sm text-yellow-500 transition-all duration-300 group-hover:gap-3">
                  Read More <span aria-hidden="true">&gt;</span>
                </span>
                </RevealArticle>
              </Link>
            </Reveal>
          ))}
        </div>
      </RevealSection>
    </main>
  );
}
