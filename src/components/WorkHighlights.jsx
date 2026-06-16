"use client";
import Section from "@/components/Section";
import Link from "next/link";
import { motion } from "framer-motion";

const workPosts = [
  {
    platform: "LinkedIn",
    date: "Feb 2026",
    title: "Rebuilding Flexzistay for Mobile-First UX",
    excerpt:
      "Honest intern confession: I thought knowing how to code was enough. It's not. At FlexiStay, I spent weeks going through the entire platform — rebuilt responsive layouts across 100+ pages, fixed visual inconsistencies, and cleaned up the overall look and feel. The frontend work was harder than I expected — not technically hard, but hard in a different way. You have to look at something 20 times before you realize it's slightly off.",
    tags: ["#InternLife", "#FullStackDev", "#FlexziStay", "#WebDevelopment", "#Frontend"],
    linkedinUrl:
      "https://www.linkedin.com/posts/ankit-mishra09_internlife-fullstackdev-flexzistay-activity-7465507887306403840-hl65",
    projectUrl: "https://www.flexzistay.in/",
    projectLabel: "flexzistay.in",
  },
];

export default function WorkHighlights() {
  return (
    <Section id="highlights" title="Work Highlights" subtitle="In the wild">
      <div className="space-y-6">
        {workPosts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-900/40 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_20px_80px_rgba(59,130,246,0.3)] hover:border-blue-400/40"
          >
            <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/40">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#0A66C2]/40 bg-[#0A66C2]/10 px-3 py-1 text-[#70B5F9]">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.062 2.062 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                {post.platform}
              </span>
              <span>{post.date}</span>
            </div>

            <h3 className="relative mt-4 text-2xl font-semibold text-white">{post.title}</h3>

            <blockquote className="relative mt-4 border-l-2 border-blue-400/40 pl-4 text-sm leading-relaxed text-white/70 italic">
              &ldquo;{post.excerpt}&rdquo;
            </blockquote>

            <div className="relative mt-5 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-blue-300/80"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="relative mt-6 flex flex-wrap gap-3">
              <Link
                href={post.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#0A66C2]/40 bg-[#0A66C2]/10 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-[#70B5F9] transition hover:bg-[#0A66C2]/20 hover:scale-105"
              >
                View on LinkedIn ↗
              </Link>
              <Link
                href={post.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-emerald-300 transition hover:bg-emerald-500/20 hover:scale-105"
              >
                Visit {post.projectLabel} ↗
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
