import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = ""); // cleanup on unmount
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Alexander <span className="text-gray-500">Thomas</span> Sayson
          </a>

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
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Resume", href: "#resume" },
              { label: "Contact", href: "#contact" },
              {
                label: "Works",
                href: "#works",
                icon: <ArrowDropDownIcon className="ml-1" />,
              },
            ].map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                className="text-gray-300 hover:text-white transition-colors flex items-center"
              >
                {label} {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
