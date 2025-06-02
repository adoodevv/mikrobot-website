import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const newsItems = [
   {
      id: 1,
      title: "Mikrobot Academy Team Wins National Robotics Championship",
      excerpt: "Our senior team's autonomous rescue robot took first place in the national finals, advancing to the international competition.",
      category: "Achievements",
      date: "May 2, 2025",
      image: "/images/news/national.png"
   },
   {
      id: 2,
      title: "New Advanced AI Curriculum Launches This September",
      excerpt: "We're excited to announce our expanded senior program featuring cutting-edge machine learning and computer vision modules.",
      category: "Curriculum",
      date: "April 28, 2025",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
   },
   {
      id: 3,
      title: "Tarkwa Robotics Camp Registration Now Open",
      excerpt: "Secure your child's spot in our popular two-week intensive program designed to spark creativity and technical skills.",
      category: "Events",
      date: "April 15, 2025",
      image: "/images/news/tarkwa.png"
   }
];

const NewsSection = () => {
   return (
      <section className="py-20 bg-gray-50">
         <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News</h2>
               <p className="text-gray-600 max-w-2xl mx-auto">
                  Stay updated with the latest happenings, achievements, and announcements from Mikrobot Academy.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {newsItems.map((news) => (
                  <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                     <CardContent className="p-0">
                        <div className="aspect-[16/9] overflow-hidden">
                           <img
                              src={news.image}
                              alt={news.title}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                           />
                        </div>
                        <div className="px-6 pt-4">
                           <div className="flex items-center justify-between mb-3">
                              <Badge variant="secondary">{news.category}</Badge>
                              <span className="text-xs text-muted-foreground">{news.date}</span>
                           </div>
                           <h3 className="font-bold text-xl mb-3 line-clamp-2">{news.title}</h3>
                           <p className="text-muted-foreground mb-4 line-clamp-3">{news.excerpt}</p>
                           <Button variant="outline" size="sm" className="w-full group" asChild>
                              <Link href={`/news`}>
                                 Read More
                                 <ExternalLink className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                              </Link>
                           </Button>
                        </div>
                     </CardContent>
                  </Card>
               ))}
            </div>

            <div className="mt-12 text-center">
               <Button asChild>
                  <Link href="/news">View All News</Link>
               </Button>
            </div>
         </div>
      </section>
   );
};

export default NewsSection;