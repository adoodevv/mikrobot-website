"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";
import { featuredProfiles as profiles } from "@/constants/featured-profiles";
import Link from "next/link";

const ProfilesSection = () => {
   const [currentIndex, setCurrentIndex] = useState(0);
   const visibleProfiles = profiles.slice(currentIndex, currentIndex + 3);

   const nextProfiles = () => {
      if (currentIndex + 3 < profiles.length) {
         setCurrentIndex(currentIndex + 1);
      } else {
         setCurrentIndex(0);
      }
   };

   const prevProfiles = () => {
      if (currentIndex > 0) {
         setCurrentIndex(currentIndex - 1);
      } else {
         setCurrentIndex(profiles.length - 3);
      }
   };

   return (
      <section className="py-20 overflow-hidden bg-gray-50">
         <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
               <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Profiles</h2>
                  <p className="text-gray-600 max-w-2xl">
                     Meet the exceptional educators, mentors, and students that make our academy special.
                  </p>
               </div>

               <div className="flex space-x-2 mt-4 md:mt-0">
                  <Button
                     variant="outline"
                     size="icon"
                     onClick={prevProfiles}
                     className="h-10 w-10"
                  >
                     <ArrowUp className="h-4 w-4" />
                     <span className="sr-only">Previous</span>
                  </Button>
                  <Button
                     variant="outline"
                     size="icon"
                     onClick={nextProfiles}
                     className="h-10 w-10"
                  >
                     <ArrowDown className="h-4 w-4" />
                     <span className="sr-only">Next</span>
                  </Button>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {visibleProfiles.map((profile) => (
                  <div key={profile.id} className="rounded-xl cursor-pointer group shadow-md transition-shadow overflow-hidden">
                     <CardContent className="p-0 overflow-hidden">
                        <div className="aspect-[16/9] overflow-hidden">
                           <img
                              src={profile.image}
                              alt={profile.name}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                           />
                        </div>
                        <div className="p-6">
                           <h3 className="font-bold text-xl mb-1">{profile.name}</h3>
                           <p className="text-primary text-sm mb-3">{profile.title}</p>
                           <p className="text-muted-foreground">{profile.bio}</p>
                        </div>
                     </CardContent>
                  </div>
               ))}
            </div>

            <div className="mt-12 text-center">
               <Link href="/profiles">
                  <Button variant="outline">View All Profiles</Button>
               </Link>
            </div>
         </div>
      </section>
   );
};

export default ProfilesSection