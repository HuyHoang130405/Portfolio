"use client";
import React from "react";
import { motion } from "framer-motion";
import FadeInWhenVisible from "../common/FadeInWhenVisible";
import CountUp from "react-countup";
import AstronautFly from "../common/AstronautFly";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen w-full px-6 md:px-12 py-32 text-white overflow-x-hidden"
    >
      {/* <AstronautFly/> */}
      <FadeInWhenVisible>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start max-w-7xl mx-auto">
          {/* Cột chữ bên trái */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-12 md:col-span-6 flex flex-col justify-center gap-6"
          >
            <h2 className="text-5xl font-bold text-[#38bdf8]">About Me</h2>

            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              Hi, I’m{" "}
              <span className="font-semibold text-white">
                Nguyen Huy Hoang
              </span>
              — a{" "}
              <span className="font-semibold text-white">
                Frontend Developer
              </span>{" "}
              passionate about building modern, responsive, and aesthetic user
              interfaces. I love combining creativity and clean code to bring
              digital ideas to life.
            </p>

            <p className="text-gray-400 leading-relaxed max-w-lg">
              My main tools are{" "}
              <span className="text-white font-medium">
                React, Next.js, Tailwind CSS
              </span>
              . I’m always exploring the best ways to optimize UX, animation,
              and performance.
            </p>

            <div className="flex flex-wrap gap-6 text-gray-400 text-base mt-4">
              <div className="flex flex-col items-center">
                <span className="block text-3xl font-bold text-white">
                  <CountUp end={2} duration={2} suffix="+" enableScrollSpy />
                </span>
                <span className="text-sm">Years of Experience</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="block text-3xl font-bold text-white">
                  <CountUp end={15} duration={2} suffix="+" enableScrollSpy />
                </span>
                <span className="text-sm">Projects Completed</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="block text-3xl font-bold text-white">FPT</span>
                <span className="text-sm">Polytechnic College</span>
              </div>
            </div>

            {/* Nút */}
            <div className="flex gap-4 mt-8">
              <a
                href="/cv.pdf"
                download
                className="px-5 py-2 border border-cyan-400/40 text-cyan-300 rounded-lg hover:bg-cyan-500/10 transition flex items-center gap-2"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="px-5 py-2 border border-cyan-400/40 text-cyan-300 rounded-lg hover:bg-cyan-500/10 transition flex items-center gap-2"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Cột thông tin bên phải */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="col-span-12 md:col-span-6 flex flex-col justify-center"
          >
            <div className="grid grid-cols-2 gap-x-10 gap-y-10 text-gray-300 text-base">
              <div>
                <h3 className="text-cyan-400 font-semibold mb-2 text-lg">Education</h3>
                <p className="text-gray-400 leading-relaxed">
                  FPT Polytechnic College<br />Software Development — 2023 to Now
                </p>
              </div>
              <div>
                <h3 className="text-cyan-400 font-semibold mb-2 text-lg">Soft Skills</h3>
                <ul className="space-y-1 list-disc list-inside text-gray-400">
                  <li>Teamwork 🤝</li>
                  <li>Communication 💬</li>
                  <li>Problem Solving 🧩</li>
                  <li>Adaptability ⚡</li>
                </ul>
              </div>
              <div>
                <h3 className="text-cyan-400 font-semibold mb-2 text-lg">Professional</h3>
                <ul className="space-y-1 list-disc list-inside text-gray-400">
                  <li>UI/UX Awareness 🎨</li>
                  <li>Responsive Design 📱</li>
                  <li>Clean Code Practice 🧹</li>
                  <li>Performance Optimization ⚡</li>
                </ul>
              </div>
              <div>
                <h3 className="text-cyan-400 font-semibold mb-2 text-lg">Interests</h3>
                <p className="text-gray-400 leading-relaxed">Design trends, creative animation, 3D web.</p>
                <h3 className="text-cyan-400 font-semibold mt-3 mb-1 text-lg">Languages</h3>
                <p className="text-gray-400 leading-relaxed">Vietnamese 🇻🇳 | English 🇬🇧</p>
              </div>
            </div>
          </motion.div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
