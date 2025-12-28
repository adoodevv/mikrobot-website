"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Rocket, Star, Users, Target, BookOpen, Award } from "lucide-react";
import CTA from "@/components/homepage/cta";
import Link from "next/link";

const About = () => {
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

   return (
      <main className="flex flex-col overflow-hidden bg-slate-50">
         <section className="relative min-h-[60vh] flex items-center justify-center py-20 overflow-hidden">
            <div className="absolute inset-0 z-0">
               <Image
                  src="/about.jpg"
                  alt="About Hero"
                  fill
                  className="object-cover opacity-30"
                  priority
               />
               <div className="absolute inset-0 bg-gradient-to-b from-slate-50/0 via-slate-50/50 to-slate-50" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl mx-auto space-y-6"
               >
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900">
                     Building Tomorrow's <span className="text-sky-700">Innovators</span>
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed">
                     Mikrobot Academy is dedicated to empowering the next generation with the skills, confidence, and curiosity to shape the future through robotics.
                  </p>
               </motion.div>
            </div>
         </section>

         <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6">
               <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={containerVariants}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
               >
                  <motion.div variants={itemVariants} className="space-y-8">
                     <h3 className="text-sm font-semibold tracking-wider uppercase">Our mission</h3>
                     <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">Inspiring innovation through hands-on learning</h2>
                     <div className="space-y-6 text-lg text-slate-600">
                        <p>
                           We believe that technology is a tool for creation, not just consumption. Our mission is to bridge the gap between theoretical knowledge and practical application.
                        </p>
                        <p>
                           By balancing rigorous curriculum with creative freedom, we ensure our students develop both the technical prowess and the adaptive problem-solving skills needed for the 21st century.
                        </p>
                     </div>
                     <div className="pt-4">
                        <Link
                           href="/programs"
                           className="px-8 py-3.5 bg-sky-900 text-white font-medium rounded-md hover:bg-sky-800 transition-colors"
                        >
                           Explore Our Programs
                        </Link>
                     </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative">
                     <div className="absolute -inset-4 bg-gradient-to-tr from-sky-200 to-violet-200 rounded-3xl opacity-40 blur-2xl transform rotate-3" />
                     <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/50">
                        <Image
                           src="/images/gallery/team-building.png"
                           alt="Students engaging in robotics"
                           fill
                           className="object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                     </div>
                     <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-[200px] hidden md:block">
                        <div className="flex items-center space-x-3 mb-2">
                           <div className="bg-green-100 p-2 rounded-full text-green-600">
                              <Award className="w-5 h-5" />
                           </div>
                           <span className="font-bold text-slate-900 text-3xl">30+</span>
                        </div>
                        <p className="text-sm text-slate-500 font-medium">Regional Awards Won</p>
                     </div>
                  </motion.div>
               </motion.div>
            </div>
         </section>

         <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center max-w-3xl mx-auto mb-16"
               >
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Core Values</h2>
                  <p className="text-lg text-slate-600">
                     These principles guide everything we do, from how we teach to how we interact with our community.
                  </p>
               </motion.div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                     {
                        title: "Innovation",
                        icon: <Rocket className="w-8 h-8" />,
                        desc: "We foster an environment where curiosity thrives and new ideas are celebrated. Failure is just a stepping stone to success."
                     },
                     {
                        title: "Excellence",
                        icon: <Star className="w-8 h-8" />,
                        desc: "We set high standards for ourselves and our students, providing the mentorship and resources needed to achieve them."
                     },
                     {
                        title: "Community",
                        icon: <Users className="w-8 h-8" />,
                        desc: "We build meaningful connections among students, educators, and industry leaders, creating a supportive ecosystem."
                     }
                  ].map((value, idx) => (
                     <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 group"
                     >
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                           {value.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                        <p className="text-slate-600 leading-relaxed">
                           {value.desc}
                        </p>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6">
               <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={containerVariants}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
               >
                  <motion.div variants={itemVariants} className="order-2 lg:order-1 relative">
                     <div className="absolute -inset-4 bg-gradient-to-bl from-sky-200 to-indigo-200 rounded-3xl opacity-40 blur-2xl transform -rotate-3" />
                     <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/50">
                        <Image
                           src="/images/gallery/sumo-usa.png"
                           alt="Mikrobot Academy History"
                           fill
                           className="object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                     </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="order-1 lg:order-2 space-y-8">
                     <h3 className="text-sm font-semibold tracking-wider uppercase">Our Story</h3>
                     <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">From humble beginnings to global impact</h2>
                     <div className="space-y-6 text-lg text-slate-600">
                        <p>
                           Founded in 2012, Mikrobot Academy began with a simple vision: to make advanced robotics education accessible to students of all ages. What started as weekend workshops in a small garage has grown into a comprehensive institution.
                        </p>
                        <p>
                           Today, our alumni are leading innovation in top tech companies, founding startups, and pushing the boundaries of what's possible. We're proud to be part of their journey.
                        </p>
                     </div>
                  </motion.div>
               </motion.div>
            </div>
         </section>

         <CTA />
      </main>
   );
};

export default About;