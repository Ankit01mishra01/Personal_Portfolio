"use client";
import Section from "@/components/Section";
import { motion } from "framer-motion";

const certs = [
  {
    title: "IBM RAG and Agentic AI Professional Certificate",
    focus: "LLM orchestration, retrieval pipelines, evaluation frameworks",
    year: "2025",
  },
  {
    title: "Google Cloud Digital Leader",
    focus: "Architecture, security, cost optimization, AI/ML services",
    year: "2024",
  },
  {
    title: "Postman API Fundamentals Student Expert",
    focus: "Contract testing, API documentation, CI collections",
    year: "2024",
  },
  {
    title: "IBM Generative AI: Introduction & Application",
    focus: "Prompt design, safety, automation blueprints",
    year: "2024",
  },
  {
    title: "Elite (Top 5%) – NPTEL SWAYAM Cloud Computing, IIT Kharagpur",
    focus: "Distributed systems, container orchestration, autoscaling",
    year: "2023",
  },
];

export default function Certifications() {
  return (
    <Section
      id="certifications"
      title="Certifications"
      subtitle="Continuous Upskilling"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {certs.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, y: -4 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="
              rounded-3xl border border-white/10 
              bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-900/40
              p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)]
              backdrop-blur-xl transition-all duration-300 
              hover:shadow-[0_15px_60px_rgba(59,130,246,0.25)] 
              hover:border-blue-400/40
            "
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/40">
              <span>{cert.year}</span>
              <span className="tracking-wide">Verified</span>
            </div>

            <h3 className="mt-3 text-lg font-semibold text-white">
              {cert.title}
            </h3>

            <p className="mt-2 text-sm text-white/60">{cert.focus}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
