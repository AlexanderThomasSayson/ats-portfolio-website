import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useEffect, useLayoutEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Resume", to: "/#resume" },
  { label: "Contact", to: "/contact" },
];

// Home-page sections highlighted by scroll position (anything above them is Home)
const SPY_SECTIONS = ["about", "resume"];
// Tab horizontal padding (px-2) and gap below the label; keep in sync with the tab classes
const TAB_PADDING_X = 8;
const UNDERLINE_GAP = 2;
const BOTTOM_TOLERANCE_PX = 4;
// How long a click-initiated smooth scroll may run before scroll-spy takes over again
const SCROLL_LOCK_MS = 1000;

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { pathname, hash } = useLocation();
  const [worksOpen, setWorksOpen] = useState(false);
  const dropdownRef = useRef(null);
  const desktopNavRef = useRef(null);
  const tabRefs = useRef({});
  const [underline, setUnderline] = useState(null);
  const [spy, setSpy] = useState(() =>
    SPY_SECTIONS.includes(hash.slice(1)) ? hash.slice(1) : null
  );
  const spyLockedRef = useRef(false);

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

  // On the home page the active tab follows the section in view, not just the URL
  useEffect(() => {
    if (pathname !== "/") return;

    const sync = () => {
      const line = window.innerHeight * 0.4;
      let current = null;
      for (const id of SPY_SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      // The last section is short, so its top may never reach the line before
      // the page runs out of scroll; treat the page bottom as being in it
      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - BOTTOM_TOLERANCE_PX;
      if (atBottom) current = SPY_SECTIONS[SPY_SECTIONS.length - 1];
      setSpy(current);
    };

    // A nav click starts a smooth scroll: trust the URL until it settles so the
    // underline doesn't hop across the sections it passes
    const target = hash.slice(1);
    setSpy(SPY_SECTIONS.includes(target) ? target : null);
    spyLockedRef.current = true;

    let timer;
    const unlock = () => {
      clearTimeout(timer);
      spyLockedRef.current = false;
      sync();
    };
    timer = setTimeout(unlock, SCROLL_LOCK_MS);

    const onScroll = () => {
      if (!spyLockedRef.current) sync();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scrollend", unlock);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scrollend", unlock);
    };
  }, [pathname, hash]);

  const isLinkActive = (to) => {
    if (pathname !== "/") return pathname === to;
    if (to === "/") return spy === null;
    return to.startsWith("/#") && spy === to.slice(2);
  };
  const isWorksActive = pathname.startsWith("/projects");
  const activeTab = isWorksActive
    ? "Works"
    : navLinks.find(({ to }) => isLinkActive(to))?.label;

  // Position the underline from viewport rects (scroll-independent), so it only
  // ever moves horizontally between tabs
  useLayoutEffect(() => {
    const nav = desktopNavRef.current;
    const measure = () => {
      const tab = tabRefs.current[activeTab];
      if (!tab || !nav || tab.offsetParent === null) {
        setUnderline(null);
        return;
      }
      const t = tab.getBoundingClientRect();
      const n = nav.getBoundingClientRect();
      setUnderline({
        x: t.left - n.left + TAB_PADDING_X,
        width: t.width - TAB_PADDING_X * 2,
        top: t.bottom - n.top + UNDERLINE_GAP,
      });
    };
    measure();
    window.addEventListener("resize", measure);
    // Tab widths change when web fonts load or the nav reflows
    const observer = new ResizeObserver(measure);
    if (nav) observer.observe(nav);
    document.fonts?.ready.then(measure);
    return () => {
      window.removeEventListener("resize", measure);
      observer.disconnect();
    };
  }, [activeTab]);

  const works = [
    { title: "Circle K LIFT", link: "/projects/circlek" },
    { title: "Yamaha DND", link: "/projects/yamaha" },
    { title: "Air Event Gala", link: "/projects/airevent" },
    { title: "Loyalty Point System", link: "/projects/payment" },
    { title: "Redyoos", link: "/projects/redyoos" },
    { title: "Finance Flow", link: "/projects/financeflow" },
    { title: "MTX Inventory System", link: "/projects/ecommerce" },
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
          <nav
            ref={desktopNavRef}
            className="hidden md:flex items-center space-x-8 font-medium relative"
            aria-label="Main navigation"
          >
            {navLinks.map(({ label, to }) => {
              const active = isLinkActive(to);
              return (
                <Link
                  key={label}
                  ref={(el) => {
                    tabRefs.current[label] = el;
                  }}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`relative transition-colors rounded-lg px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                    active ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              );
            })}

            {/* Works Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                ref={(el) => {
                  tabRefs.current.Works = el;
                }}
                onClick={() => setWorksOpen((prev) => !prev)}
                className={`relative flex items-center text-gray-300 hover:text-white transition-colors rounded-lg px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                  worksOpen || isWorksActive ? "text-white" : ""
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

            {/* Active tab underline */}
            {underline && (
              <motion.span
                className="absolute left-0 h-0.5 rounded-full bg-white pointer-events-none"
                style={{ top: underline.top }}
                initial={false}
                animate={{ x: underline.x, width: underline.width }}
                transition={{ type: "spring", stiffness: 500, damping: 40 }}
                aria-hidden="true"
              />
            )}
          </nav>
        </div>
      </div>
    </nav>
  );
};
