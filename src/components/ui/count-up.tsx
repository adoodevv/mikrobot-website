"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface CountUpProps {
    end: number;
    duration?: number;
    delay?: number;
    prefix?: string;
    suffix?: string;
    className?: string;
}

export default function CountUp({
    end,
    duration = 2.5,
    delay = 0,
    prefix = "",
    suffix = "",
    className = "",
}: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "0px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, end, {
                duration: duration,
                delay: delay,
                ease: "easeOut",
                onUpdate: (latest) => {
                    if (ref.current) {
                        ref.current.textContent = `${prefix}${Math.floor(latest)}${suffix}`;
                    }
                },
            });

            return () => controls.stop();
        }
    }, [isInView, end, duration, delay, prefix, suffix]);

    return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
}
