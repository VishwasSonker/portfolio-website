import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';
import { Mail, Copy, Check, Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(resumeData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-800/40 border-t border-dark-600/40">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-accent-400 block mb-2">Get In Touch</span>
        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-6">Let's build something useful.</h2>
        <p className="text-gray-300 text-base max-w-xl mx-auto mb-10">
          I am actively looking for software engineering internships, placements, and collaborative AI/ML development opportunities. Feel free to reach out via email or connect with me online.
        </p>

        <div className="bg-dark-800 border border-dark-600 rounded-2xl p-8 mb-8 inline-block w-full max-w-md shadow-lg">
          <div className="flex items-center justify-between bg-dark-900 px-4 py-3 rounded-xl border border-dark-700 mb-6">
            <span className="text-sm font-mono text-gray-300 truncate mr-2">{resumeData.personal.email}</span>
            <button 
              onClick={copyEmail}
              className="p-2 bg-dark-700 hover:bg-dark-600 text-gray-200 rounded-lg transition-colors shrink-0 flex items-center gap-1 text-xs font-mono"
              title="Copy Email"
            >
              {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a 
              href={`mailto:${resumeData.personal.email}`}
              className="flex-1 py-3 px-4 bg-accent-600 hover:bg-accent-500 text-white font-semibold text-sm rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Mail size={16} /> Send Email
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a 
            href={resumeData.personal.links.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={18} /> GitHub
          </a>
          <a 
            href={resumeData.personal.links.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedin size={18} /> LinkedIn
          </a>
          <a 
            href={resumeData.personal.links.leetcode} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <Terminal size={18} /> LeetCode
          </a>
        </div>
      </div>
    </section>
  );
};