import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates",
  description: "Stay updated with the latest news, achievements, curriculum updates, events, and alumni stories from Mikrobot Academy. Discover how our students are shaping the future of robotics.",
  openGraph: {
    title: "News & Updates - Mikrobot Academy",
    description: "Stay updated with the latest news, achievements, curriculum updates, events, and alumni stories from Mikrobot Academy.",
    images: ["/hero.png"],
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

