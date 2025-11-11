"use client";

import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "JavaScript",
    "React",
    "Python",
    "Machine Learning",
    "Deep Learning",
    "AI",
    "DevOps",
    "Testing",
    "Web Development",
    "Data Analysis",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold mb-12 text-center text-white"
        >
          Technical Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card/40 hover:bg-card/60 border border-border rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 cursor-default"
            >
              <p className="text-foreground font-semibold">{skill}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
