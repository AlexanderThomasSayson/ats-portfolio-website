import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const ProductShowcase = () => {
  const deviceVariants = {
    laptopLeft: {
      hidden: { x: -200, opacity: 0, scale: 0.9 },
      visible: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.8 } },
    },
    phoneRight: {
      hidden: { x: 200, opacity: 0, scale: 0.9 },
      visible: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.8 } },
    },
    laptopTop: {
      hidden: { y: -200, opacity: 0, scale: 0.9 },
      visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.8 } },
    },
    tabletBottom: {
      hidden: { y: 200, opacity: 0, scale: 0.9 },
      visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.8 } },
    },
  };

  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const translateY = useTransform(smoothProgress, [0, 1], [100, 0]);
  const opacity = useTransform(smoothProgress, [0.1, 0.3], [0, 1]);
  const scale = useTransform(smoothProgress, [0.1, 0.3], [0.9, 1]);

  const useTilt = () => {
    const ref = useRef(null);
    const handleMouseMove = (e) => {
      const card = ref.current;
      if (!card || window.innerWidth < 768) return; // disable tilt on mobile
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 8;
      const rotateY = ((x - centerX) / centerX) * 8;
      card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    };
    const handleMouseLeave = () => {
      const card = ref.current;
      if (card) card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    };
    return { ref, handleMouseMove, handleMouseLeave };
  };

  const phoneTilt = useTilt();
  const tabletTilt = useTilt();
  const laptopTilt = useTilt();

  const sections = [
    {
      id: "yamaha",
      title: "Dealer Network Development",
      description: (
        <>
          I contributed to the development of a centralized{" "}
          <span className="text-white font-semibold">
            ticketing and support platform
          </span>{" "}
          for{" "}
          <span className="text-red-500 font-semibold">Yamaha Philippines</span>
          , enhancing communication efficiency and streamlining issue tracking
          across its nationwide dealer network.
        </>
      ),
      image: "/images/DND.png",
      ref: laptopTilt.ref,
      tilt: laptopTilt,
      size: "laptop",
    },
    {
      id: "payment",
      title: "Payment Gateway",
      description: (
        <>
          Engineered a flexible and scalable backend{" "}
          <span className="text-white font-semibold">payment gateway</span> for
          seamless transactions — send payouts via PayPal, Tremendous, and more.
        </>
      ),
      image: "/images/payment.png",
      ref: phoneTilt.ref,
      tilt: phoneTilt,
      size: "phone",
    },
    {
      id: "textract",
      title: "Document and Text Extractor",
      description: (
        <>
          I created a{" "}
          <span className="text-white font-semibold">
            text extraction system
          </span>{" "}
          engineered to automate text detection around receipts and documents
          using OCR.
        </>
      ),
      image: "/images/textract-v2.png",
      ref: laptopTilt.ref,
      tilt: laptopTilt,
      size: "laptop",
    },
    {
      id: "ecommerce",
      title: "E-commerce Fullstack",
      description: (
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
      ),
      image: "/images/ats-e-commerce.png",
      ref: tabletTilt.ref,
      tilt: tabletTilt,
      size: "tablet",
    },
  ];

  const renderDevice = (section) => {
    const baseClasses =
      "mx-auto relative transition-transform duration-300 ease-out border-neutral-800 bg-neutral-950 shadow-[0_25px_80px_rgba(0,0,0,0.6)]";

    // Determine variant based on device & order
    let variant;
    if (section.id === "yamaha") variant = deviceVariants.laptopLeft;
    else if (section.id === "payment") variant = deviceVariants.phoneRight;
    else if (section.id === "textract") variant = deviceVariants.laptopTop;
    else if (section.id === "ecommerce") variant = deviceVariants.tabletBottom;

    const commonProps = {
      ref: section.ref,
      onMouseMove: section.tilt.handleMouseMove,
      onMouseLeave: section.tilt.handleMouseLeave,
      variants: variant,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.3 },
      className: baseClasses,
    };

    switch (section.size) {
      case "phone":
        return (
          <motion.div
            {...commonProps}
            className={`${commonProps.className} w-[80%] max-w-[340px] aspect-[9/19] rounded-[3rem] border-[6px]`}
          >
            <div className="absolute inset-[8px] rounded-[2.6rem] overflow-hidden bg-black">
              <img
                src={section.image}
                alt={section.title}
                draggable="false"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-2 bg-gray-700 rounded-full" />
          </motion.div>
        );
      case "laptop":
        return (
          <motion.div
            {...commonProps}
            className={`${commonProps.className} w-[90%] max-w-[900px] aspect-[16/9] rounded-3xl border-[6px]`}
          >
            <div className="absolute inset-[10px] rounded-3xl overflow-hidden bg-black">
              <img
                src={section.image}
                alt={section.title}
                draggable="false"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[130%] h-6 rounded-b-3xl bg-gradient-to-b from-gray-800 to-black" />
          </motion.div>
        );
      case "tablet":
        return (
          <motion.div
            {...commonProps}
            className={`${commonProps.className} w-[90%] max-w-[1100px] aspect-[4/3] rounded-[2.5rem] border-[8px]`}
          >
            <div className="absolute inset-[10px] rounded-[2rem] overflow-hidden bg-black">
              <img
                src={section.image}
                alt={section.title}
                draggable="false"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-3 h-3 bg-neutral-700 rounded-full" />
          </motion.div>
        );
      default:
        return null;
    }
  };

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
          {/* ✅ Show Yamaha logo only for the Dealer Network section */}
          {section.id === "yamaha" && (
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              src="/images/yamaha.png"
              alt="Yamaha Logo"
              draggable="false"
              className="w-24 sm:w-28 md:w-32 mb-4 drop-shadow-[0_4px_8px_rgba(255,255,255,0.1)]"
            />
          )}

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            {section.title}
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-12 sm:mb-16">
            {section.description}
          </p>

          {renderDevice(section)}
        </div>
      ))}
    </section>
  );
};
