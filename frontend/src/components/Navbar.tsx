import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, MessageCircle } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { AIChat } from './AIChat';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/90 backdrop-blur-md border-b border-dark-600/50 py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-accent-500/10 border border-accent-500/30 flex items-center justify-center text-accent-500 group-hover:bg-accent-500 group-hover:text-white transition-all">
            <Code2 size={20} />
          </div>
          <span className="font-bold text-lg tracking-tight text-white">{resumeData.personal.name}</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">

          {/* AI Chat Button */}
          <button
            onClick={() => setIsChatOpen(true)}
            className="inline-flex items-center justify-center gap-2
                      px-6 py-2.5
                      text-sm font-semibold text-white
                      bg-accent-600
                      hover:bg-accent-500
                      rounded-lg
                      transition-all duration-300
                      shadow-md shadow-accent-500/30
                      hover:shadow-lg hover:shadow-accent-500/40
                      hover:-translate-y-0.5"
          >
            <MessageCircle size={18} />
            Ask My AI
          </button>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-accent-500 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <a 
              href="/resume.pdf" 
              download="Vishwas_Sonker_Resume.pdf"
              className="px-4 py-2 text-sm font-medium text-white bg-accent-600 hover:bg-accent-500 rounded-lg transition-all shadow-sm shadow-accent-500/20"
            >
              Resume
            </a>
          </nav>

        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-2">

          {/* Mobile AI Chat Button */}
          <button
            onClick={() => setIsChatOpen(true)}
            className="inline-flex items-center justify-center gap-1.5
                      px-3 py-2
                      text-xs font-semibold text-white
                      bg-accent-600
                      hover:bg-accent-500
                      rounded-lg
                      transition-all duration-300
                      shadow-sm shadow-accent-500/20"
          >
            <MessageCircle size={16} />
            <span>Ask My AI</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-400
                      hover:text-white
                      focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark-800 border-b border-dark-600 px-6 py-6 space-y-4 shadow-xl">

          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-gray-300 hover:text-accent-500 transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-2">
            <a 
              href="/resume.pdf" 
              download="Vishwas_Sonker_Resume.pdf"
              onClick={() => setIsOpen(false)}
              className="block text-center w-full py-2.5 text-sm font-medium text-white bg-accent-600 hover:bg-accent-500 rounded-lg transition-all"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
      {/* AI Chat Window */}
      <AIChat
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </header>
  );
};