import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useReducedMotion } from "../../hooks";

export const ImageGallery = ({ images, title }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const lightboxRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousActiveElement = useRef(null);

  const openLightbox = (index) => {
    previousActiveElement.current = document.activeElement;
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
    // Restore focus to the element that opened the lightbox
    if (previousActiveElement.current) {
      previousActiveElement.current.focus();
    }
  }, []);

  const goToPrevious = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    },
    [images.length]
  );

  const goToNext = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    },
    [images.length]
  );

  // Keyboard navigation and focus trap
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (event) => {
      switch (event.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
        case "Tab":
          // Focus trap - keep focus within lightbox
          const focusableElements = lightboxRef.current?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (!focusableElements || focusableElements.length === 0) return;

          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (event.shiftKey) {
            if (document.activeElement === firstElement) {
              event.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              event.preventDefault();
              firstElement.focus();
            }
          }
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Focus the close button when lightbox opens
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen, closeLightbox, goToPrevious, goToNext]);

  if (!images || images.length === 0) return null;

  // Animation variants respecting reduced motion
  const thumbnailVariants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
      };

  const lightboxVariants = prefersReducedMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      };

  const imageVariants = prefersReducedMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.9 },
      };

  return (
    <>
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" role="list" aria-label={`${title} screenshots`}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            variants={thumbnailVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: prefersReducedMotion ? 0 : index * 0.1 }}
            role="listitem"
          >
            <button
              onClick={() => openLightbox(index)}
              className="relative aspect-video bg-neutral-900 rounded-xl overflow-hidden cursor-pointer group w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
              aria-label={`View ${title} screenshot ${index + 1} of ${images.length} in fullscreen`}
            >
              <img
                src={image}
                alt={`${title} screenshot ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm font-medium">
                  Click to expand
                </span>
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            ref={lightboxRef}
            {...lightboxVariants}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.2 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} screenshot ${currentIndex + 1} of ${images.length}`}
          >
            {/* Close Button */}
            <button
              ref={closeButtonRef}
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Close fullscreen view"
            >
              <CloseIcon className="text-3xl" aria-hidden="true" />
            </button>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-3 rounded-full bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label="Previous image"
                >
                  <ChevronLeftIcon className="text-3xl" aria-hidden="true" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-3 rounded-full bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label="Next image"
                >
                  <ChevronRightIcon className="text-3xl" aria-hidden="true" />
                </button>
              </>
            )}

            {/* Image */}
            <motion.img
              key={currentIndex}
              {...imageVariants}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.2 }}
              src={images[currentIndex]}
              alt={`${title} screenshot ${currentIndex + 1} of ${images.length}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-black/50 px-3 py-1 rounded-full">
                <span aria-live="polite">
                  {currentIndex + 1} / {images.length}
                </span>
              </div>
            )}

            {/* Screen reader instructions */}
            <div className="sr-only" aria-live="polite">
              Use left and right arrow keys to navigate between images. Press Escape to close.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
