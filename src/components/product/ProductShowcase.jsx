import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { RiMoneyDollarCircleFill, RiServerFill } from "react-icons/ri";
import { SiPaypal, SiVisa } from "react-icons/si";
import {
  FaCcMastercard,
  FaGift,
  FaServer,
  FaCloud,
  FaCode,
  FaDatabase,
} from "react-icons/fa";

export const ProductShowcase = () => {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Shared scroll transformations
  const translateY = useTransform(smoothProgress, [0, 1], [150, 0]);
  const opacity = useTransform(smoothProgress, [0.1, 0.3], [0, 1]);
  const scale = useTransform(smoothProgress, [0.1, 0.3], [0.9, 1]);

  // Helper for mouse tilt
  const useTilt = () => {
    const ref = useRef(null);

    const handleMouseMove = (e) => {
      const card = ref.current;
      if (!card) return;
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
  const laptopTilt = useTilt();

  return (
    <section
      id="integration-showcase"
      className="flex flex-col items-center justify-center bg-gradient-to-b from-black via-white-1000 to-black text-white overflow-hidden"
    >
      {/* LAPTOP SECTION */}
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <img src="images/yamaha.png" alt="ymph" className="flex w-100" />
        <h2 className="text-5xl font-extrabold mb-4 tracking-tight  bg-clip-text text-white">
          Dealer Network Development
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mb-20">
          I contributed to the development of a centralized{" "}
          <span className="text-white font-semibold">
            ticketing and support platform{" "}
          </span>
          for{" "}
          <span className="text-red-500 font-semibold">Yamaha Philippines</span>
          , engineered to enhance communication efficiency and streamline issue
          tracking across its nationwide dealer network.
        </p>

        <motion.div
          ref={laptopTilt.ref}
          onMouseMove={laptopTilt.handleMouseMove}
          onMouseLeave={laptopTilt.handleMouseLeave}
          style={{ translateY, opacity, scale, perspective: 1000 }}
          className="relative w-[500px] sm:w-[700px] lg:w-[900px] h-[320px] sm:h-[420px] lg:h-[520px] mx-auto 
      rounded-3xl border-[6px] border-neutral-800 bg-neutral-950 
      shadow-[0_25px_80px_rgba(0,0,0,0.6)] transition-transform duration-300 ease-out"
        >
          {/* Laptop Screen */}
          <div className="absolute inset-[10px] rounded-3xl overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-950 flex flex-col">
            <div className="flex-1 relative">
              <img
                src="/images/DND.png"
                alt="Integration Dashboard Preview"
                className="absolute inset-0 w-full h-full object-contain object-center 
    opacity-95 hover:opacity-100 transition-opacity duration-500 bg-black"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
            </div>
          </div>

          {/* Laptop Base */}
          <div className="absolute bottom-[-28px] left-1/2 -translate-x-1/2 w-[130%] h-8 rounded-b-3xl bg-gradient-to-b from-gray-800 to-black shadow-inner"></div>

          {/* Reflection overlay */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        </motion.div>
      </div>

      {/* PHONE SECTION */}
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-5xl font-extrabold mb-4 tracking-tight text-white">
          Payment Gateway
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mb-16">
          Engineered flexible and scalable backend{" "}
          <span className="text-white font-semibold">payment gateway</span> for
          a seamless transactions — send payouts via PayPal, Tremendous, and
          more.
        </p>

        <motion.div
          ref={phoneTilt.ref}
          onMouseMove={phoneTilt.handleMouseMove}
          onMouseLeave={phoneTilt.handleMouseLeave}
          style={{ translateY, opacity, scale, perspective: 1000 }}
          className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] mx-auto rounded-[3rem]
    border-[6px] border-neutral-800 bg-neutral-950 shadow-[0_25px_60px_rgba(0,0,0,0.5)]
    transition-transform duration-300 ease-out"
        >
          {/* Phone Screen */}
          <div className="absolute inset-[8px] rounded-[2.6rem] overflow-hidden bg-black flex items-center justify-center">
            <img
              src="/images/payment.png" // your image path
              alt="Payment Gateway"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-2 bg-gray-700 rounded-full" />
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        </motion.div>
      </div>

      {/* LAPTOP SECTION */}
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-5xl font-extrabold mb-4 tracking-tight  bg-clip-text text-white">
          Document and Text Extractor
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mb-20">
          I created a{" "}
          <span className="text-white font-semibold">
            text extraction system{" "}
          </span>
          engineered to automate text detection around receipts and other
          documents using OCR.
        </p>

        <motion.div
          ref={laptopTilt.ref}
          onMouseMove={laptopTilt.handleMouseMove}
          onMouseLeave={laptopTilt.handleMouseLeave}
          style={{ translateY, opacity, scale, perspective: 1000 }}
          className="relative w-[500px] sm:w-[700px] lg:w-[900px] h-[320px] sm:h-[420px] lg:h-[520px] mx-auto 
      rounded-3xl border-[6px] border-neutral-800 bg-neutral-950 
      shadow-[0_25px_80px_rgba(0,0,0,0.6)] transition-transform duration-300 ease-out"
        >
          {/* Laptop Screen */}
          <div className="absolute inset-[10px] rounded-3xl overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-950 flex flex-col">
            <div className="flex-1 relative">
              <img
                src="/images/textract-v2.png"
                alt="Integration Dashboard Preview"
                className="absolute inset-0 w-full h-full object-contain object-center 
    opacity-95 hover:opacity-100 transition-opacity duration-500 bg-black"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
            </div>
          </div>

          {/* Laptop Base */}
          <div className="absolute bottom-[-28px] left-1/2 -translate-x-1/2 w-[130%] h-8 rounded-b-3xl bg-gradient-to-b from-gray-800 to-black shadow-inner"></div>

          {/* Reflection overlay */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};
