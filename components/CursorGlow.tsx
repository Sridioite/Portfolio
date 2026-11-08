"use client";

import { useEffect, useRef } from "react";

/**
 * CursorGlow
 *
 * A premium spotlight effect that follows the cursor across the entire page.
 * Uses requestAnimationFrame + linear interpolation (lerp) for smooth, fluid
 * trailing movement — no React state updates on every mouse move.
 *
 * Design:
 *  - Outer halo  : large, very soft diffused glow (matches --accent: #4ade80)
 *  - Inner core  : small, brighter center bloom
 *  - Intensifies when cursor is over [data-glow-hover] elements (project cards)
 *  - Disabled on touch/mobile devices
 *  - Respects prefers-reduced-motion
 */
export default function CursorGlow() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ── Guards ──────────────────────────────────────────────────────────────
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (prefersReduced || isTouch) return;

    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    // ── State ───────────────────────────────────────────────────────────────
    // Target position (raw mouse coords)
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;

    // Current rendered positions (lerped separately for trail effect)
    let outerX = targetX;
    let outerY = targetY;
    let innerX = targetX;
    let innerY = targetY;

    let rafId = 0;
    let isHovering = false; // over a [data-glow-hover] element
    let isVisible = false;

    // ── Lerp factor ─────────────────────────────────────────────────────────
    // Outer is slower → creates the trailing feel
    // Inner snaps faster → feels responsive
    const OUTER_LERP = 0.072;
    const INNER_LERP = 0.18;

    // ── CSS sizes & opacities ───────────────────────────────────────────────
    const OUTER_SIZE_DEFAULT   = 600;
    const OUTER_SIZE_HOVER     = 750;
    const INNER_SIZE_DEFAULT   = 160;
    const INNER_SIZE_HOVER     = 220;

    const OUTER_OPACITY_DEFAULT = 1;
    const INNER_OPACITY_DEFAULT = 1;

    // ── Show on first move ──────────────────────────────────────────────────
    const show = () => {
      if (!isVisible) {
        outer.style.opacity = String(OUTER_OPACITY_DEFAULT);
        inner.style.opacity = String(INNER_OPACITY_DEFAULT);
        isVisible = true;
      }
    };

    // ── Mouse tracking ──────────────────────────────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      show();

      // Check if we're over a hover-target
      const el = document.elementFromPoint(e.clientX, e.clientY);
      isHovering = !!(el?.closest("[data-glow-hover]"));
    };

    const onMouseLeave = () => {
      outer.style.opacity = "0";
      inner.style.opacity = "0";
      isVisible = false;
    };

    // ── Animation loop ──────────────────────────────────────────────────────
    const tick = () => {
      // Lerp outer (slow, trails behind)
      outerX += (targetX - outerX) * OUTER_LERP;
      outerY += (targetY - outerY) * OUTER_LERP;

      // Lerp inner (faster)
      innerX += (targetX - innerX) * INNER_LERP;
      innerY += (targetY - innerY) * INNER_LERP;

      const outerSize = isHovering ? OUTER_SIZE_HOVER : OUTER_SIZE_DEFAULT;
      const innerSize = isHovering ? INNER_SIZE_HOVER : INNER_SIZE_DEFAULT;

      // Translate so the center of the element sits on the cursor
      const outerOffset = outerSize / 2;
      const innerOffset = innerSize / 2;

      outer.style.transform = `translate(${outerX - outerOffset}px, ${outerY - outerOffset}px)`;
      outer.style.width  = `${outerSize}px`;
      outer.style.height = `${outerSize}px`;

      inner.style.transform = `translate(${innerX - innerOffset}px, ${innerY - innerOffset}px)`;
      inner.style.width  = `${innerSize}px`;
      inner.style.height = `${innerSize}px`;

      rafId = requestAnimationFrame(tick);
    };

    // ── Mount ───────────────────────────────────────────────────────────────
    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/*
        Outer halo — large, very soft, slow trail
        Accent green at very low opacity: feels like ambient backlighting
      */}
      <div
        ref={outerRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 600,
          height: 600,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9,
          opacity: 0,
          willChange: "transform, width, height",
          transition: "opacity 0.6s ease, width 0.4s ease, height 0.4s ease",
          background:
            "radial-gradient(circle, rgba(74,222,128,0.07) 0%, rgba(74,222,128,0.04) 30%, rgba(74,222,128,0.015) 60%, transparent 75%)",
          filter: "blur(40px)",
        }}
      />

      {/*
        Inner core — tighter, slightly brighter, faster
        Creates the crisp focal point without being garish
      */}
      <div
        ref={innerRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 160,
          height: 160,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 10,
          opacity: 0,
          willChange: "transform, width, height",
          transition: "opacity 0.6s ease, width 0.4s ease, height 0.4s ease",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.035) 0%, rgba(74,222,128,0.10) 35%, rgba(74,222,128,0.04) 65%, transparent 80%)",
          filter: "blur(18px)",
          mixBlendMode: "screen",
        }}
      />
    </>
  );
}
