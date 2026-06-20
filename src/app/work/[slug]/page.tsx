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
  return getPosts("work").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost("work", slug);
  if (!post) return {};
  return {
    title: post.metadata.title,
    description: post.metadata.summary,
  };
}

export default async function WorkProject({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost("work", slug);
  if (!post) notFound();

  const { metadata } = post;
  const images = metadata.images ?? [];

  return (
    <div style={{ background: "var(--bg)", color: "var(--ink)", minHeight: "100vh" }}>
      <Nav workCount={getWorkCount()} />
      <main
        className="dd-section"
        style={{ maxWidth: 860, paddingTop: "clamp(36px,8vw,64px)", paddingBottom: "var(--section-gap)" }}
      >
        <Link
          href="/work"
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
          ← All projects
        </Link>

        <Reveal>
        <h1
          style={{
            fontSize: "clamp(30px,4.4vw,52px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.08,
            margin: "28px 0 16px",
          }}
        >
          {metadata.title}
        </h1>
        <p style={{ fontSize: 19, lineHeight: 1.55, color: "#605C56", margin: "0 0 24px" }}>
          {metadata.summary}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 22, alignItems: "center", marginBottom: 36 }}>
          {metadata.link && (
            <a
              href={metadata.link}
              target="_blank"
              rel="noopener noreferrer"
              className="dd-btn-accent"
              style={{
                background:
                  "linear-gradient(180deg, color-mix(in srgb, var(--accent) 76%, #fff), var(--accent))",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 15,
                padding: "12px 22px",
                borderRadius: 999,
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4), 0 8px 20px -10px rgba(232,80,46,0.8)",
              }}
            >
              Visit live ↗
            </a>
          )}
          {metadata.team?.length > 0 && (
            <span style={{ fontFamily: mono, fontSize: 13, color: "#7A766F" }}>
              {metadata.team.map((t) => `${t.name} — ${t.role}`).join("  ·  ")}
            </span>
          )}
        </div>
        </Reveal>

        {images[0] && (
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[0]}
              alt={metadata.title}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 18,
                border: "1px solid rgba(14,14,14,0.08)",
                marginBottom: 40,
                display: "block",
              }}
            />
          </Reveal>
        )}

        <Reveal>
          <article>
            <CustomMDX source={post.content} />
          </article>
        </Reveal>

        {images.length > 1 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
              marginTop: 44,
            }}
          >
            {images.slice(1).map((img, i) => (
              <Reveal key={img} delay={i * 80}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={metadata.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 16,
                    border: "1px solid rgba(14,14,14,0.08)",
                    display: "block",
                  }}
                />
              </Reveal>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
