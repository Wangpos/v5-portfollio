"use client";

import { motion } from "framer-motion";
import { title } from "process";

const Experience = () => {
  const experiences = [
    {
      title: "Intern at Bhutan NDI",
      period: "2024",
      description:
        "Worked on mobile and web app design, development, and implementation",
      icon: "💼",
    },
    {
      title: "RUB Business Idea Competition",
      period: "2023-2024",
      description:
        "Gedu/ Innovation Bootcamp (Center For Business And Entrepreneurship Development): Developed web applications using Figma and offered technical support during the bootcamp, gaining experience in entrepreneurship and collaborative project work.",
      icon: "🚀",
    },

  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold mb-12 text-center text-white"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="border-l-2 border-primary pl-8 relative"
            >
              <div className="absolute -left-4 top-0 w-6 h-6 rounded-full bg-primary" />
              <p className="text-primary font-semibold">{exp.period}</p>
              <h3 className="text-2xl font-bold text-white mt-2">
                {exp.title}
              </h3>
              <p className="text-foreground/70 mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
