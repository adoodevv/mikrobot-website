export function OrganizationSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://mikrobot-website.vercel.app/";

  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Mikrobot Academy",
    "description": "Robotics education platform providing comprehensive hands-on curriculum for students ages 6-18. Founded in 2012, we empower the next generation with technical skills and problem-solving abilities through robotics.",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "foundingDate": "2012",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Augustino Neto Rd. Council Close, Airport Residential Area",
      "addressCountry": "GH"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "operations@mikrobotacademy.com",
      "telephone": "+233-24-763-2002"
    },
    "sameAs": [
      // Add your social media links here when available
      // "https://www.facebook.com/mikrobotacademy",
      // "https://www.twitter.com/mikrobotacademy",
      // "https://www.instagram.com/mikrobotacademy",
    ],
    "offers": {
      "@type": "Offer",
      "description": "Robotics education programs for elementary, junior, and senior students"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

