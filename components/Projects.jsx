'use client'

import { ArrowBigRight, ExternalLink } from "lucide-react";
import { Cedarville_Cursive } from "next/font/google";
import { motion } from "framer-motion";

const cedarville = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
});

const Projects = () => {
  const projectsData = [
    {
      title: "Think n Maker",
      img: "https://www.thinknmaker.com/theme_2/pix.png",
      description: "Creative platform for makers",
      category: "Tourism",
    },
    {
      title: "Seadeck",
      img: "https://seadeck.in/theme-1/upload/logo-nx1.png",
      description: "BnB Reservation platform",
      category: "Hotel & Tourism",
    },
    {
      title: "Andaman Akash",
      img: "https://andamanakash.com/themes-2/images/logo.png",
      description: "Tourism & travel booking",
      category: "Tourism",
    },
    {
      title: "Andaman Bliss",
      img: "https://andamanbliss.com/site/img/logo.png",
      description: "travel agency management system",
      category: "Tourism",
    },
    {
      title: "Island Wonders",
      img: "https://islandswonder.com/assets/img/home/900ba028c5d27653.png",
      description: "Island attractions platform",
      category: "Tourism",
    },
    {
      title: "MCM Building Solutions",
      img: null,
      description: "Enterprise inventory management",
      category: "Enterprise",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="group relative glass rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-400/50 transition-all cursor-pointer hover:shadow-lg hover:shadow-blue-500/20"
          >
            {/* Project Card */}
            <div className="relative h-48 sm:h-56 overflow-hidden">
              {/* Background */}
              {project.img ? (
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <span className="text-3xl opacity-20">
                    {project.title.charAt(0)}
                  </span>
                </div>
              )}

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 flex flex-col justify-end p-4 z-10"
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2">
                    {project.category}
                  </p>
                  <p className="text-sm text-gray-300">{project.description}</p>
                </motion.div>
              </motion.div>

              {/* Hover Icon */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-blue-500/80 flex items-center justify-center z-20 backdrop-blur-sm"
              >
                <ExternalLink size={20} className="text-white" />
              </motion.div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2 group-hover:gradient-text transition-all">
                {project.title}
              </h3>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  React
                </span>
                <span className="text-xs px-2 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Laravel
                </span>
              </div>

              <motion.a
                href="#"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors group"
              >
                View Case Study
                <motion.div
                  whileHover={{ x: 3 }}
                  className="w-4 h-4"
                >
                  <ArrowBigRight size={16} />
                </motion.div>
              </motion.a>
            </div>

            {/* Corner gradient */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl -z-10 group-hover:from-blue-500/20 transition-all" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
