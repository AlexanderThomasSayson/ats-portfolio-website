import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FaCode, FaServer, FaCloud, FaDatabase } from "react-icons/fa";

export const IntegrationDashboard = () => {
  const { scrollYProgress } = useScroll();
  const laptopRef = useRef(null);

  // Smooth scroll motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Scroll-based animations
  const rotateY = useTransform(smoothProgress, [0.6, 0.9], [0, 25]);
  const translateY = useTransform(smoothProgress, [0.6, 0.9], [150, 0]);
  const opacity = useTransform(smoothProgress, [0.55, 0.75], [0, 1]);
  const scale = useTransform(smoothProgress, [0.6, 0.9], [0.9, 1]);

  // Mouse tilt interaction
  const handleMouseMove = (e) => {
    const card = laptopRef.current;
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
    const card = laptopRef.current;
    if (card) {
      card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };

  return (
    <section
      id="integration"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden relative"
    >
      {/* Section Header */}
      <div className="text-center mb-16 z-10 px-4">
        <h2 className="text-5xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
          System Integration & Automation
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Backend services designed for scalability and reliability —
          integrating{" "}
          <span className="text-sky-400 font-semibold">payment gateways</span>,
          cloud APIs, and secure data pipelines to power seamless automation.
        </p>
      </div>

      {/* Floating 3D Laptop */}
      <motion.div
        ref={laptopRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          translateY,
          opacity,
          scale,
          perspective: 1000,
        }}
        className="relative w-[360px] sm:w-[460px] h-[280px] sm:h-[320px] mx-auto rounded-2xl 
        border-[6px] border-neutral-800 bg-neutral-950 shadow-[0_25px_60px_rgba(0,0,0,0.5)]
        transition-transform duration-300 ease-out"
      >
        {/* Laptop Screen */}
        <div className="absolute inset-[8px] rounded-2xl overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-950 flex flex-col py-8 px-6">
          {/* Screen header */}
          <div className="flex justify-between mb-6 text-sm text-gray-500">
            <span>API Dashboard</span>
            <span>v2.1</span>
          </div>

          {/* Icons inside laptop */}
          <div className="grid grid-cols-2 gap-6 justify-items-center text-center">
            <motion.div whileHover={{ scale: 1.1 }}>
              <FaServer className="text-4xl text-sky-400 mb-2" />
              <p className="text-xs text-gray-300">Spring Boot</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }}>
              <FaCloud className="text-4xl text-indigo-400 mb-2" />
              <p className="text-xs text-gray-300">AWS Integration</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }}>
              <FaCode className="text-4xl text-green-400 mb-2" />
              <p className="text-xs text-gray-300">API Gateway</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }}>
              <FaDatabase className="text-4xl text-amber-400 mb-2" />
              <p className="text-xs text-gray-300">Data Sync</p>
            </motion.div>
          </div>

          {/* Footer */}
          <div className="mt-auto text-center text-gray-500 text-xs pt-6">
            Deployed on AWS ECS with Secrets Manager Integration
          </div>
        </div>

        {/* Laptop Base */}
        <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[120%] h-6 rounded-b-2xl bg-gradient-to-b from-gray-800 to-black shadow-inner"></div>

        {/* Reflection */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-gray-600 text-sm"
      >
        Scroll to explore ↓
      </motion.div>
    </section>
  );
};
