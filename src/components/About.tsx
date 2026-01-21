"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Award } from "lucide-react";

const infoItems = [
  { icon: Briefcase, label: "Experience", value: "6 Months" },
  { icon: MapPin, label: "Location", value: "Lucknow, India" },
  { icon: GraduationCap, label: "Education", value: "B.Tech in IT" },
  { icon: Award, label: "CGPA", value: "7.8 (AKTU)" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            About <span className="text-secondary">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-accent rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white/90">
              A Passionate Developer Building the Future
            </h3>
            <div className="space-y-4 text-white/70 leading-relaxed text-lg">
              <p>
                As a{" "}
                <span className="text-white font-medium">
                  Full Stack Java Developer
                </span>{" "}
                with 6 months of hands-on experience, I bridge the gap between
                robust backend systems and intuitive frontend experiences.
              </p>
              <p>
                My expertise lies in building enterprise-grade applications
                using <span className="text-secondary font-medium">Java</span>{" "}
                and the{" "}
                <span className="text-secondary font-medium">
                  Spring/Modern Web
                </span>{" "}
                ecosystem, combined with the agility of modern UI frameworks
                like <span className="text-primary font-medium">React</span> and{" "}
                <span className="text-primary font-medium">Next.js</span>.
              </p>
              <p>
                I am deeply passionate about architecting scalable systems,
                optimizing database performance with PostgreSQL, and crafting
                pixel-perfect user interfaces that provide seamless digital
                experiences.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              {infoItems.map((item, i) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-widest">
                      {item.label}
                    </p>
                    <p className="font-medium text-white/90">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 lg:p-10"
          >
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-3">
              <GraduationCap className="text-accent" />
              Education Journey
            </h3>
            <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
              <div className="relative pl-8">
                <div className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full bg-dark-bg border-4 border-accent shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                <div>
                  <h4 className="font-bold text-white text-lg">
                    B.Tech in Information Technology
                  </h4>
                  <p className="text-accent text-sm font-medium mb-2">
                    2020 - 2024
                  </p>
                  <p className="text-white/60">
                    Dr. A.P.J. Abdul Kalam Technical University (AKTU)
                  </p>
                  <p className="mt-2 text-white/80 font-medium">CGPA: 7.8</p>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-[5px] top-1.5 w-3 h-3 rounded-full bg-white/20 border-2 border-white/40" />
                <div>
                  <h4 className="font-bold text-white/90">
                    Self-Directed Higher Learning
                  </h4>
                  <p className="text-primary text-sm font-medium mb-2">
                    Ongoing
                  </p>
                  <p className="text-white/60">
                    Advanced Distributed Systems, Cloud Computing with AWS, and
                    Frontend Architecture patterns.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
