import { AcademySection } from "@/components/academy-section";
import { GallerySection } from "@/components/gallery-section";
import HeroSection from "@/components/hero-section";
import { HighlightsSection } from "@/components/highlights-section";
import NewsSection from "@/components/news-section";
import ProfilesSection from "@/components/profiles-section";
import CTASection from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <AcademySection />
      <ProfilesSection />
      <GallerySection />
      <NewsSection />
      <CTASection />
    </>
  );
}
