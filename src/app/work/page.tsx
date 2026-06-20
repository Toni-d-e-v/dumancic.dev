import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { getPosts } from "@/lib/posts";

const mono = "var(--font-mono), monospace";

export const metadata: Metadata = {
  title: "Work",
  description: "Products and projects designed, built and shipped by Toni Dumančić.",
};

export default function WorkPage() {
  const projects = getPosts("work");

  return (
    <div style={{ background: "var(--bg)", color: "var(--ink)", minHeight: "100vh" }}>
      <Nav workCount={projects.length} />
      <main
        className="dd-section"
        style={{ paddingTop: "clamp(40px,8vw,72px)", paddingBottom: "var(--section-gap)" }}
      >
        <Reveal>
          <div style={{ marginBottom: 16 }}>
            <span style={{ fontFamily: mono, fontSize: 12, letterSpacing: "2.5px", textTransform: "uppercase", color: "#6E6A64" }}>
              <span style={{ color: "var(--accent)" }}>+</span> Selected work
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(36px,5vw,64px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              margin: "0 0 44px",
              maxWidth: "16ch",
            }}
          >
            Products I&apos;ve designed &amp; shipped
          </h1>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 20,
          }}
        >
          {projects.map((proj, i) => {
            const img = proj.metadata.images?.[0];
            return (
              <Reveal key={proj.slug} delay={i * 80}>
              <Link
                href={`/work/${proj.slug}`}
                className="dd-card-hover"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(14,14,14,0.07)",
                  borderRadius: 22,
                  padding: 16,
                  textDecoration: "none",
                  color: "#0E0E0E",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  height: "100%",
                  boxShadow: "0 8px 24px -12px rgba(14,14,14,0.14)",
                }}
              >
                <div
                  style={{
                    borderRadius: 14,
                    overflow: "hidden",
                    border: "1px solid rgba(14,14,14,0.06)",
                    backgroundColor: "#ECEAE5",
                    aspectRatio: img ? undefined : "16/10",
                  }}
                >
                  {img && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={img}
                      alt={proj.metadata.title}
                      style={{ display: "block", width: "100%", height: "auto" }}
                    />
                  )}
                </div>
                <div style={{ padding: "0 8px 12px" }}>
                  <h2 style={{ fontSize: 19, fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1.25, margin: "0 0 10px" }}>
                    {proj.metadata.title}
                  </h2>
                  <p style={{ color: "#605C56", fontSize: 15, lineHeight: 1.55, margin: "0 0 14px" }}>
                    {proj.metadata.summary}
                  </p>
                  <span style={{ color: "var(--accent)", fontWeight: 600, fontSize: 14 }}>
                    Read case study ↗
                  </span>
                </div>
              </Link>
              </Reveal>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
