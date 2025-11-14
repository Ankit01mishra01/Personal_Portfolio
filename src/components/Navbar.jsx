"use client";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

function IconMenu(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" strokeWidth="1.8" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

function IconClose(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" strokeWidth="1.8" {...props}>
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <motion.header
      className="sticky top-0 z-50"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className={`border-b transition backdrop-blur ${scrolled ? "bg-[rgb(var(--bg))]/85 border-white/15 shadow-lg shadow-slate-900/10" : "bg-transparent border-transparent"}`}>
        <nav className="container-px mx-auto flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Ankit Mishra
          </Link>
          <div className="hidden lg:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-[rgb(var(--muted))] transition hover:text-[rgb(var(--fg))]">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a className="btn btn-primary text-xs" href="/Ankit_updated_Resume.pdf" download>
              Download Resume
            </a>
            <button
              className="rounded-full border border-white/30 p-2 lg:hidden"
              aria-label="Toggle navigation"
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </nav>
        {open && (
          <div className="lg:hidden border-t border-white/10 bg-[rgb(var(--bg))]">
            <div className="container-px flex flex-col py-4 text-sm">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="py-3" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
}
