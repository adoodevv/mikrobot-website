"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Search, Calendar, User, ArrowRight } from "lucide-react";

interface NewsItem {
   id: string;
   title: string;
   slug: string;
   excerpt: string | null;
   content: string;
   category: string;
   author: string;
   readTime: string | null;
   image: string | null;
   createdAt: string;
}

const categories = ["All", "Achievements", "Curriculum", "Events", "Alumni", "Programs"];

export default function NewsPage() {
   const [activeCategory, setActiveCategory] = useState("All");
   const [searchQuery, setSearchQuery] = useState("");
   const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      fetchNews();
   }, []);

   const fetchNews = async () => {
      try {
         const response = await fetch("/api/posts?published=true");
         const data = await response.json();
         setNewsItems(data);
      } catch (error) {
         console.error("Error fetching news:", error);
      } finally {
         setIsLoading(false);
      }
   };

   // Filter Logic
   const filteredNews = newsItems.filter(item => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
         (item.excerpt && item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
   });

   const featuredArticle = filteredNews[0];
   const remainingArticles = filteredNews.slice(1);

   return (
      <main className="min-h-screen bg-slate-50">
         {/* Hero Section */}
         <section className="pt-32 pb-16 bg-white border-b border-slate-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
               <div className="max-w-3xl mx-auto text-center">
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6 }}
                  >
                     <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Latest <span className="text-sky-700">Updates</span>
                     </h1>
                     <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Discover the stories shaping the future of robotics at Mikrobot Academy. From student victories to curriculum innovations.
                     </p>

                     {/* Search Bar */}
                     <div className="max-w-md mx-auto relative group mb-10">
                        <div className="relative flex items-center bg-slate-50 border border-slate-200 rounded-full focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-100 transition-all duration-300 overflow-hidden">
                           <Search className="w-5 h-5 text-slate-400 ml-4 flex-shrink-0" />
                           <input
                              type="text"
                              placeholder="Search articles..."
                              className="w-full bg-transparent border-none focus:ring-0 text-slate-700 placeholder:text-slate-400 py-3 px-3 outline-none"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                           />
                        </div>
                     </div>

                     {/* Category Filter */}
                     <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((cat) => (
                           <button
                              key={cat}
                              onClick={() => setActiveCategory(cat)}
                              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                 ? "bg-sky-700 text-white shadow-md transform scale-105"
                                 : "bg-white text-slate-600 border border-slate-200 hover:border-sky-700 hover:text-sky-700"
                                 }`}
                           >
                              {cat}
                           </button>
                        ))}
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>

         <div className="container mx-auto px-4 sm:px-6 py-16">
            {isLoading ? (
               <div className="text-center py-20">
                  <div className="text-slate-600">Loading news...</div>
               </div>
            ) : filteredNews.length > 0 ? (
               <>
                  {/* Featured Article */}
                  {featuredArticle && activeCategory === "All" && !searchQuery && (
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16"
                     >
                        <div className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 grid md:grid-cols-2">
                           {featuredArticle.image && (
                              <div className="relative h-64 md:h-auto overflow-hidden">
                                 <img
                                    src={featuredArticle.image}
                                    alt={featuredArticle.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                 />
                              </div>
                           )}
                           <div className="p-8 md:p-12 flex flex-col justify-center">
                              <div className="flex items-center gap-3 mb-4">
                                 <span className="inline-block px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider">
                                    {featuredArticle.category}
                                 </span>
                                 <div className="flex items-center text-slate-400 text-sm">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    {format(new Date(featuredArticle.createdAt), "MMMM d, yyyy")}
                                 </div>
                              </div>
                              <h2 className="text-3xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-sky-700 transition-colors">
                                 {featuredArticle.title}
                              </h2>
                              <p className="text-slate-600 text-lg mb-8 line-clamp-3">
                                 {featuredArticle.excerpt || featuredArticle.content.substring(0, 150) + "..."}
                              </p>
                              <div className="flex items-center justify-between mt-auto">
                                 <div className="flex items-center text-slate-500 text-sm font-medium">
                                    <User className="w-4 h-4 mr-2" />
                                    {featuredArticle.author}
                                 </div>
                                 <button className="flex items-center text-sky-700 font-semibold group-hover:translate-x-1 transition-transform">
                                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                                 </button>
                              </div>
                           </div>
                        </div>
                     </motion.div>
                  )}

                  {/* News Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {(activeCategory === "All" && !searchQuery ? remainingArticles : filteredNews).map((news, index) => (
                        <motion.div
                           key={news.id}
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: index * 0.1 }}
                           className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full"
                        >
                           {/* Image */}
                           {news.image && (
                              <div className="relative h-56 overflow-hidden bg-slate-100">
                                 <img
                                    src={news.image}
                                    alt={news.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                 />
                              </div>
                           )}

                           {/* Content */}
                           <div className="p-6 flex flex-col flex-grow">
                              <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                                 <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">
                                    {news.category}
                                 </span>
                                 <div className="flex items-center">
                                    <Calendar className="w-3 h-3 mr-1" />
                                    {format(new Date(news.createdAt), "MMM d, yyyy")}
                                 </div>
                              </div>

                              <h3 className="font-bold text-xl text-slate-900 mb-3 leading-snug group-hover:text-sky-700 transition-colors line-clamp-2">
                                 {news.title}
                              </h3>

                              <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-grow">
                                 {news.excerpt || news.content.substring(0, 150) + "..."}
                              </p>

                              <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                                 <span className="text-xs font-medium text-slate-500 flex items-center">
                                    <User className="w-3 h-3 mr-1.5" />
                                    {news.author}
                                 </span>
                                 <span className="text-sky-600 text-xs font-bold uppercase tracking-wide flex items-center group-hover:translate-x-1 transition-transform">
                                    Read More
                                 </span>
                              </div>
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </>
            ) : (
               <div className="text-center py-20">
                  <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                     <Search className="w-8 h-8 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">No articles found</h3>
                  <p className="text-slate-500">We couldn't find any news matching your criteria.</p>
                  <button
                     onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                     className="text-sky-700 font-medium mt-2 hover:underline"
                  >
                     Clear all filters
                  </button>
               </div>
            )}
         </div>

         {/* Newsletter Section */}
         <section className="py-20 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 sm:px-6">
               <div className="bg-gradient-to-br from-sky-900 to-indigo-900 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
                  {/* Decorative circles */}
                  <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

                  <div className="relative z-10 max-w-2xl mx-auto">
                     <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay in the Loop</h2>
                     <p className="text-sky-100 mb-8 text-lg">
                        Join our newsletter to get the latest robotics news, workshop announcements, and student success stories delivered to your inbox.
                     </p>
                     <div className="flex flex-col sm:flex-row gap-3">
                        <input
                           type="email"
                           placeholder="Enter your email address"
                           className="bg-white/10 border border-white/20 text-white placeholder:text-sky-200/70 h-12 px-4 rounded-xl focus:bg-white/20 outline-none w-full transition-all"
                        />
                        <button className="h-12 px-8 rounded-xl bg-transparent border border-white/20 backdrop-blur-md hover:bg-white/10 text-white font-semibold shadow-lg shadow-sky-900/50 transition-all hover:scale-105 whitespace-nowrap">
                           Subscribe
                        </button>
                     </div>
                     <p className="text-xs text-sky-300/60 mt-4">
                        We respect your privacy. Unsubscribe at any time.
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </main>
   );
}