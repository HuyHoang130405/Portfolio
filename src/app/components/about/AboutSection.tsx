"use client";
import React from "react";
import { motion } from "framer-motion";
import FadeInWhenVisible from "../common/FadeInWhenVisible";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen w-full px-6 md:px-12 py-32 text-white bg-transparent"
    >
      <FadeInWhenVisible>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center max-w-7xl mx-auto">
          {/* Ảnh bên trái */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-12 md:col-span-5 flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-2xl shadow-[0_0_50px_rgba(56,189,248,0.15)]"
            >
              <img
                src="/images/img-about.jpg"
                alt="Nguyen Huy Hoang"
                className="w-[350px] h-[420px] md:w-[420px] md:h-[360px] object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
              />
              {/* Gradient overlay nhẹ */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </motion.div>
          </motion.div>

          {/* Nội dung bên phải */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="col-span-12 md:col-span-7 flex flex-col gap-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#38bdf8] mb-2">
              About Me
            </h2>

            <p className="text-lg leading-relaxed text-gray-300">
              Hi, I’m <span className="font-medium text-white">Nguyen Huy Hoang</span> — a{" "}
              <span className="font-medium text-white">Front-end Developer</span> and student at
              FPT Polytechnic College. I’m passionate about crafting user experiences that feel
              intuitive, fast, and visually clean.
            </p>

            <p className="text-lg leading-relaxed text-gray-400">
              I build modern web interfaces using React, Next.js, and Tailwind CSS — focusing on
              accessibility, performance, and maintainable code. Recently, I worked on a hotel
              booking system with the MERN stack to explore full-stack development.
            </p>

            <p className="text-lg text-gray-400">
              I aim to grow as a developer at FPT Software, where I can combine creativity,
              collaboration, and real-world impact.
            </p>
          </motion.div>
        </div>

        {/* Skills section */}
        <div className="mt-28 max-w-6xl mx-auto">
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
