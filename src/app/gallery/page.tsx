"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

const images = [
   {
      src: "/images/gallery/team-building.png",
      alt: "Students working on a robot assembly",
      category: "Labs",
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
   }
];

const categories = ["All", "Labs", "Equipment", "Events", "Teamwork", "Education", "Projects"];

export default function GalleryPage() {
   const [selectedImage, setSelectedImage] = useState<(typeof images)[0] | null>(null);
   const [activeCategory, setActiveCategory] = useState("All");

   const filteredImages = activeCategory === "All"
      ? images
      : images.filter(image => image.category === activeCategory);

   return (
      <>
         {/* Hero Section */}
         <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
               <div className="max-w-3xl mx-auto text-center">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                     Gallery
                  </h1>
                  <p className="text-lg text-gray-600 mb-8">
                     Explore our world-class facilities, events, and the innovative projects
                     our students create at Mikrobot Academy.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                     {categories.map((category) => (
                        <Button
                           key={category}
                           variant={activeCategory === category ? "default" : "outline"}
                           onClick={() => setActiveCategory(category)}
                           className="mb-2"
                        >
                           {category}
                        </Button>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* Gallery Grid */}
         <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredImages.map((image, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative group cursor-pointer"
                        onClick={() => setSelectedImage(image)}
                     >
                        <div className="relative h-64 md:h-72 rounded-lg overflow-hidden">
                           <div className="absolute inset-0 bg-black/50 opacity-0 group-hover: opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                              <div className="text-white text-center p-4">
                                 <Badge className="mb-2">{image.category}</Badge>
                                 <p className="text-sm">{image.description}</p>
                              </div>
                           </div>
                           <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                           />
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* Image Modal */}
         <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
            <DialogContent className="max-w-4xl w-[90%] p-0 overflow-hidden bg-transparent border-none">
               {selectedImage && (
                  <div className="relative">
                     <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 z-10 bg-black/30 hover:bg-black/50 text-white rounded-full"
                        onClick={() => setSelectedImage(null)}
                     >
                        <X className="h-5 w-5" />
                     </Button>
                     <div className="relative h-[80vh]">
                        <Image
                           src={selectedImage.src}
                           alt={selectedImage.alt}
                           fill
                           className="object-cover"
                        />
                     </div>
                     <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                        <Badge className="mb-2">{selectedImage.category}</Badge>
                        <p className="text-sm">{selectedImage.description}</p>
                     </div>
                  </div>
               )}
            </DialogContent>
         </Dialog>
      </>
   );
}