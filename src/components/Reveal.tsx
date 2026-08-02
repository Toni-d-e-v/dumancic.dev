"use client";

import { useEffect, useRef, useState } from "react";
import { onIntroDone } from "@/lib/intro";

type RevealProps = {
  children: React.ReactNode;
  /** stagger delay in milliseconds */
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
};

export function Reveal({ children, delay = 0, className, style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  // Blokovi u prvom ekranu čekaju da uvodna špica pusti sadržaj, inače
  // odrade animaciju ispod nje i dočekaju posjetitelja već gotovi.
  const [released, setReleased] = useState(false);

  useEffect(() => onIntroDone(() => setReleased(true)), []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`dd-reveal${inView && released ? " is-visible" : ""}${className ? " " + className : ""}`}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
    >
      {children}
    </div>
  );
}
