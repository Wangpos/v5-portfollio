"use client";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl lg:text-6xl font-bold mb-4 text-white"
          >
            Hi, I'm <span className="text-primary">Tshering Wangpo Dorji</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl lg:text-2xl text-foreground/80 mb-3"
          >
            Student • Software Engineer • Innovator
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base lg:text-lg text-foreground/60 mb-8 leading-relaxed"
          >
            I'm a passionate student pursuing a Bachelor's in Software
            Engineering at the College of Science and Technology. I specialize
            in AI, web development, and DevOps.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </motion.button>
        </motion.div>

        {/* Image placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl blur-3xl" />
            <img
              src="/hero.svg"
              alt="Developer working on code"
              className="relative w-full h-full object-cover rounded-xl shadow-2xl z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
