import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

export const Home = () => {
  const handleScrollToPortfolio = () => {
    const portfolioSection = document.getElementById("integration-showcase");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // Delay between children
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black text-white"
    >
      <motion.div
        className="text-center z-10 px-4 flex flex-col items-center max-w-2xl"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={item}>
          <Avatar
            alt="Alexander Thomas Sayson"
            src="/images/alexander.jpg"
            sx={{
              width: 160,
              height: 160,
              mb: 4,
              userSelect: "none", // prevent selection
              pointerEvents: "auto",
              "& img": {
                WebkitUserDrag: "none", // ✅ disables drag on the internal img
              },
            }}
          />
        </motion.div>

        <motion.div variants={item}>
          <Typography
            variant="h2"
            component="h1"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              background: "linear-gradient(to right, #ffffff, #cccccc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            I'm Alexander.
          </Typography>
        </motion.div>

        <motion.div variants={item}>
          <Typography
            variant="h5"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              background: "linear-gradient(to right, #ffffff, #cccccc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Software Development Engineer.
          </Typography>
        </motion.div>

        <motion.div variants={item}>
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: "#ddd",
              maxWidth: "600px",
              mt: 1.5,
            }}
          >
            This portfolio showcases my full-stack expertise in building
            scalable backends and responsive front-end interfaces.
          </Typography>
        </motion.div>

        <motion.div variants={item}>
          <Button
            variant="outlined"
            onClick={handleScrollToPortfolio}
            sx={{
              mt: 2.5,
              color: "#fff",
              borderColor: "#fff",
              "&:hover": {
                borderColor: "#ccc",
                color: "#ccc",
              },
            }}
          >
            Show Portfolio
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};
