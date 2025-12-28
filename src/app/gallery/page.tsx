"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
   {
      src: "/images/gallery/robofest2024.jpeg",
      alt: "Students working on a robot assembly",
      category: "Robofest",
      description: "Junior program students collaborating on building their competition robot"
   },
   {
      src: "/images/gallery/team-building.png",
      alt: "Students working on a robot assembly",
      category: "Teamwork",
      description: "Junior program students collaborating on building their competition robot"
   },
   {
      src: "/images/gallery/bambu.jpg",
      alt: "Close-up of robot arm mechanisms",
      category: "Equipment",
      description: "State-of-the-art 3D Printer(Bambu Lab A1 with AMS Lite)"
   },
   {
      src: "/images/gallery/outreach.jpeg",
      alt: "Students Outreach",
      category: "Events",
      description: "Students on an event at the U.S. Embassy, where they showcased their knowledge and inspired their peers."
   },
   {
      src: "/images/gallery/junior-teamwork.png",
      alt: "Robotics team working together",
      category: "Teamwork",
      description: "Junior program team collaborating on their Robofest Game Preparations"
   },
   {
      src: "/images/gallery/tema-training.jpeg",
      alt: "Student programming session",
      category: "Education",
      description: "Elementary students learning basic programming concepts"
   },
   {
      src: "/images/gallery/nzulezu.jpeg",
      alt: "Innovative project showcase",
      category: "Projects",
      description: "Aquarian Smart Labs Presents to you Nzulezu as a smart city 💡"
   },
   {
      src: "/images/gallery/sumo-usa.png",
      alt: "Sumo Robot Competition",
      category: "Events",
      description: "Our students competing at the international level."
   }
];

const categories = ["All", "Robofest", "Equipment", "Events", "Teamwork", "Education", "Projects"];

export default function GalleryPage() {
   const [activeCategory, setActiveCategory] = useState("All");

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
               <motion.div
                  layout
                  className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
               >
                  <AnimatePresence>
                     {filteredImages.map((image, index) => (
                        <motion.div
                           layout
                           key={image.src}
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
            </div>
         </section>
      </main>
   );
}