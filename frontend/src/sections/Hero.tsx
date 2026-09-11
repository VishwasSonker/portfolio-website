import React, { useState } from 'react';
import { ArrowRight, Download, Mail, Check, Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { resumeData } from '../data/resumeData';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(resumeData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Subtle Gradient & Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a20_1px,transparent_1px),linear-gradient(to_bottom,#1a1a20_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-800 border border-dark-600 text-xs font-mono text-accent-400 mb-6 shadow-sm">
          <Terminal size={14} />
          <span>{resumeData.personal.institution}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-indigo-300">{resumeData.personal.name}</span>
        </h1>

        <p className="text-lg sm:text-xl font-medium text-gray-300 mb-6 max-h-24">
          B.Tech student specializing in <span className="text-white font-semibold">Artificial Intelligence and Data Science</span>
        </p>

        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {resumeData.summary}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a 
            href="#projects" 
            className="px-6 py-3 text-sm font-semibold text-white bg-accent-600 hover:bg-accent-500 rounded-xl transition-all shadow-lg shadow-accent-500/25 flex items-center gap-2 group"
          >
            <span>View Projects</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a 
            href="/resume.pdf" 
            download="Vishwas_Sonker_Resume.pdf"
            className="px-6 py-3 text-sm font-semibold text-gray-300 hover:text-white bg-dark-800 hover:bg-dark-700 border border-dark-600 rounded-xl transition-all flex items-center gap-2"
          >
            <Download size={16} />
            <span>Download Resume</span>
          </a>

          <button 
            onClick={copyEmail}
            className="px-5 py-3 text-sm font-semibold text-gray-300 hover:text-white bg-dark-800 hover:bg-dark-700 border border-dark-600 rounded-xl transition-all flex items-center gap-2"
          >
            {copied ? <Check size={16} className="text-green-400" /> : <Mail size={16} />}
            <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
          </button>
        </div>

        <div className="flex items-center justify-center gap-5 pt-6 border-t border-dark-700/60 max-w-xs mx-auto">
          <a 
            href={resumeData.personal.links.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white flex items-center gap-2 text-xs font-mono transition-colors"
          >
            <FaGithub size={16} /> GitHub
          </a>
          <span className="text-dark-600">•</span>
          <a 
            href={resumeData.personal.links.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white flex items-center gap-2 text-xs font-mono transition-colors"
          >
            <FaLinkedin size={16} /> LinkedIn
          </a>
          <span className="text-dark-600">•</span>
          <a 
            href={resumeData.personal.links.leetcode} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white flex items-center gap-2 text-xs font-mono transition-colors"
          >
            <Terminal size={16} /> LeetCode
          </a>
        </div>
      </div>
    </section>
  );
};