import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

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
      <div className="flex flex-col">
         <div className="py-28 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 text-center">
               <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
                  Elementary Program
               </h1>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A gentle introduction to robotics for young innovators ages 6-10
               </p>
            </div>
         </div>
         <section className="flex-grow py-16">
            <div className="container mx-auto px-4 sm:px-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="relative">
                     <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl transform -rotate-3"></div>
                     <div className="relative bg-white overflow-hidden rounded-2xl shadow-xl border border-gray-100 p-4 transform rotate-2 transition-transform hover:rotate-0 duration-500">
                        <img
                           src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                           alt="Elementary students working with robots"
                           className="w-full h-auto rounded-lg"
                        />
                     </div>
                  </div>
                  <div>
                     <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
                     <p className="text-lg mb-6">
                        Our Elementary program is specially designed to spark curiosity and
                        creativity in young minds. Through playful exploration and guided
                        activities, children discover the fascinating world of robotics while
                        developing critical thinking skills.
                     </p>
                     <p className="text-lg mb-6">
                        Students work with age-appropriate robotics kits that are both educational
                        and engaging. Our experienced instructors create a supportive environment
                        where young learners can experiment, make mistakes, and grow.
                     </p>
                     <div className="flex flex-wrap gap-4">
                        <Button size="lg">Enroll Now</Button>
                        <Button variant="outline" size="lg">Download Curriculum</Button>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6">
               <h2 className="text-3xl font-bold mb-10 text-center">Program Features</h2>
               <div className="max-w-3xl mx-auto">
                  <Card className="border-none shadow-lg">
                     <CardContent className="p-8">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           {features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                 <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                                 <span>{feature}</span>
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
               <h2 className="text-3xl font-bold mb-10 text-center">Class Structure</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                     <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                           <span className="text-2xl font-bold text-primary">1</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Discovery</h3>
                        <p className="text-muted-foreground">
                           Students explore robotics concepts through interactive demonstrations and discussions.
                        </p>
                     </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                     <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                           <span className="text-2xl font-bold text-primary">2</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Creation</h3>
                        <p className="text-muted-foreground">
                           Guided by instructors, students build simple robots using specialized educational kits.
                        </p>
                     </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                     <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                           <span className="text-2xl font-bold text-primary">3</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Play & Learn</h3>
                        <p className="text-muted-foreground">
                           Students engage with their creations through games and challenges that reinforce learning objectives.
                        </p>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </section>
      </div>
   );
};

export default AcademyElementary;