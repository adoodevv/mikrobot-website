import HeroSection from "@/components/homepage/hero";
import Programs from "@/components/homepage/programs";
import Steps from "@/components/homepage/steps";
import Testimonials from "@/components/homepage/testimonials";
import Impact from "@/components/homepage/impact";
import Gallery from "@/components/homepage/gallery";
import News from "@/components/homepage/news";
import CTA from "@/components/homepage/cta";
import Contact from "@/components/homepage/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Mikrobot Academy offers comprehensive robotics education for students ages 6-18. Learn programming, electronics, and mechanical systems through hands-on projects. Join 500+ students and 30+ award-winning teams in building tomorrow's innovators.",
  openGraph: {
    title: "Mikrobot Academy - Building Tomorrow's Innovators Through Robotics",
    description: "Mikrobot Academy offers comprehensive robotics education for students ages 6-18. Learn programming, electronics, and mechanical systems through hands-on projects.",
    images: ["/hero.png"],
  },
};

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
