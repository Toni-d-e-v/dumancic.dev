import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import Link from "next/link";
import type { ReactNode } from "react";

function slugify(input: string): string {
  return String(input)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function textOf(children: ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(textOf).join("");
  return "";
}

function Heading({ level, children }: { level: 2 | 3; children: ReactNode }) {
  const id = slugify(textOf(children));
  const style: React.CSSProperties =
    level === 2
      ? {
          fontSize: "clamp(24px,2.6vw,32px)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: 1.2,
          margin: "48px 0 16px",
        }
      : {
          fontSize: "clamp(19px,1.8vw,22px)",
          fontWeight: 700,
          letterSpacing: "-0.01em",
          lineHeight: 1.3,
          margin: "32px 0 12px",
        };
  const Tag = level === 2 ? "h2" : "h3";
  return (
    <Tag id={id} style={style}>
      {children}
    </Tag>
  );
}

const components = {
  h1: ({ children }: { children: ReactNode }) => (
    <Heading level={2}>{children}</Heading>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <Heading level={2}>{children}</Heading>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <Heading level={3}>{children}</Heading>
  ),
  p: ({ children }: { children: ReactNode }) => (
    <p
      style={{
        fontSize: 17,
        lineHeight: 1.75,
        color: "#3A3833",
        margin: "0 0 18px",
      }}
    >
      {children}
    </p>
  ),
  a: ({ href = "", children }: { href?: string; children: ReactNode }) => {
    const external = href.startsWith("http");
    const style: React.CSSProperties = {
      color: "var(--accent)",
      fontWeight: 600,
      textDecoration: "none",
      borderBottom: "1px solid rgba(232,80,46,0.4)",
    };
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" style={style}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} style={style}>
        {children}
      </Link>
    );
  },
  ul: ({ children }: { children: ReactNode }) => (
    <ul
      style={{
        margin: "0 0 18px",
        paddingLeft: 22,
        color: "#3A3833",
        fontSize: 17,
        lineHeight: 1.7,
      }}
    >
      {children}
    </ul>
  ),
  ol: ({ children }: { children: ReactNode }) => (
    <ol
      style={{
        margin: "0 0 18px",
        paddingLeft: 22,
        color: "#3A3833",
        fontSize: 17,
        lineHeight: 1.7,
      }}
    >
      {children}
    </ol>
  ),
  li: ({ children }: { children: ReactNode }) => (
    <li style={{ margin: "6px 0" }}>{children}</li>
  ),
  strong: ({ children }: { children: ReactNode }) => (
    <strong style={{ color: "#0E0E0E", fontWeight: 700 }}>{children}</strong>
  ),
  em: ({ children }: { children: ReactNode }) => (
    <em style={{ fontStyle: "italic" }}>{children}</em>
  ),
  hr: () => (
    <hr
      style={{
        border: "none",
        borderTop: "1px solid rgba(14,14,14,0.12)",
        margin: "36px 0",
      }}
    />
  ),
  blockquote: ({ children }: { children: ReactNode }) => (
    <blockquote
      style={{
        margin: "0 0 18px",
        padding: "4px 0 4px 20px",
        borderLeft: "3px solid var(--accent)",
        color: "#605C56",
        fontStyle: "italic",
      }}
    >
      {children}
    </blockquote>
  ),
  code: ({ children }: { children: ReactNode }) => (
    <code
      style={{
        fontFamily: "var(--font-mono), monospace",
        fontSize: "0.9em",
        background: "rgba(14,14,14,0.06)",
        padding: "2px 6px",
        borderRadius: 6,
      }}
    >
      {children}
    </code>
  ),
  pre: ({ children }: { children: ReactNode }) => (
    <pre
      style={{
        fontFamily: "var(--font-mono), monospace",
        fontSize: 14,
        background: "#1a1816",
        color: "#EDEAE5",
        padding: 20,
        borderRadius: 14,
        overflowX: "auto",
        margin: "0 0 18px",
        lineHeight: 1.6,
      }}
    >
      {children}
    </pre>
  ),
  // eslint-disable-next-line @next/next/no-img-element
  img: ({ src = "", alt = "" }: { src?: string; alt?: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
        height: "auto",
        borderRadius: 16,
        border: "1px solid rgba(14,14,14,0.08)",
        margin: "8px 0 24px",
        display: "block",
      }}
    />
  ),
};

export function CustomMDX(props: Omit<MDXRemoteProps, "components">) {
  return <MDXRemote {...props} components={components} />;
}
