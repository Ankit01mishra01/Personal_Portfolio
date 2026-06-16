"use client";
import Section from "@/components/Section";
import { motion } from "framer-motion";

const certifications = [
  { title: "Google Cloud Digital Leader", year: "2025" },
  { title: "Qualcomm AI Upskilling", year: "2025" },
  { title: "Databricks Generative AI Fundamentals", year: "2025" },
  { title: "Postman API Fundamentals Student Expert", year: "2025" },
  { title: "Applied Machine Learning in Python (Coursera)", year: "2025" },
  { title: "The Bits and Bytes of Computer Networking (Google)", year: "2025" },
  {
    title: "NPTEL SWAYAM Cloud Computing — Elite Certificate, Top 5% Nationally",
    year: "2025",
    focus: "IIT Kharagpur",
  },
];

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications" subtitle="Continuous Upskilling">
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, y: -4 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-900/40 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_15px_60px_rgba(59,130,246,0.25)] hover:border-blue-400/40"
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/40">
              <span>{cert.year}</span>
              <span className="tracking-wide">Verified</span>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-white">{cert.title}</h3>
            {cert.focus && <p className="mt-2 text-sm text-white/60">{cert.focus}</p>}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
