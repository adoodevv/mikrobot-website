"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
   return (
      <section className="relative min-h-screen pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
         <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center">
               <div className="md:w-1/2 md:pr-12 space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in">
                     Building the Future,{" "}
                     <span className="block text-primary">One Robot at a Time.</span>
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
                     Mikrobot Academy delivers excellence in robotics education,
                     preparing tomorrow's innovators with cutting-edge technology
                     and world-class mentorship.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                     <Button className="btn-primary">Explore the Academy</Button>
                     <Button variant="outline">View Programs</Button>
                  </div>
               </div>
               <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <div className="relative">
                     <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl transform -rotate-3"></div>
                     <div className="relative bg-white overflow-hidden rounded-2xl shadow-xl border border-gray-100 p-4 transform rotate-2 transition-transform hover:rotate-0 duration-500">
                        <img
                           src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                           alt="Students working with robots"
                           className="w-full h-auto rounded-lg"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
         >
            <motion.div
               animate={{ y: [0, 10, 0] }}
               transition={{ repeat: Infinity, duration: 2 }}
               className="flex flex-col items-center"
            >
               <span className="text-black/70 text-sm mb-2">Scroll to explore</span>
               <div className="w-6 h-10 border-2 border-black/30 rounded-full flex justify-center pt-2">
                  <motion.div
                     animate={{ y: [0, 8, 0] }}
                     transition={{ repeat: Infinity, duration: 1.5 }}
                     className="w-1.5 h-1.5 bg-black rounded-full"
                  />
               </div>
            </motion.div>
         </motion.div>
      </section>
   );
};

export default HeroSection;
