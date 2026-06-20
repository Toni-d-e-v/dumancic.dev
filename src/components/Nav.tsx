"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";
import { calendarLink } from "@/content/site";

const linkStyle: React.CSSProperties = {
  color: "#EDEAE5",
  textDecoration: "none",
  fontSize: 15,
  fontWeight: 500,
};

const badgeStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: 18,
  height: 18,
  padding: "0 5px",
  marginLeft: 7,
  borderRadius: 999,
  background: "#fff",
  color: "#0E0E0E",
  fontSize: 11,
  fontWeight: 700,
  lineHeight: 1,
  verticalAlign: "middle",
};

export function Nav({ workCount = 0 }: { workCount?: number }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`dd-navwrap${scrolled ? " dd-navwrap--scrolled" : ""}`}>
      <nav className={`dd-nav${scrolled ? " dd-nav--scrolled" : ""}`}>
        {/* left: logo (balanced flex so center group is truly centered) */}
        <div style={{ flex: "1 1 0", display: "flex", justifyContent: "flex-start", minWidth: 0 }}>
          <Link
            href="/#top"
            style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#fff" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/dumancic-logo.svg" alt="dumancic.dev" className="dd-logo" />
          </Link>
        </div>

        {/* center: links */}
        <div
          className="dd-nav-links"
          style={{ alignItems: "center", justifyContent: "center", gap: 28, flex: "0 0 auto" }}
        >
          <Link href="/#services" style={linkStyle} className="dd-link-hover-light">
            Services
          </Link>
          <Link href="/work" style={linkStyle} className="dd-link-hover-light">
            <span style={{ display: "inline-flex", alignItems: "center" }}>
              Work
              {workCount > 0 && <span style={badgeStyle}>{workCount}</span>}
            </span>
          </Link>
          <Link href="/about" style={linkStyle} className="dd-link-hover-light">
            About
          </Link>
          <Link href="/blog" style={linkStyle} className="dd-link-hover-light">
            Blog
          </Link>
          <Link href="/#words" style={linkStyle} className="dd-link-hover-light">
            Words
          </Link>
          <Link href="/#faq" style={linkStyle} className="dd-link-hover-light">
            FAQ
          </Link>
          <Link href="/#contact" style={linkStyle} className="dd-link-hover-light">
            Contact
          </Link>
        </div>

        {/* right: actions (balanced flex) */}
        <div style={{ flex: "1 1 0", display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 12 }}>
          <a
            href={calendarLink}
            target="_blank"
            rel="noopener noreferrer"
            className="dd-nav-cta dd-btn-accent"
            style={{
              background:
                "linear-gradient(180deg, color-mix(in srgb, var(--accent) 76%, #fff), var(--accent))",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 14,
              padding: "11px 20px",
              borderRadius: 999,
              whiteSpace: "nowrap",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.4), 0 6px 16px -8px rgba(232,80,46,0.8)",
            }}
          >
            Schedule a call
          </a>
          <MobileMenu workCount={workCount} />
        </div>
      </nav>
    </div>
  );
}
