import Link from "next/link";
import { footerCols } from "@/content/site";

export function Footer() {
  return (
    <footer style={{ padding: "0 24px 32px" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div
          style={{
            background:
              "linear-gradient(180deg, #232120 0%, #17100e 60%, #0e0a09 100%)",
            borderRadius: 20,
            padding: "18px clamp(22px,3vw,32px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
            color: "#F2F1EE",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 1px rgba(0,0,0,0.6), 0 18px 38px -20px rgba(14,14,14,0.45)",
          }}
        >
          <div
            style={{
              fontSize: "clamp(18px,1.8vw,22px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              maxWidth: "34ch",
              lineHeight: 1.25,
            }}
          >
            Building Web3 &amp; full-stack products from Mostar, for teams
            everywhere.
          </div>
          <Link
            href="/#contact"
            className="dd-btn-accent"
            style={{
              flex: "none",
              background:
                "linear-gradient(180deg, color-mix(in srgb, var(--accent) 76%, #fff), var(--accent))",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 15,
              padding: "14px 24px",
              borderRadius: 999,
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.4), 0 8px 20px -10px rgba(232,80,46,0.8)",
            }}
          >
            Schedule a call
          </Link>
        </div>

        <div
          className="dd-grid-footer"
          style={{ padding: "48px 4px 40px" }}
        >
          {footerCols.map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: 12,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#A7A299",
                  marginBottom: 18,
                }}
              >
                {col.title}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {col.links.map((lnk) => (
                  <Link
                    key={lnk.t + lnk.h}
                    href={lnk.h}
                    className="dd-link-hover"
                    style={{
                      color: "#3A3833",
                      textDecoration: "none",
                      fontSize: 15,
                      fontWeight: 500,
                    }}
                  >
                    {lnk.t}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(14,14,14,0.1)",
            paddingTop: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 13,
              color: "#A7A299",
            }}
          >
            © 2026 /Toni Dumančić · Mostar
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 13,
              color: "#A7A299",
            }}
          >
            Designed &amp; built in-house
          </span>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/dumancic-logo.svg"
          alt="dumancic.dev"
          style={{
            display: "block",
            width: "100%",
            maxWidth: 1320,
            height: "auto",
            marginTop: 28,
            filter: "brightness(0)",
          }}
        />
      </div>
    </footer>
  );
}
