import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Chairman's Desk | Perfume Processors",
  description: "A message from Pravin Nandaniya, Chairman of Perfume Group, on sustainability and the future of textile manufacturing.",
};

export default function ChairmansDeskPage() {
  return (
    <>
      <PageHeader
        title="Chairman's Desk"
        subtitle="A vision for sustainable growth in the textile industry."
      />

      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Chairman Photo Placeholder */}
            <ScrollReveal className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="image-placeholder h-80 rounded-2xl mb-6">
                  <img src="/Chairman.jpeg" />
                  <span>Chairman Photo</span>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-text-primary">Pravin Nandaniya</h3>
                  <p className="text-sm text-text-secondary">Chairman, Perfume Group</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Chairman's Letter */}
            <ScrollReveal className="lg:col-span-2" delay={0.15}>
              <div className="glass-card p-8 sm:p-12 space-y-6">
                {/* Decorative quote mark */}
                <div className="text-6xl font-serif leading-none gradient-text opacity-30">&ldquo;</div>

                <p className="text-text-secondary leading-relaxed text-[0.95rem]">
                  In today&apos;s dynamic world, where industries evolve at an unprecedented pace, one truth remains steadfast: Sustainability is imperative for growth. As a leader in the textile industry, we understand that progress is not just about expanding our operations or increasing production—it is about building a future where business success goes hand in hand with environmental responsibility, ethical practices, and social well-being. Our comprehensive sustainability framework integrates advanced resource optimization technologies with strategic supply chain innovations, enabling us to deliver exceptional textile solutions while minimizing environmental impact.
                </p>

                <p className="text-text-secondary leading-relaxed text-[0.95rem]">
                  At Perfume Group, we believe that sustainability is not an option but a necessity. The textile industry has long been associated with significant environmental challenges, from water consumption and chemical usage to carbon emissions and waste generation. As a responsible corporate entity, we have embraced the challenge of transforming these hurdles into opportunities for innovation and positive impact.
                </p>

                <p className="text-text-secondary leading-relaxed text-[0.95rem]">
                  We believe that true progress is achieved when businesses thrive alongside communities and ecosystems. By prioritizing responsible sourcing, reducing our carbon footprint, and championing circular fashion, we are not only meeting today&apos;s demands but also securing a healthier world for generations to come.
                </p>

                <p className="text-text-secondary leading-relaxed text-[0.95rem]">
                  This journey is only possible with the support of our employees, partners, and customers. I extend my deepest appreciation to each of you for your dedication and trust. Together, we will continue to shape a more sustainable and prosperous textile industry.
                </p>

                <p className="text-text-secondary leading-relaxed text-[0.95rem]">
                  Let us continue on this path with determination, knowing that every step we take towards sustainability is a step towards lasting growth and a better world for future generations.
                </p>

                {/* Signature */}
                <div className="pt-6 border-t border-primary/5">
                  <p className="font-bold text-text-primary">Pravin Nandaniya</p>
                  <p className="text-sm text-text-secondary">Chairman, Perfume Group</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
