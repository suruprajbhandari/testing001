"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            <span className="text-gradient">About Me</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="glass-card p-8 md:p-12">
              <h3 className="text-2xl font-semibold mb-4 text-white">The Journey Begins</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                As an incoming Computer Engineering student, my fascination with technology started early. I am driven by the desire to understand how systems work from the lowest level of hardware up to the most complex, beautiful user interfaces.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                When I'm not studying algorithms or building side projects, you'll find me exploring the latest web technologies, diving into systems architecture, or refining my design skills to create digital experiences that truly stand out.
              </p>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative aspect-square md:aspect-[4/5] rounded-2xl bg-[#0a0a0a] overflow-hidden border border-white/10 flex items-center justify-center">
                <div className="text-center text-foreground/30 p-6">
                  <p className="font-mono text-sm">Image Placeholder</p>
                  <p className="text-xs mt-2">Replace with a high-quality portrait</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
