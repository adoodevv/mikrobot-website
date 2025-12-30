"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin} from "lucide-react";
import CTA from "@/components/homepage/cta";
import { useState } from "react";
import toast from "react-hot-toast";

const ContactPage = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
   });
   const [isSubmitting, setIsSubmitting] = useState(false);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
         ...prev,
         [name]: value
      }));
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
         const response = await fetch("/api/forms", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
               formType: "contact",
               ...formData
            }),
         });

         if (response.ok) {
            toast.success("Message sent successfully! We'll get back to you soon.");
            setFormData({
               name: "",
               email: "",
               subject: "",
               message: "",
            });
         } else {
            const data = await response.json();
            toast.error(data.error || "Failed to send message. Please try again.");
         }
      } catch (error) {
         toast.error("An error occurred. Please try again later.");
      } finally {
         setIsSubmitting(false);
      }
   };

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

   const contactInfo = [
      {
         icon: <Mail className="w-6 h-6" />,
         title: "Email Us",
         details: "operations@mikrobotacademy.com",
         desc: "We typically respond within 24 hours"
      },
      {
         icon: <Phone className="w-6 h-6" />,
         title: "Call Us",
         details: "+233 24 763 2002",
         desc: "Monday - Friday, 9:00 AM - 5:00 PM"
      },
      {
         icon: <MapPin className="w-6 h-6" />,
         title: "Visit Us",
         details: "Augustino Neto Rd. Council Close, Airport Residential Area",
         desc: "Schedule a tour to see our facilities"
      }
   ];

   return (
      <main className="flex flex-col overflow-hidden bg-slate-50">
         <section className="relative min-h-[60vh] flex items-center justify-center py-20 overflow-hidden">
            <div className="absolute inset-0 z-0">
               <Image
                  src="/contact.jpeg"
                  alt="Contact Hero"
                  fill
                  className="object-cover opacity-50"
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
                     Get in <span className="text-sky-700">Touch</span>
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed">
                     Have questions? We'd love to hear from you. Reach out to us and let's start a conversation about your child's future in robotics.
                  </p>
               </motion.div>
            </div>
         </section>

         <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6">
               <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={containerVariants}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-16"
               >
                  {/* Contact Info */}
                  <motion.div variants={itemVariants} className="space-y-8">
                     <div className="space-y-4">
                        <h3 className="text-sm font-semibold tracking-wider uppercase">Contact Information</h3>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">We're here to help</h2>
                        <p className="text-lg text-slate-600">
                           Whether you have a question about our programs, pricing, or seeing our academy in person, our team is ready to answer all your questions.
                        </p>
                     </div>

                     <div className="space-y-6">
                        {contactInfo.map((item, idx) => (
                           <div key={idx} className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                              <div className="bg-sky-50 p-3 rounded-xl text-sky-700">
                                 {item.icon}
                              </div>
                              <div>
                                 <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                                 <p className="text-slate-900 font-medium mb-1">{item.details}</p>
                                 <p className="text-sm text-slate-500">{item.desc}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </motion.div>

                  {/* Contact Form */}
                  <motion.div variants={itemVariants} className="relative">
                     <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                 <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                                 <input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full h-12 bg-slate-50 border border-slate-200 rounded-lg px-4 text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none transition-all"
                                    required
                                 />
                              </div>
                              <div className="space-y-2">
                                 <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                                 <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    className="w-full h-12 bg-slate-50 border border-slate-200 rounded-lg px-4 text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none transition-all"
                                    required
                                 />
                              </div>
                           </div>

                           <div className="space-y-2">
                              <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
                              <input
                                 id="subject"
                                 name="subject"
                                 value={formData.subject}
                                 onChange={handleChange}
                                 placeholder="How can we help?"
                                 className="w-full h-12 bg-slate-50 border border-slate-200 rounded-lg px-4 text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none transition-all"
                                 required
                              />
                           </div>

                           <div className="space-y-2">
                              <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                              <textarea
                                 id="message"
                                 name="message"
                                 value={formData.message}
                                 onChange={handleChange}
                                 placeholder="Tell us more..."
                                 rows={6}
                                 className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none transition-all resize-none"
                                 required
                              />
                           </div>

                           <button
                              type="submit"
                              disabled={isSubmitting}
                              className="w-full h-12 bg-sky-700 hover:bg-sky-800 text-white font-medium text-lg rounded-lg flex items-center justify-center transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                           >
                              {isSubmitting ? "Sending..." : "Send Message"}
                           </button>
                        </form>
                     </div>
                  </motion.div>
               </motion.div>
            </div>
         </section>

         <CTA />
      </main>
   );
};

export default ContactPage;
