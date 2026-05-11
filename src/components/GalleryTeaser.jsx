"use client";

import ScrollReveal from "./ScrollReveal";
import Link from "next/link";

export default function GalleryTeaser() {
  const images = [
    { label: "Printed Fabrics" },
    { label: "Dyed Textiles" },
    { label: "Raw Materials" },
    { label: "Finished Goods" },
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
            Browse through our high-quality fabrics that are perfect for all your needs.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <ScrollReveal key={img.label} delay={i * 0.1}>
              <div className="image-placeholder aspect-[3/4] relative group cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary-light/30">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium text-text-muted">{img.label}</span>
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
