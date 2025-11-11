"use client";

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold mb-12 text-center text-white"
        >
          Resume
        </motion.h2>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          href="https://drive.google.com/file/d/1luNnnK_U0jrgexgPDK9YBXvB-IeeusqS/view?usp=sharing"
          className="relative px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg font-semibold text-lg shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/60 transition-all duration-300 group overflow-hidden"
        >
          <span className="relative z-10">📄 View My Resume</span>
          <div className="absolute inset-0 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </motion.a>
      </div>
    </section> 
  );
};

export default Resume;
