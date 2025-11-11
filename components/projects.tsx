"use client";

import { motion } from "framer-motion";
import { title } from "process";

const Projects = () => {
  const projects = [
    {
      title: "Instagram Clone",
      description: "Built with React and Firebase",
      tech: "React, Firebase",
      github: "https://github.com/Wangpos/final_instra.git",
    },
    {
      title: "Pokedex App",
      description: "Fetches Pokémon data using an external API",
      tech: "React, API Integration",
      github: "https://github.com/Wangpos/WEB101_CAP1.git",
    },
    {
      title: "Bubble Sheet Detection",
      description: "AI-based automatic grading system",
      tech: "Python, AI, Computer Vision",
      github: "https://github.com/Wangpos/bubblesheet.git",
    },
    {
      title: "Lane Detection",
      description: "Uses computer vision to detect lanes for the autonomus drive",
      tech: "python, open CV, and mp4 video",
      github: "https://github.com/Wangpos/Lane-Detection-With-Computer-Vision.git"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold mb-12 text-center text-white"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card/40 hover:bg-card/60 border border-border rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-foreground/70 mb-4">{project.description}</p>
              <p className="text-sm text-primary mb-6">{project.tech}</p>
              <a
                href={project.github}
                className="inline-block px-6 py-2 bg-primary/10 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold"
              >
                View on GitHub →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
