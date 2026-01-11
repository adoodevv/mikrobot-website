"use client";

import Link from "next/link";
import { RiFacebookFill, RiInstagramFill, RiTwitterXFill, RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import Image from "next/image";

export function Footer() {
   const navigation = {
      column1: [
         { name: "Home", href: "/" },
         { name: "Programs", href: "/programs" },
         { name: "Elementary", href: "/programs/elementary" },
         { name: "Junior", href: "/programs/junior" },
         { name: "Senior", href: "/programs/senior" },
      ],
      column2: [
         { name: "Gallery", href: "/gallery" },
         { name: "Updates", href: "/news" },
         { name: "About", href: "/about" },
         { name: "Support", href: "/contact" },
         { name: "Careers", href: "/careers" },
      ],
   };

   const avatars = [
      "/people/bright.jpeg",
      "/people/caleb.jpg",
      "/people/haqq.jpeg",
      "/people/jonathan.jpg",
      "/people/nkema.jpg",
      "/people/seth.jpg"
   ];

   return (
      <footer className="bg-sky-50 py-20 rounded-t-[2rem]">
         <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 mb-24">
               {/* Left Section - CTA */}
               <div className="lg:max-w-xl space-y-8">
                  <h2 className="text-5xl sm:text-6xl md:text-7xl font-medium text-slate-900 tracking-tight leading-[1.1]">
                     Build the future <br /> with robotics
                  </h2>
                  <p className="text-lg text-slate-600 max-w-lg">
                     Join Mikrobot Academy and discover your potential in robotics education today
                  </p>
                  <div className="flex items-center gap-4 pt-4">
                     <Link
                        href="/programs"
                        className="px-8 py-3.5 bg-sky-700 text-white rounded-md hover:bg-sky-800 transition-colors"
                     >
                        Explore
                     </Link>
                     <Link
                        href="/contact"
                        className="px-8 py-3.5 bg-white border border-slate-200 text-slate-900 rounded-md hover:bg-slate-50 transition-colors duration-300"
                     >
                        Contact
                     </Link>
                  </div>
               </div>

               {/* Right Section - Navigation */}
               <div className="flex gap-16 sm:gap-32 lg:pt-4">
                  <div className="flex flex-col gap-4">
                     {navigation.column1.map((item) => (
                        <Link
                           key={item.name}
                           href={item.href}
                           className="text-slate-900 hover:underline"
                        >
                           {item.name}
                        </Link>
                     ))}
                  </div>
                  <div className="flex flex-col gap-4">
                     {navigation.column2.map((item) => (
                        <Link
                           key={item.name}
                           href={item.href}
                           className="text-slate-900 hover:underline"
                        >
                           {item.name}
                        </Link>
                     ))}
                  </div>
               </div>
            </div>

            {/* Middle Section - Logo & Avatars */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 mb-12">
               {/* Logo Placeholder */}
               <div className="relative">
                  <Link href="/" className="flex items-center gap-2 z-50 relative" aria-label="Home">
                     <Image src="/logo.png" alt="Mikrobot Academy" width={60} height={60} />
                     <h1 className="text-xl text-slate-800">Mikrobot Academy</h1>
                  </Link>
               </div>

               {/* Avatars */}
               <div className="flex -space-x-4">
                  {avatars.slice(0, 5).map((src, i) => (
                     <div
                        key={i}
                        className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-slate-200"
                     >
                        <Image
                           src={src}
                           alt={`Student ${i + 1}`}
                           fill
                           className="object-cover"
                        />
                     </div>
                  ))}
               </div>
            </div>

            <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
               <p className="text-sm text-slate-500">
                  © {new Date().getFullYear()} Mikrobot Academy. All rights reserved.
               </p>
               <div className="flex items-center gap-6">
                  <Link href="https://www.facebook.com/mikrobotacademy" className="hover:scale-105 p-2 bg-slate-200 rounded-md transition-transform duration-300" aria-label="Facebook">
                     <RiFacebookFill className="w-6 h-6" />
                  </Link>
                  <Link href="https://www.instagram.com/mikrobotacademy" className="hover:scale-105 p-2 bg-slate-200 rounded-md transition-transform duration-300" aria-label="Instagram">
                     <RiInstagramFill className="w-6 h-6" />
                  </Link>
                  <Link href="https://x.com/mikrobotacademy" className="hover:scale-105 p-2 bg-slate-200 rounded-md transition-transform duration-300" aria-label="X (Twitter)">
                     <RiTwitterXFill className="w-6 h-6" />
                  </Link>
                  <Link href="https://www.linkedin.com/company/mikrobot-academy/" className="hover:scale-105 p-2 bg-slate-200 rounded-md transition-transform duration-300" aria-label="LinkedIn">
                     <RiLinkedinFill className="w-6 h-6" />
                  </Link>
                  <Link href="https://www.youtube.com/@mikrobotacademy" className="hover:scale-105 p-2 bg-slate-200 rounded-md transition-transform duration-300" aria-label="YouTube">
                     <RiYoutubeFill className="w-6 h-6" />
                  </Link>
               </div>
            </div>
         </div>
      </footer>
   );
}