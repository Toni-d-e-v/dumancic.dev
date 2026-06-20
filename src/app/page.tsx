import fs from "fs";
import path from "path";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ServicesAccordion } from "@/components/ServicesAccordion";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SocialIcons } from "@/components/SocialIcons";
import { Aurora } from "@/components/Aurora";
import { getPosts } from "@/lib/posts";
import {
  stats,
  services,
  industries,
  stack,
  awards,
  quotes,
  faqs,
  heroRecognition,
  featuredProject,
  featuredWorkSlugs,
  workShotLabels,
  workTags,
  calendarLink,
} from "@/content/site";

const mono = "var(--font-mono), monospace";

/** True if a /public asset path actually exists on disk (server-only). */
function publicAssetExists(p: string) {
  return fs.existsSync(path.join(process.cwd(), "public", p));
}

function Eyebrow({
  children,
  center,
  light,
}: {
  children: React.ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div
      style={{
        fontFamily: mono,
        fontSize: 12,
        letterSpacing: "2.5px",
        textTransform: "uppercase",
        color: light ? "#8C8881" : "#6E6A64",
        display: "flex",
        alignItems: "center",
        gap: 9,
        justifyContent: center ? "center" : "flex-start",
      }}
    >
      <span style={{ color: light ? "var(--accent-2)" : "var(--accent)" }}>+</span>{" "}
      {children}
    </div>
  );
}

const accentBtn: React.CSSProperties = {
  background:
    "linear-gradient(180deg, color-mix(in srgb, var(--accent) 76%, #fff), var(--accent))",
  color: "#fff",
  textDecoration: "none",
  fontWeight: 600,
  borderRadius: 999,
  whiteSpace: "nowrap",
};

