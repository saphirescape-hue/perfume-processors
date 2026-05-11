"use client";

import ScrollReveal from "./ScrollReveal";
import Link from "next/link";

export default function HeritageSection() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-secondary"
                style={{ background: "rgba(233,30,99,0.06)", border: "1px solid rgba(233,30,99,0.1)" }}>
                Heritage
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-text-primary">Three Decades of </span>
                <span className="gradient-text">Heritage</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                State-of-the-art manufacturing facilities across Asia, powered by 100% renewable energy and advanced production processes.
              </p>
              <Link href="/our-history">
                <button className="glow-button text-sm mt-4">
                  Learn Our Story
                  <svg className="inline-block ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 opacity-10 pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(233,30,99,0.2) 0%, transparent 70%)" }} />
              <div className="space-y-8">
                {[
                  { title: "Quality Assurance", desc: "Comprehensive quality control frameworks exceeding international standards.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                  { title: "Innovation Driven", desc: "Proprietary manufacturing processes and breakthrough textile formulations.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                  { title: "Global Reach", desc: "Serving six continents with localized expertise and global manufacturing capabilities.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(233,30,99,0.06)", border: "1px solid rgba(233,30,99,0.1)" }}>
                      <svg className="w-6 h-6 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-text-primary font-semibold mb-1">{item.title}</h4>
                      <p className="text-text-secondary text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
