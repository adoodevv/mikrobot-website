import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore our gallery showcasing student projects, competitions, team building activities, and memorable moments at Mikrobot Academy. See our students in action building and programming robots.",
  openGraph: {
    title: "Gallery - Mikrobot Academy",
    description: "Explore our gallery showcasing student projects, competitions, and memorable moments at Mikrobot Academy.",
    images: ["/images/gallery/robofest2024.jpeg"],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

