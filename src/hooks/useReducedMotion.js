import { useState, useEffect } from "react";

/**
 * Hook to detect user's reduced motion preference
 * Returns true if user prefers reduced motion
 */
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if window is available (SSR safety)
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes
    const handleChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } else {
      // Legacy browsers
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return prefersReducedMotion;
};

/**
 * Returns animation variants that respect reduced motion preference
 * @param {object} fullMotion - Full animation variants
 * @param {object} reducedMotion - Reduced/no animation variants (optional)
 */
export const getMotionVariants = (fullMotion, reducedMotion = null) => {
  const defaultReduced = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.01 } },
  };

  return {
    full: fullMotion,
    reduced: reducedMotion || defaultReduced,
  };
};

/**
 * Framer Motion transition that respects reduced motion
 */
export const getAccessibleTransition = (prefersReducedMotion, fullTransition) => {
  if (prefersReducedMotion) {
    return { duration: 0.01 };
  }
  return fullTransition;
};
