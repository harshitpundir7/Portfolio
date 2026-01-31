"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Education() {
    return (
        <section id="education" className="py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="flex items-center gap-3 mb-12">
                    <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500">
                        <GraduationCap className="w-8 h-8" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">Education</h2>
                        <p className="text-muted-foreground">Academic background and coursework.</p>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Card className="hover:border-foreground/20 transition-colors">
                        <CardHeader>
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                <div>
                                    <CardTitle className="text-xl">Chitkara University</CardTitle>
                                    <p className="text-foreground/80 font-medium">B.Tech in Computer Science</p>
                                </div>
                                <div className="flex flex-col items-start md:items-end gap-1 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>Aug 2023 – May 2027</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        <span>Chandigarh, India</span>
                                    </div>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold bg-green-500/10 text-green-600 dark:text-green-400 px-3 py-1 rounded-full">
                                    GPA: 8.45
                                </span>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold mb-2">Relevant Coursework</h4>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Data Structures & Algorithms",
                                        "Object-Oriented Programming",
                                        "Operating Systems",
                                        "Computer Architecture",
                                        "DBMS",
                                        "Computer Networks"
                                    ].map((course) => (
                                        <span key={course} className="text-xs px-2 py-1 bg-secondary rounded-md text-secondary-foreground border border-transparent hover:border-border transition-colors cursor-default">
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
