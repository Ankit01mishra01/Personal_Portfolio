"use client";
import Section from "@/components/Section";
import { motion } from "framer-motion";
import Image from "next/image";

const education = [
  {
    school: "VIT Bhopal",
    degree: "B.Tech, Computer Science and Engineering",
    detail: "CGPA: 7.32 · Sep 2021 – Oct 2025",
  },
  {
    school: "The Eminent Heights",
    degree: "Class XII, CBSE",
    detail: "2020–2021",
  },
  {
    school: "Saket MGM Senior Secondary School",
    degree: "Class X, CBSE",
    detail: "2018–2019",
  },
];

const achievements = [
  "NPTEL SWAYAM Cloud Computing — Elite Certificate, Top 5% Nationally, IIT Kharagpur",
  "VIT Bhopal 6th Annual Convocation — Degree recipient 2025",
  "State-Level Volleyball Player",
  "Discipline Committee Head, Advitya Sports Fest, VIT Bhopal",
];

export default function About() {
  return (
    <Section id="about" title="About" subtitle="Who I am">
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          className="card p-6 group cursor-default"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <p className="group-hover:text-[rgb(var(--fg))] transition-colors leading-relaxed">
            I&apos;m a Full Stack Developer and CSE graduate from VIT Bhopal (Class of 2025), focused on building scalable, modern web applications powered by performance, clean design, and AI. Over 6 months of internship experience across Flexzistay and Kaizen-Ease, I&apos;ve shipped responsive UIs, optimized Core Web Vitals, and integrated AI into production products.
          </p>
          <p className="mt-4 text-[rgb(var(--muted))] text-sm group-hover:text-[rgb(var(--fg))] transition-colors leading-relaxed">
            I integrate AI into real products — from a voice-enabled assistant to a full-stack AI career platform — and I care about the details that don&apos;t show up in error logs: spacing, responsiveness, and first impressions on mobile.
          </p>
        </motion.div>

        <motion.div
          className="card p-6 group cursor-default"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="font-semibold mb-4 group-hover:text-blue-400 transition-colors">Education</h3>
          <div className="space-y-4">
            {education.map((item) => (
              <div key={item.school}>
                <p className="font-medium">{item.school}</p>
                <p className="text-sm text-[rgb(var(--muted))] group-hover:text-[rgb(var(--fg))] transition-colors">
                  {item.degree}
                </p>
                <p className="text-xs text-[rgb(var(--muted))] mt-0.5">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-6 card overflow-hidden group cursor-default"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        <div className="grid md:grid-cols-[1fr_280px] gap-0">
          <div className="p-6">
            <h3 className="font-semibold mb-4 group-hover:text-blue-400 transition-colors">
              Achievements
            </h3>
            <ul className="space-y-3">
              {achievements.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-[rgb(var(--muted))] group-hover:text-[rgb(var(--fg))] transition-colors"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-fuchsia-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[220px] md:min-h-full bg-gradient-to-br from-slate-800 to-slate-900">
            <Image
              src="/vit-convocation-2025.png"
              alt="Ankit Mishra receiving B.Tech degree at VIT Bhopal 6th Annual Convocation 2025"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Convocation 2025</p>
              <p className="text-sm font-medium text-white">VIT Bhopal — Degree Recipient</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
