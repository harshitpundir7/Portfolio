"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

// Icons
import {
  SiNextdotjs,
  SiReact,
  SiPostgresql,
  SiPrisma,
  SiAmazon,
  SiTailwindcss,
  SiMongodb,
  SiStripe,
  SiCloudinary,
  SiVite,
  SiTypescript
} from "react-icons/si";

import { Database, Brain } from "lucide-react";

// 🔥 Tech icon mapping (VERY IMPORTANT)
const techIcons: Record<string, { icon: any; color: string }> = {
  "Next.js": { icon: SiNextdotjs, color: "text-foreground" },
  "React": { icon: SiReact, color: "text-cyan-400" },
  "React Native": { icon: SiReact, color: "text-cyan-500" },
  "PostgreSQL": { icon: SiPostgresql, color: "text-blue-500" },
  "Prisma": { icon: SiPrisma, color: "text-blue-400" },
  "AWS S3": { icon: SiAmazon, color: "text-orange-400" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-cyan-300" },
  "MongoDB": { icon: SiMongodb, color: "text-green-500" },
  "Stripe": { icon: SiStripe, color: "text-indigo-400" },
  "Cloudinary": { icon: SiCloudinary, color: "text-blue-400" },
  "Vite": { icon: SiVite, color: "text-yellow-400" },
  "TypeScript": { icon: SiTypescript, color: "text-blue-500" },
  "Groq API": { icon: Brain, color: "text-pink-500" },
  "Llama 3.3": { icon: Brain, color: "text-green-400" },
};

const projects = [
  {
    title: "TwoSpoon-Drive - Google Drive Clone",
    description:
      "Full-stack Google Drive clone featuring secure file management, seamless AWS S3 cloud storage integration, and robust Google OAuth authentication.",
    tech: ["Next.js", "React", "PostgreSQL", "Prisma", "AWS S3", "Tailwind CSS"],
    github: "https://github.com/harshitpundir7/twoSpoonDrive",
    live: "https://twospoondrive.vercel.app",
    year: "2026",
  },
  {
    title: "Uptime Monitor - Service Health Dashboard",
    description:
      "Full-stack infrastructure monitoring platform featuring automated background health checks, real-time incident tracking, customizable public status pages, and instant email alerting.",
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma", "NextAuth", "TypeScript"],
    github: "https://github.com/harshitpundir7/uptime-monitor",
    live: "https://uptime-monitor.harshitpundir.tech/",
    year: "2025",
  },
  {
    title: "Inter-Prep - Technical Interview Preparation platform",
    description:
      "Evaluates real-time code and voice responses, generates dynamic cross-questions for custom projects, and tracks mastery across programming subjects.",
    tech: ["React", "Vite", "TypeScript", "Groq API", "Llama 3.3"],
    github: "https://github.com/harshitpundir7/interview-prepApp",
    live: "https://interview.harshitpundir.tech/",
    year: "2025",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-muted-foreground">
              Recent work building AI agents and platforms.
            </p>
          </div>

          <Button variant="outline" className="hidden md:flex">
            View All
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:border-primary/40 transition-all duration-300 hover:shadow-lg">

                {/* Header */}
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-1">
                      <CardTitle className="leading-tight text-xl">
                        {project.title}
                      </CardTitle>
                      <span className="text-xs font-mono text-muted-foreground">
                        {project.year}
                      </span>
                    </div>

                    <div className="flex gap-2 shrink-0">
                      <a href={project.github} target="_blank">
                        <Github className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                      </a>
                      <a href={project.live} target="_blank">
                        <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                      </a>
                    </div>
                  </div>
                </CardHeader>

                {/* Content */}
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </CardContent>

                {/* Footer with ICONS 🔥 */}
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => {
                      const tech = techIcons[t];
                      const Icon = tech?.icon || Database;

                      return (
                        <span
                          key={t}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-secondary hover:bg-secondary/80 transition"
                        >
                          <Icon className={`w-3.5 h-3.5 ${tech?.color || "text-muted-foreground"}`} />
                          {t}
                        </span>
                      );
                    })}
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