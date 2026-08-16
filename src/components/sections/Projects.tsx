"use client";
import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";

const projects = [
  {
    title: "Project Alpha",
    description: "A high-performance full-stack web application built with Next.js and Go. Features real-time data sync and a stunning dark-mode UI.",
    tech: ["Next.js", "Go", "PostgreSQL", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Beta",
    description: "An experimental interactive portfolio piece leveraging modern web APIs. Pushing the boundaries of web performance.",
    tech: ["React", "TypeScript", "Framer Motion"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Gamma",
    description: "A developer tool built to streamline local workflows. Optimized for speed and minimal memory footprint.",
    tech: ["Rust", "CLI", "Systems"],
    github: "#",
    live: "#",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            <span className="text-gradient">Featured Work</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 flex flex-col h-full group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-full aspect-video bg-black/40 rounded-lg mb-6 flex items-center justify-center border border-white/5 overflow-hidden">
                  <span className="text-foreground/30 font-mono text-sm">Screenshot Placeholder</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-medium px-2 py-1 rounded bg-white/5 border border-white/10 text-accent">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                  <a href={project.github} className="text-foreground/60 hover:text-white transition-colors">
                    <GitBranch size={20} />
                  </a>
                  <a href={project.live} className="text-foreground/60 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
