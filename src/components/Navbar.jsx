import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ExternalLink, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Scroll progress
      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollY / winHeight) * 100);
      }

      // Active section detection
      const sections = navItems.map(item => item.href.substring(1));
      let current = 'home';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08090e]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center gap-2.5 focus:outline-none"
              aria-label="Harshad Kavade Home"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
                <div className="w-full h-full bg-[#0b0f17] rounded-[11px] flex items-center justify-center group-hover:bg-[#0e1422] transition-colors">
                  <span className="font-mono font-black text-sm tracking-tighter bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                    HK
                  </span>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-semibold text-slate-100 tracking-tight group-hover:text-indigo-300 transition-colors">
                  Harshad Kavade
                </div>
                <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Software Engineer
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-sm shadow-indigo-500/30 -z-10 animate-fade-in" />
                    )}
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Action: Download Resume */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={personalInfo.resumeUrl}
                download="Harshad_Kavade_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={personalInfo.resumeUrl}
                download="Harshad_Kavade_Resume.pdf"
                className="p-2 rounded-lg bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 text-xs font-medium flex items-center gap-1"
                aria-label="Download Resume"
              >
                <Download className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#080a10]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-1.5 pt-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 font-semibold'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <a
                  href={personalInfo.resumeUrl}
                  download="Harshad_Kavade_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full Resume</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
