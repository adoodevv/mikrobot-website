"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
   });

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle form submission here
      console.log("Form submitted:", formData);
      // You can add your form submission logic here
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
         ...prev,
         [name]: value
      }));
   };

   return (
      <>
         {/* Hero Section */}
         <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="container mx-auto px-4 sm:px-6">
               <div className="text-center max-w-3xl mx-auto">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                     Get in <span className="text-primary">Touch</span>
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground mb-8">
                     Have questions about our robotics programs? Want to schedule a visit?
                     We'd love to hear from you and help you get started on your robotics journey.
                  </p>
               </div>
            </div>
         </section>

         {/* Contact Content */}
         <section className="py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Contact Form */}
                  <div className="space-y-8">
                     <div>
                        <h2 className="text-3xl font-bold mb-4">Send us a Message</h2>
                        <p className="text-muted-foreground">
                           Fill out the form below and we'll get back to you as soon as possible.
                        </p>
                     </div>

                     <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div>
                              <label htmlFor="name" className="block text-sm font-medium mb-2">
                                 Full Name
                              </label>
                              <Input
                                 id="name"
                                 name="name"
                                 type="text"
                                 placeholder="Your full name"
                                 value={formData.name}
                                 onChange={handleChange}
                                 required
                              />
                           </div>
                           <div>
                              <label htmlFor="email" className="block text-sm font-medium mb-2">
                                 Email Address
                              </label>
                              <Input
                                 id="email"
                                 name="email"
                                 type="email"
                                 placeholder="your.email@example.com"
                                 value={formData.email}
                                 onChange={handleChange}
                                 required
                              />
                           </div>
                        </div>

                        <div>
                           <label htmlFor="subject" className="block text-sm font-medium mb-2">
                              Subject
                           </label>
                           <Input
                              id="subject"
                              name="subject"
                              type="text"
                              placeholder="What's this about?"
                              value={formData.subject}
                              onChange={handleChange}
                              required
                           />
                        </div>

                        <div>
                           <label htmlFor="message" className="block text-sm font-medium mb-2">
                              Message
                           </label>
                           <Textarea
                              id="message"
                              name="message"
                              placeholder="Tell us more about your inquiry..."
                              rows={6}
                              value={formData.message}
                              onChange={handleChange}
                              required
                           />
                        </div>

                        <Button type="submit" className="w-full md:w-auto" size="lg">
                           <Send className="mr-2 h-4 w-4" />
                           Send Message
                        </Button>
                     </form>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-8">
                     <div>
                        <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                        <p className="text-muted-foreground">
                           Reach out to us through any of these channels. We're here to help!
                        </p>
                     </div>

                     <div className="space-y-6">
                        <Card>
                           <CardHeader className="pb-3">
                              <CardTitle className="flex items-center text-lg">
                                 <Mail className="mr-3 h-5 w-5 text-primary" />
                                 Email Us
                              </CardTitle>
                           </CardHeader>
                           <CardContent>
                              <CardDescription className="text-base">
                                 info@mikrobotacademy.com
                              </CardDescription>
                              <p className="text-sm text-muted-foreground mt-1">
                                 We typically respond within 24 hours
                              </p>
                           </CardContent>
                        </Card>

                        <Card>
                           <CardHeader className="pb-3">
                              <CardTitle className="flex items-center text-lg">
                                 <Phone className="mr-3 h-5 w-5 text-primary" />
                                 Call Us
                              </CardTitle>
                           </CardHeader>
                           <CardContent>
                              <CardDescription className="text-base">
                                 +1 (555) 123-4567
                              </CardDescription>
                              <p className="text-sm text-muted-foreground mt-1">
                                 Monday - Friday, 9:00 AM - 5:00 PM
                              </p>
                           </CardContent>
                        </Card>

                        <Card>
                           <CardHeader className="pb-3">
                              <CardTitle className="flex items-center text-lg">
                                 <MapPin className="mr-3 h-5 w-5 text-primary" />
                                 Visit Us
                              </CardTitle>
                           </CardHeader>
                           <CardContent>
                              <CardDescription className="text-base">
                                 123 Robotics Street<br />
                                 Innovation District<br />
                                 Tech City, TC 12345
                              </CardDescription>
                              <p className="text-sm text-muted-foreground mt-1">
                                 Schedule a tour to see our facilities
                              </p>
                           </CardContent>
                        </Card>

                        <Card>
                           <CardHeader className="pb-3">
                              <CardTitle className="flex items-center text-lg">
                                 <Clock className="mr-3 h-5 w-5 text-primary" />
                                 Office Hours
                              </CardTitle>
                           </CardHeader>
                           <CardContent>
                              <CardDescription className="text-base">
                                 Monday - Friday: 9:00 AM - 5:00 PM<br />
                                 Saturday: 10:00 AM - 2:00 PM<br />
                                 Sunday: Closed
                              </CardDescription>
                              <p className="text-sm text-muted-foreground mt-1">
                                 Extended hours available for special events
                              </p>
                           </CardContent>
                        </Card>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <section className="py-16 md:py-20 bg-muted/50">
            <div className="container mx-auto px-4 sm:px-6">
               <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                     Ready to Start Your Robotics Journey?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                     Join our next information session or schedule a personalized tour
                     to see how Mikrobot Academy can help you achieve your goals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <Button size="lg" className="bg-primary hover:bg-primary/90">
                        Schedule a Tour
                     </Button>
                     <Button size="lg" variant="outline">
                        Download Brochure
                     </Button>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
