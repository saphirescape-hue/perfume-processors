"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-28 pb-20 px-6">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] opacity-20 pointer-events-none blur-3xl rounded-full"
        style={{ background: "radial-gradient(circle, rgba(233,30,99,0.25) 0%, rgba(92,11,50,0.15) 50%, transparent 80%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto w-full text-center">
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
          transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6"
        >
          <span className="text-text-primary">Perfume </span>
          <span className="gradient-text">Processors</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Three decades of innovation in textile manufacturing, creating high-quality African wax prints, Ankara, and sustainable fabrics.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link href="/gallery">
            <button className="glow-button text-base px-8 py-4">
              Explore Gallery
              <svg className="inline-block ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
          <Link href="/our-history">
            <button
              className="px-8 py-4 rounded-full text-base font-semibold text-primary transition-all duration-300 hover:bg-primary/5 hover:scale-105"
              style={{
                border: "1px solid rgba(92,17,50,0.15)",
                background: "rgba(255,255,255,0.6)",
              }}
            >
              Our History
            </button>
          </Link>
        </motion.div>

        {/* Hero Aesthetic Featured Image Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
          style={{
            border: "1px solid rgba(255, 255, 255, 0.8)",
            boxShadow: "0 25px 50px -12px rgba(92, 11, 50, 0.15), 0 0 40px rgba(233, 30, 99, 0.08)",
          }}
        >
          <div className="relative h-64 sm:h-80 md:h-[400px] w-full overflow-hidden group">
            <Image
              src="/gallery/gallery-11.jpg"
              alt="Featured Gold Magnolia Fabric Design"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
              sizes="(max-width: 1200px) 100vw, 1024px"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />

            {/* Floating Glass Label Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-left">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-pink-300">
                  Featured Masterpiece
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                  Gold Magnolia on Black
                </h3>
              </div>
              <Link href="/gallery">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-white backdrop-blur-md bg-white/20 border border-white/30 hover:bg-white/30 transition-colors">
                  View in Gallery
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
