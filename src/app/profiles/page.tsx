import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { staffProfiles } from "@/constants/staff";
import { studentProfiles } from "@/constants/students";
import { directorsProfiles } from "@/constants/directors";

const Profiles = () => {
   return (
      <div className="flex flex-col">
         <div className="py-28 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 text-center">
               <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
                  Our Community
               </h1>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Meet the talented students, dedicated instructors, and successful alumni who make Mikrobot Academy a hub of innovation and excellence.
               </p>
            </div>
         </div>
         <section className="flex-grow pb-16">
            <div className="container mx-auto px-4 sm:px-6">
               <Tabs defaultValue="students" className="w-full">
                  <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
                     <TabsTrigger value="coaches">Coaches</TabsTrigger>
                     <TabsTrigger value="students">Student Leaders</TabsTrigger>
                     <TabsTrigger value="directors">Directors</TabsTrigger>
                  </TabsList>

                  <TabsContent value="coaches">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {staffProfiles.map((profile) => (
                           <Card key={profile.id} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                              <CardContent className="p-0 overflow-hidden">
                                 <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/3 md:pl-6">
                                       <img
                                          src={profile.image}
                                          alt={profile.name}
                                          className="w-full h-full object-cover aspect-square rounded-lg"
                                       />
                                    </div>
                                    <div className="md:w-2/3 p-6">
                                       <h3 className="font-bold text-xl mb-1 uppercase">{profile.name}</h3>
                                       <p className="text-primary text-sm mb-3">{profile.title}</p>
                                       <p className="text-muted-foreground mb-4 text-sm">{profile.bio}</p>

                                       <div className="mb-3">
                                          <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Expertise</p>
                                          <div className="flex flex-wrap gap-1">
                                             {profile.expertise.map((skill, index) => (
                                                <Badge key={index} variant="secondary" className="font-normal">{skill}</Badge>
                                             ))}
                                          </div>
                                       </div>

                                       <div>
                                          <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Education</p>
                                          <p className="text-sm">{profile.education}</p>
                                       </div>
                                    </div>
                                 </div>
                              </CardContent>
                           </Card>
                        ))}
                     </div>
                  </TabsContent>

                  <TabsContent value="students">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {studentProfiles.map((profile) => (
                           <Card key={profile.id} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                              <CardContent className="p-0 overflow-hidden">
                                 <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/3">
                                       <img
                                          src={profile.image}
                                          alt={profile.name}
                                          className="w-full h-full object-cover aspect-square rounded-lg"
                                       />
                                    </div>
                                    <div className="md:w-2/3 p-6">
                                       <h3 className="font-bold text-xl mb-1 uppercase">{profile.name}</h3>
                                       <p className="text-primary text-sm mb-3">{profile.title}</p>
                                       <p className="text-muted-foreground mb-4 text-sm">{profile.bio}</p>

                                       <div className="mb-3">
                                          <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Top Achievements</p>
                                          <ul className="text-sm list-disc pl-5 space-y-1">
                                             {profile.achievements.map((achievement, index) => (
                                                <li key={index}>{achievement}</li>
                                             ))}
                                          </ul>
                                       </div>

                                       <div>
                                          <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Interests</p>
                                          <div className="flex flex-wrap gap-1">
                                             {profile.interests.map((interest, index) => (
                                                <Badge key={index} variant="secondary" className="font-normal">{interest}</Badge>
                                             ))}
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </CardContent>
                           </Card>
                        ))}
                     </div>
                  </TabsContent>

                  <TabsContent value="directors">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {directorsProfiles.map((profile) => (
                           <Card key={profile.id} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                              <CardContent className="p-0 overflow-hidden">
                                 <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/3 md:pl-6">
                                       <img
                                          src={profile.image}
                                          alt={profile.name}
                                          className="w-full h-full object-cover aspect-square rounded-lg"
                                       />
                                    </div>
                                    <div className="md:w-2/3 p-6">
                                       <h3 className="font-bold text-xl mb-1 uppercase">{profile.name}</h3>
                                       <p className="text-primary text-sm mb-3">{profile.title}</p>
                                       <p className="text-muted-foreground mb-4 text-sm">{profile.bio}</p>

                                       <div>
                                          <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Education</p>
                                          <p className="text-sm">{profile.education}</p>
                                       </div>
                                    </div>
                                 </div>
                              </CardContent>
                           </Card>
                        ))}
                     </div>
                  </TabsContent>
               </Tabs>
            </div>
         </section>
      </div>
   );
};

export default Profiles;