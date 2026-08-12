import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

export const metadata = {
  title: "Gallery | Perfume Processors",
  description: "Explore our stunning collection of African wax print, Ankara, Kitenge, batik, and floral textile designs manufactured with precision and artistry.",
};

const galleryItems = [
  { src: "/gallery/gallery-06.jpg", label: "Ornate Floral Mandala" },
  { src: "/gallery/gallery-11.jpg", label: "Gold Magnolia on Black" },
  { src: "/gallery/gallery-27.jpg", label: "Teal Spider Lily & Butterflies" },
  { src: "/gallery/gallery-30.jpg", label: "Crimson Ankara Fan Motif" },
  { src: "/gallery/gallery-17.jpg", label: "Midnight Copper Orchids" },
  { src: "/gallery/gallery-12.jpg", label: "Coral Hibiscus on Cream" },
  { src: "/gallery/gallery-01.jpg", label: "Blue Batik Starburst" },
  { src: "/gallery/gallery-26.jpg", label: "Bronze Swirling Rings" },
  { src: "/gallery/gallery-02.jpg", label: "Golden Peacock Print" },
  { src: "/gallery/gallery-03.jpg", label: "Orange Greek Key Wax Print" },
  { src: "/gallery/gallery-05.jpg", label: "Pink & White Elephants" },
  { src: "/gallery/gallery-28.jpg", label: "Batik Lotus on Black" },
  { src: "/gallery/gallery-29.jpg", label: "Purple Fan Ankara" },
  { src: "/gallery/gallery-14.jpg", label: "Teal Coral Poppies" },
  { src: "/gallery/gallery-15.jpg", label: "Pink Paisley Elegance" },
  { src: "/gallery/gallery-32.jpg", label: "Blue & Red Floral Ankara" },
  { src: "/gallery/gallery-07.jpg", label: "Purple Floral on Gold" },
  { src: "/gallery/gallery-09.jpg", label: "Copper Orchid on Brown" },
  { src: "/gallery/gallery-16.jpg", label: "Orange Paisley Garden" },
  { src: "/gallery/gallery-19.jpg", label: "Kente Green Patchwork" },
  { src: "/gallery/gallery-20.jpg", label: "Kente Orange & Turquoise" },
  { src: "/gallery/gallery-21.jpg", label: "Abstract Teal & Copper Swirls" },
  { src: "/gallery/gallery-04.jpg", label: "Orange Batik Starburst" },
  { src: "/gallery/gallery-08.jpg", label: "Navy Retro Floral" },
  { src: "/gallery/gallery-10.jpg", label: "Teal Dusty Rose Florals" },
  { src: "/gallery/gallery-13.jpg", label: "Burgundy Sunflower Print" },
  { src: "/gallery/gallery-23.jpg", label: "Blue & Gold Wave Dots" },
  { src: "/gallery/gallery-31.jpg", label: "Teal Sunflower Medallions" },
  { src: "/gallery/gallery-33.jpg", label: "Black Magenta Blossoms" },
  { src: "/gallery/gallery-18.jpg", label: "Purple Lavender Waves" },
  { src: "/gallery/gallery-24.jpg", label: "Abstract Pebble Motifs" },
  { src: "/gallery/gallery-25.jpg", label: "Neon Pebble Pop Art" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="A visual showcase of our premium African wax print, Ankara, Kitenge, batik, and floral textile designs."
      />

      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Masonry-style grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryItems.map((item, i) => (
              <ScrollReveal key={item.src} delay={(i % 4) * 0.06}>
                <div className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-2xl">
                  <div className="relative w-full">
                    <Image
                      src={item.src}
                      alt={item.label}
                      width={400}
                      height={500}
                      className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      {...(i < 8 ? { priority: true } : {})}
                    />
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end p-4">
                    <span className="text-white text-sm font-semibold tracking-wide">
                      {item.label}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
