"use client";
import Section from "@/components/Section";
import { motion } from "framer-motion";

const skillSpheres = [
  { label: "React", radius: 90, angle: 10, speed: 14 },
  { label: "Next.js", radius: 115, angle: 60, speed: 18 },
  { label: "LLM Integration", radius: 85, angle: 130, speed: 12 },
  { label: "Tailwind", radius: 125, angle: 200, speed: 20 },
  { label: "Node.js", radius: 100, angle: 250, speed: 16 },
  { label: "Express", radius: 110, angle: 310, speed: 17 },
  { label: "MongoDB", radius: 70, angle: 340, speed: 10 },

  // calm deeper layer
  { label: "PostgreSQL", radius: 130, angle: 35, speed: 30, layer: "deep" },
  { label: "Docker", radius: 140, angle: 150, speed: 35, layer: "deep" },
  { label: "AWS", radius: 135, angle: 260, speed: 32, layer: "deep" },

  // outer safe layer (still inside!)
  { label: "Agentic AI", radius: 150, angle: 90, speed: 40, layer: "outer" },
  { label: "Generative AI", radius: 155, angle: 200, speed: 45, layer: "outer" },
];



const bubbleMotion = {
  initial: { opacity: 0, scale: 0.8 },
  animate: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.05, type: "spring", stiffness: 120, damping: 20 },
  }),
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Tech universe ">
      <div className="relative card overflow-hidden group cursor-default">
        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-10 p-8">
          <div className="space-y-4">
             <p className="text-base font-semibold text-[rgb(var(--muted))]">
              "Tools change, stacks change, languages change. The only thing that keeps an Engineer relevant is relentless learning."
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["MERN STACK", "Next.js 16", "Agentic AI", "GEN AI", "AWS/Docker", "LLM Integration","Git &GitHub", "AI Tools Expert", "Prompt Engineering"].map((chip, i) => (
                <motion.span
                  key={chip}
                  className="px-3 py-2 rounded-xl border border-white/10 bg-white/40 dark:bg-white/10 text-xs font-medium text-center backdrop-blur transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:scale-105 cursor-default"
                  variants={bubbleMotion}
                  initial="initial"
                  whileInView="animate"
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  custom={i}
                >
                  {chip}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="relative h-80">
            <div className="absolute inset-10 rounded-full border border-white/15" />
            <div className="absolute inset-4 rounded-full border border-white/10 blur-sm" />
            {skillSpheres.map((skill, index) => (
              <motion.span
                key={skill.label + index}
                className="absolute flex items-center justify-center rounded-full backdrop-blur text-xs font-medium border border-white/20 shadow-lg bg-gradient-to-br from-white/90 to-white/60 dark:from-slate-900/80 dark:to-slate-900/40"
                style={{
                  width: "82px",
                  height: "82px",
                  top: `calc(50% - 41px)`,
                  left: `calc(50% - 41px)`,
                }}
                custom={index}
                variants={bubbleMotion}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                animate={{
                  rotate: 360,
                  transition: {
                    repeat: Infinity,
                    ease: "linear",
                    duration: skill.orbit === "slow" ? 26 : 18,
                    delay: index * 0.2,
                  },
                }}
              >
                <span
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    transform: `translate(${skill.radius * Math.cos((skill.angle * Math.PI) / 180)}px, ${skill.radius * Math.sin((skill.angle * Math.PI) / 180)}px)`,
                  }}
                >
                  {skill.label}
                </span>
              </motion.span>
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="h-24 w-24 rounded-2xl bg-gradient-to-br from-blue-500/70 to-fuchsia-500/70 text-white text-center flex flex-col items-center justify-center shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <span className="text-xs">Core</span>
                <strong className="text-sm">MERN</strong>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="absolute -top-32 right-10 h-60 w-60 rounded-full bg-gradient-to-br from-blue-500/30 to-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-24 left-6 h-72 w-72 rounded-full bg-gradient-to-br from-pink-500/20 to-orange-500/10 blur-3xl" />
      </div>
    </Section>
  );
}
