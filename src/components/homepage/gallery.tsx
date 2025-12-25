"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const images = [
   {
      src: "/images/gallery/team-building.png",
      alt: "Students working together",
   },
   {
      src: "/images/gallery/bambu.jpg",
      alt: "3D Printing Equipment",
   },
   {
      src: "/images/gallery/sumo-usa.png",
      alt: "Robotics Competition",
   },
   {
      src: "/images/gallery/junior-teamwork.png",
      alt: "Team Collaboration",
   },
   {
      src: "/images/gallery/outreach.jpeg",
      alt: "Community Outreach",
   },
   {
      src: "/images/gallery/nzulezu.jpeg",
      alt: "Field Trip",
   },
   {
      src: "/images/gallery/tema-training.jpeg",
      alt: "Training Session",
   },
   {
      src: "/compete.jpg",
      alt: "Student Competition",
   }
];

const Gallery = () => {
   const [selectedImage, setSelectedImage] = useState<(typeof images)[0] | null>(null);

   return (
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16 space-y-4">
               <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">Our moments</h2>
               <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  See what happens when young minds build together
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
               {images.map((image, index) => (
                  <motion.div
                     key={index}
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.4, delay: index * 0.05 }}
                     viewport={{ once: true, margin: "-50px" }}
                     className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 cursor-pointer group"
                     onClick={() => setSelectedImage(image)}
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
         </div>

         <AnimatePresence>
            {selectedImage && (
               <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
                  <DialogContent className="max-w-5xl w-[95vw] md:w-auto p-0 overflow-hidden bg-transparent border-none shadow-none flex items-center justify-center">
                     <div className="relative">
                        <button
                           className="absolute -top-12 right-0 md:-right-12 z-50 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-sm"
                           onClick={() => setSelectedImage(null)}
                        >
                           <X className="w-6 h-6" />
                        </button>
                        <motion.div
                           initial={{ opacity: 0, scale: 0.95 }}
                           animate={{ opacity: 1, scale: 1 }}
                           exit={{ opacity: 0, scale: 0.95 }}
                           transition={{ duration: 0.2 }}
                           className="relative rounded-lg overflow-hidden md:min-w-[500px]"
                        >
                           <Image
                              src={selectedImage.src}
                              alt={selectedImage.alt}
                              width={1200}
                              height={800}
                              className="w-full h-auto max-h-[85vh] object-contain"
                           />
                        </motion.div>
                     </div>
                  </DialogContent>
               </Dialog>
            )}
         </AnimatePresence>
      </section>
   );
}

export default Gallery;
