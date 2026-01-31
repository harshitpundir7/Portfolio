"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import SocialGrid from "./SocialGrid";
import { Button } from "./ui/button";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="pt-32 pb-16 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-medium border border-green-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for work
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                Building intelligent <br />
                AI Agents & Modern Apps.
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                I&apos;m <span className="text-foreground font-semibold">Harshit Pundir</span>, a Full Stack Developer & AI enthusiast specialized in building <b>Autonomous Agents</b>, <b>High-Performance Apps</b>, and <b>Scalable Systems</b>.
              </p>
            </div>

            {/* Profile Image / Avatar */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 rounded-full animate-pulse blur-xl opacity-50" />
              <div className="relative w-full h-full rounded-full bg-zinc-100 dark:bg-zinc-900 border border-border flex items-center justify-center overflow-hidden">
                <Image
                  src="/myphoto.jpg"
                  alt="Harshit Pundir"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Location & Time */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 text-sm text-muted-foreground items-center">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Chandigarh, India</span>
            </div>
            <div className="w-1 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
            <div>
              {new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} (IST)
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="rounded-full px-8">
              View Projects
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 group">
              Contact Me
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>



        </motion.div>
      </div>
    </section>
  );
}
