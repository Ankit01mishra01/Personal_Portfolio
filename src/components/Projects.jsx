"use client";
import Section from "@/components/Section";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Futuristic AI Career Genius",
    tech: ["Next.js", "PostgreSQL", "Gemini LLM", "Clerk", "Inngest"],
    desc: "AI-powered platform that generates resumes, cover letters, and interview prep materials.",
    impact:
      "Analyzes your skills, compares them to industry salary trends, and generates an AI-optimized plan to level up.",
    href: "https://github.com/Ankit01mishra01/Futuristic-AI-Career-Genius",
  },
  {
    title: "Virtual AI Assistant",
    tech: ["MERN", "NLP APIs", "MongoDB"],
    desc: "Conversational assistant with real-time support using REST APIs and structured data storage.",
    impact:
      "Behaves like a personal AI agent with dynamic reasoning, context memory, and automated support flows.",
    href: "https://github.com/Ankit01mishra01/Virtual-Ai-Assistant",
  },
  {
    title: "Express-Link Shortener",
    tech: ["Express.js", "MongoDB Atlas", "EJS"],
    desc: "URL shortener with validation, error handling, and secure redirects.",
    impact:
      "Ensures reliable short-link generation with validation, 99.9% uptime, secure redirects, and deep usage analytics.",
    href: "https://github.com/Ankit01mishra01/Express-Link-Shortener",
  },
];

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Things I Built">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="relative h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <Link
              href={project.href}
              target="_blank"
              className="
                group flex h-full flex-col rounded-3xl border border-white/10 
                bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-900/40 
                p-6 shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl 
                transition-all duration-300 
                hover:shadow-[0_20px_80px_rgba(59,130,246,0.35)] 
                hover:border-blue-500/40 hover:scale-[1.03] hover:-translate-y-1
              "
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                    Featured
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>

                <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/50 transition group-hover:border-blue-500/40 group-hover:text-blue-400">
                  GitHub ↗
                </span>
              </div>

              <p className="mt-4 text-sm text-white/60">{project.desc}</p>

              <p className="mt-3 text-sm font-medium text-white">
                {project.impact}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      text-[11px] uppercase tracking-wide rounded-full 
                      border border-white/10 bg-slate-800/50 
                      text-white/70 px-3 py-1 backdrop-blur-sm 
                      group-hover:border-blue-400/40
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-white/40">
                <span>Code Quality</span>
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 via-blue-400/40 to-transparent" />
              </div>
            </Link>

            <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition group-hover:border-blue-400/40" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
