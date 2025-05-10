import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export function Footer() {
   return (
      <footer className="bg-gray-50 border-t">
         <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               <div className="space-y-4">
                  <h3 className="text-lg font-bold">Mikrobot Academy</h3>
                  <p className="text-sm text-gray-600 max-w-xs">
                     Building the future, one robot at a time. Premium robotics education for all ages.
                  </p>
                  <div className="flex space-x-4">
                     <Button variant="ghost" size="icon" asChild>
                        <Link href="#" aria-label="Facebook">
                           <Facebook className="h-5 w-5" />
                        </Link>
                     </Button>
                     <Button variant="ghost" size="icon" asChild>
                        <Link href="#" aria-label="Instagram">
                           <Instagram className="h-5 w-5" />
                        </Link>
                     </Button>
                     <Button variant="ghost" size="icon" asChild>
                        <Link href="#" aria-label="Twitter">
                           <Twitter className="h-5 w-5" />
                        </Link>
                     </Button>
                     <Button variant="ghost" size="icon" asChild>
                        <Link href="#" aria-label="LinkedIn">
                           <Linkedin className="h-5 w-5" />
                        </Link>
                     </Button>
                     <Button variant="ghost" size="icon" asChild>
                        <Link href="#" aria-label="YouTube">
                           <Youtube className="h-5 w-5" />
                        </Link>
                     </Button>
                  </div>
               </div>

               <div>
                  <h3 className="text-sm font-semibold mb-4">Programs</h3>
                  <ul className="space-y-3">
                     <li>
                        <Link href="/academy/elementary" className="text-sm text-gray-600 hover:text-gray-900">
                           Elementary Program
                        </Link>
                     </li>
                     <li>
                        <Link href="/academy/junior" className="text-sm text-gray-600 hover:text-gray-900">
                           Junior Program
                        </Link>
                     </li>
                     <li>
                        <Link href="/academy/senior" className="text-sm text-gray-600 hover:text-gray-900">
                           Senior Program
                        </Link>
                     </li>
                     <li>
                        <Link href="/custom" className="text-sm text-gray-600 hover:text-gray-900">
                           Custom Programs
                        </Link>
                     </li>
                  </ul>
               </div>

               <div>
                  <h3 className="text-sm font-semibold mb-4">Resources</h3>
                  <ul className="space-y-3">
                     <li>
                        <Link href="/gallery" className="text-sm text-gray-600 hover:text-gray-900">
                           Gallery
                        </Link>
                     </li>
                     <li>
                        <Link href="/profiles" className="text-sm text-gray-600 hover:text-gray-900">
                           Student Profiles
                        </Link>
                     </li>
                     <li>
                        <Link href="/news" className="text-sm text-gray-600 hover:text-gray-900">
                           News & Events
                        </Link>
                     </li>
                     <li>
                        <Link href="/faq" className="text-sm text-gray-600 hover:text-gray-900">
                           FAQ
                        </Link>
                     </li>
                  </ul>
               </div>

               <div>
                  <h3 className="text-sm font-semibold mb-4">Contact</h3>
                  <address className="not-italic">
                     <p className="text-sm text-gray-600">Augustino Neto Rd, Council Close,</p>
                     <p className="text-sm text-gray-600">Airport Residential Area, Accra, Ghana.</p>
                     <p className="text-sm text-gray-600 mt-4">info@mikrobotacademy.com</p>
                     <p className="text-sm text-gray-600">+233 24 763 2002</p>
                  </address>
                  <Button className="mt-4" size="sm">
                     Contact Us
                  </Button>
               </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
               <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-sm text-gray-500">
                     © {new Date().getFullYear()} Mikrobot Academy. All rights reserved.
                  </p>
                  <div className="flex space-x-6 mt-4 md:mt-0">
                     <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-900">
                        Privacy Policy
                     </Link>
                     <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-900">
                        Terms of Service
                     </Link>
                     <Link href="/cookies" className="text-xs text-gray-500 hover:text-gray-900">
                        Cookie Policy
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}