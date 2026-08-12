"use client";

import ScrollReveal from "./ScrollReveal";
import Link from "next/link";
import Image from "next/image";

export default function GalleryTeaser() {
  const images = [
    { src: "/gallery/gallery-06.jpg", label: "Ornate Floral Mandala" },
    { src: "/gallery/gallery-11.jpg", label: "Gold Magnolia" },
    { src: "/gallery/gallery-27.jpg", label: "Teal Spider Lily" },
    { src: "/gallery/gallery-30.jpg", label: "Crimson Ankara" },
  ];

  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-text-primary">Fabric </span>
            <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Browse through our premium African wax print, Ankara, and floral textile designs.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <ScrollReveal key={img.label} delay={i * 0.1}>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg">
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-semibold">{img.label}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12">
          <Link href="/gallery">
            <button className="glow-button text-sm">
              View Full Gallery
              <svg className="inline-block ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
