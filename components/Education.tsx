"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap, Calendar, Award, BookOpen, TrendingUp, ExternalLink } from "lucide-react";

const education = {
  degree: "B.Tech in Computer Science",
  university: "Chitkara University",
  period: "Aug 2023 – May 2027",
  gpa: "8.7",
  status: "Ongoing",
  coursework: [
    { name: "Data Structures & Algorithms", level: "Intermediate" },
    { name: "Object-Oriented Programming", level: "Intermediate" },
    { name: "Operating Systems", level: "Intermediate" },
    { name: "Computer Architecture", level: "Intermediate" },
    { name: "DBMS", level: "Intermediate" },
    { name: "Computer Networks", level: "Intermediate" },
    { name: "Theory of Computation", level: "Intermediate" },
    { name: "Web Development", level: "Intermediate" },
  ],
};

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="education" className="py-24 relative overflow-hidden">
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
            <GraduationCap className="w-12 h-12 text-primary mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            My academic journey and continuous learning path in computer science
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group overflow-hidden relative">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-orange-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Gradient border */}
            <div className="h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-green-500" />
            
            <CardHeader className="relative">
              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Icon Section */}
                <motion.div
                  className="p-4 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 shadow-lg flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <GraduationCap className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content Section */}
                <div className="flex-1 w-full">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <CardTitle className="text-2xl md:text-3xl mb-2 group-hover:text-primary transition-colors">
                        {education.degree}
                      </CardTitle>
                      <CardDescription className="text-lg md:text-xl font-medium mb-3">
                        {education.university}
                      </CardDescription>
                    </div>
                    <motion.div
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-semibold text-green-400">{education.status}</span>
                    </motion.div>
                  </div>

                  {/* Info Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <motion.div
                      className="p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/50 transition-all group/info"
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-yellow-500/10 group-hover/info:bg-yellow-500/20 transition-colors">
                          <Calendar className="w-5 h-5 text-yellow-400" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Duration</p>
                          <p className="text-sm font-semibold">{education.period}</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/50 transition-all group/info"
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-yellow-500/10 group-hover/info:bg-yellow-500/20 transition-colors">
                          <Award className="w-5 h-5 text-yellow-400" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">GPA</p>
                          <p className="text-sm font-semibold">{education.gpa} / 10.0</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold">Relevant Coursework</h3>
              </div>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-3"
              >
                {education.coursework.map((course, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.4,
                          delay: index * 0.05,
                        },
                      },
                    }}
                    className="group/course"
                  >
                    <div className="p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <p className="font-semibold text-sm mb-1 group-hover/course:text-primary transition-colors">
                            {course.name}
                          </p>
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-3 h-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{course.level}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>

            {/* Floating particles */}
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
                }}
              />
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
