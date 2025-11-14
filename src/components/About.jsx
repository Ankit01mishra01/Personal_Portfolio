"use client";
import Section from "@/components/Section";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Section id="about" title="About" subtitle="Who I am">
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          className="card p-6 group cursor-default"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <p className="group-hover:text-[rgb(var(--fg))] transition-colors">
I’m a B.Tech CSE student at VIT Bhopal and a driven Full Stack Developer focused on building scalable, modern web applications powered by performance, clean design, and AI. I love transforming ideas into reliable, accessible products using MERN, Next.js, and cloud services while constantly learning and adapting to new technologies.
          </p>
        </motion.div>
        <motion.div
          className="card p-6 group cursor-default"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="font-semibold mb-2 group-hover:text-blue-400 transition-colors">Education</h3>
          <p>VIT Bhopal University — B.Tech CSE [2021 - 2025] </p>
          <p className="text-[rgb(var(--muted))] text-sm mt-2 group-hover:text-[rgb(var(--fg))] transition-colors">Passionate about Learning and Growth that s' the main focus.</p>
        </motion.div>
      </div>
    </Section>
  );
}
