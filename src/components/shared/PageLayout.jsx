import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Navbar } from "../navbar/Navbar";
import { MobileMenu } from "../navbar/MobileMenu";
import { useReducedMotion } from "../../hooks";

export const PageLayout = ({ children, menuOpen, setMenuOpen, title }) => {
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Skip Link */}
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>

      <header>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </header>

      {/* Back Navigation */}
      <nav className="pt-20 px-6 max-w-6xl mx-auto" aria-label="Page navigation">
        <motion.button
          initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-8 group rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Go back to previous page"
        >
          <ArrowBackIcon className="text-xl group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
          <span className="text-sm font-medium">Back</span>
        </motion.button>
      </nav>

      {/* Page Content */}
      <main id="main-content" className="px-6 pb-20 max-w-6xl mx-auto">
        {children}
      </main>
    </div>
  );
};
