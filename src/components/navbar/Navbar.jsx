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
          {/* 🔹 Brand */}
          <Link
            to="/"
            className="font-mono text-xl font-bold text-white tracking-wide hover:text-gray-300 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Alexander <span className="text-gray-500">Thomas</span> Sayson
          </Link>

          {/* 🔹 Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="w-7 h-5 relative z-40 text-white md:hidden"
            aria-label="Toggle menu"
          >
            <MenuIcon />
          </button>

          {/* 🔹 Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-medium">
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
                className="text-gray-300 hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}

            {/* 🔹 Works Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setWorksOpen((prev) => !prev)}
                className={`flex items-center text-gray-300 hover:text-white transition-colors ${
                  worksOpen ? "text-white" : ""
                }`}
              >
                Works
                <ArrowDropDownIcon
                  className={`ml-1 transition-transform duration-300 ${
                    worksOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* 🔸 Dropdown Content */}
              {worksOpen && (
                <div
                  className="absolute top-full mt-3 right-0 bg-[rgba(25,25,25,0.95)] 
                             border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md
                             p-4 flex flex-col gap-2 w-[240px] animate-fadeIn z-50"
                >
                  {works.map((work) => (
                    <Link
                      key={work.title}
                      to={work.link}
                      onClick={() => setWorksOpen(false)}
                      className="text-gray-200 text-sm font-medium px-3 py-2 rounded-lg 
                                 hover:bg-[rgba(255,255,255,0.08)] hover:text-white transition-all"
                    >
                      {work.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
