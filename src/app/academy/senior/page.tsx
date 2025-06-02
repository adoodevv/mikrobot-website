import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
      <div className="flex flex-col">
         <div className="py-28 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 text-center">
               <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
                  Senior Program
               </h1>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Advanced robotics education for dedicated students ages 15-18
               </p>
            </div>
         </div>
         <section className="flex-grow py-16">
            <div className="container mx-auto px-4 sm:px-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="relative order-2 md:order-1">
                     <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl transform -rotate-3"></div>
                     <div className="relative bg-white overflow-hidden rounded-2xl shadow-xl border border-gray-100 p-4 transform rotate-2 transition-transform hover:rotate-0 duration-500">
                        <img
                           src="https://s5.cdn.ventureburn.com/wp-content/uploads/sites/2/2023/07/Image-1-1.jpg"
                           alt="Senior students working on advanced robotics"
                           className="w-full h-auto rounded-lg"
                        />
                     </div>
                  </div>
                  <div className="order-1 md:order-2">
                     <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
                     <p className="text-lg mb-6">
                        Our Senior program represents the pinnacle of pre-collegiate robotics education.
                        Students engage with professional-grade tools, techniques, and technologies used in
                        industry and research settings.
                     </p>
                     <p className="text-lg mb-6">
                        This rigorous program prepares students for university engineering programs and careers
                        in robotics, AI, and related fields. Participants complete comprehensive projects that
                        demonstrate mastery across mechanical, electronic, and software domains.
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
               <h2 className="text-3xl font-bold mb-10 text-center">Advanced Technical Focus</h2>
               <div className="max-w-3xl mx-auto">
                  <Card className="border-none shadow-lg">
                     <CardContent className="p-8">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           {advancedFeatures.map((feature, index) => (
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
               <h2 className="text-3xl font-bold mb-10 text-center">Competition Opportunities</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                     <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                           <Trophy className="h-8 w-8 text-primary" />
                        </div>
                        <Badge className="mb-3">National</Badge>
                        <h3 className="text-xl font-bold mb-3">RiSE</h3>
                        <p className="text-muted-foreground">
                           Our teams consistently reach the finals in this prestigious competition that combines engineering excellence with business strategy.
                        </p>
                     </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                     <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                           <Trophy className="h-8 w-8 text-primary" />
                        </div>
                        <Badge className="mb-3">International</Badge>
                        <h3 className="text-xl font-bold mb-3">World Robot Olympiad</h3>
                        <p className="text-muted-foreground">
                           Students create innovative solutions to global challenges while competing against teams from around the world.
                        </p>
                     </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                     <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                           <Trophy className="h-8 w-8 text-primary" />
                        </div>
                        <Badge className="mb-3">Collegiate</Badge>
                        <h3 className="text-xl font-bold mb-3">University Partnerships</h3>
                        <p className="text-muted-foreground">
                           Advanced students partner with university research labs to work on cutting-edge projects and competitions.
                        </p>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </section>

         <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6">
               <h2 className="text-3xl font-bold mb-10 text-center">Career Pathways</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {careerPaths.map((path, index) => (
                     <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="p-6">
                           <h3 className="text-xl font-bold mb-2">{path.title}</h3>
                           <p className="text-muted-foreground mb-4">{path.description}</p>
                           <div>
                              <p className="text-sm font-medium mb-1">Notable Employers:</p>
                              <div className="flex flex-wrap gap-2">
                                 {path.companies.map((company, idx) => (
                                    <Badge key={idx} variant="outline">{company}</Badge>
                                 ))}
                              </div>
                           </div>
                        </CardContent>
                     </Card>
                  ))}
               </div>
            </div>
         </section>
      </div>
   );
};

export default AcademySenior;