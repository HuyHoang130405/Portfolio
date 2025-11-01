"use client";
import React from "react";
import { motion } from "framer-motion";
import FadeInWhenVisible from "../common/FadeInWhenVisible";
import CountUp from "react-countup";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen w-full mbm:px-4 sm:px-6 md:px-12 py-32 text-white overflow-x-hidden"
    >
      <FadeInWhenVisible>
        <div className="grid grid-cols-1 lg:grid-cols-12 mbl:gap-6 sm:gap-10 items-start w-full max-w-7xl mx-auto">

          {/* Cột chữ + nút (cột trái) */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-12 md:col-span-6 flex flex-col justify-center gap-6 order-1"
          >
            <div className="mbm:text-center lg:text-left">
              <h2 className="w-full mbm:mb-5 mbm:text-[28px] mbl:text-3xl md:text-4xl font-bold text-[#38bdf8]">
                About Me
              </h2>

              <p className="mbl:text-base md:text-lg text-gray-300 leading-relaxed lg:max-w-lg break-words whitespace-normal">
                Hi, I’m{" "}
                <span className="font-semibold text-white">
                  Nguyen Huy Hoang
                </span>{" "}
                — a{" "}
                <span className="font-semibold text-white">
                  Frontend Developer
                </span>{" "}
                passionate about building modern, responsive, and aesthetic user
                interfaces. I love combining creativity and clean code to bring
                digital ideas to life.
              </p>

              <p className="mbl:text-base md:text-lg text-gray-300 leading-relaxed lg:max-w-lg">
                I focus on crafting smooth, intuitive, and visually engaging web
                experiences that feel alive and perform beautifully across all devices.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 text-gray-400 text-base mt-4 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
              <div className="flex flex-col items-center">
                <span className="block text-xl sm:text-3xl font-bold text-white">
                  <CountUp end={2} duration={2} suffix="+" enableScrollSpy />
                </span>
                <span className="text-sm">Years of Experience</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="block text-xl sm:text-3xl font-bold text-white">
                  <CountUp end={6} duration={2} suffix="+" enableScrollSpy />
                </span>
                <span className="text-sm">Projects Completed</span>
              </div>

              <div className="col-span-2 flex flex-col items-center">
                <span className="block text-xl sm:text-3xl font-bold text-white">FPT</span>
                <span className="text-sm">Polytechnic College</span>
              </div>
            </div>
            {/* Nút */}
            <div className="flex gap-4 mbm:mb-8 mbl:mb-3 sm:mt-8 justify-center lg:justify-start">
              <a
                href="#"
                download
                className="mbm:text-sm sm:text-base px-5 py-2 border border-cyan-400/40 text-cyan-300 rounded-lg hover:bg-cyan-500/10 transition flex items-center gap-2"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="mbm:text-sm sm:text-base px-5 py-2 border border-cyan-400/40 text-cyan-300 rounded-lg hover:bg-cyan-500/10 transition flex items-center gap-2"
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
            className="col-span-12 md:col-span-6 flex flex-col justify-center order-3 md:order-3 lg:order-2"
          >
            <div className="grid grid-cols-2 gap-x-10 gap-y-10 text-gray-300 text-base">
              <div>
                <h3 className="text-cyan-400 font-semibold mb-2 text-lg ">Education</h3>
                <p className="text-gray-400 leading-relaxed">
                  FPT Polytechnic College<br />Web Programming — 2023 to Now
                </p>
              </div>
              <div className="mbm:text-right sm:text-left">
                <h3 className="text-cyan-400 font-semibold mb-2 text-lg">Soft Skills</h3>
                <ul className="space-y-1 list-disc list-inside text-gray-400 list-none">
                  <li>Teamwork</li>
                  <li>Communication</li>
                  <li>Problem Solving</li>
                  <li>Adaptability</li>
                </ul>
              </div>
              <div>
                <h3 className="text-cyan-400 font-semibold mb-2 text-lg">Professional</h3>
                <ul className="space-y-1 list-disc list-inside text-gray-400 list-none">
                  <li>UI/UX Awareness</li>
                  <li>Responsive Design</li>
                  <li>Clean Code Practice</li>
                  <li>Performance Optimization</li>
                </ul>
              </div>
              <div className="mbm:text-right sm:text-left">
                <h3 className="text-cyan-400 font-semibold mb-2 text-lg">Interests</h3>
                <p className="text-gray-400 leading-relaxed">Design trends, creative animation, 3D web.</p>
                <h3 className="text-cyan-400 font-semibold mt-3 mb-1 text-lg">Languages</h3>
                <p className="text-gray-400 leading-relaxed">Vietnamese (Native) <br />English (Fluent)</p>
              </div>
            </div>
          </motion.div>

        </div>
      </FadeInWhenVisible>
    </section>
  );
}
