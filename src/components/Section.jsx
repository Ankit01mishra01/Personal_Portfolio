"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Section({ id, title, subtitle, children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const ctrls = useAnimation();

  useEffect(() => {
    if (inView) ctrls.start("visible");
  }, [inView, ctrls]);

  return (
    <section id={id} ref={ref} className="container-px mx-auto py-16 sm:py-24">
      {(title || subtitle) && (
        <div className="mb-8">
          {title && <h2 className="section-title">{title}</h2>}
          {subtitle && <p className="section-sub mt-1">{subtitle}</p>}
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={ctrls}
        variants={{ visible: { opacity: 1, y: 0, transition: { duration: .6, ease: "easeOut" } } }}
      >
        {children}
      </motion.div>
    </section>
  );
}
