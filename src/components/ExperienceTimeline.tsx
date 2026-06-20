"use client";

import { useEffect, useRef, useState } from "react";

const mono = "var(--font-mono), monospace";

type Experience = {
  company: string;
  timeframe: string;
  role: string;
  achievements: string[];
};

export function ExperienceTimeline({
  experiences,
}: {
  experiences: Experience[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [nodeTops, setNodeTops] = useState<number[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      if (!cards.length) return;

      // node positions (layout-based, so unaffected by any transforms)
      setNodeTops(cards.map((el) => el.offsetTop + el.offsetHeight / 2));

      // active = card whose center is nearest the viewport center
      const viewportCenter = window.innerHeight / 2;
      let best = 0;
      let bestDist = Infinity;
      cards.forEach((el, i) => {
        const r = el.getBoundingClientRect();
        const dist = Math.abs(r.top + r.height / 2 - viewportCenter);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setActive(best);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [experiences.length]);

  const lightTop = nodeTops[active] ?? 0;

  return (
    <div className="dd-timeline" ref={containerRef}>
      <div className="dd-timeline-rail" aria-hidden="true">
        <span className="dd-timeline-line" />
        {nodeTops.map((t, i) => (
          <span
            key={i}
            className={`dd-timeline-node${i === active ? " active" : ""}`}
            style={{ top: t }}
          />
        ))}
        <span className="dd-timeline-light" style={{ top: lightTop }} />
      </div>

      <div className="dd-timeline-cards">
        {experiences.map((exp, i) => (
          <div
            key={exp.company}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="dd-timeline-card"
            style={{
              background: "#fff",
              border: "1px solid rgba(14,14,14,0.07)",
              borderRadius: 22,
              padding: "28px 28px",
              boxShadow: "0 8px 24px -12px rgba(14,14,14,0.14)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 8,
                marginBottom: 4,
              }}
            >
              <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.01em", margin: 0 }}>
                {exp.company}
              </h2>
              <span style={{ fontFamily: mono, fontSize: 13, color: "#A7A299" }}>
                {exp.timeframe}
              </span>
            </div>
            <div style={{ color: "var(--accent)", fontWeight: 600, fontSize: 15, marginBottom: 16 }}>
              {exp.role}
            </div>
            <ul style={{ margin: 0, paddingLeft: 20, color: "#3A3833", fontSize: 16, lineHeight: 1.65 }}>
              {exp.achievements.map((a, j) => (
                <li key={j} style={{ margin: "6px 0" }}>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
