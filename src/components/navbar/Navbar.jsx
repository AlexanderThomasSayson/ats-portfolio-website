import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [worksOpen, setWorksOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setWorksOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const works = [
    { title: "Yamaha DND", link: "/projects/yamaha" },
    { title: "Air Event Gala", link: "/projects/airevent" },
    { title: "Payment Gateway", link: "/projects/payment" },
    { title: "Document Textractor", link: "/projects/textract" },
    { title: "E-commerce Platform", link: "/projects/ecommerce" },
    { title: "Redyoos", link: "/projects/redyoos" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16 relative">
          {/* Brand */}
          <Link
            to="/"
            className="font-mono text-xl font-bold text-white tracking-wide hover:text-gray-300 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            Alexander <span className="text-gray-300">Thomas</span> Sayson
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="w-10 h-10 relative z-40 text-white md:hidden flex items-center justify-center rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <MenuIcon />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-medium" aria-label="Main navigation">
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/#about" },
              { label: "Resume", to: "/#resume" },
              { label: "Contact", to: "/contact" },
            ].map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {label}
              </Link>
            ))}

            {/* Works Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setWorksOpen((prev) => !prev)}
                className={`flex items-center text-gray-300 hover:text-white transition-colors rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  worksOpen ? "text-white" : ""
                }`}
                aria-expanded={worksOpen}
                aria-haspopup="true"
                aria-controls="works-dropdown"
              >
                Works
                <ArrowDropDownIcon
                  className={`ml-1 transition-transform duration-300 ${
                    worksOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {/* Dropdown Content */}
              {worksOpen && (
                <div
                  id="works-dropdown"
                  role="menu"
                  className="absolute top-full mt-3 right-0 bg-[rgba(25,25,25,0.95)]
                             border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md
                             p-4 flex flex-col gap-2 w-[240px] animate-fadeIn z-50"
                >
                  {works.map((work) => (
                    <Link
                      key={work.title}
                      to={work.link}
                      role="menuitem"
                      onClick={() => setWorksOpen(false)}
                      className="text-gray-200 text-sm font-medium px-3 py-2 rounded-lg
                                 hover:bg-[rgba(255,255,255,0.08)] hover:text-white transition-all
                                 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-[rgba(255,255,255,0.08)]"
                    >
                      {work.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};
