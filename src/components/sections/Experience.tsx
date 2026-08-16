"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "B.Sc. Computer Engineering",
    company: "Top University",
    date: "2026 - 2030",
    description: "Incoming freshman. Planning to focus on systems architecture, low-level programming, and advanced software engineering principles."
  },
  {
    role: "Self-Taught Developer",
    company: "Personal Journey",
    date: "2022 - Present",
    description: "Built multiple full-stack applications, learned modern web frameworks like Next.js, and explored deep computer science fundamentals independently."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-white/[0.02] border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            <span className="text-gradient">Experience & Education</span>
          </h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                <div className="md:grid md:grid-cols-4 gap-4 items-start">
                  <div className="hidden md:block col-span-1 text-foreground/50 font-mono text-sm pt-1">
                    {exp.date}
                  </div>
                  
                  <div className="md:col-span-3 glass-card p-6 relative">
                    <div className="hidden md:block absolute -left-[calc(25%+15px)] top-3 w-4 h-4 rounded-full bg-accent shadow-[0_0_15px_rgba(14,165,233,0.8)]" />
                    
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="text-accent font-medium mb-2">{exp.company}</h4>
                    <div className="md:hidden text-foreground/50 font-mono text-sm mb-4">
                      {exp.date}
                    </div>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
