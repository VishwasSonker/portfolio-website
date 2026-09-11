import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Project } from '../data/resumeData';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={`group relative bg-dark-800/80 border ${project.featured ? 'border-accent-500/40 shadow-lg shadow-accent-500/5' : 'border-dark-600'} rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-accent-500/60 transition-all duration-300`}>
      {project.featured && (
        <div className="absolute -top-3 right-6 bg-accent-600 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <Sparkles size={12} /> Featured Project
        </div>
      )}

      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-accent-400 transition-colors">
              {project.title}
            </h3>
            <span className="text-xs font-mono text-accent-400 uppercase tracking-wider">{project.role}</span>
          </div>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-dark-700/80 hover:bg-dark-600 text-gray-300 hover:text-white rounded-lg transition-colors"
                aria-label="GitHub Repository"
              >
                <FaGithub size={18} />
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-dark-700/80 hover:bg-dark-600 text-gray-300 hover:text-white rounded-lg transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="bg-dark-900/60 rounded-xl p-3.5 mb-4 border border-dark-600/50">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-1">Problem Solved</span>
          <p className="text-xs text-gray-300 leading-normal">{project.problemSolved}</p>
        </div>

        <ul className="space-y-2 mb-6">
          {project.keyFeatures.map((feature, idx) => (
            <li key={idx} className="text-xs sm:text-sm text-gray-300 flex items-start gap-2">
              <span className="text-accent-500 mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-dark-700/60 flex flex-wrap gap-2">
        {project.technologies.map((tech, idx) => (
          <span 
            key={idx} 
            className="text-xs font-mono bg-dark-900 text-gray-300 border border-dark-600 px-2.5 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};