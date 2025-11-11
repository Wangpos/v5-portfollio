"use client";

import { motion } from "framer-motion";

const Contact = () => {
  const socials = [
    { icon: "🐙", label: "GitHub", href: "#" }, 
    { icon: "💼", label: "LinkedIn", href: "#" },
    { icon: "✉️", label: "Email", href: "mailto:contact@example.com" },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold mb-12 text-center text-white"
        >
          Let's Connect
        </motion.h2>

        <div className="flex justify-center gap-8 mb-12">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.2, y: -5 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              href={social.href}
              className="text-4xl hover:text-primary transition-colors duration-300"
              title={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-foreground/60 text-sm"
        >
          <p>
            © 2025 Tshering Wangpo Dorji • Built with Next.js and Tailwind CSS
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
