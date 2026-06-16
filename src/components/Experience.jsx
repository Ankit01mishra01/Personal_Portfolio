"use client";
import Section from "@/components/Section";
import { motion } from "framer-motion";

const experiences = [
  {
    period: "April 2026 – June 2026 (Present) · Remote, Jaipur",
    role: "Full Stack Developer Intern · Flexzistay",
    stack: "Next.js · Tailwind CSS · Hyper-Guest API · Google Maps",
    highlights: [
      "Rebuilt responsive UI across 100+ hotel listing pages using Tailwind CSS",
      "Identified and eliminated a production security vulnerability by replacing Map Tiler API key with a zero-cost Google Maps solution",
      "Audited the Flexzistay platform and resolved 20+ bugs across mobile, tablet, and desktop — improving stability and user experience end-to-end",
      "Contributed to Hyper-Guest API integration for onboarding hotel inventory across Udaipur and Jaipur, gaining hands-on exposure to third-party hospitality API workflows",
    ],
  },
  {
    period: "May 2025 – August 2025 · Remote, India",
    role: "Software Developer Intern · Kaizen-Ease",
    stack: "Next.js · React · TypeScript · Tailwind CSS",
    highlights: [
      "Engineered an SSR/CSR hybrid rendering strategy using Next.js, reducing initial page load time by 40% and improving Core Web Vitals scores",
      "Built a reusable React component library for article management workflows, cutting feature delivery time by 30% and eliminating redundant UI code across 5+ modules",
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="Where I worked">
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={exp.role}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-900/20 p-8 text-white shadow-2xl transition-all duration-300 hover:shadow-[0_25px_80px_rgba(59,130,246,0.4)] hover:border-blue-400/40 hover:scale-[1.01] hover:-translate-y-1 cursor-default"
          >
            <div className="absolute inset-y-6 left-8 w-px bg-gradient-to-b from-blue-500/40 via-white/20 to-fuchsia-500/40" />
            <motion.div
              className="relative pl-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <span className="absolute left-1.5 top-1.5 h-3.5 w-3.5 rounded-full bg-gradient-to-r from-blue-500 to-fuchsia-500 shadow-[0_0_30px_rgba(59,130,246,0.8)]" />
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">{exp.period}</p>
              <h3 className="mt-2 text-2xl font-semibold">{exp.role}</h3>
              <p className="mt-2 text-sm text-white/70">{exp.stack}</p>
              <ul className="mt-6 space-y-3 text-sm text-white/80">
                {exp.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  );
}
