import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
   return (
      <div className="flex flex-col">
         <div className="py-28 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 text-center">
               <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
                  About Mikrobot Academy
               </h1>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Building tomorrow's innovators through excellence in robotics education
               </p>
            </div>
         </div>
         <section className="flex-grow py-16">
            <div className="container mx-auto px-4 sm:px-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                     <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                     <p className="text-lg mb-6">
                        At Mikrobot Academy, we believe in empowering the next generation
                        with the skills and knowledge to lead in an increasingly technological
                        world. Our mission is to inspire innovation, foster critical thinking,
                        and build confidence through comprehensive robotics education.
                     </p>
                     <p className="text-lg mb-6">
                        We provide a structured curriculum that balances theoretical knowledge
                        with hands-on practice, ensuring students develop both technical skills
                        and creative problem-solving abilities.
                     </p>
                     <Button>Learn About Our Curriculum</Button>
                  </div>
                  <div className="relative">
                     <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl transform -rotate-3"></div>
                     <div className="relative bg-white overflow-hidden rounded-2xl shadow-xl border border-gray-100 p-4 transform rotate-2 transition-transform hover:rotate-0 duration-500">
                        <img
                           src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                           alt="Students learning robotics"
                           className="w-full h-auto rounded-lg"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6">
               <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                     <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                           <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                           </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Innovation</h3>
                        <p className="text-muted-foreground">
                           We foster an environment where curiosity thrives and new ideas are welcomed.
                        </p>
                     </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                     <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                           <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                           </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Excellence</h3>
                        <p className="text-muted-foreground">
                           We set high standards and provide the support needed to achieve them.
                        </p>
                     </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                     <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                           <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                           </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Community</h3>
                        <p className="text-muted-foreground">
                           We build meaningful connections among students, educators, and the industry.
                        </p>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </section>

         <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                     <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                     <p className="text-lg mb-4">
                        Founded in 2012, Mikrobot Academy
                        began with a simple vision: to make advanced robotics education accessible to
                        students of all ages.
                     </p>
                     <p className="text-lg mb-4">
                        What started as weekend workshops for local schools has now grown into a
                        comprehensive educational institution with state-of-the-art facilities and
                        a curriculum recognized for its excellence.
                     </p>
                     <p className="text-lg mb-4">
                        Today, Mikrobot Academy alumnus can be found leading innovation in technology
                        companies around the world, pursuing advanced degrees in STEM fields, and
                        even founding their own startups.
                     </p>
                  </div>
                  <div className="order-1 md:order-2 relative">
                     <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl transform rotate-3"></div>
                     <div className="relative bg-white overflow-hidden rounded-2xl shadow-xl border border-gray-100 p-4 transform -rotate-2 transition-transform hover:rotate-0 duration-500">
                        <img
                           src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                           alt="Mikrobot Academy history"
                           className="w-full h-auto rounded-lg"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default About;