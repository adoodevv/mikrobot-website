"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        quote: "The mentors here understand what it takes to build something real, and they push you to think bigger than you thought possible.",
        name: "Zoe Glover",
        role: "Senior student",
    },
    {
        id: 2,
        quote: "I came in knowing nothing about robotics. Now I'm designing circuits and writing code. The progression feels natural and the support is always there.",
        name: "Rehan Ashfaq",
        role: "Junior student",
    },
    {
        id: 3,
        quote: "My daughter found her passion here. She talks about robotics constantly now and her confidence has grown tremendously.",
        name: "Mrs. Akowuah",
        role: "Parent",
    },
];

const getInitials = (name: string) => {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toLowerCase();
};

const Testimonials = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">What students say</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Real voices from our community
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start"
                        >
                            <div className="flex space-x-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-black text-black" />
                                ))}
                            </div>

                            <p className="text-slate-900 text-lg leading-relaxed mb-8 flex-1">
                                "{testimonial.quote}"
                            </p>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-sm uppercase">
                                    {getInitials(testimonial.name)}
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900">{testimonial.name}</h4>
                                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;