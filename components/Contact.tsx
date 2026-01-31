"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export default function Contact() {
    return (
        <section id="contact" className="py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="grid gap-8 items-center"
                >
                    {/* Main Call to Action Card */}
                    <Card className="bg-card text-card-foreground border-border overflow-hidden relative shadow-sm">
                        {/* Subtle Gradient Glow - Theme Aware */}
                        <div className="absolute top-0 right-0 p-32 bg-primary/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 p-32 bg-secondary/5 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />

                        <CardContent className="p-10 md:p-12 text-center relative z-10 flex flex-col items-center">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
                                Let&apos;s build something <br />
                                <span className="text-muted-foreground">extraordinary.</span>
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
                                Whether you have a project in mind or just want to chat about AI agents,
                                I&apos;m always open to new opportunities.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                                <a href="mailto:neerajpundir2005@gmail.com">
                                    <Button size="lg" className="h-12 px-8 text-base">
                                        <Mail className="w-4 h-4 mr-2" />
                                        Get in Touch
                                    </Button>
                                </a>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Connect Links Grid - Neo Bento Style */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <a
                            href="https://github.com/harshitpundir7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div className="p-6 rounded-xl border border-border bg-card hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors flex flex-col items-center gap-3 group">
                                <div className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-foreground group-hover:scale-110 transition-transform">
                                    <Github className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-muted-foreground group-hover:text-foreground">GitHub</span>
                            </div>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/harshit-pundir-b19204295/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div className="p-6 rounded-xl border border-border bg-card hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors flex flex-col items-center gap-3 group">
                                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                    <Linkedin className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-muted-foreground group-hover:text-foreground">LinkedIn</span>
                            </div>
                        </a>

                        <a
                            href="https://twitter.com/harshitpundir07"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div className="p-6 rounded-xl border border-border bg-card hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors flex flex-col items-center gap-3 group">
                                <div className="p-3 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 group-hover:scale-110 transition-transform">
                                    <Twitter className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-muted-foreground group-hover:text-foreground">Twitter</span>
                            </div>
                        </a>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
