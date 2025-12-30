"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface GalleryImage {
   id: string;
   src: string;
   alt: string;
}

const Gallery = () => {
   const [images, setImages] = useState<GalleryImage[]>([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      fetchImages();
   }, []);

   const fetchImages = async () => {
      try {
         const response = await fetch("/api/gallery");
         const data = await response.json();
         setImages(data.slice(0, 4)); // Show only first 4
      } catch (error) {
         console.error("Error fetching gallery images:", error);
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16 space-y-4">
               <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">Our moments</h2>
               <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  See what happens when young minds build together
               </p>
            </div>

            {isLoading ? (
               <div className="text-center py-20">
                  <div className="text-slate-600">Loading gallery...</div>
               </div>
            ) : (
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
                  {images.map((image, index) => (
                     <motion.div
                        key={image.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 group"
                     >
                        <Image
                           src={image.src}
                           alt={image.alt}
                           fill
                           className="object-cover transition-transform duration-500 group-hover:scale-105"
                           sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                     </motion.div>
                  ))}
               </div>
            )}

            <div className="flex justify-center">
               <Link
                  href="/gallery"
                  className="group inline-flex items-center gap-2 px-8 py-3 bg-sky-700 text-white rounded-md font-medium hover:bg-sky-800 transition-colors"
               >
                  View Full Gallery
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
               </Link>
            </div>
         </div>
      </section>
   );
}

export default Gallery;
