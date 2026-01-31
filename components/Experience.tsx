"use client";

import { motion } from "framer-motion";

const experience = [
  {
    company: "Garudashak (Start Up) — IIT Mandi",
    role: "Full Stack Intern",
    period: "Mar 2025 – June 2025",
    description: "Developed a cross-platform Electron-based desktop application to visualize real-time drone detection stats. Built a FastAPI backend with WebSocket support to stream logs and alerts from ML models to the dashboard in real-time.",
    current: false, // Future date in resume, treating as recent/upcoming project
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "July 2024 – Present",
    description: "Delivered end-to-end full stack solutions for multiple clients across fintech, e-commerce, and SaaS domains. Deployed production-ready apps with Docker, Nginx, and CI/CD pipelines on AWS, Vercel, and Render.",
    current: true,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-zinc-50/50 dark:bg-zinc-900/20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight mb-12">Experience</h2>

        <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-3 space-y-12">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border border-background ring-4 ring-background ${job.current ? 'bg-green-500' : 'bg-zinc-300 dark:bg-zinc-600'}`} />

              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
                <h3 className="text-xl font-semibold">{job.company}</h3>
                <span className="text-sm font-mono text-muted-foreground">{job.period}</span>
              </div>

              <h4 className="text-base font-medium text-foreground/80 mb-4">{job.role}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {job.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
