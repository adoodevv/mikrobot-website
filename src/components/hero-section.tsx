"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

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
                     <Button className="btn-primary" asChild>
                        <Link href="/about">Explore the Academy</Link>
                     </Button>
                     <Button variant="outline" asChild>
                        <Link href="/academy">View Programs</Link>
                     </Button>
                  </div>
               </div>
               <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <div className="relative">
                     <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl transform -rotate-3"></div>
                     <div className="relative bg-white overflow-hidden rounded-2xl shadow-xl border border-gray-100 p-4 transform rotate-2 transition-transform hover:rotate-0 duration-500">
                        <img
                           src="/images/gallery/outreach-training.png"
                           alt="Students working with robots"
                           className="w-full h-auto rounded-lg"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default HeroSection;
