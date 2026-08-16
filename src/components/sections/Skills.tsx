"use client";
import { motion } from "framer-motion";

const skills = [
  "TypeScript", "React", "Next.js", "Node.js", 
  "Tailwind CSS", "Framer Motion", "Python", "C/C++", 
  "Git", "Figma", "SQL", "Linux"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-white/[0.02] border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            <span className="text-gradient">Tech Stack</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 hover:border-accent/50 hover:scale-105 transition-all cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
