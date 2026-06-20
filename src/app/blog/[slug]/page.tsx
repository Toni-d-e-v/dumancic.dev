import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { CustomMDX } from "@/components/mdx";
import { getPosts, getPost, getWorkCount } from "@/lib/posts";

const mono = "var(--font-mono), monospace";

export function generateStaticParams() {
  return getPosts("blog").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost("blog", slug);
  if (!post) return {};
  return {
    title: post.metadata.title,
    description: post.metadata.summary,
  };
}

function formatDate(date: string): string {
  if (!date) return "";
  try {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return date;
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost("blog", slug);
  if (!post) notFound();

  return (
    <div style={{ background: "var(--bg)", color: "var(--ink)", minHeight: "100vh" }}>
      <Nav workCount={getWorkCount()} />
      <main
        className="dd-section"
        style={{ maxWidth: 760, paddingTop: "clamp(36px,8vw,64px)", paddingBottom: "var(--section-gap)" }}
      >
        <Link
          href="/blog"
          className="dd-link-hover"
          style={{
            fontFamily: mono,
            fontSize: 13,
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: "#605C56",
            textDecoration: "none",
          }}
        >
          ← All posts
        </Link>

        <Reveal>
          <div style={{ marginTop: 28, marginBottom: 14, fontFamily: mono, fontSize: 13, color: "#A7A299" }}>
            {formatDate(post.metadata.publishedAt)}
            {post.metadata.tag ? ` · ${post.metadata.tag}` : ""}
          </div>
          <h1
            style={{
              fontSize: "clamp(30px,4.4vw,52px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
              margin: "0 0 16px",
            }}
          >
            {post.metadata.title}
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.55, color: "#605C56", margin: "0 0 40px" }}>
            {post.metadata.summary}
          </p>
        </Reveal>

        <Reveal>
          <article>
            <CustomMDX source={post.content} />
          </article>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
