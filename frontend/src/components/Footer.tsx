import React from 'react';
import { Mail, Code } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { resumeData } from '../data/resumeData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-dark-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent-500/10 border border-accent-500/30 flex items-center justify-center text-accent-500">
            <Code size={16} />
          </div>
          <span className="font-bold text-white">{resumeData.personal.name}</span>
        </div>

        <p className="text-xs text-gray-500 text-center">
          © {currentYear} {resumeData.personal.name}. All rights reserved. Built with React, TypeScript & Tailwind CSS.
        </p>

        <div className="flex items-center gap-4">
          <a 
            href={resumeData.personal.links.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white bg-dark-800 border border-dark-600 rounded-lg transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a 
            href={resumeData.personal.links.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white bg-dark-800 border border-dark-600 rounded-lg transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a 
            href={`mailto:${resumeData.personal.email}`}
            className="p-2 text-gray-400 hover:text-white bg-dark-800 border border-dark-600 rounded-lg transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};