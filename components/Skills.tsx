"use client";

import { motion } from "framer-motion";
import {
    SiJavascript, SiTypescript, SiGo, SiPython, SiC, SiCplusplus, SiMysql,
    SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiRedux,
    SiNodedotjs, SiExpress, SiPrisma, SiDrizzle, SiGraphql,
    SiDocker, SiAmazon, SiNginx, SiVercel, SiNetlify,
    SiLangchain, SiTwilio, SiStripe, SiSocketdotio
} from "react-icons/si";
import { Database, Brain, Globe, Server, Terminal, Cpu } from "lucide-react"; // Generic fallbacks or category icons

const skills = [
    {
        category: "Languages",
        icon: Terminal,
        items: [
            { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
            { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
            { name: "Golang", icon: SiGo, color: "text-cyan-500" },
            { name: "Python", icon: SiPython, color: "text-blue-400" },
            { name: "SQL", icon: SiMysql, color: "text-orange-400" },
            { name: "C / C++", icon: SiCplusplus, color: "text-blue-600" },
        ]
    },
    {
        category: "Frontend",
        icon: Globe,
        items: [
            { name: "React.js", icon: SiReact, color: "text-cyan-400" },
            { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
            { name: "React Native", icon: SiReact, color: "text-cyan-600" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
            { name: "Framer Motion", icon: SiFramer, color: "text-pink-500" },
            { name: "Redux / Zustand", icon: SiRedux, color: "text-purple-500" },
        ]
    },
    {
        category: "Backend",
        icon: Server,
        items: [
            { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
            { name: "Express.js", icon: SiExpress, color: "text-foreground" },
            { name: "Prisma ORM", icon: SiPrisma, color: "text-blue-400" },
            { name: "Drizzle ORM", icon: SiDrizzle, color: "text-yellow-400" },
            { name: "GraphQL", icon: SiGraphql, color: "text-pink-600" },
        ]
    },
    {
        category: "DevOps & Cloud",
        icon: Cpu,
        items: [
            { name: "Docker", icon: SiDocker, color: "text-blue-500" },
            { name: "AWS", icon: SiAmazon, color: "text-orange-400" },
            { name: "Nginx", icon: SiNginx, color: "text-green-600" },
            { name: "Vercel / Netlify", icon: SiVercel, color: "text-foreground" },
        ]
    },
    {
        category: "AI / Web3 / Other",
        icon: Brain,
        items: [
            { name: "LLM Agents", icon: SiLangchain, color: "text-green-500" }, // Using Langchain as proxy
            { name: "Vector DBs", icon: Database, color: "text-green-400" },
            { name: "Twilio / Voiceflow", icon: SiTwilio, color: "text-red-500" },
            { name: "Stripe", icon: SiStripe, color: "text-indigo-400" },
            { name: "Web3.js", icon: SiSocketdotio, color: "text-foreground" }, // Generic proxy
        ]
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-2">Technical Skills</h2>
                    <p className="text-muted-foreground">Technologies I use to build scalable products.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <category.icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-semibold text-lg">{category.category}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm font-medium hover:border-primary/50 transition-colors cursor-default"
                                    >
                                        <skill.icon className={`w-4 h-4 ${skill.color}`} />
                                        <span className="text-zinc-700 dark:text-zinc-300">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
