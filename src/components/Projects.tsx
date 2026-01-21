"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";

const projects = [
  {
    title: "Edemy – LMS",
    description:
      "A comprehensive Learning Management System with authentication, course management, and interactive dashboards.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    github: "#",
    live: "#",
    icon: Code2,
  },
  {
    title: "Chat Application",
    description:
      "Real-time one-on-one chat app built with Next.js and Socket.io. Handles user identity and instant messaging.",
    tech: ["Next.js", "Socket.io", "Node.js", "TypeScript"],
    github: "#",
    live: "#",
    icon: Code2,
  },
  {
    title: "HandWave Controller",
    description:
      "Gesture-based video controller using MediaPipe and React for touch-free, real-time interaction.",
    tech: ["React", "MediaPipe", "JavaScript", "Webcam API"],
    github: "#",
    live: "#",
    icon: Code2,
  },
  {
    title: "Car Rental System",
    description:
      "Vehicle booking and management system with user profiles, booking history, and admin controls.",
    tech: ["Java", "Spring Boot", "MySQL", "React"],
    github: "#",
    live: "#",
    icon: Code2,
  },
  {
    title: "Bank Management System",
    description:
      "Secure account handling, transactions, and customer management system with audit logs.",
    tech: ["Java", "PostgreSQL", "JDBC", "Swing"],
    github: "#",
    live: "#",
    icon: Code2,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Featured <span className="text-secondary">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mt-4"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card group flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              {/* Project Visual Area */}
              <div className="h-48 w-full bg-gradient-to-br from-white/5 to-white/[0.02] flex items-center justify-center p-8 relative">
                <project.icon className="w-16 h-16 text-white/20 group-hover:text-secondary/40 transition-colors duration-500" />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-white/5 border border-white/5 text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium transition-colors text-sm"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium transition-colors text-sm"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
