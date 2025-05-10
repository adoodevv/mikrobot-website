import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTASection = () => {
   return (
      <section className="py-16 md:py-20">
         <div className="container mx-auto px-4 sm:px-6">
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-90"></div>
               <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                     Ready to Begin Your Robotics Journey?
                  </h2>
                  <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
                     Join Mikrobot Academy today and become part of a community that's
                     shaping the technological future. Limited spots available for our
                     upcoming semester.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <Button
                        asChild
                        size="lg"
                        className="bg-white text-primary hover:bg-white/90"
                     >
                        <Link href="/about">
                           Enroll Now
                        </Link>
                     </Button>
                     <Button
                        asChild
                        size="lg"
                        className="border-white text-white hover:bg-white/10"
                     >
                        <Link href="/about">
                           Schedule a Tour
                        </Link>
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default CTASection;