"use client";
import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorOuter = useRef<HTMLDivElement>(null);
  const cursorInner = useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorOuter.current && cursorInner.current) {
        const { clientX: x, clientY: y } = e;
        // Dùng transform trực tiếp lên DOM, không trigger re-render React
        cursorOuter.current.style.transform = `translate(${x - 20}px, ${y - 20}px)`;
        cursorInner.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
      }
    };

    const down = () => setClicked(true);
    const up = () => setClicked(false);
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    const hoverables = document.querySelectorAll("a, button, .clickable, .project-card");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      {/* Outer cursor */}
      <div
        ref={cursorOuter}
        className={`fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999]
          transition-all duration-150 ease-out
          ${hovered ? "opacity-70" : "opacity-40"}
          ${clicked ? "opacity-90" : ""}
        `}
        style={{
          border: "2px solid #22d3ee",
          background: clicked ? "#22d3ee20" : "transparent",
          boxShadow: hovered
            ? "0 0 16px #22d3ee, 0 0 32px #22d3ee80"
            : "0 0 10px #22d3ee80, 0 0 20px #22d3ee40",
        }}
      />

      {/* Inner cursor */}
      <div
        ref={cursorInner}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] bg-cyan-300"
        style={{
          boxShadow: "0 0 8px #22d3ee, 0 0 16px #22d3ee60",
        }}
      />
    </>
  );
}
