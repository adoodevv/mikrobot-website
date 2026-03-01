"use client";

import Link from "next/link";
import { RiFacebookFill, RiInstagramFill, RiTwitterXFill, RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import Image from "next/image";

export function Footer() {
   const navigation = {
      programs: [
         { name: "Programs", href: "/programs" },
         { name: "Elementary", href: "/programs/elementary" },
         { name: "Junior", href: "/programs/junior" },
         { name: "Senior", href: "/programs/senior" },
      ],
      explore: [
         { name: "Home", href: "/" },
         { name: "Gallery", href: "/gallery" },
         { name: "Updates", href: "/news" },
         { name: "About", href: "/about" },
         { name: "Support", href: "/contact" },
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

   const socialLinks = [
      { href: "https://www.facebook.com/mikrobotacademy", icon: RiFacebookFill, label: "Facebook" },
      { href: "https://www.instagram.com/mikrobotacademy", icon: RiInstagramFill, label: "Instagram" },
      { href: "https://x.com/mikrobotacademy", icon: RiTwitterXFill, label: "X (Twitter)" },
      { href: "https://www.linkedin.com/company/mikrobot-academy/", icon: RiLinkedinFill, label: "LinkedIn" },
      { href: "https://www.youtube.com/@mikrobotacademy", icon: RiYoutubeFill, label: "YouTube" },
   ];

   return (
      <footer className="relative bg-gradient-to-b from-sky-50 to-sky-100/80 pt-20 pb-8 rounded-t-[2.5rem] overflow-hidden">
         {/* Subtle decorative top edge */}
         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />

         <div className="container relative mx-auto px-4 sm:px-6">
            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
               {/* CTA block */}
               <div className="lg:col-span-5 xl:col-span-6 space-y-6">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
                     Build the future <br />
                     <span className="text-sky-700">with robotics</span>
                  </h2>
                  <p className="text-lg text-slate-600 max-w-md leading-relaxed">
                     Join Mikrobot Academy and discover your potential in robotics education today.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                     <Link
                        href="/programs"
                        className="inline-flex items-center px-6 py-3.5 bg-sky-700 text-white font-medium rounded-xl hover:bg-sky-800 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-sky-700/25"
                     >
                        Explore programs
                     </Link>
                     <Link
                        href="/contact"
                        className="inline-flex items-center px-6 py-3.5 bg-white/90 border border-slate-200 text-slate-800 font-medium rounded-xl hover:bg-white hover:border-sky-200 hover:text-sky-800 transition-all duration-200"
                     >
                        Get in touch
                     </Link>
                  </div>
               </div>

               {/* Nav columns */}
               <div className="lg:col-span-7 xl:col-span-6 flex flex-wrap gap-12 sm:gap-16 lg:justify-end lg:pt-2">
                  <div>
                     <p className="text-xs font-semibold uppercase tracking-wider text-sky-700/90 mb-4">Programs</p>
                     <ul className="flex flex-col gap-3">
                        {navigation.programs.map((item) => (
                           <li key={item.name}>
                              <Link
                                 href={item.href}
                                 className="text-slate-700 hover:text-sky-700 transition-colors duration-200"
                              >
                                 {item.name}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div>
                     <p className="text-xs font-semibold uppercase tracking-wider text-sky-700/90 mb-4">Explore</p>
                     <ul className="flex flex-col gap-3">
                        {navigation.explore.map((item) => (
                           <li key={item.name}>
                              <Link
                                 href={item.href}
                                 className="text-slate-700 hover:text-sky-700 transition-colors duration-200"
                              >
                                 {item.name}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>

            {/* Logo, tagline & avatars */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 py-10 border-y border-sky-200/60">
               <Link href="/" className="flex items-center gap-3" aria-label="Mikrobot Academy – Home">
                  <Image src="/logo.png" alt="" width={52} height={52} className="object-cover flex-shrink-0" />
                  <div>
                     <span className="text-lg font-semibold text-slate-900 block">Mikrobot Academy</span>
                     <span className="text-sm text-slate-500">Building tomorrow&apos;s innovators</span>
                  </div>
               </Link>

               <div className="flex items-center gap-4">
                  <span className="text-sm text-slate-500 hidden sm:block">Our community</span>
                  <div className="flex -space-x-3">
                     {avatars.slice(0, 6).map((src, i) => (
                        <div
                           key={i}
                           className="relative w-10 h-10 rounded-full ring-2 ring-white overflow-hidden bg-slate-200 shadow-sm hover:z-10 hover:scale-110 transition-transform duration-200"
                        >
                           <Image
                              src={src}
                              alt=""
                              fill
                              className="object-cover"
                              sizes="40px"
                           />
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Bottom bar */}
            <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
               <p className="text-sm text-slate-500">
                  © {new Date().getFullYear()} Mikrobot Academy. All rights reserved.
               </p>
               <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 mr-2 hidden sm:inline">Follow us</span>
                  {socialLinks.map(({ href, icon: Icon, label }) => (
                     <Link
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg text-slate-600 bg-white/80 border border-slate-200/80 hover:bg-sky-700 hover:text-white hover:border-sky-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                        aria-label={label}
                     >
                        <Icon className="w-5 h-5" />
                     </Link>
                  ))}
               </div>
            </div>
         </div>
      </footer>
   );
}
