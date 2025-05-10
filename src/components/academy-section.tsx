"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";

const programs = [
   {
      id: "elementary",
      title: "Elementary Program",
      ageRange: "Ages 6-10",
      description: "A playful introduction to robotics fundamentals through interactive projects designed for young minds. Students learn basic programming concepts while building simple robots.",
      features: [
         "Block-based programming languages",
         "Simple robot construction kits",
         "Guided discovery learning",
         "Teamwork and communication skills"
      ],
      image: "https://images.pexels.com/photos/8363104/pexels-photo-8363104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: "from-blue-400 to-sky-300"
   },
   {
      id: "junior",
      title: "Junior Program",
      ageRange: "Ages 11-14",
      description: "An intermediate curriculum focused on developing technical skills and computational thinking. Students work on more complex projects involving sensors and automation.",
      features: [
         "Text-based programming languages",
         "Advanced sensor integration",
         "Problem-solving challenges",
         "Introduction to AI concepts"
      ],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: "from-purple-400 to-indigo-400"
   },
   {
      id: "senior",
      title: "Senior Program",
      ageRange: "Ages 15-18",
      description: "A comprehensive program preparing students for industry or academic pursuits in robotics. Covers advanced engineering principles and includes real-world applications.",
      features: [
         "Industry-standard programming",
         "Complex robotics systems",
         "Independent research projects",
         "Competition preparation"
      ],
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: "from-emerald-400 to-green-300"
   }
];

export function AcademySection() {
   const [activeTab, setActiveTab] = useState("junior");

   return (
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Academy Programs</h2>
               <p className="text-gray-600 max-w-2xl mx-auto">
                  Tailored robotics education for every age group, designed to nurture technical skills, creativity, and innovation.
               </p>
            </div>

            <Tabs
               defaultValue="junior"
               value={activeTab}
               onValueChange={setActiveTab}
               className="w-full"
            >
               <div className="flex justify-center mb-12">
                  <TabsList className="grid w-full max-w-md grid-cols-3">
                     {programs.map((program) => (
                        <TabsTrigger key={program.id} value={program.id} className="text-sm md:text-base">
                           {program.id.charAt(0).toUpperCase() + program.id.slice(1)}
                        </TabsTrigger>
                     ))}
                  </TabsList>
               </div>

               {programs.map((program) => (
                  <TabsContent key={program.id} value={program.id} className="w-full">
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                     >
                        <div className="order-2 lg:order-1">
                           <div className="space-y-6">
                              <div>
                                 <h3 className="text-2xl font-bold">{program.title}</h3>
                                 <p className="text-sm font-medium text-gray-500 mt-1">
                                    {program.ageRange}
                                 </p>
                              </div>

                              <p className="text-gray-600">{program.description}</p>

                              <ul className="space-y-3">
                                 {program.features.map((feature, index) => (
                                    <li key={index} className="flex items-center">
                                       <div className="h-2 w-2 rounded-full bg-gray-400 mr-3"></div>
                                       <span>{feature}</span>
                                    </li>
                                 ))}
                              </ul>

                              <Button className="mt-6 group">
                                 Learn More
                                 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </Button>
                           </div>
                        </div>

                        <div className="order-1 lg:order-2">
                           <div className="relative overflow-hidden rounded-2xl shadow-xl">
                              <div className={cn("absolute inset-0 bg-gradient-to-tr", program.color, "opacity-20")} />
                              <Image
                                 src={program.image}
                                 alt={program.title}
                                 width={600}
                                 height={400}
                                 className="w-full h-[300px] md:h-[400px] object-cover"
                              />
                           </div>
                        </div>
                     </motion.div>
                  </TabsContent>
               ))}
            </Tabs>
         </div>
      </section>
   );
}