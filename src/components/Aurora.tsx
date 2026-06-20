/**
 * Ambient background layer: several soft blobs that drift slowly behind a
 * card's content. Each instance is seeded, so every card gets its own unique
 * arrangement (positions / sizes / tints / timing) instead of one shared blob.
 *
 * Purely presentational — drop it in as the first child of a
 * `position: relative; overflow: hidden` container and keep the real content in
 * a `position: relative` wrapper so it layers on top. Motion is frozen for
 * users who prefer reduced motion via the global rule in globals.css.
 *
 *  - variant="dark"   → warm accent glow for the dark Services / Awards panels
 *  - variant="accent" → brighter glow tuned for the red Contact section
 *  - seed             → vary this per card to randomise the arrangement
 */
const TINTS: Record<"dark" | "accent", string[]> = {
  dark: [
    "rgba(232, 80, 46, 0.70)",
    "rgba(242, 107, 69, 0.50)",
    "rgba(190, 50, 25, 0.60)",
    "rgba(255, 140, 90, 0.42)",
  ],
  accent: [
    "rgba(255, 196, 156, 0.78)",
    "rgba(120, 12, 0, 0.70)",
    "rgba(255, 150, 110, 0.66)",
    "rgba(90, 8, 0, 0.70)",
  ],
};

/** Tiny deterministic PRNG (mulberry32) so server and client render the same. */
function makeRandom(seed: number) {
  let t = seed + 0x6d2b79f5;
  return () => {
    t += 0x6d2b79f5;
    let x = Math.imul(t ^ (t >>> 15), 1 | t);
    x ^= x + Math.imul(x ^ (x >>> 7), 61 | x);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}

export function Aurora({
  variant = "dark",
  seed = 0,
  count = 5,
}: {
  variant?: "dark" | "accent";
  seed?: number;
  count?: number;
}) {
  const rand = makeRandom(seed + 1);
  const tints = TINTS[variant];

  const blobs = Array.from({ length: count }, (_, i) => {
    const size = 40 + rand() * 34; // 40–74% of the card
    return {
      size,
      top: rand() * 95 - 25, // -25%–70%
      left: rand() * 95 - 25,
      tint: tints[i % tints.length],
      dur: 2.5 + rand() * 3, // 2.5–5.5s
      delay: -rand() * 4, // desync each blob
      dx: (rand() * 2 - 1) * 45, // -45%–45%
      dy: (rand() * 2 - 1) * 45,
      scale: 1.18 + rand() * 0.3, // 1.18–1.48 at mid-point
    };
  });

  return (
    <div className="dd-aurora" aria-hidden="true">
      {blobs.map((b, i) => (
        <span
          key={i}
          className="dd-aurora-blob"
          style={
            {
              width: `${b.size}%`,
              height: `${b.size}%`,
              top: `${b.top}%`,
              left: `${b.left}%`,
              background: `radial-gradient(circle, ${b.tint}, transparent 66%)`,
              animationDuration: `${b.dur}s`,
              animationDelay: `${b.delay}s`,
              "--dx": `${b.dx}%`,
              "--dy": `${b.dy}%`,
              "--bscale": b.scale,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