export default function Home() {
  const blog = getPosts("blog");
  const work = getPosts("work");
  const latestPosts = blog.slice(0, 2);
  const featured = featuredWorkSlugs
    .map((slug) => work.find((p) => p.slug === slug))
    .filter(Boolean)
    .slice(0, 3) as typeof work;

  return (
    <div style={{ background: "var(--bg)", color: "var(--ink)", minHeight: "100vh" }}>
      <Nav workCount={work.length} />

      {/* ===== HERO ===== */}
      <header
        id="top"
        className="dd-section dd-gap"
        style={{ paddingTop: "clamp(36px,8vw,78px)" }}
      >
        <Reveal>
        <div style={{ textAlign: "center", maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ marginBottom: 24 }}>
            <Eyebrow center>Welcome to the studio</Eyebrow>
          </div>
          <h1
            style={{
              fontSize: "clamp(40px,5.6vw,74px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              fontWeight: 700,
              margin: "0 auto",
              maxWidth: "22ch",
            }}
          >
            I build Web3 &amp; full-stack products that ship
          </h1>
          <p
            style={{
              fontSize: "clamp(17px,1.5vw,20px)",
              lineHeight: 1.55,
              color: "#605C56",
              maxWidth: "52ch",
              margin: "26px auto 0",
            }}
          >
            I&apos;m Toni — a Mostar-based developer who designs, builds and scales
            modern software through my studio,{" "}
            <strong style={{ color: "#0E0E0E", fontWeight: 600 }}>dumancic.dev</strong>.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: 34,
            }}
          >
            <Link
              href="#contact"
              className="dd-btn-accent"
              style={{
                ...accentBtn,
                fontSize: 16,
                padding: "15px 28px",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.4), 0 14px 30px -12px rgba(232,80,46,0.7)",
              }}
            >
              Start a project
            </Link>
            <Link
              href="/work"
              style={{
                background: "#fff",
                color: "#0E0E0E",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 16,
                padding: "15px 28px",
                borderRadius: 999,
                whiteSpace: "nowrap",
                border: "1px solid rgba(14,14,14,0.12)",
              }}
            >
              View work
            </Link>
          </div>
        </div>
        </Reveal>

        <div className="dd-hero-bento" style={{ marginTop: 48 }}>
          {/* Featured work */}
          <Reveal delay={80} className="dd-bento-work">
            <div
              style={{
                height: "100%",
                background: "#fff",
                border: "1px solid rgba(14,14,14,0.07)",
                borderRadius: 22,
                padding: "clamp(16px,2.4vw,22px)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                boxShadow: "0 6px 20px -10px rgba(14,14,14,0.12)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "16/10",
                  borderRadius: 14,
                  backgroundImage: `url('${featuredProject.shot}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: "1px solid rgba(14,14,14,0.06)",
                }}
              >
       
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {featuredProject.metrics.map((m) => (
                  <span
                    key={m}
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#BE3219",
                      background: "rgba(232,80,46,0.1)",
                      border: "1px solid rgba(232,80,46,0.2)",
                      padding: "5px 11px",
                      borderRadius: 999,
                    }}
                  >
                    {m}
                  </span>
                ))}
                {featuredProject.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: mono,
                      fontSize: 11,
                      letterSpacing: "0.5px",
                      color: "#605C56",
                      background: "#F4F1ED",
                      border: "1px solid rgba(14,14,14,0.07)",
                      padding: "5px 10px",
                      borderRadius: 999,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="dd-feature-blurb" style={{ margin: 0, color: "#605C56" }}>
                {featuredProject.blurb}
              </p>

              <Link
                href={`/work/${featuredProject.slug}`}
                className="dd-link-hover dd-case-link"
                style={{
                  marginTop: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  textDecoration: "none",
                  color: "#0E0E0E",
                }}
              >
                <span style={{ fontWeight: 600, fontSize: 15 }}>Read case study</span>
                <span
                  className="dd-case-arrow"
                  style={{
                    flex: "none",
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 17,
                  }}
                >
                  ↗
                </span>
              </Link>
            </div>
          </Reveal>

          {/* Founder */}
          <Reveal delay={140} className="dd-bento-founder">
            <div
              style={{
                height: "100%",
                background:
                  "linear-gradient(180deg, #232120 0%, #121110 60%, #070706 100%)",
                borderRadius: 22,
                padding: 14,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.14), inset 0 -1px 1px rgba(0,0,0,0.6), 0 16px 34px -16px rgba(14,14,14,0.5)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/toni.jpg"
                alt="Toni Dumančić speaking at MoneyMotion 2025"
                style={{
                  width: "100%",
                  flex: "1 1 auto",
                  minHeight: 220,
                  aspectRatio: "1/1",
                  objectFit: "cover",
                  objectPosition: "center 18%",
                  borderRadius: 16,
                  display: "block",
                }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  padding: "6px 8px 4px",
                }}
              >
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 13, color: "#A29D95" }}>Founder · dumancic.dev</div>
                  <div style={{ fontWeight: 700, fontSize: 18, color: "#fff" }}>
                    Toni Dumančić
                  </div>
                </div>
                <Link
                  href="#contact"
                  style={{
                    flex: "none",
                    background: "#fff",
                    color: "#0E0E0E",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 14,
                    padding: "11px 18px",
                    borderRadius: 999,
                  }}
                >
                  Let&apos;s talk
                </Link>
              </div>
              <div style={{ padding: "0 8px 6px" }}>
                <SocialIcons />
              </div>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={200} className="dd-bento-stats">
            <div
              style={{
                height: "100%",
                background: "#fff",
                border: "1px solid rgba(14,14,14,0.07)",
                borderRadius: 22,
                padding: "clamp(22px,3vw,30px)",
                display: "flex",
                alignItems: "center",
                boxShadow: "0 6px 20px -10px rgba(14,14,14,0.12)",
              }}
            >
              <div className="dd-bento-statgrid" style={{ width: "100%" }}>
                {stats.map((s) => (
                  <div key={s.label}>
                    <div
                      style={{
                        fontSize: "clamp(34px,3.4vw,46px)",
                        fontWeight: 700,
                        letterSpacing: "-0.03em",
                        lineHeight: 1,
                      }}
                    >
                      {s.num}
                    </div>
                    <div style={{ marginTop: 10, color: "#605C56", fontSize: 14, lineHeight: 1.4 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Recognized at */}
          <Reveal delay={260} className="dd-bento-reco">
            <div
              style={{
                height: "100%",
                background: "#fff",
                border: "1px solid rgba(14,14,14,0.07)",
                borderRadius: 22,
                padding: "clamp(22px,3vw,30px)",
                display: "flex",
                flexDirection: "column",
                gap: 18,
                boxShadow: "0 6px 20px -10px rgba(14,14,14,0.12)",
              }}
            >
              <Eyebrow>Recognized at</Eyebrow>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "18px 22px",
                }}
              >
                {heroRecognition.map((r) =>
                  publicAssetExists(r.logo) ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={r.name}
                      src={r.logo}
                      alt={r.name}
                      title={r.name}
                      className={`dd-reco-logo dd-reco-logo--${r.size}${r.invert ? " dd-reco-logo--invert" : ""}`}
                    />
                  ) : (
                    <span
                      key={r.name}
                      style={{
                        fontWeight: 600,
                        fontSize: 14,
                        color: "#1A1916",
                        background: "#F4F1ED",
                        border: "1px solid rgba(14,14,14,0.08)",
                        padding: "8px 14px",
                        borderRadius: 999,
                      }}
                    >
                      {r.name}
                    </span>
                  ),
                )}
              </div>
              <p style={{ margin: "auto 0 0", color: "#7A766F", fontSize: 14, lineHeight: 1.5 }}>
                Awards, hackathons &amp; stages across the Balkan tech scene.
              </p>
            </div>
          </Reveal>
        </div>
      </header>

      {/* ===== SERVICES ===== */}
      <section id="services" className="dd-section dd-gap">
        <div
          style={{
            background:
              "linear-gradient(180deg, #232120 0%, #17100e 60%, #0e0a09 100%)",
            borderRadius: 32,
            padding: "clamp(28px,5vw,72px)",
            color: "#F2F1EE",
            position: "relative",
            overflow: "hidden",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 1px rgba(0,0,0,0.6), 0 24px 50px -24px rgba(14,14,14,0.45)",
          }}
        >
          <Aurora variant="dark" seed={5} />
          <div className="dd-svc-grid" style={{ position: "relative" }}>
            <Reveal>
              <div>
                <Eyebrow light>Services</Eyebrow>
              </div>
            </Reveal>
            <Reveal delay={80}>
            <div>
              <h2
                style={{
                  fontSize: "clamp(30px,3.6vw,48px)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                  margin: 0,
                }}
              >
                From first idea to production
              </h2>
              <p
                style={{
                  color: "#A29D95",
                  fontSize: 17,
                  lineHeight: 1.55,
                  margin: "16px 0 36px",
                  maxWidth: "46ch",
                }}
              >
                End-to-end software — I design, build and scale Web3 and full-stack
                products that hold up in the real world.
              </p>

              <ServicesAccordion services={services} />

              <div className="dd-chip-grid" style={{ marginTop: 36 }}>
                <ChipCard title="Industries" items={industries} />
                <ChipCard title="Stack" items={stack} />
              </div>
            </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== WORK ===== */}
      <section id="work" className="dd-section dd-gap">
        <Reveal>
          <div style={{ marginBottom: 18 }}>
            <Eyebrow>Selected work</Eyebrow>
          </div>
          <h2
            style={{
              fontSize: "clamp(32px,4vw,52px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              margin: "0 0 44px",
              maxWidth: "16ch",
            }}
          >
            Products I&apos;ve designed &amp; shipped
          </h2>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {featured.map((proj, i) => {
            const img = proj.metadata.images?.[0];
            return (
              <Reveal key={proj.slug} delay={i * 90}>
              <article
                className="dd-proj"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(14,14,14,0.07)",
                  borderRadius: 24,
                  padding: 20,
                  boxShadow: "0 8px 24px -12px rgba(14,14,14,0.14)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "1px solid rgba(14,14,14,0.06)",
                    backgroundColor: "#ECEAE5",
                  }}
                >
                  {img && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={img}
                      alt={workShotLabels[proj.slug] ?? proj.metadata.title}
                      style={{ display: "block", width: "100%", height: "auto" }}
                    />
                  )}
                  <span
                    style={{
                      position: "absolute",
                      bottom: 10,
                      left: 10,
                      fontFamily: mono,
                      fontSize: 11,
                      letterSpacing: "1px",
                      color: "#5A554D",
                      background: "rgba(255,255,255,0.85)",
                      padding: "5px 10px",
                      borderRadius: 6,
                    }}
                  >
                    {workShotLabels[proj.slug] ?? proj.metadata.title}
                  </span>
                </div>
                <div style={{ padding: "14px 20px 14px 0" }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap" }}>
                    {(workTags[proj.slug] ?? []).map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: mono,
                          fontSize: 11,
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          color: "#605C56",
                          background: "#F4F1ED",
                          border: "1px solid rgba(14,14,14,0.07)",
                          padding: "5px 11px",
                          borderRadius: 999,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3
                    style={{
                      fontSize: "clamp(24px,2.4vw,30px)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.12,
                      margin: "0 0 14px",
                    }}
                  >
                    {proj.metadata.title}
                  </h3>
                  <p
                    style={{
                      color: "#605C56",
                      fontSize: 16,
                      lineHeight: 1.6,
                      margin: "0 0 26px",
                      maxWidth: "48ch",
                    }}
                  >
                    {proj.metadata.summary}
                  </p>
                  <div style={{ display: "flex", gap: 22, alignItems: "center", flexWrap: "wrap" }}>
                    <Link
                      href={`/work/${proj.slug}`}
                      style={{
                        color: "#0E0E0E",
                        fontWeight: 600,
                        fontSize: 15,
                        textDecoration: "none",
                        borderBottom: "2px solid var(--accent)",
                        paddingBottom: 2,
                      }}
                    >
                      Read case study
                    </Link>
                    {proj.metadata.link && (
                      <a
                        href={proj.metadata.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dd-link-hover"
                        style={{
                          color: "#605C56",
                          fontWeight: 500,
                          fontSize: 15,
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        View project <span style={{ color: "var(--accent)" }}>↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
              </Reveal>
            );
          })}
        </div>

        <div style={{ marginTop: 36 }}>
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
            All projects ↗
          </Link>
        </div>
      </section>

      {/* ===== RECOGNITION ===== */}
      <section id="words" className="dd-section dd-gap">
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
            marginBottom: 44,
          }}
        >
          <div>
            <div style={{ marginBottom: 18 }}>
              <Eyebrow>Recognition</Eyebrow>
            </div>
            <h2
              style={{
                fontSize: "clamp(32px,4vw,52px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                margin: 0,
                maxWidth: "18ch",
              }}
            >
              Trusted by the people I build alongside
            </h2>
          </div>
          <p style={{ color: "#605C56", fontSize: 17, lineHeight: 1.55, maxWidth: "32ch", margin: 0 }}>
            Founders, investors and community leaders across the Balkan tech scene.
          </p>
        </div>

        <div className="dd-grid-quotes">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 90}>
            <figure
              style={{
                margin: 0,
                background: "#fff",
                border: "1px solid rgba(14,14,14,0.07)",
                borderRadius: 22,
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 20,
                boxShadow: "0 8px 24px -12px rgba(14,14,14,0.14)",
              }}
            >
              <span style={{ color: "var(--accent)", fontSize: 17, letterSpacing: "3px" }}>
                ★★★★★
              </span>
              <blockquote
                style={{
                  margin: 0,
                  fontSize: 17,
                  lineHeight: 1.5,
                  color: "#1A1916",
                  fontWeight: 500,
                }}
              >
                {q.text}
              </blockquote>
              <figcaption
                style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 13 }}
              >
                {q.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={q.avatar}
                    alt={q.name}
                    style={{
                      flex: "none",
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      objectFit: "cover",
                      background: "#0C0C0C",
                    }}
                  />
                ) : (
                  <span
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      background: "#0C0C0C",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: 15,
                    }}
                  >
                    {q.initials}
                  </span>
                )}
                <span style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
                  <span style={{ fontWeight: 600, fontSize: 15, lineHeight: 1.25 }}>{q.name}</span>
                  <span style={{ color: "#7A766F", fontSize: 13, lineHeight: 1.25 }}>{q.role}</span>
                </span>
              </figcaption>
            </figure>
            </Reveal>
          ))}
        </div>

        <div style={{ margin: "52px 0 22px" }}>
          <Eyebrow>Awards &amp; recognition</Eyebrow>
        </div>
        <div className="dd-grid-awards">
          {awards.map((aw, i) => (
            <Reveal key={aw.title} delay={i * 90}>
            <div
              style={{
                background:
                  "linear-gradient(180deg, #242120 0%, #131110 60%, #080706 100%)",
                color: "#F2F1EE",
                borderRadius: 22,
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                position: "relative",
                overflow: "hidden",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.13), inset 0 -1px 1px rgba(0,0,0,0.6), 0 14px 30px -16px rgba(14,14,14,0.45)",
              }}
            >
              <Aurora variant="dark" seed={i + 1} />
              <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 10 }}>
                <span
                  style={{
                    flex: "none",
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-2)",
                    fontSize: 17,
                  }}
                >
                  ★
                </span>
                <span
                  style={{
                    fontFamily: mono,
                    fontSize: 12,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: "var(--accent-2)",
                  }}
                >
                  {aw.place}
                </span>
              </div>
              <h3
                style={{
                  position: "relative",
                  fontSize: 19,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.25,
                  margin: "6px 0 0",
                }}
              >
                {aw.title}
              </h3>
              <p style={{ position: "relative", color: "#A29D95", fontSize: 14, lineHeight: 1.5, margin: 0 }}>
                {aw.meta}
              </p>
            </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== BLOG ===== */}
      <section className="dd-section dd-gap">
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 36,
          }}
        >
          <h2 style={{ fontSize: "clamp(26px,3vw,40px)", fontWeight: 700, letterSpacing: "-0.02em", margin: 0 }}>
            Latest from the blog
          </h2>
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
            All posts ↗
          </Link>
        </div>
        <div className="dd-grid-posts">
          {latestPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 90}>
            <Link
              href={`/blog/${post.slug}`}
              className="dd-card-hover"
              style={{
                background: "#fff",
                border: "1px solid rgba(14,14,14,0.07)",
                borderRadius: 22,
                padding: 30,
                textDecoration: "none",
                color: "#0E0E0E",
                display: "flex",
                flexDirection: "column",
                gap: 18,
                minHeight: 200,
                boxShadow: "0 8px 24px -12px rgba(14,14,14,0.14)",
              }}
            >
              <span style={{ fontFamily: mono, fontSize: 12, letterSpacing: "1px", color: "#A7A299" }}>
                {formatDate(post.metadata.publishedAt)}
              </span>
              <h3 style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.32, letterSpacing: "-0.01em", margin: 0 }}>
                {post.metadata.title}
              </h3>
              <span style={{ marginTop: "auto", color: "var(--accent)", fontWeight: 600, fontSize: 14 }}>
                Read article ↗
              </span>
            </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="dd-section dd-section--narrow dd-gap">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div style={{ marginBottom: 18 }}>
              <Eyebrow center>FAQ</Eyebrow>
            </div>
            <h2
              style={{
                fontSize: "clamp(30px,3.6vw,48px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                margin: 0,
              }}
            >
              A few quick answers before we talk
            </h2>
          </div>
        </Reveal>
        <FaqAccordion faqs={faqs} />
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="dd-section dd-gap">
        <div
          style={{
            borderRadius: 32,
            padding: "clamp(24px,4vw,56px)",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#BE3219",
            backgroundImage:
              "radial-gradient(85% 120% at 16% 6%, rgba(255,152,108,0.6), transparent 52%), radial-gradient(78% 115% at 94% 92%, rgba(110,10,0,0.7), transparent 55%)",
          }}
        >
          <div className="dd-lines" aria-hidden="true" />
          <Aurora variant="accent" seed={9} />
          <div className="dd-contact-grid" style={{ position: "relative" }}>
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal delay={80}>
            <div style={{ color: "#fff" }}>
              <div style={{ marginBottom: 18 }}>
                <div
                  style={{
                    fontFamily: mono,
                    fontSize: 12,
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.78)",
                    display: "flex",
                    alignItems: "center",
                    gap: 9,
                  }}
                >
                  <span>+</span> Contact
                </div>
              </div>
              <h2
                style={{
                  fontSize: "clamp(40px,5vw,72px)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                Let&apos;s talk.
              </h2>
              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.5,
                  color: "rgba(255,255,255,0.9)",
                  margin: "22px 0 36px",
                  maxWidth: "38ch",
                }}
              >
                Tell me about your project — whether it&apos;s a web app, a blockchain
                product, or an idea that just needs shipping.
              </p>
              <div className="dd-contact-info" style={{ marginBottom: 32 }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>Quick response</div>
                  <div style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(255,255,255,0.8)" }}>
                    I read every inquiry and reply within 24 hours.
                  </div>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>Clear next steps</div>
                  <div style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(255,255,255,0.8)" }}>
                    You&apos;ll get a tailored plan with timeline, scope and pricing.
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  background:
                    "linear-gradient(180deg, #232120 0%, #121110 60%, #070706 100%)",
                  borderRadius: 18,
                  padding: "16px 18px",
                  flexWrap: "wrap",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 1px rgba(0,0,0,0.55)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/toni.jpg"
                  alt="Toni Dumančić"
                  style={{
                    flex: "none",
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    objectFit: "cover",
                    objectPosition: "center 18%",
                  }}
                />
                <div style={{ flex: 1, minWidth: 120 }}>
                  <div style={{ fontSize: 13, color: "#A29D95" }}>Founder · dumancic.dev</div>
                  <div style={{ fontWeight: 700, fontSize: 17, color: "#fff" }}>Toni Dumančić</div>
                </div>
                <a
                  href={calendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: "none",
                    background: "#fff",
                    color: "#0E0E0E",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 14,
                    padding: "11px 18px",
                    borderRadius: 999,
                  }}
                >
                  Schedule a call
                </a>
              </div>
            </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ChipCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 18,
        padding: 24,
        boxShadow: "0 10px 26px -12px rgba(0,0,0,0.4)",
      }}
    >
      <div
        style={{
          fontFamily: mono,
          fontSize: 12,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          color: "#0E0E0E",
          marginBottom: 16,
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {items.map((item) => (
          <span
            key={item}
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: "#3A3833",
              background: "#F4F1ED",
              border: "1px solid rgba(14,14,14,0.07)",
              padding: "6px 12px",
              borderRadius: 999,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
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
