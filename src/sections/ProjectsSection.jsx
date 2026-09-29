import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Sparkles } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            ENGINEERED SYSTEMS & PRODUCTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Real-world full-stack architectures, real-time collaboration engines, and agentic AI systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onSelect={handleOpenDetails}
            />
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
