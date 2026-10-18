import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToHashElement = () => {
  const { pathname, hash } = useLocation();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    const routeChanged = previousPathname.current !== pathname;
    previousPathname.current = pathname;

    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Smooth scroll to the section
        element.scrollIntoView({
          behavior: routeChanged ? "instant" : "smooth",
          block: "start",
        });
      }
    } else {
      // New page starts at the top instantly; same-page nav scrolls smoothly
      window.scrollTo({
        top: 0,
        behavior: routeChanged ? "instant" : "smooth",
      });
    }
  }, [pathname, hash]);

  return null;
};
