import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elementary Program",
  description: "A gentle introduction to robotics for ages 6-10. Spark curiosity and creativity through playful exploration, age-appropriate projects, and visual programming. Perfect for young innovators starting their robotics journey.",
  openGraph: {
    title: "Elementary Robotics Program - Ages 6-10",
    description: "A gentle introduction to robotics for ages 6-10. Spark curiosity and creativity through playful exploration and guided activities.",
    images: ["/elementary.jpg"],
  },
};

export default function ElementaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

