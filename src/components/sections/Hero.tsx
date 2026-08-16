"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-accent/20 rounded-full blur-[120px] opacity-50 mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-indigo-500/20 rounded-full blur-[150px] opacity-30 mix-blend-screen" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-accent/30"
        >
          <Terminal size={16} className="text-accent" />
          <span className="text-sm font-medium">B.Sc. Computer Engineering (Incoming)</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 leading-tight"
        >
          Engineering the <br className="hidden md:block" />
          <span className="text-gradient">Digital Future</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-12"
        >
          Future software engineer obsessed with systems, performance, and crafting premium, butter-smooth web experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="#projects"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-bold rounded-full hover:scale-105 transition-transform"
          >
            View Projects <ArrowRight size={18} />
          </Link>
          <Link
            href="#contact"
            className="flex items-center justify-center px-8 py-4 glass font-semibold rounded-full hover:bg-white/10 transition-colors"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
