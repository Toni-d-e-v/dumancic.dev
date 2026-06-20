"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { calendarLink } from "@/content/site";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

const badgeStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: 20,
  height: 20,
  padding: "0 6px",
  marginLeft: 10,
  borderRadius: 999,
  background: "#fff",
  color: "#0E0E0E",
  fontSize: 12,
  fontWeight: 700,
  lineHeight: 1,
};

export function MobileMenu({ workCount = 0 }: { workCount?: number }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="dd-burger dd-burger-btn"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <>
          <div
            className="dd-drawer-backdrop"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="dd-drawer" role="dialog" aria-modal="true" aria-label="Menu">
            <div className="dd-drawer-head">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/dumancic-logo.svg"
                alt="dumancic.dev"
                style={{ height: 20, width: "auto", maxWidth: "56vw", display: "block" }}
              />
              <button
                type="button"
                className="dd-burger-btn"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav style={{ display: "flex", flexDirection: "column" }}>
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="dd-drawer-link"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                  {l.label === "Work" && workCount > 0 && (
                    <span style={badgeStyle}>{workCount}</span>
                  )}
                </Link>
              ))}
            </nav>

            <a
              href={calendarLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="dd-btn dd-btn-accent"
              style={{
                marginTop: 16,
                width: "100%",
                background:
                  "linear-gradient(180deg, color-mix(in srgb, var(--accent) 76%, #fff), var(--accent))",
                color: "#fff",
                fontWeight: 600,
                fontSize: 16,
                padding: "14px 20px",
                borderRadius: 999,
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.4), 0 6px 16px -8px rgba(232,80,46,0.8)",
              }}
            >
              Schedule a call
            </a>
          </div>
        </>
      )}
    </>
  );
}
