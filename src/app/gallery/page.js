import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Gallery | Perfume Processors",
  description: "Explore our advanced textile manufacturing capabilities focused on sustainability, quality, and innovation.",
};

const galleryItems = [
  { label: "Printed Cotton Fabrics" },
  { label: "Dyed Polyester Textiles" },
  { label: "Silk Blend Materials" },
  { label: "Raw Cotton Bales" },
  { label: "Finished Garment Fabric" },
  { label: "Color Matching Lab" },
  { label: "Weaving Process" },
  { label: "Quality Testing" },
  { label: "Sustainable Dyeing" },
  { label: "Pattern Design" },
  { label: "Fabric Rolls" },
  { label: "Shipping & Logistics" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="A visual showcase of our high-quality fabrics, manufacturing processes, and facilities."
      />

      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, i) => {
              // Varying heights for visual interest
              const heights = ["h-56", "h-72", "h-64", "h-80", "h-56", "h-72", "h-64", "h-56", "h-80", "h-64", "h-72", "h-56"];
              return (
                <ScrollReveal key={item.label} delay={(i % 4) * 0.08}>
                  <div className={`image-placeholder ${heights[i]} rounded-2xl group cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary-light/20`}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
