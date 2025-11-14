"use client";
import Section from "@/components/Section";
import { motion } from "framer-motion";

const impact = [
  "Built a fast, SEO-optimized content platform using Next.js + TypeScript for business, tech, and finance audiences.",
  "Designed reusable UI components and a clean reading experience that boosts engagement and session duration.",
  "Implemented scalable API routes and role-based workflows enabling smooth publishing, management, and real-time insights.",
];

export default function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="Where I worked">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-900/20 p-8 text-white shadow-2xl transition-all duration-300 hover:shadow-[0_25px_80px_rgba(59,130,246,0.4)] hover:border-blue-400/40 hover:scale-[1.01] hover:-translate-y-1 cursor-default">
        <div className="absolute inset-y-6 left-8 w-px bg-gradient-to-b from-blue-500/40 via-white/20 to-fuchsia-500/40" />
        <motion.div
          className="relative pl-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="absolute left-1.5 top-1.5 h-3.5 w-3.5 rounded-full bg-gradient-to-r from-blue-500 to-fuchsia-500 shadow-[0_0_30px_rgba(59,130,246,0.8)]" />
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">May 2025 – Aug 2025 · Remote</p>
          <h3 className="mt-2 text-2xl font-semibold">Software Developer Intern · Kaizen-Ease</h3>
          <p className="mt-2 text-sm text-white/70">Next.js · Tailwind CSS · TypeScript · Analytics</p>
          <ul className="mt-6 space-y-3 text-sm text-white/80">
            {impact.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
