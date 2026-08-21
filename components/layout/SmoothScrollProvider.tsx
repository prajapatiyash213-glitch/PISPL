"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Respect the user's motion preference: skip Lenis entirely and let
    // native scrolling take over. GSAP animations still respect
    // prefers-reduced-motion via the CSS override in globals.css.
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      touchMultiplier: 1.1,
    });
    lenisRef.current = lenis;

    // Keep GSAP ScrollTrigger in sync with Lenis' virtual scroll.
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Smooth scroll to hash on initial load
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          lenis.scrollTo(el, { offset: -72, duration: 1.2 });
        }, 200);
      }
    }

    // Let in-page anchor links (nav, CTAs) use Lenis' smooth scrollTo.
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a") as HTMLAnchorElement | null;
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      const hasHash = href.includes("#");
      if (!hasHash) return;

      const [path, id] = href.split("#");
      if (!id || id === "") return;

      const currentPath = window.location.pathname;
      const isCurrentPage =
        path === "" ||
        path === currentPath ||
        (path === "/" && currentPath === "/");

      if (isCurrentPage) {
        const el = document.getElementById(id);
        if (!el) return;
        e.preventDefault();
        lenis.scrollTo(el, { offset: -72, duration: 1.2 });
      }
    };
    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <>{children}</>;
}
