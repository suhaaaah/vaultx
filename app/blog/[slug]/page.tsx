import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { BlogDetailPage } from "@/components/sections/blog/blog-detail-page";
import { SiteShell } from "@/components/site/site-shell";
import { blogPosts, buildBlogPostMetadata, getBlogPost, getRelatedPosts } from "@/lib/blog-data";
import { buildBlogArticleStructuredData } from "@/lib/structured-data";

type BlogPostRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostRouteProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return buildBlogPostMetadata(post);
}

export default async function BlogPostRoute({ params }: BlogPostRouteProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <SiteShell>
      <JsonLd data={buildBlogArticleStructuredData(post)} />
      <BlogDetailPage post={post} relatedPosts={getRelatedPosts(post.slug)} />
    </SiteShell>
  );
}
