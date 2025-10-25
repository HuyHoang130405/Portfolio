// Portfolio Project for Nguyen Huy Hoang using Next.js + TypeScript + Tailwind CSS + Framer Motion
"use client";

import React from "react";
import UniverseBackground from "./components/common/UniverseBackground";
import Header from "./components/header/Header";
import HeroSection from './components/hero/HeroSection';
import AboutSection from "./components/about/AboutSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import ContactSection from "./components/contact/ContactSection";
import SkillsTabs from "./components/skills/SkillsTabs";

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <UniverseBackground /> {/* Nền vũ trụ */}
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <HeroSection />
      {/* // About Section */}
      <AboutSection />
      {/* // Skills Section */}
      <SkillsTabs/>
      {/* Projects Section */}
      <ProjectsSection />
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}