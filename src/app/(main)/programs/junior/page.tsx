"use client";

import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const AcademyJunior = () => {
   const skills = [
      "Intermediate programming using block-based and text-based languages",
      "Electronic components and circuit design fundamentals",
      "Advanced mechanical assembly and structural design",
      "Critical thinking and algorithmic problem-solving",
      "Project planning and documentation",
      "Collaboration and team-based competition strategies"
   ];

   return (
      <main className="flex flex-col bg-slate-50 min-h-screen">
         {/* Hero Section */}
         <section className="pt-32 pb-20 bg-white border-b border-slate-100">
            <div className="container mx-auto px-4 sm:px-6 text-center">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-4xl mx-auto"
               >
                  <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-sky-700 text-sm font-bold uppercase tracking-wider mb-6">
                     Ages 11-14
                  </span>
                  <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                     Junior <span className="text-sky-700">Program</span>
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                     Building foundational robotics skills. Develop comprehensive understanding of programming, electronics, and mechanical systems.
                  </p>
               </motion.div>
            </div>
         </section>

         {/* Overview Section */}
         <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
                        Bridging Exploration & <span className="text-sky-700">Mastery</span>
                     </h2>
                     <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        The Junior program at Mikrobot Academy bridges the gap between elementary exploration and advanced robotics. Students develop a deeper understanding of programming, electronics, and mechanical systems through engaging, hands-on projects.
                     </p>
                     <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        This program is designed to build technical confidence while nurturing creativity. Students learn to approach complex problems methodically and develop solutions that demonstrate their growing technical expertise.
                     </p>
                     <Link href="/enroll">
                        <button className="px-8 py-3.5 bg-sky-700 text-white font-medium rounded-xl shadow-lg shadow-sky-900/20 hover:bg-sky-800 hover:scale-105 transition-all duration-300">
                           Enroll Now
                        </button>
                     </Link>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                     className="relative"
                  >
                     <div className="absolute inset-0 bg-gradient-to-l from-indigo-100 to-sky-50 rounded-3xl transform -rotate-2 scale-105"></div>
                     <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-2 transition-transform hover:rotate-0 duration-700">
                        <img
                           src="/arduino.webp"
                           alt="Junior students programming robots"
                           className="w-full h-auto object-cover"
                        />
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Key Skills Section */}
         <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6">
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Key Skills Developed</h2>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                     A comprehensive set of technical and soft skills for future innovators.
                  </p>
               </div>

               <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                     {skills.map((skill, index) => (
                        <motion.li
                           key={index}
                           initial={{ opacity: 0, y: 10 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: index * 0.1 }}
                           className="flex items-start"
                        >
                           <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center mt-1 mr-4">
                              <Check className="h-4 w-4 text-sky-700" strokeWidth={3} />
                           </div>
                           <span className="text-lg text-slate-700 font-medium">{skill}</span>
                        </motion.li>
                     ))}
                  </ul>
               </div>
            </div>
         </section>
      </main>
   );
};

export default AcademyJunior;