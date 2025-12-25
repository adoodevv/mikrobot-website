import { Steps } from "@/components/homepage/steps";
import { GallerySection } from "@/components/gallery-section";
import HeroSection from "@/components/homepage/hero";
import { Programs } from "@/components/homepage/programs";
import NewsSection from "@/components/news-section";
import ProfilesSection from "@/components/profiles-section";
import CTASection from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Programs />
      <Steps />
      <ProfilesSection />
      <GallerySection />
      <NewsSection />
      <CTASection />
    </>
  );
}
