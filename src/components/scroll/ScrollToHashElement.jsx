import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToHashElement = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Smooth scroll to the section
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Scroll to top when no hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return null;
};
