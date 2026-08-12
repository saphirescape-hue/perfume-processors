"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="glass-card-static p-12 sm:p-16 text-center relative overflow-hidden">
            {/* Ankara wax-print texture */}
            <div className="absolute inset-0 ankara-fans opacity-[0.03] pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-10 pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(233,30,99,0.3) 0%, transparent 70%)" }} />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full opacity-10 pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(139,26,74,0.3) 0%, transparent 70%)" }} />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 relative z-10">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <p className="text-text-secondary text-lg mb-8 relative z-10">
              Get in touch for your textile needs today.
            </p>
            <Link href="/contact" className="relative z-10">
              <button className="glow-button text-base px-10 py-4">
                Contact Us
                <svg className="inline-block ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
