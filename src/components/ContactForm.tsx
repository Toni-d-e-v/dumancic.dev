"use client";

import { contactEmail } from "@/content/site";

const inputStyle: React.CSSProperties = {
  background: "#fff",
  border: "1px solid rgba(14,14,14,0.12)",
  borderRadius: 12,
  padding: "14px 16px",
  // 16px prevents iOS Safari from auto-zooming on focus
  fontSize: 16,
  fontFamily: "var(--font-hanken), sans-serif",
  color: "#0E0E0E",
  outline: "none",
  width: "100%",
};

export function ContactForm() {
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget.elements as typeof e.currentTarget.elements & {
      name: HTMLInputElement;
      email: HTMLInputElement;
      details: HTMLTextAreaElement;
    };
    const name = f.name?.value || "";
    const email = f.email?.value || "";
    const details = f.details?.value || "";
    const subject = encodeURIComponent("New project inquiry — dumancic.dev");
    const body = encodeURIComponent(
      "From: " + name + " (" + email + ")\n\n" + details,
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={submit}
      style={{
        background: "#F4F2EE",
        borderRadius: 24,
        padding: "clamp(26px,3vw,40px)",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        boxShadow: "0 24px 50px -20px rgba(110,10,0,0.55)",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(26px,3vw,38px)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          margin: "0 0 8px",
          color: "#0E0E0E",
        }}
      >
        Have a project in mind?
      </h2>
      <input name="name" placeholder="First name" style={inputStyle} />
      <input name="email" type="email" placeholder="Email" style={inputStyle} />
      <textarea
        name="details"
        placeholder="Project details"
        rows={4}
        style={{ ...inputStyle, resize: "vertical" }}
      />
      <button
        type="submit"
        className="dd-btn dd-btn-accent"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in srgb, var(--accent) 76%, #fff), var(--accent))",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          fontWeight: 600,
          fontSize: 16,
          padding: 16,
          minHeight: 50,
          borderRadius: 999,
          fontFamily: "var(--font-hanken), sans-serif",
          marginTop: 4,
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.4), 0 10px 24px -10px rgba(0,0,0,0.5)",
        }}
      >
        Send request
      </button>
      <span style={{ fontSize: 12, color: "#8C8881", textAlign: "center" }}>
        Opens your mail app · or write me at {contactEmail}
      </span>
    </form>
  );
}
