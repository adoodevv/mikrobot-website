import Image from "next/image";
import Link from "next/link";

const partners = [
    {
        name: "Brownstone Construction Firm",
        logo: "/partners/brownstone.png",
        link: "https://brownstoneltd.com/",
        tier: "Premium"
    },
    {
        name: "Zeepay",
        logo: "/partners/zeepay.png",
        link: "https://myzeepay.com/",
        tier: "Premium"
    },
    {
        name: "RAIL",
        logo: "/partners/rail.png",
        link: "https://rail.knust.edu.gh/",
        tier: "Gold"
    },
    {
        name: "CSIR-INSTI",
        logo: "/partners/csir.png",
        link: "https://insti.csir.org.gh/",
        tier: "Gold"
    },
    {
        name: "Ghana Robotics Academy Foundation",
        logo: "/partners/graf.jpeg",
        link: "https://foundation.ghanarobotics.org/",
        tier: "Gold"
    },
    {
        name: "KNUST Innovation Center",
        logo: "/partners/ic.png",
        link: "https://coeic.knust.edu.gh/",
        tier: "Silver"
    },
    {
        name: "ROBOFEST",
        logo: "/partners/robofest.png",
        link: "https://robofest.net/",
        tier: "Silver"
    },
    {
        name: "Pacific Clothing",
        logo: "/partners/pacificclothing.png",
        link: "https://www.pacificclothinggh.com/",
        tier: "Silver"
    },
    {
        name: "WRO",
        logo: "/partners/wro.webp",
        link: "https://wro-association.org/",
        tier: "Silver"
    },
    {
        name: "Ghana AI Research Network",
        logo: "/partners/gain.png",
        link: "https://ghanaai.org/",
        tier: "Silver"
    },
];

function Partners() {
    const premiumPartners = partners.filter(p => p.tier === "Premium");
    const goldPartners = partners.filter(p => p.tier === "Gold");
    const silverPartners = partners.filter(p => p.tier === "Silver");

    const PartnerGroup = ({ title, partners, className = "", logoHeight = "h-16" }: { title: string, partners: typeof premiumPartners, className?: string, logoHeight?: string }) => (
        <div className={`border border-4 border-slate-200 bg-white p-8 flex flex-col items-center justify-center ${className}`}>
            <h3 className={`text-xl font-bold mb-8 tracking-wider ${title === "Premium" ? "text-sky-600" :
                    title === "Gold" ? "text-yellow-500" : "text-slate-500"
                }`}>
                {title}
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-8 w-full">
                {partners.map((partner) => (
                    <Link
                        key={partner.name}
                        href={partner.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform hover:scale-105 duration-300"
                    >
                        <div className="relative">
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className={`${logoHeight} w-auto object-contain`}
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );

    return (
        <div className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col items-center justify-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">Our Partners</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {/* Left Column - Premium */}
                    <PartnerGroup
                        title="Premium"
                        partners={premiumPartners}
                        className="h-full"
                        logoHeight="h-18"
                    />

                    {/* Right Column - Gold & Others */}
                    <div className="flex flex-col gap-6">
                        <PartnerGroup
                            title="Gold"
                            partners={goldPartners}
                            logoHeight="h-22"
                        />
                        <PartnerGroup
                            title="Others"
                            partners={silverPartners}
                            logoHeight="h-14"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Partners;
