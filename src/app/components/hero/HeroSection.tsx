import React from "react";
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
// import { ChevronDown } from "lucide-react";

export default function HeroSection() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center shadow-lg"
        >
            <div className="relative z-10 w-full min-h-[550px] max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center mbs:gap-5 mbm:gap-10">
                <motion.img
                    src="/images/me.jpg"
                    alt="Nguyen Huy Hoang"
                    className="mbs:w-[220px] mbs:h-[220px] mbl:w-[250px] mbl:h-[250px] sm:w-[300px] sm:h-[300px] object-cover rounded-[10rem] shadow-xl mt-22 lg:mt-0"
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
                    <h1 className="text-1xl font-extrabold leading-tight tracking-wide mb-2">
                        Hi, There!
                    </h1>
                    <h1 className="mbs:text-[24px] mbm:text-[28px] mbl:text-3xl md:text-4xl font-extrabold leading-tight tracking-wide mb-4">
                        I'm <span className="text-[#38bdf8]">Nguyen Huy Hoang</span>
                    </h1>
                    <p className="sm:text-lg md:text-xl text-[#94a3b8] mbs:mb-4 mbm:mb-6">
                        <Typewriter
                            words={[
                                "Turning imagination into interactive web experiences that inspire and connect.",
                            ]}
                            loop={1}
                            cursor
                            cursorStyle="|"
                            typeSpeed={40}
                            deleteSpeed={0}
                            delaySpeed={1000}
                        />
                    </p>
                    <p className="sm:text-lg md:text-xl text-[#94a3b8] mbs:mb-4 mbm:mb-6">
                        Wellcome to My personal website 👋
                    </p>
                    <a
                        href="#projects"
                        className="mbs:text-sm sm:text-base inline-block bg-[#38bdf8] hover:bg-[#0ea5e9] text-white mbs:px-5 mbs:py-2 mbm:px-6 mbm:py-3 rounded-full font-medium transition"
                    >
                        View My Work
                    </a>
                </motion.div>
            </div>
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
                {/* <ChevronDown className="w-8 h-8 text-[#38bdf8] animate-bounce" /> */}
            </div>
        </section>
    )
}