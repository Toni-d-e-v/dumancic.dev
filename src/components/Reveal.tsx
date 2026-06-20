"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  /** stagger delay in milliseconds */
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
};

export function Reveal({ children, delay = 0, className, style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
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
      className={`dd-reveal${visible ? " is-visible" : ""}${className ? " " + className : ""}`}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
    >
      {children}
    </div>
  );
}
