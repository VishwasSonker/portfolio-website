import React from 'react';
import { resumeData } from '../data/resumeData';
import { ProjectCard } from '../components/ProjectCard';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-800/40 border-t border-b border-dark-600/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-400 block mb-2">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};