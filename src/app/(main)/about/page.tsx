import AboutClient from "@/components/about/AboutClient";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "About Us - Mikrobot Academy",
   description: "Learn about our mission to empower the next generation of innovators through robotics and STEM education in Ghana. Discover our history, values, and impact.",
   openGraph: {
      title: "About Mikrobot Academy - Empowering Innovators",
      description: "Mikrobot Academy is dedicated to empowering the next generation with the skills, confidence, and curiosity to shape the future through robotics.",
      images: ["/about.jpg"],
   },
};

export default function AboutPage() {
   return <AboutClient />;
}