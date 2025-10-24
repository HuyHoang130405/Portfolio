import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiPhp, SiAngular, SiBootstrap, SiMysql, SiMongodb, SiFigma, SiPostman } from "react-icons/si";

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
];

const tools = [
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
];

export default function SkillsTabs() {
  const [activeTab, setActiveTab] = useState<"tech" | "tools">("tech");
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#38bdf8] tracking-widest py-4">Skills</h2>
      <div className="flex gap-6 mb-6">
        <button
          onClick={() => setActiveTab("tech")}
          className={`px-5 py-1 text-[14px] rounded transition-all duration-200 cursor-pointer ${activeTab === "tech"
            ? "bg-[#38bdf8] text-white"
            : "border border-[#38bdf8] text-[#38bdf8]"
            }`}
        >
          Tech Stack
        </button>
        <button
          onClick={() => setActiveTab("tools")}
          className={`px-5 py-1 text-[14px] rounded transition-all duration-200 cursor-pointer ${activeTab === "tools"
            ? "bg-[#38bdf8] text-white"
            : "border border-[#38bdf8] text-[#38bdf8]"
            }`}
        >
          Tools
        </button>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-white"
        >
          {(activeTab === "tech" ? techStack : tools).map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3 py-2 rounded-md shadow-md bg-[#1e293b] hover:scale-105 transition-all duration-200"
            >
              <span className="text-sm">{skill.icon}</span>
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}