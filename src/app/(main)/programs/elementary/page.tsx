"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const AcademyElementary = () => {
   const features = [
      "Age-appropriate introduction to basic robotics concepts",
      "Fun, interactive projects designed for young learners",
      "Development of motor skills through hands-on activities",
      "Introduction to simple programming logic using visual blocks",
      "Team-building and social skills development",
      "Regular showcases for parents to view student progress"
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
                     Ages 6-10
                  </span>
                  <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">
                     Elementary <span className="text-sky-700">Program</span>
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                     A gentle introduction to robotics for young innovators. Spark curiosity and creativity through playful exploration and guided activities.
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
                     className="relative"
                  >
                     <div className="absolute inset-0 bg-gradient-to-r from-sky-100 to-indigo-50 rounded-3xl transform -rotate-3 scale-105"></div>
                     <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-2 transition-transform hover:rotate-0 duration-700">
                        <img
                           src="/spike.jpg"
                           alt="Elementary students working with robots"
                           className="w-full h-auto object-cover"
                        />
                     </div>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                  >
                     <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
                        Spark Curiosity & <span className="text-sky-700">Creativity</span>
                     </h2>
                     <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        Our Elementary program is specially designed to engage young minds. Through playful exploration and guided activities, children discover the fascinating world of robotics while developing critical thinking skills.
                     </p>
                     <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Students work with age-appropriate robotics kits that are both educational and engaging. Our experienced instructors create a supportive environment where young learners can experiment, make mistakes, and grow.
                     </p>
                     <Link href="/enroll">
                        <button className="px-8 py-3.5 bg-sky-700 text-white font-medium rounded-xl shadow-lg shadow-sky-900/20 hover:bg-sky-800 hover:scale-105 transition-all duration-300">
                           Enroll Now
                        </button>
                     </Link>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Features Section */}
         <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6">
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">Program Features</h2>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                     Designed to build a strong foundation in STEM through hands-on learning.
                  </p>
               </div>

               <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                     {features.map((feature, index) => (
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
                           <span className="text-lg text-slate-700 font-medium">{feature}</span>
                        </motion.li>
                     ))}
                  </ul>
               </div>
            </div>
         </section>

         {/* Class Structure */}
         <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">Class Structure</h2>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                     A typical session focuses on engagement and practical application.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                     {
                        step: "1",
                        title: "Discovery",
                        desc: "Students explore robotics concepts through interactive demonstrations and discussions."
                     },
                     {
                        step: "2",
                        title: "Creation",
                        desc: "Guided by instructors, students build simple robots using specialized educational kits."
                     },
                     {
                        step: "3",
                        title: "Play & Learn",
                        desc: "Students engage with their creations through games and challenges that reinforce learning."
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
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                           <span className="text-2xl font-semibold text-sky-700">{item.step}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">{item.title}</h3>
                        <p className="text-slate-600 text-center leading-relaxed">
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

export default AcademyElementary;