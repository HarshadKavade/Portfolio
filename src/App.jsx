import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BackgroundDecorations from './components/BackgroundDecorations';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import EducationSection from './sections/EducationSection';
import AchievementsSection from './sections/AchievementsSection';
import CodingSection from './sections/CodingSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [toast, setToast] = useState(null);

  const showToast = ({ message, type = 'success' }) => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  return (
    <div className="relative min-h-screen bg-[#06070a] text-slate-200 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Background ambient lighting and grid */}
      <BackgroundDecorations />

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <HeroSection onCopyEmail={() => showToast({ message: "Email copied to clipboard!", type: "success" })} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <AchievementsSection />
        <CodingSection />
        <ContactSection showToast={showToast} />
      </main>

      {/* Footer & Final Call to Action */}
      <Footer />

      {/* Toast Notification Container */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
