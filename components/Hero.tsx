"use client";

import { motion } from "framer-motion";
import { Github, Mail, Phone, MapPin, ArrowDown, Code, Sparkles, ExternalLink, Download } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Enhanced Gradient orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-[120px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px]"
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[140px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left Column - Text Content */}
            <div className="space-y-10">
              <motion.div variants={itemVariants} className="space-y-6">
                <motion.div
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-orange-500/10 to-green-500/10 border border-primary/20 text-primary text-sm font-semibold backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <Sparkles className="w-4 h-4" />
                  </motion.div>
                  <span>Available for opportunities</span>
                </motion.div>
                
                <motion.h1
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
                  variants={itemVariants}
                >
                  <motion.span 
                    className="block mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Hey, I'm
                  </motion.span>
                  <motion.span 
                    className="block bg-gradient-to-r from-primary via-orange-400 to-green-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    Harshit Pundir
                  </motion.span>
                </motion.h1>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
              >
                Full Stack Developer passionate about building modern web applications, 
                integrating AI/ML solutions, and crafting exceptional digital experiences.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 text-white shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <a href="#projects" className="flex items-center gap-2">
                    <span>View Projects</span>
                    <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="group border-2 hover:border-primary/50"
                  asChild
                >
                  <a href="#contact" className="flex items-center gap-2">
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Get in Touch</span>
                  </a>
                </Button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-6 pt-6 border-t border-border/50"
              >
                <motion.a
                  href="mailto:neerajpundir2005@gmail.com"
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-muted/30 hover:bg-muted/50 text-muted-foreground hover:text-primary transition-all group"
                  whileHover={{ x: 5, scale: 1.05 }}
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">Email</span>
                </motion.a>
                <motion.a
                  href="https://github.com/harshitpundir7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-muted/30 hover:bg-muted/50 text-muted-foreground hover:text-primary transition-all group"
                  whileHover={{ x: 5, scale: 1.05 }}
                >
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">GitHub</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
                <motion.div
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-muted/30 text-muted-foreground"
                >
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">Chandigarh, India</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column - Enhanced Visual Element */}
            <motion.div
              variants={itemVariants}
              className="relative hidden lg:block"
            >
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="relative"
              >
                {/* Enhanced Glowing card effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-orange-500/30 to-green-500/30 rounded-3xl blur-3xl opacity-50" />
                <motion.div
                  className="relative bg-card/60 backdrop-blur-md border border-border/50 rounded-3xl p-10 space-y-8 shadow-2xl"
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Code className="w-7 h-7 text-white" />
                    </motion.div>
                    <div>
                      <div className="font-bold text-lg">Building with</div>
                      <div className="text-sm text-muted-foreground">Next.js • React • TypeScript</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-muted-foreground">Full Stack</span>
                        <span className="text-xs font-semibold text-primary">85%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-orange-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{ duration: 2, delay: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-muted-foreground">AI/ML Integration</span>
                        <span className="text-xs font-semibold text-orange-500">75%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-orange-500 to-green-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "75%" }}
                          transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-muted-foreground">Cloud Services</span>
                        <span className="text-xs font-semibold text-green-500">90%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-green-500 to-primary rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "90%" }}
                          transition={{ duration: 2, delay: 1.4, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Floating tech badges */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                    {["Next.js", "TypeScript", "AI/ML", "Cloud"].map((tech, idx) => (
                      <motion.div
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-primary/10 to-orange-500/10 border border-primary/20 text-xs font-semibold"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.6 + idx * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs text-muted-foreground font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
