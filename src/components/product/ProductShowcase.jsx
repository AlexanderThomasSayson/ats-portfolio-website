import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { useReducedMotion } from "../../hooks";
import { ProjectMockup } from "./ProjectMockup";

export const ProductShowcase = () => {
  const prefersReducedMotion = useReducedMotion();

  // Reduced motion variants - simple fade only
  const reducedMotionVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.01 } },
  };

  // Full motion variants
  const deviceVariants = {
    laptopLeft: prefersReducedMotion
      ? reducedMotionVariant
      : {
          hidden: { x: -200, opacity: 0, scale: 0.9 },
          visible: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8 },
          },
        },
    phoneRight: prefersReducedMotion
      ? reducedMotionVariant
      : {
          hidden: { x: 200, opacity: 0, scale: 0.9 },
          visible: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8 },
          },
        },
    laptopTop: prefersReducedMotion
      ? reducedMotionVariant
      : {
          hidden: { y: -200, opacity: 0, scale: 0.9 },
          visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8 },
          },
        },
    tabletBottom: prefersReducedMotion
      ? reducedMotionVariant
      : {
          hidden: { y: 200, opacity: 0, scale: 0.9 },
          visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8 },
          },
        },
  };

  // Entry direction per project; anything unlisted slides up from the bottom
  const entryVariants = {
    yamaha: deviceVariants.laptopLeft,
    payment: deviceVariants.phoneRight,
    financeflow: deviceVariants.laptopTop,
  };

  const getDescription = (id) => {
    switch (id) {
      case "yamaha":
        return (
          <>
            I contributed to the development of a centralized{" "}
            <span className="text-white font-semibold">
              ticketing and support platform
            </span>{" "}
            for{" "}
            <span className="text-red-500 font-semibold">
              Yamaha Philippines
            </span>
            , enhancing communication efficiency and streamlining issue tracking
            across its nationwide dealer network.
          </>
        );
      case "payment":
        return (
          <>
            Engineered a flexible and scalable backend{" "}
            <span className="text-white font-semibold">payment gateway </span>
            enabling seamless disbursement via PayPal, Tremendous, and other
            providers, with support for voucher redemption and two-way
            communication.
          </>
        );
      case "airevent":
        return (
          <>
            I played a key role in developing an engaging, user-friendly{" "}
            <span className="text-white font-semibold">
              event creation system
            </span>{" "}
            that enables users to easily design, customize, and manage
            interactive events with an intuitive drag-and-drop interface.
          </>
        );
      case "redyoos":
        return (
          <>
            Utilizes AI to determine the initial value of jewelry. Developed a
            two-way communication module and integrated a PayPal payment gateway
            to seamlessly process user orders.
          </>
        );
      case "financeflow":
        return (
          <>
            A personal finance management app that helps employees break free
            from the paycheck-to-paycheck cycle using smart budgeting rules and
            automated tax calculations.
          </>
        );
      case "ecommerce":
        return (
          <>
            I engineered a{" "}
            <span className="text-white font-semibold">
              full-stack e-commerce platform
            </span>{" "}
            designed for{" "}
            <span className="text-white font-semibold">
              scalability, security
            </span>
            , and a{" "}
            <span className="text-white font-semibold">
              seamless user experience
            </span>{" "}
            across all devices.
          </>
        );
      default:
        return null;
    }
  };

  const sections = projects.map((project) => ({
    id: project.id,
    slug: project.slug,
    title: project.title,
    description: getDescription(project.id),
    logo: project.logo,
    mockup: project.mockup,
  }));

  return (
    <section
      id="integration-showcase"
      className="flex flex-col items-center justify-center bg-gradient-to-b from-black via-neutral-950 to-black text-white overflow-hidden"
    >
      {sections.map((section) => (
        <div
          key={section.id}
          className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-20 sm:px-8 md:px-12"
        >
          {/* Logo */}
          {section.logo && (
            <motion.img
              initial={
                prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.6 }}
              src={section.logo}
              alt={`${section.title} Logo`}
              draggable="false"
              className="w-24 sm:w-28 md:w-32 mb-4 drop-shadow-[0_4px_8px_rgba(255,255,255,0.1)]"
            />
          )}

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            {section.title}
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
            {section.description}
          </p>

          {/* View Details Link */}
          <Link
            to={`/projects/${section.slug}`}
            className="mb-12 sm:mb-16 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
            aria-label={`View case study for ${section.title}`}
          >
            View Case Study &rarr;
          </Link>

          <ProjectMockup
            title={section.title}
            src={section.mockup}
            variants={entryVariants[section.id] ?? deviceVariants.tabletBottom}
          />
        </div>
      ))}
    </section>
  );
};
