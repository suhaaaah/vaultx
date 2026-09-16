import Link from "next/link";
import { Reveal, RevealArticle, RevealSection } from "@/components/motion/reveal";
import type { BlogPost } from "@/lib/blog-data";

export function BlogDetailPage({ post, relatedPosts }: { post: BlogPost; relatedPosts: BlogPost[] }) {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="bg-black pb-8 pt-32">
        <Reveal className="mx-auto max-w-[900px] px-4 sm:px-6" y={30}>
          <Link
            href="/blog/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-light tracking-wider text-yellow-500 transition-colors hover:text-yellow-400"
          >
            <span aria-hidden="true">&lt;</span>
            Back to Blog
          </Link>
          <div className="mb-6 mt-6 flex items-center gap-4">
            <span className="bg-yellow-500 px-3 py-1 text-xs font-medium text-black">{post.category}</span>
            <span className="text-sm text-gray-400">{post.readTime}</span>
          </div>
          <h1 className="mb-8 text-3xl font-light leading-tight text-white md:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <figure className="mb-8">
            <img
              src={post.image}
              alt={post.imageAlt || post.title}
              className="h-auto w-full rounded-lg object-cover"
              loading="eager"
              fetchPriority="high"
            />
            {post.imageCaption ? (
              <figcaption className="mt-3 text-center text-sm italic text-gray-500">{post.imageCaption}</figcaption>
            ) : null}
          </figure>
        </Reveal>
      </section>

      <article className="mx-auto max-w-[900px] px-4 pb-16 sm:px-6">
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

        <RevealSection className="mt-16 border border-yellow-500/20 bg-yellow-500/10 p-6 sm:p-12">
          <h2 className="mb-4 text-2xl font-light text-white">Need Logistics Solutions?</h2>
          <p className="mb-6 font-light text-gray-400">
            Contact VaultX today to discuss your storage and logistics requirements.
          </p>
          <Link href="/contact/" className="site-button site-button-primary">
            Get Free Quote
          </Link>
        </RevealSection>

        <RevealSection className="mt-16">
          <h2 className="mb-8 text-2xl font-light text-white">Related Articles</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {relatedPosts.map((relatedPost, index) => (
              <Reveal key={relatedPost.slug} delay={index * 0.05}>
                <Link href={`/blog/${relatedPost.slug}/`} className="group block">
                  <RevealArticle y={0}>
                  <div className="relative mb-4 h-48 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.imageAlt || relatedPost.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs text-yellow-500">{relatedPost.category}</span>
                  <h3 className="mt-2 text-lg font-light text-white transition-colors group-hover:text-yellow-500">
                    {relatedPost.title}
                  </h3>
                  </RevealArticle>
                </Link>
              </Reveal>
            ))}
          </div>
        </RevealSection>
      </article>
    </main>
  );
}
