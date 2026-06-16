"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } },
});

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="container-px mx-auto pt-16 sm:pt-24 pb-20">
      <div className="grid md:grid-cols-[1.25fr_.75fr] gap-12 items-center">
        <div className="space-y-6">
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[rgb(var(--muted))]"
            {...fadeUp(0)}
          >
            Full Stack Developer
          </motion.span>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight"
            {...fadeUp(0.1)}
          >
            Ankit Mishra
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-fuchsia-500">
              Next.js · React · Node.js · PostgreSQL
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-fuchsia-500">
              AI Integration
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg font-medium text-[rgb(var(--fg))] max-w-2xl"
            {...fadeUp(0.15)}
          >
            I build full-stack web applications that ship — not just prototypes.
          </motion.p>

          <motion.p
            className="text-base sm:text-lg text-[rgb(var(--muted))] max-w-2xl"
            {...fadeUp(0.2)}
          >
            Over 6 months of hands-on internship experience across two companies, delivering measurable results: cut page load time by 40%, accelerated feature delivery by 30%, and produced 1,000+ SEO-optimized articles that ranked in Google&apos;s top 1–2 positions.
          </motion.p>

          <motion.p
            className="text-sm text-[rgb(var(--muted))] max-w-2xl"
            {...fadeUp(0.25)}
          >
            Stack: Next.js · React · Node.js · PostgreSQL · MongoDB · Docker · AWS EC2 · Prisma ORM · Tailwind CSS. I integrate AI into real products — built a voice-enabled AI assistant and a full-stack AI career platform using Gemini API, Prompt Engineering, and LLM workflows. CSE graduate from VIT Bhopal (Class of 2025), recognized in the Top 5% nationally in Cloud Computing (NPTEL, IIT Kharagpur).
          </motion.p>

          <motion.ul
            className="grid sm:grid-cols-2 gap-3 text-sm text-[rgb(var(--muted))]"
            {...fadeUp(0.3)}
          >
            {[
              "40% faster page loads (Kaizen-Ease)",
              "30% faster feature delivery",
              "1,000+ SEO articles ranked top 1–2",
              "AI career platform · voice assistant",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div className="flex flex-wrap gap-3" {...fadeUp(0.35)}>
            <a href="/Ankit_updated_Resume.pdf" className="btn btn-primary">
              Download Resume
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact
            </a>
            <a
              href="https://github.com/Ankit01mishra01"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/ankitmishra09"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              LinkedIn ↗
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative w-full max-w-sm justify-self-center md:justify-self-end group"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.6 } }}
        >
          <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-blue-500/30 via-indigo-500/10 to-transparent blur-3xl group-hover:from-blue-500/40 group-hover:via-indigo-500/20 transition-all duration-500" />

          <div className="relative rounded-[32px] border border-white/15 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-900/10 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur group-hover:shadow-[0_25px_100px_rgba(59,130,246,0.3)] group-hover:border-blue-400/30 transition-all duration-500 group-hover:scale-[1.02]">
            <div className="relative h-[480px] w-full overflow-hidden rounded-[24px] bg-gradient-to-br from-slate-800 to-slate-900">
              {!imageError ? (
                <Image
                  src="/passport_size_photo.jpg"
                  alt="Ankit Mishra headshot"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  priority
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-white/60">
                  <p className="text-sm">Loading photo…</p>
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-4 text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-white/70">Currently</p>
                <p className="text-lg font-semibold">Open to Full-Time Roles</p>
                <p className="text-xs text-white/60 mt-1">Indore, Madhya Pradesh, India</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
