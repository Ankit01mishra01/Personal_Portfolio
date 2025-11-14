"use client";
import Section from "@/components/Section";
import { useState } from "react";

const socials = [
  { label: "Email", value: "ankit.forwork09@gmail.com", href: "mailto:ankit.forwork09@gmail.com" },
  { label: "GitHub", value: "github.com/Ankit01mishra01", href: "https://github.com/Ankit01mishra01" },
  { label: "LinkedIn", value: "linkedin.com/in/ankit-mishra09", href: "https://www.linkedin.com/in/ankit-mishra09" },
];

export default function Contact() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus({ state: "loading", message: "Sending..." });

    try {
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_id",
          template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_id",
          user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key",
          template_params: Object.fromEntries(formData.entries()),
        }),
      });

      form.reset();
      setStatus({ state: "success", message: "Message sent! I’ll reply soon." });
    } catch (error) {
      setStatus({ state: "error", message: "Something went wrong. Please try again." });
    }
  }

  return (
    <Section id="contact" title="Contact" subtitle="Let’s ship something together">
      <div className="grid gap-8 md:grid-cols-2">

        {/* LEFT — Social Contacts */}
        <div className="
          rounded-3xl border border-white/10
          bg-gradient-to-br from-slate-900/85 via-slate-900/60 to-slate-900/30
          p-6 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.4)]
          transition-all duration-300
          hover:shadow-[0_20px_70px_rgba(59,130,246,0.25)]
          hover:border-blue-400/40 hover:scale-[1.015]
        ">
          <p className="text-sm text-white/60 leading-relaxed">
            Prefer replies within 24 hours.  
            Share project briefs, role details, or anything you'd like to collaborate on.
          </p>

          <div className="mt-6 space-y-4">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                className="
                  flex items-center justify-between
                  rounded-2xl border border-white/10
                  bg-gradient-to-r from-slate-800/50 to-slate-800/20
                  px-4 py-3 text-sm text-white
                  backdrop-blur transition-all duration-300
                  hover:border-blue-400/40 hover:bg-blue-500/10
                  hover:shadow-[0_10px_40px_rgba(59,130,246,0.25)]
                  hover:scale-[1.03]
                "
              >
                <span className="font-medium">{item.label}</span>
                <span className="text-white/50">{item.value}</span>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="
            rounded-3xl border border-white/10
            bg-gradient-to-br from-slate-950/90 via-slate-900/70 to-slate-900/40
            p-6 backdrop-blur-xl
            shadow-[0_10px_40px_rgba(0,0,0,0.5)]
            transition-all duration-300
            hover:border-blue-400/40 hover:shadow-[0_20px_70px_rgba(59,130,246,0.3)]
            hover:scale-[1.01]
          "
        >
          <div className="space-y-5">

            {/* NAME */}
            <div>
              <label className="text-xs uppercase tracking-[0.25em] text-white/60">Name</label>
              <input
                name="from_name"
                required
                className="
                  mt-2 w-full rounded-2xl border border-white/15 bg-white/5
                  px-3 py-2 text-sm text-white placeholder-white/40
                  outline-none focus:border-blue-400 focus:bg-white/10
                "
                placeholder="How should I address you?"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-xs uppercase tracking-[0.25em] text-white/60">Email</label>
              <input
                type="email"
                name="reply_to"
                required
                className="
                  mt-2 w-full rounded-2xl border border-white/15 bg-white/5
                  px-3 py-2 text-sm text-white placeholder-white/40
                  outline-none focus:border-blue-400 focus:bg-white/10
                "
                placeholder="you@email.com"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-xs uppercase tracking-[0.25em] text-white/60">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="
                  mt-2 w-full rounded-2xl border border-white/15 bg-white/5
                  px-3 py-2 text-sm text-white placeholder-white/40
                  outline-none focus:border-blue-400 focus:bg-white/10
                "
                placeholder="Let’s talk about your project, role, or idea…"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
                w-full rounded-2xl py-2.5 text-sm font-medium
                bg-gradient-to-r from-blue-500 to-fuchsia-500
                text-white shadow-lg shadow-blue-500/30
                transition hover:shadow-fuchsia-500/40 hover:scale-[1.02]
              "
              disabled={status.state === "loading"}
            >
              {status.state === "loading" ? "Sending..." : "Send Message"}
            </button>

            {/* STATUS MESSAGE */}
            {status.message && (
              <p
                className={`text-xs ${
                  status.state === "success" ? "text-emerald-400" : "text-rose-400"
                }`}
              >
                {status.message}
              </p>
            )}

            <p className="text-[11px] text-white/40 mt-2">
              Configure EmailJS env vars in `.env.local`:  
              NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.
            </p>
          </div>
        </form>
      </div>
    </Section>
  );
}
