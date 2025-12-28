"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Explain It Simply – AI Document Explainer SaaS",
    description: "End-to-end AI-powered document understanding platform that converts complex legal, financial, and medical documents into simple, actionable explanations in multiple languages. Users can upload PDFs, images, or text and instantly receive easy-to-understand summaries, key risks, consequences of ignoring the document, and recommended next steps in Hindi, Hinglish, or English.",
    tech: ["Next.js", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "OpenAI / Gemini", "LangChain", "PDF & OCR Processing", "AWS S3", "Stripe", "Resend API"],
    github: "https://github.com/harshitpundir7",
    live: "#",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    title: "🎤 VoiceVault – Voice Memory & Reminder App",
    description: "Voice-first personal memory app that converts spoken thoughts into searchable text, smart reminders, and contextual follow-ups. Users simply speak naturally, and the app automatically transcribes, categorizes, and remembers important ideas, tasks, and promises—without manual input or setup.",
    tech: ["React Native", "Expo", "Node.js", "TypeScript", "OpenAI Whisper", "LLM Reasoning (OpenAI / Gemini)", "PostgreSQL", "Prisma", "Push Notifications", "Cloud Storage", "Stripe"],
    github: "https://github.com/harshitpundir7",
    live: "#",
    gradient: "from-orange-500 to-green-500",
  },
  {
    title: "💬 Emotone – Emotion-First & Ephemeral Chat App",
    description: "Privacy-focused chat application that combines emotion-aware messaging with temporary, self-destructing conversations to enable honest and clear communication. Users select an emotion before sending a message (Angry, Normal, Emotional, Formal), making tone explicit, while messages automatically disappear after being read, cannot be screenshotted, and leave no permanent history—reducing misunderstandings and encouraging openness.",
    tech: ["Next.js", "React Native", "Node.js", "TypeScript", "WebSockets / Socket.IO", "MongoDB", "Redis", "End-to-End Encryption", "Framer Motion", "Firebase Push Notifications", "Cloudflare"],
    github: "https://github.com/harshitpundir7",
    live: "#",
    gradient: "from-green-500 to-emerald-500",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="inline-block mb-4"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mx-auto shadow-lg">
              <span className="text-2xl">🚀</span>
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            A collection of innovative projects showcasing my skills in full-stack development, AI integration, and modern web technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group overflow-hidden relative">
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
                
                {/* Gradient border */}
                <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />
                
                <CardHeader className="pb-4 relative">
                  <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed line-clamp-4 text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow pb-4 relative">
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1.5 bg-muted/50 text-xs rounded-lg border border-border/50 text-muted-foreground hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all cursor-default"
                          whileHover={{ scale: 1.05, y: -2 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + techIndex * 0.03 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="gap-2 pt-0 relative">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group/btn"
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      <span>Code</span>
                    </Button>
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      size="sm"
                      className={`w-full group/btn bg-gradient-to-r ${project.gradient} hover:opacity-90 transition-opacity text-white`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      <span>Live</span>
                    </Button>
                  </a>
                </CardFooter>

                {/* Floating particles */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.div
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </div>

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-bl-full`} />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
