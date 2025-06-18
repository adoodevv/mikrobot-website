"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const offset = window.scrollY;
         setScrolled(offset > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <header
         className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300",
            scrolled
               ? "bg-white/90 backdrop-blur-md shadow-sm"
               : "bg-transparent"
         )}
      >
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
               <div className="flex items-center">
                  <Link href="/" className="flex items-center gap-2 text-lg md:text-xl font-bold tracking-tight">
                     <Image src="/logo.png" alt="Mikrobot Academy Logo" width={40} height={40} />
                     Mikrobot Academy
                  </Link>
               </div>

               {/* Desktop Navigation */}
               <nav className="hidden md:flex items-center space-x-8">
                  <Link
                     href="/"
                     className="text-sm font-medium transition-colors hover:text-primary"
                  >
                     Home
                  </Link>
                  <Link
                     href="/about"
                     className="text-sm font-medium transition-colors hover:text-primary"
                  >
                     About
                  </Link>
                  <DropdownMenu>
                     <DropdownMenuTrigger asChild>
                        <Button
                           variant="link"
                           className="text-sm font-medium p-0 h-auto transition-colors hover:text-primary"
                        >
                           Academy <ChevronDown className="h-4 w-4 ml-1" />
                        </Button>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent align="center" className="w-48">
                        <DropdownMenuItem asChild>
                           <Link href="/academy/elementary" className="w-full">
                              Elementary
                           </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                           <Link href="/academy/junior" className="w-full">
                              Junior
                           </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                           <Link href="/academy/senior" className="w-full">
                              Senior
                           </Link>
                        </DropdownMenuItem>
                     </DropdownMenuContent>
                  </DropdownMenu>
                  <Link
                     href="/profiles"
                     className="text-sm font-medium transition-colors hover:text-primary"
                  >
                     Profiles
                  </Link>
                  <Link
                     href="/gallery"
                     className="text-sm font-medium transition-colors hover:text-primary"
                  >
                     Gallery
                  </Link>
                  <Link
                     href="/news"
                     className="text-sm font-medium transition-colors hover:text-primary"
                  >
                     News
                  </Link>
                  <Button size="sm" className="ml-4" asChild>
                     <Link href="/enroll">Enroll Now</Link>
                  </Button>
               </nav>

               {/* Mobile Navigation Toggle */}
               <div className="flex md:hidden">
                  <Button
                     variant="ghost"
                     size="icon"
                     onClick={() => setIsOpen(!isOpen)}
                     aria-label="Toggle Menu"
                  >
                     {isOpen ? (
                        <X className="h-6 w-6" />
                     ) : (
                        <Menu className="h-6 w-6" />
                     )}
                  </Button>
               </div>
            </div>
         </div>

         {/* Mobile Navigation Menu */}
         {isOpen && (
            <div className="md:hidden bg-white border-t">
               <div className="container mx-auto px-4 py-4 space-y-4">
                  <Link
                     href="/"
                     className="block py-2 text-sm font-medium hover:text-primary"
                     onClick={() => setIsOpen(false)}
                  >
                     Home
                  </Link>
                  <Link
                     href="/about"
                     className="block py-2 text-sm font-medium hover:text-primary"
                     onClick={() => setIsOpen(false)}
                  >
                     About
                  </Link>
                  <div className="py-2">
                     <div className="flex items-center text-sm font-medium">
                        Academy
                     </div>
                     <div className="pl-4 mt-2 space-y-2">
                        <Link
                           href="/academy/elementary"
                           className="block py-1 text-sm hover:text-primary"
                           onClick={() => setIsOpen(false)}
                        >
                           Elementary
                        </Link>
                        <Link
                           href="/academy/junior"
                           className="block py-1 text-sm hover:text-primary"
                           onClick={() => setIsOpen(false)}
                        >
                           Junior
                        </Link>
                        <Link
                           href="/academy/senior"
                           className="block py-1 text-sm hover:text-primary"
                           onClick={() => setIsOpen(false)}
                        >
                           Senior
                        </Link>
                     </div>
                  </div>
                  <Link
                     href="/profiles"
                     className="block py-2 text-sm font-medium hover:text-primary"
                     onClick={() => setIsOpen(false)}
                  >
                     Profiles
                  </Link>
                  <Link
                     href="/gallery"
                     className="block py-2 text-sm font-medium hover:text-primary"
                     onClick={() => setIsOpen(false)}
                  >
                     Gallery
                  </Link>
                  <Link
                     href="/news"
                     className="block py-2 text-sm font-medium hover:text-primary"
                     onClick={() => setIsOpen(false)}
                  >
                     News
                  </Link>
                  <Button className="w-full mt-4" asChild onClick={() => setIsOpen(false)}>
                     <Link href="/enroll">Enroll Now</Link>
                  </Button>
               </div>
            </div>
         )}
      </header>
   );
}