"use client";

import { useState } from "react";
import type { Service } from "@/content/site";

export function ServicesAccordion({ services }: { services: Service[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {services.map((svc, i) => {
        const isOpen = i === open;
        return (
          <div key={svc.no} style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "22px 4px",
                minHeight: 48,
                display: "flex",
                alignItems: "center",
                gap: 16,
                textAlign: "left",
                fontFamily: "var(--font-hanken), sans-serif",
                color: "#F2F1EE",
              }}
            >
              <span
                style={{
                  flex: "none",
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-mono), monospace",
                  fontWeight: 700,
                  fontSize: 15,
                  color: "var(--accent-2)",
                }}
              >
                {svc.no}
              </span>
              <span
                style={{
                  flex: 1,
                  fontSize: "clamp(19px,2vw,24px)",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                }}
              >
                {svc.title}
              </span>
              <span
                className={`dd-acc-ind${isOpen ? " open" : ""}`}
                style={{ flex: "none", fontSize: 24, fontWeight: 400, color: "#8C8881" }}
              >
                +
              </span>
            </button>
            <div className={`dd-acc-panel${isOpen ? " open" : ""}`}>
              <div className="dd-acc-inner dd-svc-panel">
                <p
                  style={{
                    color: "#A29D95",
                    fontSize: 16,
                    lineHeight: 1.6,
                    margin: "0 0 18px",
                    maxWidth: "54ch",
                  }}
                >
                  {svc.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {svc.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: "var(--font-mono), monospace",
                        fontSize: 12,
                        letterSpacing: "0.5px",
                        color: "#D8D3CB",
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        padding: "6px 12px",
                        borderRadius: 999,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />
    </div>
  );
}
