import React from "react";

export default function Header() {
  return (
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
          <a href="#skills"
            className="relative text-white transition-all duration-300 hover:text-[#38bdf8] hover:scale-105 hover:drop-shadow-[0_0_5px_#38bdf8]
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#38bdf8] after:transition-all after:duration-300"
          >Skills</a>
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
  )
}