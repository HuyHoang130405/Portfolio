import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Facebook } from "lucide-react";
import FadeInWhenVisible from "../common/FadeInWhenVisible";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-white"
    >
      <FadeInWhenVisible>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mbs:text-2xl mbm:text-[28px] mbl:text-3xl md:text-4xl font-bold mb-6 text-[#38bdf8]"
        >
          Let's Connect 👋
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-base md:text-lg text-[#94a3b8] mb-12 max-w-2xl mx-auto"
        >
          Whether you have a question, a project idea, or just want to say hi —
          my inbox is always open. Let’s create something amazing together.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center gap-6 mb-10"
        >
          <a
            href="https://mail.google.com/mail/?view=cm&to=nguyenhuyhoang130405@gmail.com"
            className="p-3 rounded-full bg-[#1e293b] hover:bg-[#38bdf8]/20 transition"
          >
            <Mail className="w-6 h-6 text-[#38bdf8]" />
          </a>
          <a
            href="https://github.com/HuyHoang130405"
            target="_blank"
            className="p-3 rounded-full bg-[#1e293b] hover:bg-[#38bdf8]/20 transition"
          >
            <Github className="w-6 h-6 text-[#38bdf8]" />
          </a>
          <a
            href="https://www.linkedin.com/in/huy-ho%C3%A0ng-nguy%E1%BB%85n-182675394/"
            target="_blank"
            className="p-3 rounded-full bg-[#1e293b] hover:bg-[#38bdf8]/20 transition"
          >
            <Linkedin className="w-6 h-6 text-[#38bdf8]" />
          </a>
          <a
            href="https://www.facebook.com/hoag.nguyen.71216?locale=vi_VN"
            target="_blank"
            className="p-3 rounded-full bg-[#1e293b] hover:bg-[#38bdf8]/20 transition"
          >
            <Facebook className="w-6 h-6 text-[#38bdf8]" />
          </a>
        </motion.div>

        {/* Email Button */}
        <motion.a
          href="https://mail.google.com/mail/?view=cm&to=nguyenhuyhoang130405@gmail.com"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="inline-block bg-[#38bdf8] hover:bg-[#0ea5e9] text-white px-8 py-3 rounded-full mbs:text-sm sm:text-base md:text-lg font-medium transition shadow-lg"
        >
          Send Me a Message
        </motion.a>

        <p className="text-sm text-[#64748b] mt-10">
          © {new Date().getFullYear()} Nguyen Huy Hoang. All rights reserved.
        </p>
      </FadeInWhenVisible>
    </section>
  );
}
