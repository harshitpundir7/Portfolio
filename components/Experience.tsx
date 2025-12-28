"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Calendar, Briefcase, MapPin, TrendingUp, Sparkles } from "lucide-react";

const experiences = [
  {
    title: "Freelance Full Stack Developer",
    company: "Remote",
    period: "July 2024 – Present",
    status: "Active",
    description: [
      "Delivered end-to-end full stack solutions for multiple clients across fintech, e-commerce, and SaaS domains using technologies like Next.js, PipeCat, and Stripe",
      "Deployed production-ready apps with Docker, Nginx, and CI/CD pipelines on AWS, Vercel, and Render",
    ],
    icon: Briefcase,
    gradient: "from-yellow-500 to-orange-500",
  },
];

export default function Experience() {
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
    hidden: { opacity: 0, y: 40, scale: 0.95 },
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
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl"
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
            <Briefcase className="w-12 h-12 text-primary mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            My professional journey, building impactful solutions and delivering value to clients
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto space-y-8"
        >
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group overflow-hidden relative">
                  {/* Animated gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
                  
                  {/* Gradient border */}
                  <div className={`h-1 bg-gradient-to-r ${exp.gradient}`} />
                  
                  <CardHeader className="relative">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                      <div className="flex items-start gap-6 flex-1">
                        {/* Icon Section */}
                        <motion.div
                          className={`p-4 rounded-2xl bg-gradient-to-br ${exp.gradient} shadow-lg flex-shrink-0`}
                          whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>

                        {/* Content Section */}
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                            <div>
                              <CardTitle className="text-2xl md:text-3xl mb-2 group-hover:text-primary transition-colors">
                                {exp.title}
                              </CardTitle>
                              <div className="flex items-center gap-3 mb-3">
                                <CardDescription className="text-lg font-medium">
                                  {exp.company}
                                </CardDescription>
                                <div className="flex items-center gap-1 text-muted-foreground">
                                  <MapPin className="w-4 h-4" />
                                  <span className="text-sm">{exp.company}</span>
                                </div>
                              </div>
                            </div>
                            <motion.div
                              className="px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center gap-2"
                              whileHover={{ scale: 1.05 }}
                            >
                              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                              <span className="text-sm font-semibold text-green-400">{exp.status}</span>
                            </motion.div>
                          </div>

                          {/* Period Badge */}
                          <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/30 border border-border/50"
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            <Calendar className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold">{exp.period}</span>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-bold">Key Achievements</h3>
                    </div>
                    <ul className="space-y-4">
                      {exp.description.map((item, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-4 group/item"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + idx * 0.1, duration: 0.4 }}
                        >
                          <motion.div
                            className={`mt-1.5 p-1.5 rounded-lg bg-gradient-to-br ${exp.gradient} opacity-20 group-hover/item:opacity-40 transition-opacity`}
                            whileHover={{ scale: 1.2, rotate: 90 }}
                          >
                            <Sparkles className="w-3 h-3 text-primary" />
                          </motion.div>
                          <span className="leading-relaxed text-muted-foreground group-hover/item:text-foreground transition-colors flex-1">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>

                  {/* Floating particles */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.gradient}`}
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
      </div>
    </section>
  );
}
