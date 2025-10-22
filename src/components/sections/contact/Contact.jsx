import * as React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Typography from "@mui/material/Typography";

export const Contact = () => {
  const socials = [
    {
      name: "Facebook",
      icon: <FaFacebook size={28} />,
      url: "https://www.facebook.com/share/16ypcFSiyi/",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={28} />,
      url: "https://www.instagram.com/_alejandr.o_o?igsh=MXY2ODV6dGc2czVvZA==",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={28} />,
      url: "https://www.linkedin.com/in/alexander-thomas-sayson-7b0a6b330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={28} />,
      url: "https://github.com/AlexanderThomasSayson",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 2,
            background: "linear-gradient(to right, #ffffff, #cccccc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Let's Connect
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#ddd",
            maxWidth: "600px",
            mx: "auto",
            mb: 6,
          }}
        >
          I’d love to hear from you! Whether it’s a project idea, collaboration,
          or just to say hi — feel free to reach out through any of the
          platforms below.
        </Typography>

        <div className="flex gap-6 justify-center">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 hover:text-white transition-colors"
              title={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <Typography
          variant="body2"
          sx={{
            color: "#666",
            mt: 10,
            fontSize: "0.85rem",
          }}
        >
          © {new Date().getFullYear()} Alexander Thomas Sayson — All Rights
          Reserved.
        </Typography>
      </motion.div>
    </section>
  );
};
