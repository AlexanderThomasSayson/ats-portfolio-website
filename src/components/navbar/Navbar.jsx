import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ import Link

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <Link
            to="/"
            className="font-mono text-xl font-bold text-white"
            onClick={() => setMenuOpen(false)}
          >
            Alexander <span className="text-gray-500">Thomas</span> Sayson
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="w-7 h-5 relative z-40 text-white md:hidden"
            aria-label="Toggle menu"
          >
            <MenuIcon />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/#about" }, // optional: keep internal hash scrolling
              { label: "Resume", to: "/#resume" },
              {
                label: "Works",
                to: "/#works",
                icon: <ArrowDropDownIcon className="ml-1" />,
              },
              { label: "Contact", to: "/contact" }, // ✅ navigate to Contact page
            ].map(({ label, to, icon }) => (
              <Link
                key={label}
                to={to}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors flex items-center"
              >
                {label} {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
