"use client"

import Navigation from "@/components/layout/Navigation"
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import SkillsSection from "@/components/sections/SkillsSection"
import EducationSection from "@/components/sections/EducationSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import ExperienceSection from "@/components/sections/ExperienceSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import ContactSection from "@/components/sections/ContactSection"
import Footer from "@/components/layout/Footer"
import GoalsSection from "@/components/sections/GoalsSection"
import LeetCodeSection from "@/components/sections/LeetCodeSection"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <GoalsSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <TestimonialsSection />
      <LeetCodeSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
