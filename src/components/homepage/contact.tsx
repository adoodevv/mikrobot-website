"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const Contact = () => {
    const contactMethods = [
        {
            icon: <Mail className="w-8 h-8" />,
            title: "Email",
            description: "Send us a message anytime during business hours",
            action: "hello@mikrobotacademy.com",
            href: "mailto:hello@mikrobotacademy.com",
        },
        {
            icon: <Phone className="w-8 h-8" />,
            title: "Phone",
            description: "Call us to discuss which program fits your needs",
            action: "+233 24 763 2002",
            href: "tel:+233247632002",
        },
        {
            icon: <MapPin className="w-8 h-8" />,
            title: "Office",
            description: "Visit us in person to see our facilities and meet the team",
            action: "Augustino Neto Rd. Council Close, Airport Residential Area",
            href: "https://maps.google.com",
        },
    ];

    return (
        <section className="py-20 bg-white" id="contact">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="mb-16">
                    <span className="block text-sm font-semibold text-black mb-4 tracking-tight">
                        CONNECT
                    </span>
                    <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-6 tracking-tight">
                        Reach out
                    </h2>
                    <p className="text-lg text-slate-600 font-light">
                        We're here to answer your questions about programs and enrollment
                    </p>
                </div>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {contactMethods.map((method, index) => (
                        <div key={index} className="flex flex-col items-start">
                            <div className="mb-6 text-slate-900">
                                {method.icon}
                            </div>
                            <h3 className="text-2xl font-medium text-slate-900 mb-4 tracking-tight">
                                {method.title}
                            </h3>
                            <p className="text-slate-600 mb-8 font-light leading-relaxed">
                                {method.description}
                            </p>
                            <Link
                                href={method.href}
                                className="text-slate-900 font-medium hover:text-slate-700 transition-colors"
                            >
                                {method.action}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
