import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { about, person, stack, contactEmail } from "@/content/site";
import { getWorkCount } from "@/lib/posts";

const mono = "var(--font-mono), monospace";

export const metadata: Metadata = {
  title: "About",
  description:
    "Toni Dumančić — a Mostar-based Web3 & full-stack developer building blockchain products, SaaS platforms and web apps.",
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: mono,
        fontSize: 12,
        letterSpacing: "2.5px",
        textTransform: "uppercase",
        color: "#6E6A64",
        display: "flex",
        alignItems: "center",
        gap: 9,
      }}
    >
      <span style={{ color: "var(--accent)" }}>+</span> {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--ink)", minHeight: "100vh" }}>
      <Nav workCount={getWorkCount()} />
      <main
        className="dd-section"
        style={{ maxWidth: 980, paddingTop: "clamp(36px,8vw,64px)", paddingBottom: "var(--section-gap)" }}
      >
        {/* Intro */}
        <Reveal className="dd-about-head">
          <div
            style={{
              background:
                "linear-gradient(180deg, #232120 0%, #121110 60%, #070706 100%)",
              borderRadius: 24,
              padding: 14,
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.14), inset 0 -1px 1px rgba(0,0,0,0.6), 0 16px 34px -16px rgba(14,14,14,0.5)",
              alignSelf: "start",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={person.avatar}
              alt={person.name}
              style={{
                width: "100%",
                aspectRatio: "1/1",
                objectFit: "cover",
                objectPosition: "center 18%",
                borderRadius: 18,
                display: "block",
              }}
            />
          </div>
          <div>
            <div style={{ marginBottom: 18 }}>
              <Eyebrow>About</Eyebrow>
            </div>
            <h1
              style={{
                fontSize: "clamp(34px,4.6vw,56px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                margin: "0 0 20px",
              }}
            >
              {person.name}
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "#605C56", margin: "0 0 26px" }}>
              {about.intro}
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href={about.calendarLink}
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
                  padding: "13px 24px",
                  borderRadius: 999,
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4), 0 10px 24px -12px rgba(232,80,46,0.8)",
                }}
              >
                Schedule a call
              </a>
              <a
                href={`mailto:${contactEmail}`}
                style={{
                  background: "#fff",
                  color: "#0E0E0E",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: 15,
                  padding: "13px 24px",
                  borderRadius: 999,
                  border: "1px solid rgba(14,14,14,0.12)",
                }}
              >
                Email me
              </a>
            </div>
          </div>
        </Reveal>

        {/* Experience */}
        <section style={{ marginTop: 72 }}>
          <Reveal>
            <div style={{ marginBottom: 28 }}>
              <Eyebrow>Professional experience</Eyebrow>
            </div>
          </Reveal>
          <ExperienceTimeline experiences={about.experiences} />
        </section>

        {/* Recognition */}
        <section style={{ marginTop: 64 }}>
          <Reveal>
            <div style={{ marginBottom: 28 }}>
              <Eyebrow>Awards &amp; recognition</Eyebrow>
            </div>
          </Reveal>
          <div className="dd-about-awards">
            {about.recognition.map((r, i) => (
              <Reveal key={r} delay={i * 80}>
                <div
                  style={{
                    height: "100%",
                    background:
                      "linear-gradient(180deg, #242120 0%, #131110 60%, #080706 100%)",
                    color: "#F2F1EE",
                    borderRadius: 18,
                    padding: "20px 22px",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.13), inset 0 -1px 1px rgba(0,0,0,0.6), 0 14px 30px -16px rgba(14,14,14,0.45)",
                  }}
                >
                  <span style={{ flex: "none", color: "var(--accent-2)", fontSize: 18 }}>★</span>
                  <span style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.4 }}>{r}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section style={{ marginTop: 64 }}>
          <Reveal>
            <div style={{ marginBottom: 28 }}>
              <Eyebrow>Technical skills &amp; expertise</Eyebrow>
            </div>
          </Reveal>
          <div className="dd-about-skills">
            {about.skills.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div
                  style={{
                    height: "100%",
                    background: "#fff",
                    border: "1px solid rgba(14,14,14,0.07)",
                    borderRadius: 20,
                    padding: 26,
                    boxShadow: "0 6px 20px -10px rgba(14,14,14,0.12)",
                  }}
                >
                  <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>{s.title}</h3>
                  <p style={{ color: "#605C56", fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                    {s.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 28 }}>
              {stack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontFamily: mono,
                    fontSize: 13,
                    color: "#3A3833",
                    background: "#F4F1ED",
                    border: "1px solid rgba(14,14,14,0.07)",
                    padding: "7px 13px",
                    borderRadius: 999,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

      </main>
      <Footer />
    </div>
  );
}
