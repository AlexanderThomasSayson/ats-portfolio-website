import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PageLayout } from "../shared/PageLayout";
import { SectionCard, ListCard, TechBadge } from "../shared/SectionCard";
import { ImageGallery } from "../shared/ImageGallery";
import { getProjectBySlug } from "../../data/projects";

export const ProjectDetailPage = ({ menuOpen, setMenuOpen }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  // Handle 404 for invalid slugs
  if (!project) {
    return (
      <PageLayout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              Project Not Found
            </h1>
            <p className="text-gray-400 mb-8">
              The project you're looking for doesn't exist.
            </p>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              Go Home
            </button>
          </motion.div>
        </div>
      </PageLayout>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <PageLayout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        {/* Header Section */}
        <motion.header variants={itemVariants} className="space-y-6">
          {/* Logo */}
          {project.logo && (
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={project.logo}
              alt={`${project.title} logo`}
              className="w-20 h-20 object-contain"
            />
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            {project.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
            <span className="px-3 py-1 bg-neutral-800 rounded-full">
              {project.role}
            </span>
            <span className="px-3 py-1 bg-neutral-800 rounded-full">
              {project.duration}
            </span>
            <span className="px-3 py-1 bg-neutral-800 rounded-full">
              {project.team}
            </span>
          </div>

          {/* Short Description */}
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            {project.shortDescription}
          </p>
        </motion.header>

        {/* Hero Image */}
        <motion.div
          variants={itemVariants}
          className="relative rounded-2xl overflow-hidden bg-neutral-900 aspect-video"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Technologies */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-xl font-bold text-white">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <TechBadge key={index} tech={tech} />
            ))}
          </div>
        </motion.div>

        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-6">
          <SectionCard title="The Problem" delay={0.1}>
            <p className="text-gray-300 leading-relaxed">{project.problem}</p>
          </SectionCard>

          <SectionCard title="The Solution" delay={0.2}>
            <p className="text-gray-300 leading-relaxed">{project.solution}</p>
          </SectionCard>
        </div>

        {/* Challenges */}
        <SectionCard title="Challenges Overcome" delay={0.3}>
          <ListCard items={project.challenges} />
        </SectionCard>

        {/* Outcomes */}
        <SectionCard
          title="Key Outcomes"
          variant="highlight"
          delay={0.4}
        >
          <ListCard items={project.outcomes} delay={0.1} />
        </SectionCard>

        {/* Screenshots Gallery */}
        {project.screenshots && project.screenshots.length > 0 && (
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Screenshots</h2>
            <ImageGallery images={project.screenshots} title={project.title} />
          </motion.div>
        )}

        {/* Back to Projects CTA */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center pt-8"
        >
          <button
            onClick={() => navigate("/#integration-showcase")}
            className="px-8 py-4 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-xl transition-colors"
          >
            View All Projects
          </button>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
};
