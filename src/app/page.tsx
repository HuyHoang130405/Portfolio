// Portfolio Project for Nguyen Huy Hoang using Next.js + TypeScript + Tailwind CSS + Framer Motion

"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe, ChevronDown } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import FadeInWhenVisible from "./components/FadeInWhenVisible";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiPhp, SiAngular, SiBootstrap, SiMysql, SiMongodb, SiFigma, SiPostman } from "react-icons/si";
import { img } from "framer-motion/client";
import UniverseBackground from "./components/UniverseBackground";

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

const projects = [
  {
    img: "/images/hotel-booking.png",
    title: "Hotel Booking System",
    description: "A modern hotel room booking app with React, Node.js and MongoDB.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/nguyenhuyhoang/hotel-booking",
    demo: "https://hotel-booking-hoang.vercel.app",
  },
  {
    img: "/images/prj1.png",
    title: "Portfolio Website",
    description: "This portfolio site - built with Next.js and beautiful animations!",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    github: "https://github.com/HuyHoang130405",
    demo: "https://nguyenhuyhoang.dev",
  },
  {
    img: "/images/weather-app.png",
    title: "Weather App",
    description: "Fetches real-time weather using OpenWeather API.",
    tech: ["React", "API", "Tailwind"],
    github: "https://github.com/nguyenhuyhoang/weather-app",
    demo: "https://weather-hoang.vercel.app",
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<"tech" | "tools">("tech");
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <UniverseBackground /> {/* Nền vũ trụ */}
      <header className="ng-tranparent text-white fixed top-0 left-0 w-full z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-[#38bdf8] cursor-pointer">Portfolio</h1>
          <nav className="space-x-6">
            <a
              href="#home"
              className="relative text-white transition-all duration-300 hover:text-[#38bdf8] hover:scale-105 hover:drop-shadow-[0_0_5px_#38bdf8]
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#38bdf8] after:transition-all after:duration-300"
            >Home</a>
            <a href="#about"
              className="relative text-white transition-all duration-300 hover:text-[#38bdf8] hover:scale-105 hover:drop-shadow-[0_0_5px_#38bdf8]
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#38bdf8] after:transition-all after:duration-300"
            >About</a>
            <a
              href="#projects"
              className="relative text-white transition-all duration-300 hover:text-[#38bdf8] hover:scale-105 hover:drop-shadow-[0_0_5px_#38bdf8]
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#38bdf8] after:transition-all after:duration-300"
            >Projects</a>
            <a
              href="#contact"
              className="relative text-white transition-all duration-300 hover:text-[#38bdf8] hover:scale-105 hover:drop-shadow-[0_0_5px_#38bdf8]
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#38bdf8] after:transition-all after:duration-300"
            >Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center shadow-lg"
      >
        <div className="relative z-10 w-full min-h-[550px] max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <motion.img
            src="/images/anhcv.jpg"
            alt="Nguyen Huy Hoang"
            className="w-[300px] h-[300px] object-cover rounded-[10rem] shadow-xl"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            style={{
              boxShadow: "0 0 10px #38bdf8",
              animation: "pulseGlow 2s infinite",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white max-w-xl"
          >
            <h1 className="text-1xl font-extrabold leading-tight tracking-wide mb-2">
              Hi, There!
            </h1>
            <h1 className="text-4xl font-extrabold leading-tight tracking-wide mb-4">
              I'm <span className="text-[#38bdf8]">Nguyen Huy Hoang</span>
            </h1>
            <p className="text-xl text-[#94a3b8] mb-6">
              <Typewriter
                words={[
                  "Creative Web Developer building modern, high-performance websites using React, Next.js & more.",
                ]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={40}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </p>
            <p className="text-xl text-[#94a3b8] mb-6">
              Wellcome to My personal website 👋
            </p>
            <a
              href="#projects"
              className="inline-block bg-[#38bdf8] hover:bg-[#0ea5e9] text-white px-6 py-3 rounded-full font-medium transition"
            >
              View My Work
            </a>
          </motion.div>
        </div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-[#38bdf8] animate-bounce" />
        </div>
      </section>

      {/* // About Section */}
      <section
        id="about"
        className="min-h-screen max-w-7xl mx-auto px-4 py-20"
      >
        <FadeInWhenVisible>
          <div className="bg-[#1e293b]/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold mb-6 text-center text-[#38bdf8] tracking-widest">About Me</h2>
            <div className="flex gap-15 justify-center">
              <motion.img
                src="/images/anhcv.jpg"
                alt="Nguyen Huy Hoang"
                className="w-[250px] h-[250px] object-cover rounded-[10rem] shadow-xl"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                style={{
                  boxShadow: "0 0 10px #38bdf8",
                  animation: "pulseGlow 2s infinite",
                }}
              />

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-white max-w-xl"
              >
                <p className="mb-4">
                  Hi, I’m Nguyen Huy Hoang — a passionate front-end developer and student at FPT Polytechnic College.
                  I specialize in building modern, high-performance websites using React, Next.js, and Tailwind CSS.
                </p>
                <p className="mb-4">
                  I love designing clean, responsive user interfaces and constantly improving my skills through real-world projects.
                  Recently, I built a hotel room booking system as part of a full-stack project using the MERN stack.
                </p>
                <p>
                  I thrive in collaborative environments, enjoy solving challenges, and believe that great design and performance go hand in hand.
                  I’m currently working toward becoming a professional developer at FPT Software in the near future.
                </p>
              </motion.div>
            </div>
          </div>
          <div className="">
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
        </FadeInWhenVisible>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen max-w-7xl mx-auto px-4 py-20">
        <FadeInWhenVisible>
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-2xl font-semibold mb-1 text-center text-[#38bdf8]">Past Project Experience</h2>
            <p>Explore the project I've worked on so far</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {projects.map((proj, idx) => (
              <motion.div
                key={idx}
                className="bg-[#1e293b] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full object-cover rounded-lg mb-4">
                </img>
                <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                <p className="text-[#94a3b8] mb-2">{proj.description}</p>
                <div className="flex flex-wrap gap-2 text-sm mb-3">
                  {proj.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-700 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={proj.demo} className="text-[#38bdf8] hover:underline" target="_blank">Live</a>
                  <a href={proj.github} className="text-[#38bdf8] hover:underline" target="_blank">GitHub</a>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeInWhenVisible>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen max-w-7xl mx-auto px-4 py-16 text-center">
        <FadeInWhenVisible>
          <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
          <p className="text-[#94a3b8] mb-6">Feel free to reach out via email or social media!</p>
          <a
            href="mailto:your@email.com"
            className="inline-block bg-[#38bdf8] hover:bg-[#0ea5e9] text-white px-6 py-3 rounded-full text-lg transition"
          >
            Send Email
          </a>
        </FadeInWhenVisible>
      </section>
    </div>
  );
}