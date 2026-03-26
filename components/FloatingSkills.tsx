"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiPython,
  SiMysql,
  SiCplusplus,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiTailwindcss,
  SiFramer,
  SiRedux,
  SiGraphql,
  SiPostgresql,
  SiGit,
} from "react-icons/si";

// Each entry: Icon component, brand hex color, label
const skills = [
  { Icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
  { Icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
  { Icon: SiNextdotjs, color: "#000000", label: "Next.js" },
  { Icon: SiPython, color: "#3776AB", label: "Python" },
  { Icon: SiMysql, color: "#4479A1", label: "MySQL" },
  { Icon: SiCplusplus, color: "#00599C", label: "C++" },
  { Icon: SiReact, color: "#61DAFB", label: "React" },
  { Icon: SiNodedotjs, color: "#5FA04E", label: "Node.js" },
  { Icon: SiExpress, color: "#000000", label: "Express" },
  { Icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind" },
  { Icon: SiFramer, color: "#0055FF", label: "Framer" },
  { Icon: SiRedux, color: "#764ABC", label: "Redux" },
  { Icon: SiGraphql, color: "#E10098", label: "GraphQL" },
  { Icon: SiPostgresql, color: "#4169E1", label: "PostgreSQL" },
  { Icon: SiGit, color: "#F05032", label: "Git" },
];

// All icons concentrated in the hero section (top 2–20% of page height)
// Flanked left/right to avoid obscuring centre content
// [top%, left%, size px, duration s, delay s, yRange px, rotateRange deg]
const positions: [number, number, number, number, number, number, number][] = [
  [2, 1, 44, 4.2, 0.0, 12, 5],   // JS     — far left top
  [2, 88, 40, 3.8, 0.5, 14, 6],   // TS     — far right top
  [7, 13, 38, 5.0, 1.0, 8, 4],   // Next   — left upper
  [7, 80, 44, 4.6, 0.3, 12, 7],   // Python — right upper
  [12, 3, 40, 3.5, 1.5, 16, 5],   // MySQL  — far left mid
  [12, 86, 38, 4.9, 0.8, 10, 6],   // C++    — far right mid
  [17, 7, 44, 4.0, 0.2, 14, 4],   // React  — left lower
  [17, 83, 40, 5.2, 1.4, 8, 7],   // Node   — right lower
  [3, 55, 36, 3.7, 0.7, 10, 5],   // Expr   — upper right-of-centre,  
  [14, 92, 40, 5.0, 0.4, 12, 4],   // Tail   — very far right
  [19, 2, 44, 3.9, 1.8, 14, 7],   // Framer — far left bottom-hero
  [19, 84, 38, 4.7, 0.2, 10, 5],   // Redux  — far right bottom-hero
  [5, 16, 36, 4.1, 1.3, 8, 6],   // GQL    — left of centre
  [5, 76, 40, 3.6, 0.9, 16, 4],   // PG     — right of centre
  [11, 48, 36, 5.1, 1.6, 12, 7],   // Git    — near centre top
];

export default function FloatingSkills() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
    >
      {skills.map(({ Icon, color, label }, i) => {
        const [top, left, size, duration, delay, yRange, rotateRange] = positions[i];
        return (
          <motion.div
            key={label}
            className="absolute select-none"
            style={{ top: `${top}%`, left: `${left}%` }}
            animate={{
              y: [0, -yRange, 0],
              rotate: [-rotateRange / 2, rotateRange / 2, -rotateRange / 2],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon
              size={size}
              color={color}
              title={label}
              className="opacity-60 dark:opacity-70 drop-shadow-lg"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
