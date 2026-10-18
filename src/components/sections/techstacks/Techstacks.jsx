import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "../../../hooks";

export const Techstacks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const prefersReducedMotion = useReducedMotion();

  const item = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.01 } },
      }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "tween",
            duration: 0.3,
            ease: "easeOut",
          },
        },
      };

  return (
    <section
      id="about"
      className="flex justify-center py-8 px-4"
      style={{ backgroundColor: "#1B1B1B" }}
    >
      <motion.div
        ref={ref}
        className="flex flex-col items-center gap-6 w-full max-w-4xl px-2 sm:px-4 py-16 text-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: prefersReducedMotion ? 0 : 0.15 }}
      >
        <motion.p
          className="text-2xl sm:text-4xl font-semibold text-gray-100"
          variants={item}
        >
          My experience and eagerness to learn every day help me grow and build
          the career path I&apos;ve chosen.
        </motion.p>
        <motion.figure className="flex flex-col gap-2" variants={item}>
          <blockquote className="text-xl sm:text-2xl italic text-neutral-300">
            &ldquo;Don&apos;t live with a broken window, and be a catalyst for
            change.&rdquo;
          </blockquote>
          <figcaption className="text-sm text-neutral-500">
            &mdash; Dave Thomas &amp; Andy Hunt, <cite>The Pragmatic Programmer</cite>
          </figcaption>
        </motion.figure>
        <motion.p
          className="text-lg sm:text-xl text-neutral-400"
          variants={item}
        >
          Let&apos;s explore the projects I&apos;ve completed and the ones I&apos;m
          currently working on!
        </motion.p>
      </motion.div>
    </section>
  );
};
