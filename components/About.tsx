"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeXml, Monitor, Server, Zap, Github, ExternalLink } from "lucide-react";

const skills = {
  Languages: {
    items: [
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Golang", color: "#00ADD8" },
      { name: "Python", color: "#3776AB" },
      { name: "SQL", color: "#4479A1" },
      { name: "C", color: "#A8B9CC" },
      { name: "C++", color: "#00599C" }
    ],
    icon: CodeXml,
    color: "from-yellow-500 to-orange-500",
    iconColor: "text-white",
  },
  Frontend: {
    items: [
      { name: "React.js", color: "#61DAFB" },
      { name: "Next.js", color: "#000000" },
      { name: "React Native", color: "#61DAFB" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "Framer Motion", color: "#0055FF" },
      { name: "Redux Toolkit", color: "#764ABC" },
      { name: "Zustand", color: "#443E38" }
    ],
    icon: Monitor,
    color: "from-orange-500 to-green-500",
    iconColor: "text-white",
  },
  Backend: {
    items: [
      { name: "Node.js", color: "#339933" },
      { name: "Express.js", color: "#000000" },
      { name: "Prisma ORM", color: "#2D3748" },
      { name: "Drizzle ORM", color: "#C5F74F" },
      { name: "REST APIs", color: "#009688" },
      { name: "GraphQL", color: "#E10098" }
    ],
    icon: Server,
    color: "from-green-500 to-emerald-500",
    iconColor: "text-white",
  },
  DevOps: {
    items: [
      { name: "Docker", color: "#2496ED" },
      { name: "AWS (EC2, S3, Route53)", color: "#FF9900" },
      { name: "Nginx", color: "#009639" },
      { name: "Vercel", color: "#000000" },
      { name: "Netlify", color: "#00C7B7" }
    ],
    icon: Zap,
    color: "from-orange-500 to-red-500",
    iconColor: "text-white",
  },
};

const otherSkills = [
  { name: "LLM Agents (Langchain, Fixie, Ultravox)", color: "#1C3C3C" },
  { name: "Vector DBs (Weaviate, Pinecone)", color: "#00C9A7" },
  { name: "Twilio", color: "#F22F46" },
  { name: "Voiceflow", color: "#5D5FEF" },
  { name: "Stripe", color: "#635BFF" },
  { name: "Pipecat", color: "#FF6B6B" },
  { name: "Web3.js", color: "#F16822" },
  { name: "Ethers.js", color: "#2E3A4F" },
  { name: "WalletConnect", color: "#3B99FC" },
  { name: "SIWE", color: "#6C5CE7" },
  { name: "IPFS", color: "#65C2CB" }
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="about" className="py-24 relative overflow-hidden">
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
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mx-auto">
              <span className="text-2xl">👨‍💻</span>
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            I am a Full Stack Developer passionate about building innovative web applications, 
            integrating AI/ML solutions, and working with cloud services. I thrive on continuous 
            learning and constantly improving my skills to create impactful digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {Object.entries(skills).map(([category, data], index) => {
            const Icon = data.icon;
            return (
              <motion.div key={category} variants={itemVariants}>
                <Card className="h-full border border-border/40 bg-card/30 backdrop-blur-sm hover:border-primary/60 hover:shadow-lg transition-all duration-300 group">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-1">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${data.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                        <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                      </div>
                      <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {data.items.map((skill, skillIndex) => (
                        <motion.span
                          key={skill.name}
                          className="px-3 py-1.5 text-sm rounded-md bg-muted/40 border border-border/30 hover:border-primary/40 hover:bg-primary/5 transition-colors flex items-center gap-1.5"
                          whileHover={{ scale: 1.02 }}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: skillIndex * 0.02 }}
                        >
                          <span
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ backgroundColor: skill.color }}
                          />
                          <span>{skill.name}</span>
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* GitHub Streak Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-12"
        >
          <Card className="border border-border/40 bg-card/30 backdrop-blur-sm hover:border-primary/60 hover:shadow-lg transition-all duration-300 group overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 opacity-80 group-hover:opacity-100 transition-opacity">
                    <Github className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    GitHub Activity
                  </CardTitle>
                </div>
                <motion.a
                  href="https://github.com/harshitpundir7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ x: 3 }}
                >
                  <span>View Profile</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </CardHeader>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <Card className="border border-border/40 bg-card/30 backdrop-blur-sm hover:border-primary/60 hover:shadow-lg transition-all duration-300 group">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3 mb-1">
                <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 opacity-80 group-hover:opacity-100 transition-opacity">
                  <CodeXml className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  Other Technologies
                </CardTitle>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2">
                {otherSkills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill.name}
                    className="px-3 py-1.5 text-sm rounded-md bg-muted/40 border border-border/30 hover:border-primary/40 hover:bg-primary/5 transition-colors flex items-center gap-1.5"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.02 }}
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: skill.color }}
                    />
                    <span>{skill.name}</span>
                  </motion.span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}