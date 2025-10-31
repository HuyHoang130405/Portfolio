"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const starStyles = `
@keyframes twinkle {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}
.star {
  animation: twinkle 2.8s infinite ease-in-out;
  will-change: opacity;
}
`;

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [typed, setTyped] = useState("");
  const [stars, setStars] = useState<{top: string, left: string, size: number, opacity: number, key: number}[]>([]);

  // ✅ Chỉ tạo sao sau khi đã client-mounted
  useEffect(() => {
    const generated = Array.from({ length: 18 }).map((_, i) => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1.2,
      opacity: 0.4 + Math.random() * 0.6,
      key: i,
    }));
    setStars(generated);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  // typing effect
  useEffect(() => {
    const text = "Igniting stellar creativity...";
    let i = 0;
    const typing = setInterval(() => {
      setTyped(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(typing);
    }, 45);
    return () => clearInterval(typing);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, transition: { duration: 1.2, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
        >
          <style>{starStyles}</style>

          {/* Nebula bg */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 55% 50%, rgba(56,189,248,0.22), transparent 70%), radial-gradient(circle at 70% 40%, rgba(168,85,247,0.18), transparent 70%), black",
                "radial-gradient(circle at 60% 60%, rgba(56,189,248,0.28), transparent 70%), radial-gradient(circle at 30% 50%, rgba(168,85,247,0.22), transparent 70%), black",
                "radial-gradient(circle at 40% 40%, rgba(56,189,248,0.18), transparent 70%), radial-gradient(circle at 80% 60%, rgba(168,85,247,0.14), transparent 70%), black",
              ],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Glow core */}
          <motion.div
            className="absolute w-[420px] h-[420px] rounded-full blur-[110px] bg-gradient-to-r 
              from-cyan-500/50 via-sky-500/30 to-purple-600/40"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Stars — chỉ render khi đã tạo xong */}
          {stars.map((star) => (
            <div
              key={star.key}
              className="star absolute rounded-full bg-white"
              style={{
                width: star.size,
                height: star.size,
                top: star.top,
                left: star.left,
                opacity: star.opacity,
                filter: "drop-shadow(0 0 6px #38bdf8aa)",
              }}
            />
          ))}

          {/* Main text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: [0.85, 1.05, 1], y: [10, 0] }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10 text-center"
          >
            <motion.h1
              className="text-4xl md:text-7xl font-extrabold bg-clip-text text-transparent 
              bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500"
              animate={{
                textShadow: [
                  "0 0 25px #38bdf8",
                  "0 0 50px #60a5fa",
                  "0 0 25px #38bdf8",
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              Welcome to My Portfolio
            </motion.h1>

            <motion.p
              className="mt-4 text-cyan-300 text-base md:text-lg tracking-wider font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              style={{ minHeight: 28 }}
            >
              {typed}
              <span className="animate-pulse">|</span>
            </motion.p>
          </motion.div>

          {/* Pulse ring */}
          <motion.div
            className="absolute w-[160px] h-[160px] rounded-full border-2 border-cyan-400/40"
            animate={{ scale: [1, 2.5], opacity: [0.7, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
