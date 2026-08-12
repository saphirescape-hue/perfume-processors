"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-24">
      {/* Hero textile background accent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[900px] h-[900px] opacity-[0.08]"
          style={{ maskImage: "radial-gradient(ellipse 50% 50% at center, black 20%, transparent 70%)", WebkitMaskImage: "radial-gradient(ellipse 50% 50% at center, black 20%, transparent 70%)" }}>
          <Image
            src="/gallery/gallery-06.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="900px"
            priority
          />
        </div>
      </div>

      {/* Decorative radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none">
        <div
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(233,30,99,0.12) 0%, transparent 60%)",
          }}
        />
      </div>


      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Overline badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8"
          style={{
            background: "rgba(233, 30, 99, 0.06)",
            border: "1px solid rgba(233, 30, 99, 0.12)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
          <span className="text-sm font-medium text-secondary tracking-wide">
            30+ Years of Textile Excellence
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6"
        >
          <span className="text-text-primary">Perfume </span>
          <span className="gradient-text">Processors</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Three decades of innovation in textile manufacturing, committed to
          quality and sustainability for our clients.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/our-history">
            <button className="glow-button text-base px-8 py-4">
              About Us
              <svg className="inline-block ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
          <Link href="/contact">
            <button
              className="px-8 py-4 rounded-full text-base font-semibold text-primary transition-all duration-300 hover:bg-primary/5 hover:scale-105"
              style={{
                border: "1px solid rgba(92,17,50,0.15)",
                background: "rgba(255,255,255,0.6)",
              }}
            >
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-text-muted"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
