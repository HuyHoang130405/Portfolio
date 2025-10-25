"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiPhp,
  SiAngular,
  SiNestjs,
  SiBootstrap,
  SiMysql,
  SiMongodb,
  SiFigma,
  SiPostman,
  SiDocker,
} from "react-icons/si";
import FadeInWhenVisible from "../common/FadeInWhenVisible";

const techStack = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
  { name: "PHP", icon: <SiPhp className="text-indigo-400" /> },
  { name: "Angular", icon: <SiAngular className="text-red-500" /> },
  { name: "NestJS", icon: <SiNestjs className="text-red-500" /> },
];

const tools = [
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  { name: "Docker", icon: <SiDocker className="text-sky-400" /> },
];

export default function SkillsTabs() {
  const [activeTab, setActiveTab] = useState<"tech" | "tools">("tech");

  return (
    <section
      id="skills"
      className="min-h-screen w-full px-6 md:px-12 py-32 text-white bg-transparent"
    >
      <FadeInWhenVisible>
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-[#38bdf8] mb-3">
              Skills
            </h2>
            <div className="w-20 h-[3px] bg-[#38bdf8] mx-auto rounded-full shadow-[0_0_10px_#38bdf8]" />
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-6 mb-10">
            <button
              onClick={() => setActiveTab("tech")}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                activeTab === "tech"
                  ? "bg-[#38bdf8] text-white shadow-lg shadow-[#38bdf8]/40"
                  : "border border-[#38bdf8] text-[#38bdf8] hover:bg-[#38bdf8]/10"
              }`}
            >
              Tech Stack
            </button>
            <button
              onClick={() => setActiveTab("tools")}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                activeTab === "tools"
                  ? "bg-[#38bdf8] text-white shadow-lg shadow-[#38bdf8]/40"
                  : "border border-[#38bdf8] text-[#38bdf8] hover:bg-[#38bdf8]/10"
              }`}
            >
              Tools
            </button>
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12 gap-4 place-items-center"
            >
              {(activeTab === "tech" ? techStack : tools).map((skill, idx) => (
                <div
                  key={idx}
                  className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 
                             flex items-center justify-center gap-2 w-full h-14 
                             rounded-lg shadow-md bg-[#1e293b]/80 backdrop-blur-sm
                             hover:bg-[#38bdf8]/10 hover:scale-[1.03] transition-all duration-300"
                >
                  <span className="text-lg">{skill.icon}</span>
                  <span className="text-sm font-medium text-gray-200">
                    {skill.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
