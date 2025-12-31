import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Programs",
  description: "Explore Mikrobot Academy's comprehensive robotics curriculum designed for students ages 6-18. From elementary introduction to advanced senior programs, discover progressive learning paths that grow with your child.",
  openGraph: {
    title: "Robotics Programs at Mikrobot Academy",
    description: "Explore Mikrobot Academy's comprehensive robotics curriculum designed for students ages 6-18. Progressive learning paths from elementary to advanced programs.",
    images: ["/elementary.jpg"],
  },
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

