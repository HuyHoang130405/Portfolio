import React from "react";
import { motion } from "framer-motion";
import FadeInWhenVisible from "../common/FadeInWhenVisible";

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

export default function ProjectsSection() {
  return (
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
  );
}