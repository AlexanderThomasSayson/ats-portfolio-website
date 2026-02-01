import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks";

export const SectionCard = ({
  title,
  children,
  icon,
  variant = "default",
  delay = 0,
}) => {
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    default: "bg-neutral-900",
    highlight: "bg-neutral-900 border border-neutral-800",
    dark: "bg-neutral-950",
  };

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: prefersReducedMotion ? 0.01 : 0.6, delay: prefersReducedMotion ? 0 : delay }}
      className={`${variants[variant]} rounded-xl p-6 md:p-8`}
    >
      {title && (
        <div className="flex items-center gap-3 mb-4">
          {icon && <span className="text-2xl" aria-hidden="true">{icon}</span>}
          <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
        </div>
      )}
      {children}
    </motion.div>
  );
};

export const ListCard = ({ items, delay = 0 }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.ul
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: prefersReducedMotion ? 0 : delay }}
      className="space-y-3"
      role="list"
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 0.4,
            delay: prefersReducedMotion ? 0 : delay + index * 0.1,
          }}
          className="flex items-start gap-3 text-gray-300"
        >
          <span className="text-green-400 mt-1" aria-hidden="true">&#x2713;</span>
          <span>{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export const TechBadge = ({ tech }) => {
  return (
    <span className="px-3 py-1 bg-neutral-800 text-gray-300 text-sm rounded-full border border-neutral-700 hover:border-neutral-600 transition-colors">
      {tech}
    </span>
  );
};
