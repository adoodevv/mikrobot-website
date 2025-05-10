"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Award, Lightbulb, Users } from "lucide-react";

const highlights = [
   {
      icon: BookOpen,
      title: "World-Class Curriculum",
      description: "Developed by leading robotics engineers and educators to provide cutting-edge knowledge and skills.",
      color: "bg-blue-50 text-blue-700",
      iconColor: "text-blue-600"
   },
   {
      icon: Award,
      title: "Award-Winning Mentors",
      description: "Learn from industry experts with years of experience in robotics innovation and education.",
      color: "bg-purple-50 text-purple-700",
      iconColor: "text-purple-600"
   },
   {
      icon: Lightbulb,
      title: "Hands-on Labs",
      description: "State-of-the-art facilities where students build, program, and test their robot creations.",
      color: "bg-amber-50 text-amber-700",
      iconColor: "text-amber-600"
   },
   {
      icon: Users,
      title: "Age-Based Programs",
      description: "Tailored learning experiences for elementary, junior, and senior students at all skill levels.",
      color: "bg-emerald-50 text-emerald-700",
      iconColor: "text-emerald-600"
   },
];

const cardVariants = {
   hidden: { opacity: 0, y: 20 },
   visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
         delay: 0.1 * i,
         duration: 0.5,
      }
   })
};

export function HighlightsSection() {
   return (
      <section className="py-20 bg-gray-50">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <Badge variant="outline" className="mb-4">Why Choose Mikrobot</Badge>
               <h2 className="text-3xl md:text-4xl font-bold mb-4">Excellence in Robotics Education</h2>
               <p className="text-gray-600 max-w-2xl mx-auto">
                  We combine innovative teaching methods with hands-on experience to create
                  the perfect learning environment for future robotics leaders.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {highlights.map((highlight, index) => (
                  <motion.div
                     key={index}
                     variants={cardVariants}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, margin: "-50px" }}
                     custom={index}
                  >
                     <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <CardHeader>
                           <div className={`w-12 h-12 rounded-full ${highlight.color} flex items-center justify-center mb-4`}>
                              <highlight.icon className={`h-6 w-6 ${highlight.iconColor}`} />
                           </div>
                           <CardTitle>{highlight.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <CardDescription className="text-base">{highlight.description}</CardDescription>
                        </CardContent>
                     </Card>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
}