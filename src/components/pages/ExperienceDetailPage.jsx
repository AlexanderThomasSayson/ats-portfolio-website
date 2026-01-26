import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageLayout } from "../shared/PageLayout";
import { SectionCard, ListCard, TechBadge } from "../shared/SectionCard";
import { getExperienceBySlug } from "../../data/experiences";
import { getProjectBySlug } from "../../data/projects";

export const ExperienceDetailPage = ({ menuOpen, setMenuOpen }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const experience = getExperienceBySlug(slug);

  // Handle 404 for invalid slugs
  if (!experience) {
    return (
      <PageLayout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              Experience Not Found
            </h1>
            <p className="text-gray-400 mb-8">
              The experience you're looking for doesn't exist.
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

  // Get related project if exists
  const relatedProject = experience.relatedProject
    ? getProjectBySlug(experience.relatedProject)
    : null;

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
          {/* Company */}
          <div className="text-gray-400 font-medium">{experience.company}</div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            {experience.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
            <span className="px-3 py-1 bg-neutral-800 rounded-full">
              {experience.role}
            </span>
            <span className="px-3 py-1 bg-neutral-800 rounded-full">
              {experience.duration}
            </span>
            <span className="px-3 py-1 bg-neutral-800 rounded-full">
              {experience.location}
            </span>
          </div>

          {/* Short Description */}
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            {experience.shortDescription}
          </p>
        </motion.header>

        {/* Technologies */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-xl font-bold text-white">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <TechBadge key={index} tech={tech} />
            ))}
          </div>
        </motion.div>

        {/* Responsibilities */}
        <SectionCard title="Key Responsibilities" delay={0.1}>
          <ListCard items={experience.responsibilities} />
        </SectionCard>

        {/* Achievements */}
        <SectionCard
          title="Achievements & Impact"
          variant="highlight"
          delay={0.2}
        >
          <ListCard items={experience.achievements} delay={0.1} />
        </SectionCard>

        {/* Highlights */}
        {experience.highlights && experience.highlights.length > 0 && (
          <SectionCard title="Notable Highlights" delay={0.3}>
            <ListCard items={experience.highlights} delay={0.1} />
          </SectionCard>
        )}

        {/* Related Project Card */}
        {relatedProject && (
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-white">Related Project</h2>
            <Link
              to={`/projects/${relatedProject.slug}`}
              className="block bg-neutral-900 hover:bg-neutral-800 rounded-xl p-6 transition-colors group"
            >
              <div className="flex items-center gap-6">
                {relatedProject.logo && (
                  <img
                    src={relatedProject.logo}
                    alt={relatedProject.title}
                    className="w-16 h-16 object-contain"
                  />
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-gray-200 transition-colors">
                    {relatedProject.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {relatedProject.shortDescription}
                  </p>
                </div>
                <div className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all">
                  &rarr;
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Back to Experiences CTA */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center pt-8"
        >
          <button
            onClick={() => navigate("/#about")}
            className="px-8 py-4 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-xl transition-colors"
          >
            View All Experiences
          </button>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
};
