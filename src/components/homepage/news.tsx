"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface NewsItem {
   id: string;
   title: string;
   slug: string;
   excerpt: string | null;
   category: string;
   readTime: string | null;
   image: string | null;
}

const News = () => {
   const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      fetchNews();
   }, []);

   const fetchNews = async () => {
      try {
         const response = await fetch("/api/posts?published=true");
         const data = await response.json();
         setNewsItems(data.slice(0, 3)); // Show only first 3
      } catch (error) {
         console.error("Error fetching news:", error);
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
               {/* Left Column - Sticky Header */}
               <div className="lg:w-7/12 lg:sticky lg:top-24 lg:self-start space-y-6">
                  <span className="text-sm font-bold tracking-wider uppercase text-slate-900">News</span>
                  <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight leading-tight">
                     Latest from the academy
                  </h2>
                  <p className="text-lg text-slate-600">
                     Stay informed about competitions, events, and student achievements
                  </p>
                  <Link href="/news" className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-200 text-sm font-semibold rounded-md text-slate-900 bg-white hover:bg-slate-50 transition-colors">
                     View all
                  </Link>
               </div>

               {/* Right Column - Scrollable List */}
               <div className="lg:w-5/12 space-y-12">
                  {isLoading ? (
                     <div className="text-slate-600">Loading news...</div>
                  ) : newsItems.length === 0 ? (
                     <div className="text-slate-600">No news available</div>
                  ) : (
                     newsItems.map((item) => (
                        <article key={item.id} className="flex flex-col sm:flex-row gap-6 sm:gap-8 group cursor-pointer">
                           {item.image && (
                              <div className="relative w-full sm:w-1/3 aspect-[4/3] sm:aspect-square rounded-xl overflow-hidden bg-slate-100">
                                 <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                 />
                              </div>
                           )}
                           <div className="flex-1 flex flex-col justify-center space-y-3">
                              <div className="flex items-center space-x-3 text-sm">
                                 <span className="px-2 py-1 bg-slate-100 rounded text-slate-900 font-medium">
                                    {item.category}
                                 </span>
                                 {item.readTime && (
                                    <span className="text-slate-500 font-medium">{item.readTime}</span>
                                 )}
                              </div>
                              <h3 className="text-2xl font-medium text-slate-900 leading-tight group-hover:underline">
                                 {item.title}
                              </h3>
                              {item.excerpt && (
                                 <p className="text-slate-600 leading-relaxed">
                                    {item.excerpt}
                                 </p>
                              )}
                              <Link
                                 href={`/news#${item.slug}`}
                                 className="inline-flex items-center text-sm font-semibold text-slate-900 pt-2"
                              >
                                 Read more <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                              </Link>
                           </div>
                        </article>
                     ))
                  )}
               </div>
            </div>
         </div>
      </section>
   );
};

export default News;