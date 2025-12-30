"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface GalleryImage {
   id: string;
   src: string;
   alt: string;
   category: string;
   description: string | null;
}

const categories = ["All", "Robofest", "Equipment", "Events", "Teamwork", "Education", "Projects"];

export default function GalleryPage() {
   const [activeCategory, setActiveCategory] = useState("All");
   const [images, setImages] = useState<GalleryImage[]>([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      fetchImages();
   }, []);

   const fetchImages = async () => {
      try {
         const response = await fetch("/api/gallery");
         const data = await response.json();
         setImages(data);
      } catch (error) {
         console.error("Error fetching gallery images:", error);
      } finally {
         setIsLoading(false);
      }
   };

   const filteredImages = activeCategory === "All"
      ? images
      : images.filter(image => image.category === activeCategory);

   return (
      <main className="flex flex-col bg-slate-50 min-h-screen">
         {/* Hero Section */}
         <section className="pt-32 pb-16 bg-white border-b border-slate-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
               <div className="max-w-3xl mx-auto text-center">
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                     Our <span className="text-sky-700">Gallery</span>
                  </h1>
                  <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                     Explore our world-class facilities, competitive events, and the innovative projects our students create at Mikrobot Academy.
                  </p>

                  {/* Category Filter */}
                  <div className="flex flex-wrap justify-center gap-2">
                     {categories.map((category) => (
                        <button
                           key={category}
                           onClick={() => setActiveCategory(category)}
                           className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                              ? "bg-sky-700 text-white shadow-md transform scale-105"
                              : "bg-white text-slate-600 border border-slate-200 hover:border-sky-700 hover:text-sky-700"
                              }`}
                        >
                           {category}
                        </button>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* Gallery Mosaic */}
         <section className="py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
               {isLoading ? (
                  <div className="text-center py-20">
                     <div className="text-slate-600">Loading gallery...</div>
                  </div>
               ) : filteredImages.length === 0 ? (
                  <div className="text-center py-20">
                     <div className="text-slate-600">No images found in this category</div>
                  </div>
               ) : (
                  <motion.div
                     layout
                     className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
                  >
                     <AnimatePresence>
                        {filteredImages.map((image) => (
                           <motion.div
                              layout
                              key={image.id}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              transition={{ duration: 0.3 }}
                              className="break-inside-avoid relative overflow-hidden rounded-2xl bg-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
                           >
                              <Image
                                 src={image.src}
                                 alt={image.alt}
                                 width={800}
                                 height={600}
                                 className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                              />
                           </motion.div>
                        ))}
                     </AnimatePresence>
                  </motion.div>
               )}
            </div>
         </section>
      </main>
   );
}