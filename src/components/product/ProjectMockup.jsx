import { motion } from "framer-motion";
import mockupSizes from "../../data/mockupSizes.json";

// Pre-rendered floating device mockup (the screenshot is baked into the image).
// The float is a CSS animation so it stays off the JS main thread.
export const ProjectMockup = ({ title, src, variants }) => {
  const size = mockupSizes[src];
  if (!size) return null;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mx-auto relative w-[95%] max-w-[1000px] flex justify-center"
      role="img"
      aria-label={`${title} application mockup`}
    >
      <img
        src={src}
        alt=""
        width={size.width}
        height={size.height}
        loading="lazy"
        decoding="async"
        draggable="false"
        className="w-auto max-w-full max-h-[75vh] select-none animate-float motion-reduce:animate-none"
      />
    </motion.div>
  );
};
