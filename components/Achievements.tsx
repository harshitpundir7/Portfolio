"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { PenTool, BookOpen, ExternalLink, Sparkles, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Serverless Architecture for Backend",
    description: "Exploring modern serverless patterns, best practices, and how to build scalable backend systems without managing infrastructure.",
    url: "https://harshitpundir.hashnode.dev/serverless-architecture-for-backend",
    gradient: "from-yellow-500 to-orange-500",
    icon: Sparkles,
  },
  {
    title: "PostgreSQL Deep Dive",
    description: "Understanding PostgreSQL internals, optimization techniques, and advanced database concepts for building robust applications.",
    url: "https://harshitpundir.hashnode.dev/postgres",
    gradient: "from-orange-500 to-green-500",
    icon: BookOpen,
  },
];

export default function Achievements() {
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
    hidden: { opacity: 0, y: 40, scale: 0.9 },
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
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
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
            <PenTool className="w-12 h-12 text-primary mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              Tech Blog
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Sharing knowledge, insights, and experiences through technical writing. 
            Exploring modern technologies, best practices, and innovative solutions.
          </p>
        </motion.div>

        {/* Hashnode Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-orange-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-green-500" />
            <CardHeader className="relative">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="p-3 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <PenTool className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <CardTitle className="text-2xl mb-1 group-hover:text-primary transition-colors">
                      Hashnode Profile
                    </CardTitle>
                    <CardDescription className="text-base">
                      Read my latest articles on backend development, databases, and modern tech stacks
                    </CardDescription>
                  </div>
                </div>
                <Button
                  asChild
                  className="group/btn"
                  size="lg"
                >
                  <a
                    href="https://harshitpundir.hashnode.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Visit Profile
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Featured Blog Posts */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {blogPosts.map((post, index) => {
            const Icon = post.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group overflow-hidden relative">
                  {/* Animated gradient border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${post.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
                  
                  <div className={`h-1 bg-gradient-to-r ${post.gradient}`} />
                  
                  <CardHeader className="relative">
                    <div className="flex items-start gap-4 mb-3">
                      <motion.div
                        className={`p-3 rounded-xl bg-gradient-to-br ${post.gradient} shadow-lg flex-shrink-0`}
                        whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="text-sm leading-relaxed line-clamp-3">
                          {post.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full group/btn"
                    >
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>

                  {/* Floating particles effect */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400"
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
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Want to read more? Check out my complete collection of articles
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group/btn"
          >
            <a
              href="https://harshitpundir.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Explore All Articles
              <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
