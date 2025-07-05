import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
  { label: "Works", href: "#works", icon: <ArrowDropDownIcon /> },
];

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
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
      <div className="flex flex-col items-center mt-12">
        {menuItems.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-white my-4 flex items-center gap-1
              transform transition-transform duration-300
              ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }
            `}
          >
            {label} {icon && icon}
          </a>
        ))}
      </div>
    </div>
  );
};
