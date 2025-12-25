import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

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
      <div className="flex flex-col">
         <div className="py-28 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 text-center">
               <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
                  Junior Program
               </h1>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Building foundational robotics skills for students ages 11-14
               </p>
            </div>
         </div>
         <section className="flex-grow py-16">
            <div className="container mx-auto px-4 sm:px-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                     <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
                     <p className="text-lg mb-6">
                        The Junior program at Mikrobot Academy bridges the gap between elementary
                        exploration and advanced robotics. Students develop comprehensive understanding
                        of programming, electronics, and mechanical systems through engaging projects.
                     </p>
                     <p className="text-lg mb-6">
                        This program is designed to build technical confidence while nurturing
                        creativity. Students learn to approach complex problems methodically and
                        develop solutions that demonstrate their growing technical expertise.
                     </p>
                     <div className="flex flex-wrap gap-4">
                        <Button size="lg">Enroll Now</Button>
                        <Button variant="outline" size="lg">Download Curriculum</Button>
                     </div>
                  </div>
                  <div className="relative">
                     <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl transform -rotate-3"></div>
                     <div className="relative bg-white overflow-hidden rounded-2xl shadow-xl border border-gray-100 p-4 transform rotate-2 transition-transform hover:rotate-0 duration-500">
                        <img
                           src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                           alt="Junior students programming robots"
                           className="w-full h-auto rounded-lg"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6">
               <h2 className="text-3xl font-bold mb-10 text-center">Key Skills Developed</h2>
               <div className="max-w-3xl mx-auto">
                  <Card className="border-none shadow-lg">
                     <CardContent className="p-8">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           {skills.map((skill, index) => (
                              <li key={index} className="flex items-start">
                                 <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                 <span>{skill}</span>
                              </li>
                           ))}
                        </ul>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </section>

         <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6">
               <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                     <CardContent className="p-0">
                        <div className="aspect-[4/3] overflow-hidden">
                           <img
                              src="https://circuitbest.com/wp-content/uploads/2020/10/Line-Follower.jpg"
                              alt="Line-following robot"
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                           />
                        </div>
                        <div className="p-6">
                           <div className="flex items-center mb-2">
                              <Star className="h-4 w-4 text-primary mr-1" fill="currentColor" />
                              <Star className="h-4 w-4 text-primary mr-1" fill="currentColor" />
                              <Star className="h-4 w-4 text-primary mr-1" fill="currentColor" />
                              <span className="text-sm ml-1">Intermediate</span>
                           </div>
                           <h3 className="font-bold text-xl mb-2">Line-Following Robot</h3>
                           <p className="text-muted-foreground mb-4">
                              Students build robots that can autonomously follow a path using sensor feedback.
                           </p>
                        </div>
                     </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                     <CardContent className="p-0">
                        <div className="aspect-[4/3] overflow-hidden">
                           <img
                              src="https://projects.arduinocontent.cc/cover-images/1b9d88d9-285e-4b40-8b0d-0a7c3b257231.blob"
                              alt="Smart obstacle course"
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                           />
                        </div>
                        <div className="p-6">
                           <div className="flex items-center mb-2">
                              <Star className="h-4 w-4 text-primary mr-1" fill="currentColor" />
                              <Star className="h-4 w-4 text-primary mr-1" fill="currentColor" />
                              <Star className="h-4 w-4 text-primary mr-1" fill="currentColor" />
                              <Star className="h-4 w-4 text-primary mr-1" fill="currentColor" />
                              <span className="text-sm ml-1">Advanced</span>
                           </div>
                           <h3 className="font-bold text-xl mb-2">Smart Obstacle Course</h3>
                           <p className="text-muted-foreground mb-4">
                              Design robots that navigate complex environments using multiple sensors and logic.
                           </p>
                        </div>
                     </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                     <CardContent className="p-0">
                        <div className="aspect-[4/3] overflow-hidden">
                           <img
                              src="https://i.ytimg.com/vi/j-lX9l9-Di4/maxresdefault.jpg"
                              alt="Robot arm challenge"
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                           />
                        </div>
                        <div className="p-6">
                           <div className="flex items-center mb-2">
                              <Star className="h-4 w-4 text-primary mr-1" fill="currentColor" />
                              <Star className="h-4 w-4 text-primary mr-1" fill="currentColor" />
                              <Star className="h-4 w-4 text-primary mr-1" fill="currentColor" />
                              <Star className="h-4 w-4 text-primary mr-1" fill="currentColor" />
                              <span className="text-sm ml-1">Advanced</span>
                           </div>
                           <h3 className="font-bold text-xl mb-2">Robot Arm Challenge</h3>
                           <p className="text-muted-foreground mb-4">
                              Build and program articulated robot arms to perform precision tasks.
                           </p>
                        </div>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </section>
      </div>
   );
};

export default AcademyJunior;