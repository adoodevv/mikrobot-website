import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senior Program",
  description: "Advanced robotics education for ages 15-18. Master professional-grade tools, AI, machine learning, and computer vision. Prepare for university engineering programs and careers in robotics technology.",
  openGraph: {
    title: "Senior Robotics Program - Ages 15-18",
    description: "Advanced robotics education for ages 15-18. Master professional-grade tools and prepare for university engineering programs and careers.",
    images: ["/senior.jpg"],
  },
};

export default function SeniorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

