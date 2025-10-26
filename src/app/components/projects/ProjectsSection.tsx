"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../../data/projects"

const BUTTON_STYLE =
  "absolute top-1/2 -translate-y-1/2 z-30 p-3 bg-cyan-900/80 border border-cyan-400/50 rounded-full shadow-lg hover:bg-cyan-700/90 transition flex items-center justify-center backdrop-blur-sm";
const ICON_STYLE = "w-6 h-6 text-cyan-300 drop-shadow-lg";

export default function ProjectsSection() {
  const [active, setActive] = useState(0);
  const [scrollIndex, setScrollIndex] = useState(0);

  const visibleCount = 5;
  const maxScrollIndex = Math.max(projects.length - visibleCount, 0);
  const visibleProjects =
    projects.length <= visibleCount
      ? projects
      : projects.slice(scrollIndex, scrollIndex + visibleCount);

  const handlePrev = () => setScrollIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setScrollIndex((prev) => Math.min(prev + 1, maxScrollIndex));

  return (
    <section
      id="projects"
      className="relative max-w-7xl mx-auto px-6 py-20 overflow-hidden"
    >
      {/* Tiêu đề mới */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-400 tracking-wide drop-shadow-lg">
          What I’ve Been Building
        </h2>
        <p className="mt-3 text-white text-base md:text-lg max-w-2xl mx-auto">
          A glimpse into my favorite creations — thoughtful, modern, and
          interactive projects that blend design and technology ✨
        </p>
      </motion.div>

      <div className="relative flex items-center justify-center">
        {projects.length > visibleCount && scrollIndex > 0 && (
          <button
            onClick={handlePrev}
            className={`${BUTTON_STYLE} left-2`}
            aria-label="Previous"
          >
            <ChevronLeft className={ICON_STYLE} />
          </button>
        )}

        <div className="flex gap-3 md:gap-4 justify-center items-center w-full overflow-hidden">
          {visibleProjects.map((proj, idx) => {
            const globalIdx = scrollIndex + idx;
            const isActive = globalIdx === active;

            return (
              <AnimatePresence key={proj.title + globalIdx} mode="sync">
                <motion.div
                  layout
                  onClick={() => setActive(globalIdx)}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className={`relative rounded-2xl overflow-hidden cursor-pointer border border-cyan-400/20 shadow-lg backdrop-blur-md aspect-[9/16] h-[380px] transition-all duration-500 ${
                    isActive
                      ? "w-[22%] md:w-[23%] z-20"
                      : "w-[14%] md:w-[14%] opacity-80 hover:scale-105"
                  }`}
                >
                  <motion.img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover rounded-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />

                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 20,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white p-4 flex flex-col justify-end"
                  >
                    <h3 className="text-lg font-semibold">{proj.title}</h3>
                    {isActive && (
                      <>
                        <p className="text-sm text-gray-300 mt-2 mb-3 line-clamp-3">
                          {proj.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {proj.tech.map((t, i) => (
                            <span
                              key={i}
                              className="bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded text-xs"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4 text-sm">
                          <a
                            href={proj.demo}
                            target="_blank"
                            className="text-cyan-400 hover:underline"
                          >
                            Live
                          </a>
                          <a
                            href={proj.github}
                            target="_blank"
                            className="text-cyan-400 hover:underline"
                          >
                            GitHub
                          </a>
                        </div>
                      </>
                    )}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            );
          })}
        </div>

        {projects.length > visibleCount && scrollIndex < maxScrollIndex && (
          <button
            onClick={handleNext}
            className={`${BUTTON_STYLE} right-2`}
            aria-label="Next"
          >
            <ChevronRight className={ICON_STYLE} />
          </button>
        )}
      </div>
    </section>
  );
}
