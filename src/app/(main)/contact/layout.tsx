import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Mikrobot Academy. Have questions about our robotics programs? Contact us via email, phone, or visit our location in Airport Residential Area, Accra. We're here to help you start your robotics journey.",
  openGraph: {
    title: "Contact Mikrobot Academy",
    description: "Get in touch with Mikrobot Academy. Have questions about our robotics programs? Contact us via email, phone, or visit our location.",
    images: ["/contact.jpeg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

