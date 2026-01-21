"use client";

import { motion } from "framer-motion";
import {
  Coffee,
  Code,
  Layers,
  Globe,
  Palette,
  Database,
  Terminal,
  Github,
} from "lucide-react";

const skills = [
  { name: "Java", icon: Coffee, color: "text-[#007396]" },
  { name: "JavaScript", icon: Code, color: "text-[#F7DF1E]" },
  { name: "React", icon: Layers, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: Globe, color: "text-white" },
  { name: "Tailwind CSS", icon: Palette, color: "text-[#06B6D4]" },
  { name: "PostgreSQL", icon: Database, color: "text-[#4169E1]" },
  { name: "Postman", icon: Terminal, color: "text-[#FF6C37]" },
  { name: "Git & GitHub", icon: Github, color: "text-white" },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            My <span className="text-primary">Tech Stack</span>
          </motion.h2>
          <p className="text-white/60 max-w-lg">
            Technologies I use to bring ideas to life. From backend architecture
            to frontend interactions.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-8 flex flex-col items-center justify-center gap-4 group cursor-default"
            >
              <div
                className={`text-5xl transition-transform duration-500 group-hover:scale-110 ${skill.color}`}
              >
                <skill.icon />
              </div>
              <h3 className="font-semibold text-white/90 group-hover:text-white transition-colors">
                {skill.name}
              </h3>

              {/* Radial glow on hover */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 -z-10 rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
