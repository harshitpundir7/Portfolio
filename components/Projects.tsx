"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

const projects = [
  {
    title: "Flow AI",
    description: "End to End Marketing and Content Creation Agent for startups. Generates AI-driven video/images and email campaigns from Excel uploads.",
    tech: ["Next.js", "Prisma", "LangChain", "OpenAI", "Google Veo 2"],
    github: "https://github.com/harshitpundir7",
    live: "#",
    year: "2025",
  },
  {
    title: "Homy - AI Room Interior Designer",
    description: "Cross-platform mobile app with AI-powered room design generation, style transfer, and e-commerce integration with Stripe payments.",
    tech: ["Next.js", "React Native", "MongoDB", "Stripe", "Cloudinary"],
    github: "https://github.com/harshitpundir7",
    live: "#",
    year: "2025",
  },
  {
    title: "Maklach AI - Voice AI Agent Platform",
    description: "Voice-to-voice AI agent platform with custom agent creation, bulk campaign management, and Twilio webhook integration.",
    tech: ["Next.js", "Ultravox", "Fixie AI", "Twilio", "Docker"],
    github: "https://github.com/harshitpundir7",
    live: "#",
    year: "2025",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-muted-foreground">Recent work building AI agents and platforms.</p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            View All
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:border-foreground/20 transition-colors duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-1">
                      <CardTitle className="leading-tight text-xl">{project.title}</CardTitle>
                      <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
