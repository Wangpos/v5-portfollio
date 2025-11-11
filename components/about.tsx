"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold mb-12 text-center text-white"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8 lg:p-12"
        >
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            I'm currently pursuing a Bachelor's in Software Engineering at the
            College of Science and Technology. My major focuses on Artificial
            Intelligence — including Deep Learning, Machine Learning, and Data
            Analysis. I love building human-centered intelligent systems.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            My passion lies at the intersection of AI and software engineering,
            where I aim to create innovative solutions that make a meaningful
            impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
