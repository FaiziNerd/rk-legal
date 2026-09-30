import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const revalidate = 300;

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  // TODO (Phase 3): fetch the post from Contentful and build real metadata.
  return {
    title: slug.replace(/-/g, " "),
  };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;

  return (
    <Container className="py-16 md:py-24">
      <p className="t-category text-brand uppercase">Article</p>
      <h1 className="t-display mt-3 max-w-3xl capitalize">
        {slug.replace(/-/g, " ")}
      </h1>
      <p className="t-body mt-6 max-w-2xl text-body">
        This post will render Contentful rich-text content in Phase 3.
      </p>
    </Container>
  );
}
