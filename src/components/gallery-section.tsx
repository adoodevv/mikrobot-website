"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ExternalLink, X } from "lucide-react";

const images = [
   {
      src: "/images/gallery/team-building.png",
      alt: "Students working on a robot assembly",
      category: "Labs",
      span: "col-span-1 md:col-span-2 row-span-1"
   },
   {
      src: "/images/gallery/bambu.jpg",
      alt: "Close-up of Bambu Lab A1 with AMS Lite",
      category: "Equipment",
      span: "col-span-1 row-span-1"
   },
   {
      src: "/images/gallery/sumo-usa.png",
      alt: "Competition day presentation",
      category: "Events",
      span: "col-span-1 row-span-1"
   },
   {
      src: "/images/gallery/junior-teamwork.png",
      alt: "Robotics team working together",
      category: "Teamwork",
      span: "col-span-1 row-span-1 md:row-span-2"
   },
   {
      src: "/images/gallery/outreach-training.png",
      alt: "Outreach at the U.S. Embassy",
      category: "Education",
      span: "col-span-1 md:col-span-2 row-span-1"
   }
];

export function GallerySection() {
   const [selectedImage, setSelectedImage] = useState<(typeof images)[0] | null>(null);

   return (
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
               <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
                  <p className="text-gray-600 max-w-2xl">
                     A glimpse into our world-class facilities, events, and the innovative projects our students create.
                  </p>
               </div>
               <Button variant="outline" className="mt-4 md:mt-0 group" asChild>
                  <Link href="/gallery">
                     View Full Gallery
                  </Link>
               </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
               {images.map((image, index) => (
                  <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                     viewport={{ once: true, margin: "-50px" }}
                     className={cn(
                        "relative overflow-hidden rounded-lg cursor-pointer group",
                        image.span
                     )}
                     onClick={() => setSelectedImage(image)}
                  >
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                        <span className="text-white font-medium">{image.category}</span>
                     </div>
                     <Image
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover aspect-square md:aspect-auto transition-transform duration-500 group-hover:scale-110"
                        width={600}
                        height={400}
                     />
                  </motion.div>
               ))}
            </div>
         </div>

         <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
            <DialogContent className="max-w-4xl w-[90%] p-0 overflow-hidden bg-transparent border-none">
               <div className="relative">
                  <Button
                     variant="ghost"
                     size="icon"
                     className="absolute top-4 right-4 z-10 bg-black/30 hover:bg-black/50 text-white rounded-full"
                     onClick={() => setSelectedImage(null)}
                  >
                     <X className="h-5 w-5" />
                  </Button>
                  {selectedImage && (
                     <Image
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                        width={1200}
                        height={800}
                     />
                  )}
               </div>
            </DialogContent>
         </Dialog>
      </section>
   );
}