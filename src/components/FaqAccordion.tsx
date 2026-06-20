"use client";

import { useState } from "react";

type Faq = { q: string; a: string };

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {faqs.map((item, i) => {
        const isOpen = i === open;
        return (
          <div
            key={item.q}
            style={{
              background: "#fff",
              border: "1px solid rgba(14,14,14,0.08)",
              borderRadius: 18,
              overflow: "hidden",
              boxShadow: "0 6px 18px -10px rgba(14,14,14,0.12)",
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "22px 22px",
                minHeight: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                textAlign: "left",
                fontFamily: "var(--font-hanken), sans-serif",
              }}
            >
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#0E0E0E",
                  lineHeight: 1.3,
                }}
              >
                {item.q}
              </span>
              <span
                className={`dd-acc-ind${isOpen ? " open" : ""}`}
                style={{
                  flex: "none",
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  background: "#F4F1ED",
                  color: "var(--accent)",
                  fontSize: 20,
                  fontWeight: 700,
                }}
              >
                +
              </span>
            </button>
            <div className={`dd-acc-panel${isOpen ? " open" : ""}`}>
              <div className="dd-acc-inner">
                <p
                  style={{
                    margin: 0,
                    padding: "0 26px 26px",
                    color: "#605C56",
                    fontSize: 16,
                    lineHeight: 1.6,
                    maxWidth: "62ch",
                  }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
