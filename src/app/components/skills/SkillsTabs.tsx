"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiNodedotjs, SiTailwindcss, SiPhp, SiAngular, SiNestjs,
  SiMysql, SiMongodb, SiFigma, SiPostman, SiDocker, SiGit, SiGithub
} from "react-icons/si";
import FadeInWhenVisible from "../common/FadeInWhenVisible";

const skillGroups = [
  {
    label: "Frontend",
    desc: "Modern UI frameworks & languages for interactive web apps.",
    skills: [
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
      { name: "Angular", icon: <SiAngular className="text-red-500" /> },
    ],
  },
  {
    label: "Backend",
    desc: "Robust server-side technologies for scalable APIs.",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "NestJS", icon: <SiNestjs className="text-red-500" /> },
      { name: "PHP", icon: <SiPhp className="text-indigo-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "Docker", icon: <SiDocker className="text-sky-400" /> },
    ],
  },
  {
    label: "Tools",
    desc: "Essential tools for design, testing & collaboration.",
    skills: [
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "GitHub", icon: <SiGithub className="text-gray-300" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
    ],
  },
];

export default function SkillsTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="min-h-screen w-full px-6 md:px-12 py-24 text-white">
      <FadeInWhenVisible>
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="mbl:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-3 tracking-wide drop-shadow-lg">
              My Tech Stack
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Technologies I use to build clean, scalable and modern web apps
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center gap-6 mb-8">
            {skillGroups.map((group, idx) => (
              <button
                key={group.label}
                onClick={() => setActiveTab(idx)}
                className={`mbl:text-sm sm:text-base px-6 py-2 rounded-full font-semibold transition-all duration-300
                  ${activeTab === idx
                    ? "bg-gradient-to-r from-cyan-400 to-blue-600 text-white shadow-lg scale-105"
                    : "bg-[#0f172a]/60 text-gray-300 hover:bg-cyan-700/30 hover:text-white"
                  }`}
              >
                {group.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <p className="text-cyan-300 md:text-lg mb-6">{skillGroups[activeTab].desc}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
                {skillGroups[activeTab].skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.13, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex flex-col items-center justify-center mbl:w-24 mbl:h-24 sm:w-26 sm:h-26 md:w-28 md:h-28 lg:w-32 lg:h-32 
                      rounded-3xl bg-gradient-to-br from-[#0f172a]/80 to-[#38bdf8]/10 border border-cyan-500/30 backdrop-blur-md 
                      hover:border-cyan-400/80 shadow-xl hover:shadow-[0_0_30px_#38bdf8bb] 
                      transition-all duration-300"
                  >
                    <div className="mbl:text-3xl sm:text-5xl mb-2 drop-shadow-lg">{skill.icon}</div>
                    <span className="mbl:text-sm md:text-base font-semibold text-gray-100">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
