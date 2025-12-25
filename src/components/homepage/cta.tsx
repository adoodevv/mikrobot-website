"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const CTA = () => {
   return (
      <section className="py-16 md:py-24 bg-white">
         <div className="container mx-auto px-4 sm:px-6">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative overflow-hidden rounded-2xl px-6 py-16 sm:px-12 sm:py-24 text-center shadow-xl"
            >
               {/* Background Image */}
               <Image
                  src="/cta.jpeg"
                  alt="Background"
                  fill
                  className="object-cover"
               />

               {/* Overlay */}
               <div className="absolute inset-0 bg-black/50" />

               <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
                     Ready to build your future
                  </h2>
                  <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto font-light">
                     Join Mikrobot Academy and discover what you're capable of creating.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                     <Link
                        href="/enroll"
                        className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-900 font-semibold rounded-md hover:bg-slate-50 transition-colors duration-300"
                     >
                        Enroll
                     </Link>
                     <Link
                        href="/contact"
                        className="w-full sm:w-auto px-8 py-3.5 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-md hover:bg-white/20 transition-colors duration-300"
                     >
                        Contact
                     </Link>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export default CTA;