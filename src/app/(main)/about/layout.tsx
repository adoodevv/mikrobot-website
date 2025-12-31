import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Mikrobot Academy's mission to inspire innovation through hands-on robotics learning. Founded in 2012, we've empowered thousands of students with technical skills and problem-solving abilities. Discover our story, values, and commitment to building tomorrow's innovators.",
  openGraph: {
    title: "About Mikrobot Academy - Building Tomorrow's Innovators",
    description: "Learn about Mikrobot Academy's mission to inspire innovation through hands-on robotics learning. Founded in 2012, we've empowered thousands of students.",
    images: ["/about.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

