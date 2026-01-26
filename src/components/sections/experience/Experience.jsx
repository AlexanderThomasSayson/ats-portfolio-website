import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { experiences } from "../../../data/experiences";
import { useReducedMotion } from "../../../hooks";

export const Experience = () => {
  const prefersReducedMotion = useReducedMotion();

  // Animation variants for the cards with reduced motion support
  const cardVariants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.01 } },
      }
    : {
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        },
      };

  return (
    <section id="experience" className="flex justify-center py-10 px-4 bg-white">
      <div className="flex flex-col w-full max-w-6xl">
        {/* Header and Description */}
        <div className="flex flex-col items-center text-left mb-12">
          <h2 className="text-4xl font-semibold text-neutral-800 mb-4">
            I've worked across diverse
            <span className="text-black font-bold"> projects and domains</span>, solving
            real-world problems and driving impact.
          </h2>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Link to={`/experiences/${exp.slug}`} className="block h-full">
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    bgcolor: "#f9f9f9",
                    fontSize: "0.95rem",
                    color: "#333",
                    height: "100%",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      bgcolor: "#f0f0f0",
                      transform: "translateY(-4px)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontSize="18px"
                    sx={{ mb: 2 }}
                  >
                    {exp.shortDescription}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#666",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <span>{exp.company}</span>
                    <span>&bull;</span>
                    <span>{exp.duration}</span>
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#525252",
                      display: "block",
                      mt: 1,
                    }}
                  >
                    View details &rarr;
                  </Typography>
                </Box>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
