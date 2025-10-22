import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { label: "Home", to: "/#home" },
  { label: "About", to: "/#about" },
  { label: "Resume", to: "/#resume" },
  { label: "Works", to: "/#works" },
  { label: "Contact", to: "/contact" }, // ✅ now navigates to separate page
];

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation();

  const handleClick = (to) => {
    setMenuOpen(false);

    // If it’s a hash link (like /#about)
    if (to.includes("#")) {
      const [path, hash] = to.split("#");

      // Navigate to root if currently on another route (like /contact)
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

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.9)] backdrop-blur-lg z-40 flex flex-col items-center justify-center
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
      <div className="flex flex-col items-center mt-12 space-y-4">
        {menuItems.map(({ label, to, icon }) => {
          const isContact = to === "/contact";
          return isContact ? (
            <Link
              key={label}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={`text-2xl font-semibold text-white flex items-center gap-1 transition-transform duration-300
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
            >
              {label} {icon}
            </Link>
          ) : (
            <button
              key={label}
              onClick={() => handleClick(to)}
              className={`text-2xl font-semibold text-white flex items-center gap-1 transition-transform duration-300
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
            >
              {label} {icon}
            </button>
          );
        })}
      </div>
    </div>
  );
};
