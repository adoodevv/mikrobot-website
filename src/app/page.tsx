import HeroSection from "@/components/homepage/hero";
import Programs from "@/components/homepage/programs";
import Steps from "@/components/homepage/steps";
import Testimonials from "@/components/homepage/testimonials";
import Impact from "@/components/homepage/impact";
import Gallery from "@/components/homepage/gallery";
import News from "@/components/homepage/news";
import CTA from "@/components/homepage/cta";
import Contact from "@/components/homepage/contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Programs />
      <Steps />
      <Testimonials />
      <Impact />
      <Gallery />
      <News />
      <CTA />
      <Contact />
    </>
  );
}
