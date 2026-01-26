import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useLocation } from "react-router-dom";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation();
  const [worksOpen, setWorksOpen] = useState(false);

  const works = [
    { title: "Yamaha DND", link: "/projects/yamaha" },
    { title: "Air Event Gala", link: "/projects/airevent" },
    { title: "Payment Gateway", link: "/projects/payment" },
    { title: "Document Textractor", link: "/projects/textract" },
    { title: "E-commerce Platform", link: "/projects/ecommerce" },
    { title: "Redyoos", link: "/projects/redyoos" },
  ];

  const handleClick = (to) => {
    setMenuOpen(false);
    if (to.includes("#")) {
      const [path, hash] = to.split("#");
      if (location.pathname !== "/") {
        window.location.href = `/${hash ? `#${hash}` : ""}`;
      } else {
        const target = document.querySelector(`#${hash}`);
        if (target) {
          setTimeout(() => {
            target.scrollIntoView({ behavior: "smooth" });
          }, 200);
        }
      }
    }
  };

  const menuItems = [
    { label: "Home", to: "/#home" },
    { label: "About", to: "/#about" },
    { label: "Resume", to: "/#resume" },
    { label: "Works", to: "/#works", hasDropdown: true },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.95)] backdrop-blur-lg z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out overflow-hidden
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }
      `}
    >
      {/* Close button */}
      <button
        onClick={() => setMenuOpen(false)}
        className={`absolute top-6 right-6 text-white text-3xl transition-opacity transform duration-300
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
        `}
        aria-label="Close Menu"
      >
        <CloseIcon />
      </button>

      {/* Menu Links */}
      <div className="flex flex-col items-center mt-12 space-y-4 w-full max-w-sm">
        {menuItems.map(({ label, to, hasDropdown }) =>
          hasDropdown ? (
            <div key={label} className="w-full flex flex-col items-center">
              {/* Works Button */}
              <button
                onClick={() => setWorksOpen((prev) => !prev)}
                className="text-2xl font-semibold text-white flex items-center gap-1 transition-transform duration-300"
              >
                {label}
                <ArrowDropDownIcon
                  className={`ml-1 transition-transform duration-300 ${
                    worksOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Submenu (Works Items) */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out flex flex-col items-center ${
                  worksOpen ? "max-h-80 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                {works.map((work) => (
                  <Link
                    key={work.title}
                    to={work.link}
                    onClick={() => setMenuOpen(false)}
                    className="text-lg text-gray-300 hover:text-white transition-colors py-1"
                  >
                    {work.title}
                  </Link>
                ))}
              </div>
            </div>
          ) : to === "/contact" ? (
            <Link
              key={label}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-semibold text-white transition-transform duration-300"
            >
              {label}
            </Link>
          ) : (
            <button
              key={label}
              onClick={() => handleClick(to)}
              className="text-2xl font-semibold text-white transition-transform duration-300"
            >
              {label}
            </button>
          )
        )}
      </div>
    </div>
  );
};
