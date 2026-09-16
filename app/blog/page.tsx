import { JsonLd } from "@/components/seo/json-ld";
import { BlogListingPage } from "@/components/sections/blog/blog-listing-page";
import { SiteShell } from "@/components/site/site-shell";
import { blogPosts, buildBlogListingMetadata } from "@/lib/blog-data";
import { buildBlogListingStructuredData } from "@/lib/structured-data";

export const metadata = buildBlogListingMetadata();

export default function BlogRoute() {
  return (
    <SiteShell>
      <JsonLd data={buildBlogListingStructuredData(blogPosts)} />
      <BlogListingPage posts={blogPosts} />
    </SiteShell>
  );
}
