// Portfolio Project for Nguyen Huy Hoang using Next.js + TypeScript + Tailwind CSS + Framer Motion
"use client";

import React from "react";
import UniverseBackground from "./components/common/UniverseBackground";
import Header from "./components/header/Header";
import HeroSection from './components/hero/HeroSection';
import AboutSection from "./components/about/AboutSection";
import SkillsTabs from "./components/about/SkillsTabs";
import ProjectsSection from "./components/projects/ProjectsSection";
import ContactSection from "./components/contact/ContactSection";

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <UniverseBackground /> {/* Nền vũ trụ */}
      {/* Header */}
      <Header/>
      {/* Hero Section */}
      <HeroSection/>
      {/* // About Section */}
      <AboutSection/>
      {/* Projects Section */}
      <ProjectsSection/>
      {/* Contact Section */}
      <ContactSection/>
    </div>
  );
}