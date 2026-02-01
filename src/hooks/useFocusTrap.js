import { useEffect, useRef, useCallback } from "react";

/**
 * Hook to trap focus within a container element
 * Useful for modals, dialogs, and menus
 * @param {boolean} isActive - Whether the focus trap is active
 * @param {object} options - Configuration options
 */
export const useFocusTrap = (isActive, options = {}) => {
  const {
    onEscape = null,
    restoreFocus = true,
    autoFocus = true,
  } = options;

  const containerRef = useRef(null);
  const previousActiveElement = useRef(null);

  // Get all focusable elements within the container
  const getFocusableElements = useCallback(() => {
    if (!containerRef.current) return [];

    const focusableSelectors = [
      "a[href]",
      "button:not([disabled])",
      "textarea:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
    ].join(", ");

    return Array.from(
      containerRef.current.querySelectorAll(focusableSelectors)
    ).filter((el) => {
      // Filter out hidden elements
      return (
        el.offsetParent !== null &&
        getComputedStyle(el).visibility !== "hidden"
      );
    });
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (event) => {
      if (!isActive) return;

      // Handle Escape key
      if (event.key === "Escape" && onEscape) {
        event.preventDefault();
        onEscape();
        return;
      }

      // Handle Tab key for focus trapping
      if (event.key === "Tab") {
        const focusableElements = getFocusableElements();
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        // Shift + Tab (backwards)
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        }
        // Tab (forwards)
        else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    },
    [isActive, onEscape, getFocusableElements]
  );

  // Set up focus trap when activated
  useEffect(() => {
    if (isActive) {
      // Store currently focused element
      previousActiveElement.current = document.activeElement;

      // Auto-focus first focusable element
      if (autoFocus) {
        const focusableElements = getFocusableElements();
        if (focusableElements.length > 0) {
          // Small delay to ensure DOM is ready
          setTimeout(() => {
            focusableElements[0].focus();
          }, 10);
        }
      }

      // Add keyboard listener
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);

        // Restore focus when trap is deactivated
        if (restoreFocus && previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      };
    }
  }, [isActive, autoFocus, restoreFocus, getFocusableElements, handleKeyDown]);

  return containerRef;
};

/**
 * Hook to handle keyboard navigation within a list/menu
 * Supports arrow key navigation
 * @param {boolean} isActive - Whether the menu is open
 * @param {object} options - Configuration options
 */
export const useMenuKeyboard = (isActive, options = {}) => {
  const {
    onEscape = null,
    onSelect = null,
    itemSelector = '[role="menuitem"]',
    orientation = "vertical", // "vertical" or "horizontal"
  } = options;

  const menuRef = useRef(null);

  const handleKeyDown = useCallback(
    (event) => {
      if (!isActive || !menuRef.current) return;

      const items = Array.from(
        menuRef.current.querySelectorAll(itemSelector)
      ).filter((el) => !el.disabled && el.offsetParent !== null);

      if (items.length === 0) return;

      const currentIndex = items.indexOf(document.activeElement);

      const nextKey = orientation === "vertical" ? "ArrowDown" : "ArrowRight";
      const prevKey = orientation === "vertical" ? "ArrowUp" : "ArrowLeft";

      switch (event.key) {
        case "Escape":
          event.preventDefault();
          if (onEscape) onEscape();
          break;

        case nextKey:
          event.preventDefault();
          if (currentIndex < items.length - 1) {
            items[currentIndex + 1].focus();
          } else {
            items[0].focus(); // Wrap to first
          }
          break;

        case prevKey:
          event.preventDefault();
          if (currentIndex > 0) {
            items[currentIndex - 1].focus();
          } else {
            items[items.length - 1].focus(); // Wrap to last
          }
          break;

        case "Home":
          event.preventDefault();
          items[0].focus();
          break;

        case "End":
          event.preventDefault();
          items[items.length - 1].focus();
          break;

        case "Enter":
        case " ":
          event.preventDefault();
          if (onSelect && currentIndex >= 0) {
            onSelect(items[currentIndex], currentIndex);
          }
          break;

        default:
          break;
      }
    },
    [isActive, itemSelector, orientation, onEscape, onSelect]
  );

  useEffect(() => {
    if (isActive) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isActive, handleKeyDown]);

  return menuRef;
};
