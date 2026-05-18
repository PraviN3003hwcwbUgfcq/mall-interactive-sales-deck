import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Premium smooth scrolling.
 * - Long, soft easing curve (Apple-like inertia)
 * - Synced with rAF for Framer Motion useScroll
 * - Respects prefers-reduced-motion
 */
export function useLenis() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
      lerp: 0.085,
    });

    // Expose for debugging / future controls
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    let raf = 0;
    const tick = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
}
