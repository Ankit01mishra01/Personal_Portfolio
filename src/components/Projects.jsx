"use client";
import Section from "@/components/Section";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Career Automation Platform",
    year: "2025",
    tech: ["Next.js", "PostgreSQL", "Gemini LLM", "Tailwind CSS", "Shadcn UI", "Clerk"],
    desc: "Full-stack AI career platform with automated resume generation, cover letter writing, and interview preparation.",
    impact:
      "Reduced manual career prep effort by ~80%. Serves 50+ active users via CI/CD on Vercel with zero-downtime releases. Optimized PostgreSQL schema with Prisma ORM — 15% faster queries, 12% less storage.",
    github: "https://github.com/Ankit01mishra01/Futuristic-AI-Career-Genius",
    live: "https://my-project-two-zeta-58.vercel.app/",
  },
  {
    title: "iMessage Clone (Real-time Chat App)",
    tech: ["React.js", "Node.js", "Socket.io", "MongoDB"],
    desc: "Real-time messaging application with iMessage-style UI and WebSocket-based live communication.",
    impact:
      "Instant message delivery via Socket.io with full authentication and secure session management.",
    live: "https://imessage-frontend.onrender.com",
    github: "https://github.com/Ankit01mishra01",
  },
  {
    title: "Virtual AI Assistant",
    year: "2025",
    tech: ["React.js", "Node.js", "Gemini API", "Web Speech API"],
    desc: "Voice-enabled AI assistant using Gemini-powered NLP and Web Speech API (STT/TTS) for conversational interactions.",
    impact:
      "JWT auth and bcrypt on Express backend. RESTful APIs for prompt processing, user data, and assistant personalization via Cloudinary.",
    github: "https://github.com/Ankit01mishra01/Virtual-Ai-Assistant",
  },
];

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Things I Built">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="group relative flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-900/40 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_20px_80px_rgba(59,130,246,0.35)] hover:border-blue-500/40 hover:scale-[1.03] hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  {project.year || "Featured"}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
              </div>
            </div>

            <p className="mt-4 text-sm text-white/60">{project.desc}</p>
            <p className="mt-3 text-sm font-medium text-white">{project.impact}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] uppercase tracking-wide rounded-full border border-white/10 bg-slate-800/50 text-white/70 px-3 py-1 backdrop-blur-sm group-hover:border-blue-400/40"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-6 flex flex-wrap gap-3">
              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-blue-300 transition hover:bg-blue-500/20 hover:scale-105"
                >
                  Live Demo ↗
                </Link>
              )}
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-white/20 px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-white/60 transition hover:border-blue-400/40 hover:text-blue-300 hover:scale-105"
                >
                  GitHub ↗
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
