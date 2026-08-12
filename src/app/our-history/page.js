import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

export const metadata = {
  title: "Our History | Perfume Processors",
  description: "Discover our commitment to sustainability in textile manufacturing. We reduce water consumption, enhance eco-friendly practices, and foster global partnerships.",
};

export default function OurHistoryPage() {
  return (
    <>
      <PageHeader
        title="Our History"
        subtitle="Three decades of excellence, innovation, and global partnerships in textile manufacturing."
      />

      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Image Placeholder */}
          <ScrollReveal>
            <div className="image-placeholder h-80 mb-16 rounded-2xl">
              <Image src="/reception.jpg" alt="Perfume Processors Reception" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" priority />
            </div>
          </ScrollReveal>

          {/* Content Paragraphs — exact copy from original site */}
          <div className="space-y-8">
            <ScrollReveal>
              <div className="glass-card p-8 sm:p-10">
                <p className="text-text-secondary leading-relaxed text-[0.95rem]">
                  For over three decades, Perfume Processors has established itself as a preeminent leader in textile manufacturing, delivering unparalleled expertise to clients worldwide. Our comprehensive manufacturing capabilities are supported by sophisticated production facilities featuring state-of-the-art technology and advanced industrial processes that have garnered international recognition and numerous industry accolades.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="glass-card p-8 sm:p-10">
                <p className="text-text-secondary leading-relaxed text-[0.95rem]">
                  Our elite team comprises highly specialized textile engineers, technical experts, and innovation specialists who consistently exceed industry standards in quality assurance and technical execution. This unwavering commitment to excellence has enabled us to forge enduring strategic partnerships with the world&apos;s most discerning brands, as evidenced by our industry-leading 98% client retention rate that demonstrates our exceptional value proposition.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="glass-card p-8 sm:p-10">
                <p className="text-text-secondary leading-relaxed text-[0.95rem]">
                  We have systematically developed robust collaborative networks with premier manufacturers and suppliers globally, establishing extensive operational hubs across strategic manufacturing centers throughout Asia. Our profound industry insights and carefully cultivated alliances empower us to deliver exceptional textile solutions while maintaining competitive market positioning for our diverse portfolio of clients, including prestigious luxury fashion enterprises, multinational retail corporations, and specialized textile procurement entities.
                </p>
              </div>
            </ScrollReveal>

            {/* Side-by-side image placeholders */}
            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="image-placeholder h-64 rounded-2xl">
                  <Image src="/facility-exterior.jpg" alt="Perfume Processors Manufacturing Facility" fill className="object-cover" sizes="(max-width: 768px) 100vw, 448px" />
                </div>
                <div className="image-placeholder h-64 rounded-2xl">
                  <Image src="/gallery/gallery-06.jpg" alt="Premium Textile Design" fill className="object-cover" sizes="(max-width: 768px) 100vw, 448px" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="glass-card p-8 sm:p-10">
                <p className="text-text-secondary leading-relaxed text-[0.95rem]">
                  Our technical innovation framework integrates cutting-edge methodologies with proprietary manufacturing processes, enabling unprecedented product performance and consistency. We implement rigorous quality control protocols at every production phase, employing advanced testing equipment and comprehensive validation procedures that consistently exceed international regulatory standards and client specifications.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="glass-card p-8 sm:p-10">
                <p className="text-text-secondary leading-relaxed text-[0.95rem]">
                  The company&apos;s strategic growth trajectory has been characterized by substantial investments in manufacturing infrastructure, technological advancement, and human capital development. This forward-thinking approach has positioned Perfume Processors at the forefront of emerging industry trends, including sustainable production methodologies, advanced material science applications, and digital manufacturing integration.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="glass-card p-8 sm:p-10">
                <p className="text-text-secondary leading-relaxed text-[0.95rem]">
                  Our operational excellence is further enhanced through sophisticated supply chain management systems that ensure optimal material sourcing, production efficiency, and timely delivery. We leverage proprietary logistics solutions and international distribution networks to provide seamless service delivery across diverse geographical markets and regulatory environments.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="glass-card p-8 sm:p-10">
                <p className="text-text-secondary leading-relaxed text-[0.95rem]">
                  Perfume Processors distinguishes itself through an unwavering focus on continuous improvement and technical innovation. Our dedicated research and development division consistently generates breakthrough textile formulations and manufacturing techniques that deliver exceptional performance characteristics while addressing evolving market demands for sustainability, durability, and aesthetic sophistication.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="glass-card p-8 sm:p-10">
                <p className="text-text-secondary leading-relaxed text-[0.95rem]">
                  The company&apos;s global market presence extends across six continents, serving diverse industry sectors including fashion apparel, industrial textiles, automotive applications, and specialized technical fabrics. This extensive operational footprint enables us to provide localized expertise while leveraging global manufacturing capabilities, creating a competitive advantage that benefits our international client portfolio.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
