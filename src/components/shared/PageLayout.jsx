import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Navbar } from "../navbar/Navbar";
import { MobileMenu } from "../navbar/MobileMenu";

export const PageLayout = ({ children, menuOpen, setMenuOpen, title }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Back Navigation */}
      <div className="pt-20 px-6 max-w-6xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowBackIcon className="text-xl group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back</span>
        </motion.button>
      </div>

      {/* Page Content */}
      <main className="px-6 pb-20 max-w-6xl mx-auto">{children}</main>
    </div>
  );
};
