"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const WROLearnFAB = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <Link href="https://wro-learn.org/en_us/welcome" target="_blank">
            <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    scale: isVisible ? 1 : 0.5,
                    y: isVisible ? 0 : 20,
                    pointerEvents: isVisible ? "auto" : "none"
                }}
                transition={{ duration: 0.3 }}
                className="fixed bottom-6 right-6 z-50 group cursor-pointer"
            >
                <div className="relative flex items-center bg-white border border-slate-200 shadow-lg rounded-full pl-4 pr-1 py-1 hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <span className="font-semibold text-slate-800 mr-3 text-sm">Check out WRO Learn!</span>
                    <div className="w-12 h-12 relative rounded-full overflow-hidden bg-sky-50 border border-slate-100">
                        <Image
                            src="/wro-learn.png"
                            alt="WRO Learn"
                            fill
                            className="object-contain p-1"
                        />
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default WROLearnFAB;
