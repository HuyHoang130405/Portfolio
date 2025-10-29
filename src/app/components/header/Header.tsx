"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // icon đẹp và nhẹ

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-transparent text-white fixed top-0 left-0 w-full z-50 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-[#38bdf8] cursor-pointer select-none">
          Portfolio
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-white transition-all duration-300 hover:text-[#38bdf8] hover:scale-105 hover:drop-shadow-[0_0_5px_#38bdf8]
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full 
                after:h-[2px] after:bg-[#38bdf8] after:transition-all after:duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/80 backdrop-blur-xl border-t border-cyan-400/20"
          >
            <nav className="flex flex-col items-center py-4 space-y-4">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white text-lg font-medium transition-all duration-300 hover:text-[#38bdf8]"
                  onClick={() => setIsOpen(false)} // ấn menu thì tự đóng
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
