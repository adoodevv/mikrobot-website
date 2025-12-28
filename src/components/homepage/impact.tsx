"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import CountUp from "@/components/ui/count-up";

const Impact = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
                    <div className="max-w-2xl">
                        <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-900 mb-4">Impact</h3>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 tracking-tight leading-tight">
                            We measure success by what our students achieve
                        </h2>
                    </div>
                    <div className="max-w-md lg:text-right space-y-6">
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Since our founding, we've trained hundreds of young innovators. Our students have won regional and national competitions. They've gone on to study engineering at top universities and launch their own tech ventures. These numbers represent real growth and real opportunity.
                        </p>
                        <div className="flex flex-wrap gap-4 lg:justify-end">
                            <button className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-200 text-base font-semibold rounded-md text-slate-900 bg-white hover:bg-slate-50 transition-colors">
                                Learn
                            </button>
                            <button className="inline-flex items-center justify-center space-x-2 text-base font-semibold text-slate-900 hover:text-sky-700 transition-colors group px-4 py-3.5">
                                <span>More</span>
                                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
                    {/* Card 1: Students trained (Tall, Left) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="row-span-2 rounded-2xl border border-slate-200 bg-white p-8 flex flex-col justify-between h-[400px] lg:h-full"
                    >
                        <h3 className="text-xl font-medium text-slate-900">Students trained</h3>
                        <div>
                            <span className="text-8xl font-semibold text-slate-900 tracking-tighter">
                                <CountUp end={500} suffix="+" duration={2.5} />
                            </span>
                            <div className="w-full h-px bg-slate-100 my-6" />
                            <p className="text-lg text-slate-600 text-right">
                                Young minds prepared for technology careers
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2: Image (Middle Top) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative overflow-hidden rounded-2xl bg-slate-100 min-h-[300px] lg:min-h-0"
                    >
                        <Image
                            src="/people/haqq.jpeg"
                            alt="Student walking"
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </motion.div>

                    {/* Card 3: Competition wins (Right Top) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="rounded-2xl border border-slate-200 bg-white p-8 flex flex-col justify-between min-h-[300px] lg:min-h-0"
                    >
                        <h3 className="text-xl font-medium text-slate-900">Competition wins</h3>
                        <div className="text-right">
                            <span className="text-8xl font-semibold text-slate-900 tracking-tighter">
                                <CountUp end={33} duration={2.5} />
                            </span>
                            <div className="w-full h-px bg-slate-100 my-6" />
                            <p className="text-sm text-slate-600">
                                International and national robotics competitions
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 4: Years operating (Middle Bottom) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="rounded-2xl border border-slate-200 bg-white p-8 flex flex-col justify-between min-h-[300px] lg:min-h-0"
                    >
                        <h3 className="text-xl font-medium text-slate-900">Years operating</h3>
                        <div className="text-right">
                            <span className="text-8xl font-semibold text-slate-900 tracking-tighter">
                                <CountUp end={12} duration={2.5} />
                            </span>
                            <div className="w-full h-px bg-slate-100 my-6" />
                            <p className="text-sm text-slate-600">
                                Dedicated to excellence in robotics education
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 5: Image (Right Bottom) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="relative overflow-hidden rounded-2xl bg-slate-100 min-h-[300px] lg:min-h-0"
                    >
                        <Image
                            src="/people/bright.jpeg"
                            alt="Students collaborating"
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Impact;