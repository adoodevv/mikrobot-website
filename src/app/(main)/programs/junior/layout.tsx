import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Junior Program",
  description: "Building foundational robotics skills for ages 11-14. Develop comprehensive understanding of programming, electronics, and mechanical systems through engaging hands-on projects. Bridge exploration and mastery.",
  openGraph: {
    title: "Junior Robotics Program - Ages 11-14",
    description: "Building foundational robotics skills for ages 11-14. Develop comprehensive understanding of programming, electronics, and mechanical systems.",
    images: ["/junior.jpg"],
  },
};

export default function JuniorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

