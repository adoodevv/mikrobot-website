"use client";

import { motion } from "framer-motion";
import { Check, Trophy, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AcademySenior = () => {
   const advancedFeatures = [
      "Advanced programming in Python, C++, and ROS",
      "AI and machine learning applications in robotics",
      "Custom PCB design and fabrication",
      "Computer vision and sensor fusion",
      "Complex mechanical systems and custom fabrication",
      "Advanced control theory and implementation"
   ];

   const careerPaths = [
      {
         title: "Robotics Engineer",
         description: "Design, build, and maintain robots and robotic systems",
         companies: ["Boston Dynamics", "iRobot", "FANUC"]
      },
      {
         title: "AI Developer",
         description: "Create systems that enable robots to learn and make decisions",
         companies: ["Google", "NVIDIA", "Tesla"]
      },
      {
         title: "Automation Engineer",
         description: "Design systems that reduce human intervention in processes",
         companies: ["Amazon Robotics", "ABB", "Siemens"]
      },
      {
         title: "Research Scientist",
         description: "Advance the field through new discoveries and innovations",
         companies: ["University Research", "NASA", "DARPA"]
      }
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
                     Ages 15-18
                  </span>
                  <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">
                     Senior <span className="text-sky-700">Program</span>
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                     Advanced robotics education for dedicated students. Prepare for university engineering programs and careers in robotics, AI, and related fields.
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
                     className="order-2 lg:order-1 relative"
                  >
                     <div className="absolute inset-0 bg-gradient-to-r from-slate-200 to-sky-100 rounded-3xl transform -rotate-2 scale-105"></div>
                     <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-2 transition-transform hover:rotate-0 duration-700">
                        <img
                           src="/jetbot.webp"
                           alt="Senior students working on advanced robotics"
                           className="w-full h-auto object-cover"
                        />
                     </div>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                     className="order-1 lg:order-2"
                  >
                     <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
                        Engineering <span className="text-sky-700">Excellence</span>
                     </h2>
                     <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        Our Senior program represents the pinnacle of pre-collegiate robotics education. Students engage with professional-grade tools, techniques, and technologies used in industry and research settings.
                     </p>
                     <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        This rigorous program prepares students for university engineering programs. Participants complete comprehensive projects that demonstrate mastery across mechanical, electronic, and software domains.
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

         {/* Advanced Technical Focus */}
         <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6">
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">Advanced Technical Focus</h2>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                     Mastering industry-standard technologies and methodologies.
                  </p>
               </div>

               <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                     {advancedFeatures.map((feature, index) => (
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

         {/* Career Pathways */}
         <section className="py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-4 sm:px-6">
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-semibold mb-4">Career Pathways</h2>
                  <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                     Preparing you for the most exciting roles in technology.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {careerPaths.map((path, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
                     >
                        <h3 className="text-xl font-semibold mb-3 text-sky-400">{path.title}</h3>
                        <p className="text-slate-300 text-sm mb-6 leading-relaxed flex-grow h-20">
                           {path.description}
                        </p>
                        <div className="pt-4 border-t border-white/10">
                           <p className="text-xs font-medium text-slate-400 mb-3 uppercase tracking-wider">Notable Employers</p>
                           <div className="flex flex-wrap gap-2">
                              {path.companies.map((company, idx) => (
                                 <span key={idx} className="px-2 py-1 bg-white/10 rounded-md text-xs text-slate-200">
                                    {company}
                                 </span>
                              ))}
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>
      </main>
   );
};

export default AcademySenior;