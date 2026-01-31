"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Star } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const achievements = [
    {
        title: "TechSprint Hackathon Winner",
        award: "2nd Runner-Up",
        description: "Secured position among 2000+ entries. Awarded ₹1,00,000 for building 'Flow AI', a marketing automation tool.",
        icon: Trophy,
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
    },
    {
        title: "HackIndia 2025",
        award: "Finalist / Participant",
        description: "Built an AI (RAG) app for university-wide knowledge base search using LangChain.",
        icon: Award,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
    },
    {
        title: "Adobe Hackathon",
        award: "Top Team",
        description: "Selected from 250,000 students. Developed an AI-based system for PDF outline extraction and analysis.",
        icon: Star,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
    },
];

export default function Achievements() {
    return (
        <section id="achievements" className="py-24 bg-zinc-50/50 dark:bg-zinc-900/20">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-3xl font-bold tracking-tight mb-2">Honors & Achievements</h2>
                    <p className="text-muted-foreground">Recognition for technical excellence and innovation.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full border-zinc-200 dark:border-zinc-800 bg-background hover:shadow-lg transition-all duration-300">
                                <CardHeader className="pb-2">
                                    <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-4`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="text-lg">{item.title}</CardTitle>
                                    <span className={`text-sm font-semibold ${item.color}`}>{item.award}</span>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
