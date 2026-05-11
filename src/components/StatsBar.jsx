"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

function AnimatedCounter({ target, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    const end = parseInt(target, 10);
    if (isNaN(end)) return;
    const startTime = Date.now();
    const durationMs = duration * 1000;
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 30, suffix: "+", label: "Years of Excellence" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 0, label: "Carbon Footprint", displayText: "Zero" },
  { value: 100, suffix: "%", label: "Renewable Power" },
];

export default function StatsBar() {
  return (
    <section className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="glass-card-static p-2 sm:p-3">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group rounded-xl p-6 sm:p-8 text-center transition-all duration-400 hover:bg-white/60"
                >
                  <div className="text-4xl sm:text-5xl font-extrabold gradient-text mb-2">
                    {stat.displayText || <AnimatedCounter target={stat.value} suffix={stat.suffix || ""} />}
                  </div>
                  <p className="text-sm text-text-secondary font-medium tracking-wide">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
