import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

export const metadata = {
  title: "Infrastructure & Capabilities | Perfume Processors",
  description: "Explore our advanced textile manufacturing capabilities focused on sustainability, quality, and innovation.",
};

export default function InfrastructurePage() {
  return (
    <>
      <PageHeader
        title="Infrastructure & Capabilities"
        subtitle="State-of-the-art manufacturing facilities with advanced technology and sustainable processes."
      />

      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section 1: Quality & Precision */}
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div className="glass-card p-8 sm:p-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 text-primary-light"
                  style={{ background: "rgba(233,30,99,0.06)", border: "1px solid rgba(233,30,99,0.1)" }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4">Quality & Precision</h3>
                <p className="text-text-secondary leading-relaxed text-[0.95rem]">
                  Perfume Processors consistently delivers manufacturing precision that unequivocally defines the industry standard. Our comprehensive quality control frameworks and sophisticated printing technologies enable us to consistently produce exceptional results that surpass conventional market expectations. In the critical domains of color matching and digital sampling, we implement advanced spectrophotometric analysis and proprietary calibration techniques to provide expedited, highly accurate solutions that maintain optimal project momentum and ensure seamless production continuity.
                </p>
              </div>
              <div className="image-placeholder h-full min-h-[280px] rounded-2xl">
                <Image src="/factory-machinery.jpg" alt="Quality Control & Precision Manufacturing" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 576px" />
              </div>
            </div>
          </ScrollReveal>

          {/* Section 2: Transparency */}
          <ScrollReveal>
            <div className="glass-card p-8 sm:p-10 mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-4">Transparent Communication</h3>
              <p className="text-text-secondary leading-relaxed text-[0.95rem]">
                Throughout each production phase, we maintain transparent communication protocols delivering real-time progress updates through our integrated digital monitoring systems. This enterprise-wide commitment to informational transparency empowers our clients with comprehensive visibility across manufacturing operations, ensuring alignment with strategic objectives and facilitating proactive decision-making capabilities.
              </p>
            </div>
          </ScrollReveal>

          {/* Section 3: Technical Support */}
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div className="image-placeholder h-full min-h-[280px] rounded-2xl">
                <Image src="/printing-machine.jpg" alt="Textile Printing Machine" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 576px" />
              </div>
              <div className="glass-card p-8 sm:p-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 text-primary-light"
                  style={{ background: "rgba(233,30,99,0.06)", border: "1px solid rgba(233,30,99,0.1)" }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4">Dedicated Technical Support</h3>
                <p className="text-text-secondary leading-relaxed text-[0.95rem]">
                  Our dedicated technical support infrastructure employs industry-leading specialists who implement streamlined scheduling methodologies to guarantee an optimized client experience from initial concept development through final product delivery. This unwavering commitment to operational excellence has secured our position as the preferred manufacturing partner for prestigious global brands who rely on our established track record of technical precision and exceptional service delivery.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Section 4: Sustainability */}
          <ScrollReveal>
            <div className="glass-card p-8 sm:p-10 mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 opacity-10 pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(233,30,99,0.2) 0%, transparent 70%)" }} />
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-secondary mb-6"
                style={{ background: "rgba(233,30,99,0.06)", border: "1px solid rgba(233,30,99,0.1)" }}>
                Sustainability
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Transformative Sustainability Initiatives</h3>
              <p className="text-text-secondary leading-relaxed text-[0.95rem] mb-6">
                Perfume Processors drives transformative sustainability initiatives across the global textile industry through technological innovation and advanced manufacturing processes. Our proprietary sustainable production methodologies incorporate water reclamation systems, energy optimization protocols, and chemical reduction technologies that significantly minimize environmental impact while maintaining superior product performance characteristics. This integrated approach to environmental stewardship demonstrates our capacity to achieve substantial ecological improvements without compromising manufacturing efficiency or product quality.
              </p>
              <p className="text-text-secondary leading-relaxed text-[0.95rem]">
                Through strategic partnerships with sustainability-focused material suppliers, advanced technology providers, and international certification organizations, we implement comprehensive environmental management systems that establish new performance benchmarks for responsible manufacturing practices. Our innovative approaches to sustainable textile production incorporate circular economy principles, biodegradable finishing agents, and energy-efficient manufacturing technologies that collectively reduce resource consumption while enhancing product lifecycle performance.
              </p>
            </div>
          </ScrollReveal>

          {/* Image row */}
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="image-placeholder h-56 rounded-2xl">
                <Image src="/warehouse-interior.jpg" alt="Manufacturing Warehouse Facility" fill className="object-cover" sizes="(max-width: 768px) 100vw, 384px" />
              </div>
              <div className="image-placeholder h-56 rounded-2xl">
                <Image src="/facility-exterior-2.jpg" alt="Factory Building & Power Infrastructure" fill className="object-cover" sizes="(max-width: 768px) 100vw, 384px" />
              </div>
              <div className="image-placeholder h-56 rounded-2xl">
                <Image src="/eco-friendly.jpg" alt="Eco-friendly Renewable Energy Production" fill className="object-cover" sizes="(max-width: 768px) 100vw, 384px" />
              </div>
            </div>
          </ScrollReveal>

          {/* Section 5: R&D */}
          <ScrollReveal>
            <div className="glass-card p-8 sm:p-10 mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-4">Research & Development</h3>
              <p className="text-text-secondary leading-relaxed text-[0.95rem]">
                Our research and development division continuously pioneers breakthrough technologies in materials science, production methodologies, and quality assurance techniques. By integrating advanced computational modeling with practical manufacturing expertise, we develop innovative solutions that address complex technical challenges while maintaining exceptional quality standards. This systematic approach to innovation enables us to consistently deliver high-performance textiles that meet increasingly demanding technical specifications and sustainability requirements.
              </p>
            </div>
          </ScrollReveal>

          {/* Section 6: Global Facilities */}
          <ScrollReveal>
            <div className="glass-card p-8 sm:p-10 mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-4">Global Manufacturing Facilities</h3>
              <p className="text-text-secondary leading-relaxed text-[0.95rem]">
                The company maintains state-of-the-art manufacturing facilities strategically positioned across key global production hubs, enabling us to optimize supply chain efficiency while maintaining rigorous quality control standards. Our manufacturing infrastructure incorporates advanced automation systems, precision control technologies, and sophisticated testing equipment that collectively ensure consistent product excellence across diverse production environments.
              </p>
            </div>
          </ScrollReveal>

          {/* Section 7: Industry Leadership */}
          <ScrollReveal>
            <div className="glass-card p-8 sm:p-10">
              <h3 className="text-xl font-bold text-text-primary mb-4">Industry Leadership</h3>
              <p className="text-text-secondary leading-relaxed text-[0.95rem]">
                Perfume Processors&apos; leadership position within the global textile industry is reinforced through our active participation in international standards development, industry consortiums, and technical advisory boards. This engagement with key industry stakeholders enables us to anticipate emerging market requirements, contribute to technical advancement initiatives, and maintain our position at the forefront of textile manufacturing innovation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
