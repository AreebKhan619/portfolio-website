"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before animating (for light staggering). */
  delay?: number;
}

/**
 * The only animation primitive on the site: a subtle fade/slide-up when the
 * block scrolls into view.
 *
 * Reduced motion: the markup stays identical (no hydration mismatch); the
 * transition becomes instant, and a CSS rule in globals.css keeps
 * `[data-fade-in]` visible before hydration and when JS is disabled.
 */
export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      data-fade-in=""
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98], delay }
      }
    >
      {children}
    </motion.div>
  );
}
