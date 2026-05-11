import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import FeatureCards from "@/components/FeatureCards";
import HeritageSection from "@/components/HeritageSection";
import GalleryTeaser from "@/components/GalleryTeaser";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="section-divider" />
      <StatsBar />
      <div className="section-divider" />
      <HeritageSection />
      <div className="section-divider" />
      <FeatureCards />
      <div className="section-divider" />
      <GalleryTeaser />
      <div className="section-divider" />
      <CTASection />
    </>
  );
}
