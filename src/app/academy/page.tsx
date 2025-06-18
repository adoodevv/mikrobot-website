import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Code, Trophy, Sparkles } from "lucide-react";
import Link from "next/link";

const AcademyPage = () => {
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
         icon: Sparkles,
         href: "/academy/elementary",
         image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
         color: "from-blue-500/10 to-purple-500/10"
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
         icon: Code,
         href: "/academy/junior",
         image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
         color: "from-green-500/10 to-blue-500/10"
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
         icon: Trophy,
         href: "/academy/senior",
         image: "https://s5.cdn.ventureburn.com/wp-content/uploads/sites/2/2023/07/Image-1-1.jpg",
         color: "from-orange-500/10 to-red-500/10"
      }
   ];

   const stats = [
      { number: "500+", label: "Students Enrolled" },
      { number: "50+", label: "Expert Instructors" },
      { number: "100+", label: "Projects Completed" },
      { number: "25+", label: "Competition Wins" }
   ];

   return (
      <div className="flex flex-col">
         <div className="py-28 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 text-center">
               <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
                  Mikrobot Academy
               </h1>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Comprehensive robotics education programs designed to nurture the next generation of innovators, engineers, and problem solvers.
               </p>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  {stats.map((stat, index) => (
                     <div key={index} className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.number}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6">
               <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold mb-4">Choose Your Program</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                     Our progressive curriculum is designed to grow with your child, from their first introduction to robotics through advanced technical mastery.
                  </p>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {programs.map((program, index) => (
                     <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-0">
                           <div className="relative">
                              <div className={`absolute inset-0 bg-gradient-to-r ${program.color} rounded-t-lg`}></div>
                              <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                                 <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                 />
                              </div>
                           </div>
                           <div className="p-6">
                              <div className="flex items-center justify-between mb-4">
                                 <div>
                                    <h3 className="text-xl font-bold mb-1">{program.title}</h3>
                                    <p className="text-sm text-muted-foreground">{program.subtitle}</p>
                                 </div>
                              </div>
                              <p className="text-muted-foreground mb-4">{program.description}</p>
                              <ul className="space-y-2 mb-6">
                                 {program.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm">
                                       <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                                       {feature}
                                    </li>
                                 ))}
                              </ul>
                              <Link href={program.href}>
                                 <Button className="w-full group">
                                    Explore Program
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                 </Button>
                              </Link>
                           </div>
                        </CardContent>
                     </Card>
                  ))}
               </div>
            </div>
         </section>

         <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                     <h2 className="text-3xl text-center font-bold mb-6">Why Choose Mikrobot Academy?</h2>
                     <div className="space-y-6">
                        <div className="flex items-start">
                           <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                              <Users className="h-6 w-6 text-primary" />
                           </div>
                           <div>
                              <h3 className="font-bold mb-2">Expert Instructors</h3>
                              <p className="text-muted-foreground">Learn from industry professionals and experienced educators who are passionate about robotics and education.</p>
                           </div>
                        </div>
                        <div className="flex items-start">
                           <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                              <Code className="h-6 w-6 text-primary" />
                           </div>
                           <div>
                              <h3 className="font-bold mb-2">Hands-on Learning</h3>
                              <p className="text-muted-foreground">Get your hands on real robotics equipment and work on projects that challenge and inspire you.</p>
                           </div>
                        </div>
                        <div className="flex items-start">
                           <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                              <Trophy className="h-6 w-6 text-primary" />
                           </div>
                           <div>
                              <h3 className="font-bold mb-2">Competition Ready</h3>
                              <p className="text-muted-foreground">Participate in local, national, and international robotics competitions to showcase your skills.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="relative">
                     <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl transform -rotate-3"></div>
                     <div className="relative bg-white overflow-hidden rounded-2xl shadow-xl border border-gray-100 p-4 transform rotate-2 transition-transform hover:rotate-0 duration-500">
                        <img
                           src="/images/gallery/sumo-usa.png"
                           alt="Students collaborating on robotics project"
                           className="w-full h-auto rounded-lg"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 text-center">
               <h2 className="text-3xl font-bold mb-4">Ready to Start Your Robotics Journey?</h2>
               <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join hundreds of students who have discovered their passion for robotics and technology at Mikrobot Academy.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg">Contact Admissions</Button>
                  <Button variant="outline" size="lg">Schedule a Visit</Button>
               </div>
            </div>
         </section>
      </div>
   );
};

export default AcademyPage;
