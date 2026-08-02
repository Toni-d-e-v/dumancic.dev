/**
 * Mali most između uvodne špice i ulaznih animacija sadržaja.
 *
 * Dok špica svira, `<style id="dd-intro-on">` stoji u <head>-u. Reveal blokovi
 * koji su tada već u viewportu ne smiju odraditi svoju animaciju ispod špice —
 * čekaju `dd:intro-done`, koji špica pošalje pri izlazu.
 */

export const INTRO_DONE_EVENT = "dd:intro-done";

/** Špica je na ekranu (ili tek izlazi) i još nije pustila sadržaj. */
export function introActive() {
  return (
    typeof document !== "undefined" &&
    !!document.getElementById("dd-intro-on") &&
    !document.documentElement.classList.contains("dd-intro-done")
  );
}

/** Pozove `cb` kad špica pusti sadržaj — odmah ako špice nema. */
export function onIntroDone(cb: () => void) {
  if (typeof window === "undefined" || !introActive()) {
    cb();
    return () => {};
  }
  window.addEventListener(INTRO_DONE_EVENT, cb, { once: true });
  return () => window.removeEventListener(INTRO_DONE_EVENT, cb);
}

/** Zove samo špica. */
export function announceIntroDone() {
  document.documentElement.classList.add("dd-intro-done");
  window.dispatchEvent(new Event(INTRO_DONE_EVENT));
}
