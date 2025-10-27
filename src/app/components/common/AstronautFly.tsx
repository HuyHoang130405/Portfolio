"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function AstronautFly() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("fly");
  }, [inView, controls]);

  const variants = {
    initial: { x: "-20vw", y: 100, rotate: -20, opacity: 0 },
    fly: {
      x: ["-20vw", "50vw", "100vw"],
      y: [100, 0, -50],
      rotate: [-20, 10, 45],
      opacity: [0, 1, 0],
      transition: {
        duration: 4,
        ease: "easeInOut" as const,
        times: [0, 0.5, 1],
      },
    },
  };

  return (
    <div ref={ref} className="absolute top-1/3 left-0 w-full overflow-visible z-30">
      <motion.img
        src="/img-phihanhgia-removebg-preview.png"
        alt="Astronaut"
        initial="initial"
        animate={controls}
        variants={variants}
        className="w-32 md:w-48 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]"
      />
    </div>
  );
}
