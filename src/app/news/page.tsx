'use client'
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Extended news data
const newsItems = [
   {
      id: 1,
      title: "Mikrobot Academy Team Wins National Robotics Championship",
      excerpt: "Our senior team's autonomous rescue robot took first place in the national finals, advancing to the international competition in Tokyo this fall.",
      content: "After months of preparation, the Mikrobot Academy senior team emerged victorious at the National Robotics Championship with their innovative autonomous rescue robot. The team's creation demonstrated exceptional obstacle navigation and victim identification capabilities, earning perfect scores from the judges. The win qualifies the team for the International Robotics Olympics in Tokyo this September.",
      category: "Achievements",
      date: "May 2, 2025",
      author: "Dr. Kwame Oteng-Gyasi",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
   },
   {
      id: 2,
      title: "New Advanced AI Curriculum Launches This Fall",
      excerpt: "We're excited to announce our expanded senior program featuring cutting-edge machine learning and computer vision modules.",
      content: "Starting this fall, Mikrobot Academy will introduce an expanded curriculum focusing on artificial intelligence applications in robotics. The new modules will cover neural networks, computer vision, and natural language processing, providing students with skills that match current industry demands. The curriculum was developed in partnership with leading AI researchers and includes hands-on projects using the latest technologies.",
      category: "Curriculum",
      date: "April 28, 2025",
      author: "Elisha Mensah",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
   },
   {
      id: 3,
      title: "Summer Robotics Camp Registration Now Open",
      excerpt: "Secure your child's spot in our popular two-week intensive program designed to spark creativity and technical skills.",
      content: "Registration is now open for Mikrobot Academy's annual Summer Robotics Camp. The two-week program offers students ages 8-18 an immersive experience in robotics design, programming, and operation. Camps are divided by age group and skill level to ensure appropriate challenges for all participants. Early bird discounts are available until June 1st, and scholarships are available for qualifying students.",
      category: "Events",
      date: "April 15, 2025",
      author: "Elisha Mensah",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
   },
   {
      id: 4,
      title: "Alumni Spotlight: Former Student Launches Robotics Startup",
      excerpt: "2021 graduate Michael Wong secures $2M in funding for his innovative healthcare robotics company.",
      content: "Mikrobot Academy is proud to celebrate the success of alumnus Michael Wong (Class of 2021), who recently secured $2 million in seed funding for his healthcare robotics startup, AssistTech. The company's first product, a home assistance robot designed for elderly users, builds directly upon the senior project Michael developed during his time at our academy. Michael credits the academy's hands-on approach and industry connections for helping him develop both the technical skills and entrepreneurial mindset needed for his venture.",
      category: "Alumni",
      date: "March 8, 2025",
      author: "Nurul-Haqq Munagah",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
   },
   {
      id: 5,
      title: "Elementary Program Expansion Adds Weekend Sessions",
      excerpt: "Due to high demand, we're adding Saturday afternoon sessions for our youngest robotics enthusiasts.",
      content: "In response to growing interest in early robotics education, Mikrobot Academy is expanding its Elementary program to include weekend sessions. Starting next month, we will offer Saturday morning classes for students ages 6-10. The two-hour sessions will focus on foundational robotics concepts through play-based learning and simple building projects. The expansion comes after our weekday elementary programs reached full capacity with waiting lists.",
      category: "Programs",
      date: "February 25, 2025",
      author: "Mr. John Awotwi",
      image: "https://images.unsplash.com/photo-1602526211905-6adc54adb8d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
   }
];

const News = () => {
   const [searchQuery, setSearchQuery] = useState("");

   const filteredNews = searchQuery
      ? newsItems.filter(news =>
         news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
         news.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
         news.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
      : newsItems;

   return (
      <div className="flex flex-col">
         <div className="py-28 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 text-center">
               <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
                  Latest News
               </h1>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Stay updated with the latest happenings, achievements, and announcements.
               </p>
            </div>
         </div>
         <section className="flex-grow py-16">
            <div className="container mx-auto px-4 sm:px-6">
               <div className="max-w-md mx-auto mb-12">
                  <div className="relative">
                     <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                     <Input
                        placeholder="Search news..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                     />
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredNews.map((news) => (
                     <Card key={news.id} className="hover-card border-none overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="p-0">
                           <div className="aspect-[16/9] overflow-hidden">
                              <img
                                 src={news.image}
                                 alt={news.title}
                                 className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                              />
                           </div>
                           <div className="p-6">
                              <div className="flex items-center justify-between mb-3">
                                 <Badge variant="secondary">{news.category}</Badge>
                                 <span className="text-xs text-muted-foreground">{news.date}</span>
                              </div>
                              <h3 className="font-bold text-xl mb-3 line-clamp-2">{news.title}</h3>
                              <p className="text-muted-foreground mb-4 line-clamp-3">{news.excerpt}</p>
                              <div className="flex items-center justify-between mt-6">
                                 <span className="text-xs text-muted-foreground">By {news.author}</span>
                                 <Button variant="outline" size="sm">
                                    Read More
                                 </Button>
                              </div>
                           </div>
                        </CardContent>
                     </Card>
                  ))}
               </div>

               {filteredNews.length === 0 && (
                  <div className="text-center py-12">
                     <p className="text-muted-foreground">No news articles found matching your search.</p>
                     <Button
                        variant="outline"
                        className="mt-4"
                        onClick={() => setSearchQuery("")}
                     >
                        Clear Search
                     </Button>
                  </div>
               )}
            </div>
         </section>
         <section className="py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6">
               <div className="bg-primary rounded-2xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
                  <h2 className="text-2xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
                  <p className="text-white/90 mb-6">
                     Stay informed about the latest developments, events, and opportunities at Mikrobot Academy.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <Input
                        placeholder="Your email address"
                        className="max-w-md bg-white"
                        type="email"
                     />
                     <Button className="bg-white text-primary hover:bg-white/90">Subscribe</Button>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default News;