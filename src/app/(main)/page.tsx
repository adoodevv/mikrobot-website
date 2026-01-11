import HeroSection from "@/components/homepage/hero";
import Partners from "@/components/homepage/partners";
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
  title: "Robotics Education in Ghana | STEM & Coding for Kids",
  description: "Mikrobot Academy offers premier robotics education in Ghana for students ages 6-18. Master programming, electronics, and mechanical engineering through hands-on projects and competitions.",
  openGraph: {
    title: "Mikrobot Academy - Leading Robotics Education in Ghana",
    description: "Mikrobot Academy offers comprehensive robotics education for students ages 6-18. Learn programming, electronics, and mechanical systems through hands-on projects.",
    images: ["/hero.png"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <Partners />
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
