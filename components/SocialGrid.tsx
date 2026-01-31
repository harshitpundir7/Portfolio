"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
    {
        name: "GitHub",
        icon: Github,
        href: "https://github.com/harshitpundir7",
        color: "bg-zinc-800 text-white",
        delay: 0.1,
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://linkedin.com/in/harshit-pundir",
        color: "bg-blue-600 text-white",
        delay: 0.2,
    },
    {
        name: "X / Twitter",
        icon: Twitter,
        href: "https://twitter.com/",
        color: "bg-black text-white dark:bg-zinc-800",
        delay: 0.3,
    },
    {
        name: "Email",
        icon: Mail,
        href: "mailto:neerajpundir2005@gmail.com",
        color: "bg-red-500 text-white",
        delay: 0.4,
    },
];

export default function SocialGrid() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {socialLinks.map((link, index) => (
                <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: link.delay }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center justify-center p-6 rounded-xl bg-card border border-border/50 hover:border-border transition-colors group relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <link.icon className={`w-8 h-8 mb-3 ${link.color} p-1.5 rounded-lg`} />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        {link.name}
                    </span>
                </motion.a>
            ))}
        </div>
    );
}
