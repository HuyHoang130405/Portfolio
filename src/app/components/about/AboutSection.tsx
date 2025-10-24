import React, { useState } from "react";
import FadeInWhenVisible from "../common/FadeInWhenVisible";
import SkillsTabs from "./SkillsTabs";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen max-w-7xl mx-auto px-4 py-20">
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
        <SkillsTabs />
      </FadeInWhenVisible>
    </section>
  );
}