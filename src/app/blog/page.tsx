import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { getPosts, getWorkCount } from "@/lib/posts";

const mono = "var(--font-mono), monospace";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing about Web3, startups and building real-world software.",
};

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

export default function BlogPage() {
  const posts = getPosts("blog");

  return (
    <div style={{ background: "var(--bg)", color: "var(--ink)", minHeight: "100vh" }}>
      <Nav workCount={getWorkCount()} />
      <main
        className="dd-section"
        style={{ maxWidth: 1100, paddingTop: "clamp(40px,8vw,72px)", paddingBottom: "var(--section-gap)" }}
      >
        <Reveal>
          <div style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 9 }}>
            <span style={{ fontFamily: mono, fontSize: 12, letterSpacing: "2.5px", textTransform: "uppercase", color: "#6E6A64" }}>
              <span style={{ color: "var(--accent)" }}>+</span> Writing
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(36px,5vw,64px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              margin: "0 0 44px",
              maxWidth: "18ch",
            }}
          >
            Writing about Web3 and startup tech
          </h1>
        </Reveal>

        <div className="dd-grid-posts">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
            <Link
              href={`/blog/${post.slug}`}
              className="dd-card-hover"
              style={{
                height: "100%",
                background: "#fff",
                border: "1px solid rgba(14,14,14,0.07)",
                borderRadius: 22,
                padding: 30,
                textDecoration: "none",
                color: "#0E0E0E",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                minHeight: 220,
                boxShadow: "0 8px 24px -12px rgba(14,14,14,0.14)",
              }}
            >
              <span style={{ fontFamily: mono, fontSize: 12, letterSpacing: "1px", color: "#A7A299" }}>
                {formatDate(post.metadata.publishedAt)}
                {post.metadata.tag ? ` · ${post.metadata.tag}` : ""}
              </span>
              <h2 style={{ fontSize: 21, fontWeight: 600, lineHeight: 1.3, letterSpacing: "-0.01em", margin: 0 }}>
                {post.metadata.title}
              </h2>
              <p style={{ color: "#605C56", fontSize: 15, lineHeight: 1.55, margin: 0 }}>
                {post.metadata.summary}
              </p>
              <span style={{ marginTop: "auto", color: "var(--accent)", fontWeight: 600, fontSize: 14 }}>
                Read article ↗
              </span>
            </Link>
            </Reveal>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
