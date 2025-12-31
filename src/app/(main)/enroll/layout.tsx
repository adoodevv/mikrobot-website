import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enroll Now",
  description: "Enroll your child in Mikrobot Academy's robotics programs. Choose from elementary (ages 6-10), junior (ages 11-14), or senior (ages 15-18) programs. Start your child's journey in robotics education today.",
  openGraph: {
    title: "Enroll in Mikrobot Academy - Robotics Education",
    description: "Enroll your child in Mikrobot Academy's robotics programs. Choose from elementary, junior, or senior programs. Start your child's journey today.",
    images: ["/hero.png"],
  },
};

export default function EnrollLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

