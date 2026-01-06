"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, Trophy, ChevronRight } from "lucide-react";
import CTA from "@/components/homepage/cta";
import CountUp from "@/components/ui/count-up";

const AcademyPage = () => {
   const containerVariants = {
      hidden: { opacity: 0 },
      show: {
         opacity: 1,

         transition: {
            staggerChildren: 0.2
         }
      }
   };

   const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
   };

   const programs = [
      {
         title: "Elementary Program",
         subtitle: "Ages 6-10",
         description: "A gentle introduction to robotics for young innovators. Spark curiosity and creativity through playful exploration and guided activities.",
         features: [
            "Age-appropriate robotics concepts",
            "Fun, interactive projects",
            "Motor skills development",
            "Visual programming blocks"
         ],
         href: "/programs/elementary",
         image: "/elementary.jpg"
      },
      {
         title: "Junior Program",
         subtitle: "Ages 11-14",
         description: "Building foundational robotics skills through comprehensive projects. Develop programming, electronics, and mechanical systems expertise.",
         features: [
            "Intermediate programming",
            "Electronic components",
            "Advanced mechanical assembly",
            "Project planning skills"
         ],
         href: "/programs/junior",
         image: "/junior.jpg"
      },
      {
         title: "Senior Program",
         subtitle: "Ages 15-18",
         description: "Advanced robotics education for dedicated students. Professional-grade tools and techniques preparing for university and careers.",
         features: [
            "Advanced programming (Python, C++)",
            "AI and machine learning",
            "Custom PCB design",
            "Computer vision systems"
         ],
         href: "/programs/senior",
         image: "/senior.jpg"
      }
   ];

   const stats = [
      { number: 500, suffix: "+", label: "Students Enrolled" },
      { number: 14, suffix: "+", label: "Expert Instructors" },
      { number: 35, suffix: "+", label: "Projects Completed" },
      { number: 30, suffix: "+", label: "Competition Wins" }
   ];

   return (
      <main className="flex flex-col bg-slate-50 min-h-screen">
         {/* Hero Section */}
         <section className="pt-32 pb-20 bg-white">
            <div className="container relative mx-auto px-4 sm:px-6 text-center">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-3xl mx-auto"
               >
                  <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">
                     Our <span className="text-sky-700">Curriculum</span>
                  </h1>
                  <p className="lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                     Our curriculum is designed to grow with your child, from their first introduction to robotics through advanced technical mastery.
                  </p>
               </motion.div>
               <div className="absolute lg:top-1/3 bottom-12 left-4 md:left-8">
                  <Image
                     width={1000}
                     height={1000}
                     src="/illustrations/2.png"
                     alt="paper illustration"
                     className="w-18 lg:w-38 right-0 h-auto mx-auto rotate-45 md:rotate-0 animate-float-item"
                  />
               </div>
            </div>
         </section>

         {/* Stats Section */}
         <section className="py-12 bg-white border-b border-slate-100">
            <div className="container mx-auto px-4 sm:px-6">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-4 max-w-7xl mx-auto divide-y md:divide-y-0 md:divide-x divide-slate-200"
               >
                  {stats.map((stat, index) => (
                     <div key={index} className="py-8 md:py-0 text-center group hover:-translate-y-1 transition-transform duration-300">
                        <div className="text-5xl font-medium text-slate-900">
                           <CountUp end={stat.number} suffix={stat.suffix} duration={2.5} />
                        </div>
                        <div className="py-2 text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</div>
                     </div>
                  ))}
               </motion.div>
            </div>
         </section>

         {/* Programs Grid */}
         <section className="py-24">
            <div className="container mx-auto px-4 sm:px-6">
               <div className="text-center mb-16">
                  <h2 className="text-3xl font-semibold text-slate-900 mb-4">Choose Your Program</h2>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                     Our progressive curriculum is designed to grow with your child, from their first introduction to robotics through advanced technical mastery.
                  </p>
               </div>

               <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-8"
               >
                  {programs.map((program, index) => (
                     <motion.div
                        key={index}
                        variants={itemVariants}
                        className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                     >
                        {/* Image */}
                        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                           <Image
                              src={program.image}
                              alt={program.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col flex-grow">
                           <div className="mb-6">
                              <span className="inline-block px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider mb-3">
                                 {program.subtitle}
                              </span>
                              <h3 className="text-2xl font-semibold text-slate-900 mb-3">{program.title}</h3>
                              <p className="text-slate-600 leading-relaxed">
                                 {program.description}
                              </p>
                           </div>

                           <ul className="space-y-3 mb-8 flex-grow">
                              {program.features.map((feature, idx) => (
                                 <li key={idx} className="flex items-start text-sm text-slate-600">
                                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                    <span>{feature}</span>
                                 </li>
                              ))}
                           </ul>

                           <Link
                              href={program.href}
                              className="inline-flex items-center justify-center w-full px-6 py-3 bg-white border border-slate-200 rounded-md text-slate-900 hover:bg-slate-50"
                           >
                              Explore Program
                              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                           </Link>
                        </div>
                     </motion.div>
                  ))}
               </motion.div>
            </div>
         </section>

         <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">Competition Opportunities</h2>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                     Challenge yourself on the national and global stage.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                     {
                        label: "National",
                        title: "RiSE",
                        desc: "Our teams consistently reach the finals in this prestigious competition that combines engineering excellence with business strategy."
                     },
                     {
                        label: "International",
                        title: "World Robot Olympiad",
                        desc: "Students create innovative solutions to global challenges while competing against teams from around the world."
                     },
                     {
                        label: "Collegiate",
                        title: "University Partnerships",
                        desc: "Advanced students partner with university research labs to work on cutting-edge projects and competitions."
                     }
                  ].map((item, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="group bg-slate-50 rounded-2xl p-8 border border-slate-100"
                     >
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 relative z-10">
                           <Trophy className="h-8 w-8 text-sky-700 group-hover:text-sky-900 transition-colors" />
                        </div>

                        <div className="text-center mb-4 relative z-10">
                           <span className="inline-block px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                              {item.label}
                           </span>
                           <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                        </div>

                        <p className="text-slate-600 text-center leading-relaxed relative z-10">
                           {item.desc}
                        </p>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>
      </main>
   );
};

export default AcademyPage;
