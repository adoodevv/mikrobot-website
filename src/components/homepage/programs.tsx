"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const programs = [
   {
      id: "elementary",
      level: "Elementary",
      title: "First steps in robotics",
      description: "Young learners discover basic engineering principles and visual coding through fun, hands-on projects.",
      image: "/elementary.jpg",
      link: "/programs/elementary",
      large: true,
   },
   {
      id: "junior",
      level: "Junior",
      title: "Building real solutions",
      description: "Students tackle complex projects with advanced techniques, sensors, and programming logic.",
      image: "/junior.jpg",
      link: "/programs/junior",
      large: false,
   },
   {
      id: "senior",
      level: "Senior",
      title: "Innovation and leadership",
      description: "Emerging technologists prepare for competitive challenges and industry-standard robotics engineering.",
      image: "/senior.jpg",
      link: "/programs/senior",
      large: false,
   },
];

const Programs = () => {
   return (
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16 space-y-4">
               <h3 className="text-sm font-semibold tracking-wider uppercase">Programs</h3>
               <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">Three paths to mastery</h2>
               <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Each program builds foundational skills progressively, guiding students from curiosity to expertise.
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
               {programs.map((program, index) => (
                  <motion.div
                     key={program.id}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-50px" }}
                     transition={{ delay: index * 0.1, duration: 0.5 }}
                     className={`group relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 ${program.large ? "lg:col-span-2 lg:flex lg:flex-row" : "flex flex-col"
                        }`}
                  >
                     <div className={`p-8 md:p-10 flex flex-col justify-center items-start space-y-4 max-w-xl ${program.large ? "lg:w-1/2" : "flex-1"}`}>
                        <span className="text-sm font-semibold text-slate-900">{program.level}</span>
                        <h3 className="text-3xl font-semibold text-slate-900 leading-tight">{program.title}</h3>
                        <p className="text-slate-600 leading-relaxed">
                           {program.description}
                        </p>
                        <Link
                           href={program.link}
                           className="inline-flex items-center text-sm md:text-lg pt-2"
                        >
                           Explore <ChevronRight className="ml-1 w-4 h-4 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                     </div>

                     <div className={`relative overflow-hidden bg-slate-100 ${program.large ? "h-64 lg:h-auto lg:w-1/2 min-h-[320px]" : "h-64 min-h-[280px]"
                        }`}>
                        <Image
                           src={program.image}
                           alt={program.title}
                           fill
                           className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
}

export default Programs;