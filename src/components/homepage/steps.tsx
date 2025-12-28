"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const steps = [
   {
      number: "01",
      label: "Enroll today",
      subLabel: "Getting started",
      title: "Choose your path and join us",
      description: "Select the program that matches your skill level. We offer three distinct tracks designed to grow with your abilities. Each one builds on solid fundamentals.",
      buttons: [
         { text: "Browse", href: "/programs", variant: "outline" },
         { text: "Explore", href: "/enroll", variant: "link" }
      ],
      image: "/students/eddy.jpg",
   },
   {
      number: "02",
      label: "Learn deeply",
      subLabel: "Master robotics through hands-on projects",
      title: "Build real-world solutions",
      description: "Work directly with mentors who know the field. Build real machines. Solve actual problems. Progress at your own pace while staying challenged.",
      buttons: [
         { text: "View Curriculum", href: "/programs", variant: "outline" },
      ],
      image: "/students/afia.jpeg",
   },
   {
      number: "03",
      label: "Compete well",
      subLabel: "The finish",
      title: "Showcase your skills in competitions",
      description: "Test what you've learnt against other innovators. Win recognition. Build confidence. Prepare for whatever comes next in your technical career.",
      buttons: [
         { text: "Apply", href: "/enroll", variant: "outline" },
         { text: "Compete", href: "/programs", variant: "link" },
      ],
      image: "/compete.jpg",
   },
];

const Steps = () => {
   return (
      <section className="py-24 bg-white border-t border-slate-100">
         <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col gap-32">
               {steps.map((step, index) => (
                  <div key={index} className="flex flex-col gap-12">
                     {/* Step Header */}
                     <div className="flex items-baseline gap-4 border-b border-slate-200 pb-8">
                        <span className="text-sm font-bold text-slate-900">{step.number}</span>
                        <h3 className="text-sm font-bold text-slate-900">{step.label}</h3>
                     </div>

                     {/* Step Content */}
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <div className="flex flex-col items-start space-y-6 max-w-xl">
                           <div className="space-y-2">
                              <span className="text-sm font-semibold text-slate-900">{step.subLabel}</span>
                              <h2 className="text-4xl md:text-5xl font-normal text-slate-900 leading-tight tracking-tight">
                                 {step.title}
                              </h2>
                           </div>
                           <p className="text-lg text-slate-600 leading-relaxed">
                              {step.description}
                           </p>
                           <div className="flex items-center gap-6 pt-4">
                              {step.buttons.map((btn, i) => (
                                 <Link
                                    key={i}
                                    href={btn.href}
                                    className={`inline-flex items-center text-sm font-semibold transition-colors ${btn.variant === "outline"
                                       ? "px-8 py-3.5 rounded-md border border-slate-200 text-slate-900 hover:bg-slate-50 hover:border-slate-300"
                                       : "text-slate-900 group"
                                       }`}
                                 >
                                    {btn.text}
                                    {btn.variant === "link" && (
                                       <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    )}
                                 </Link>
                              ))}
                           </div>
                        </div>

                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-slate-100 shadow-sm">
                           <Image
                              src={step.image}
                              alt={step.title}
                              fill
                              className="object-cover"
                           />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}

export default Steps;
