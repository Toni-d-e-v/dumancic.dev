"use client";

import { useEffect, useState } from "react";
import { announceIntroDone } from "@/lib/intro";

/**
 * Uvodna špica — logotip se otkrije wipe-om i presijava se, ispod ide hairline
 * indikator učitavanja. Ide jednom po sesiji: skripta u layoutu ubaci
 * <style id="dd-intro-on"> prije prvog paint-a pa se stranica ne vidi ispod;
 * bez tog stila je `.dd-intro` skrivena, tako da nema bljeska kod korisnika
 * koji je špicu već vidio.
 *
 * Animacije čekaju `load` — do tada se vrti samo neodređeni indikator, pa
 * špica ne odbroji svoje sekunde dok se stranica još učitava.
 */

const MAX_WAIT = 4000;
const EXIT_AT = 2500;
const EXIT_AT_REDUCED = 900;
const FADE = 650;
/** Koliko u fade špice pustiti ulazne animacije sadržaja — da se preklope. */
const HANDOFF = 260;

export default function IntroSplash() {
  const [phase, setPhase] = useState<"wait" | "playing" | "out">("wait");

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    let started = false;

    const begin = () => {
      if (started) return;
      started = true;
      setPhase("playing");

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      timers.push(
        setTimeout(
          () => {
            setPhase("out");
            // Sadržaj kreće usred fade-a pa se špica i ulazne animacije
            // preklope umjesto da se sadržaj zatekne već gotov ispod nje.
            timers.push(setTimeout(announceIntroDone, HANDOFF));
            timers.push(
              setTimeout(
                () => document.getElementById("dd-intro-on")?.remove(),
                FADE,
              ),
            );
          },
          reduced ? EXIT_AT_REDUCED : EXIT_AT,
        ),
      );
    };

    if (document.readyState === "complete") {
      begin();
    } else {
      window.addEventListener("load", begin, { once: true });
      // Ako neki resurs visi, špica ipak krene.
      timers.push(setTimeout(begin, MAX_WAIT));
    }

    return () => {
      window.removeEventListener("load", begin);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div
      className={`dd-intro${phase === "wait" ? "" : " is-playing"}${
        phase === "out" ? " is-out" : ""
      }`}
      aria-hidden="true"
    >
      <link rel="preload" as="image" href="/dumancic-logo.svg" />

      <div className="dd-intro-sign">
        <span className="dd-intro-logo" role="img" aria-label="dumancic.dev" />
        <span className="dd-intro-bar" />
      </div>
    </div>
  );
}
