"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-white/5 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col items-center md:items-start"
        >
          <a href="#" className="text-xl font-bold mb-2">
            Sachin<span className="text-secondary">.</span>
          </a>
          <p className="text-white/40 text-sm">
            © 2026 Sachin Tiwari. All rights reserved.
          </p>
        </motion.div>

        <div className="flex gap-6">
          {[
            { icon: Github, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Mail, href: "mailto:sachin11p12@gmail.com" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              whileHover={{ y: -3, textShadow: "0 0 8px rgb(255,255,255)" }}
              className="text-white/60 hover:text-white transition-all"
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </div>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>

      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </footer>
  );
}
