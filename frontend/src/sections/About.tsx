import React from 'react';
import { Code, Brain, Target } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-800/40 border-t border-b border-dark-600/40">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-400 block mb-2">Background</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">About Me</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-12">
          <div className="md:col-span-2 bg-dark-800 border border-dark-600 rounded-2xl p-8 shadow-sm">
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              I am a dedicated undergraduate engineering student at <strong className="text-white">Jabalpur Engineering College</strong> pursuing my B.Tech in <span className="text-accent-400 font-medium">Artificial Intelligence & Data Science</span>. My work spans across systems engineering, custom data structures, machine learning modeling, and full-stack web applications.
            </p>
            <p className="text-gray-300 text-base leading-relaxed">
              Whether I am engineering high-performance custom vector search databases in C++ or training predictive machine learning models in Python, I enjoy turning complex architectural challenges into clean, maintainable, and high-performance solutions.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-dark-800 border border-dark-600 rounded-xl p-5 flex items-start gap-4">
              <div className="p-3 bg-accent-500/10 text-accent-400 rounded-lg">
                <Brain size={20} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">AI & Data Science</h3>
                <p className="text-xs text-gray-400">Building RAG systems, recommendation engines, and ML models.</p>
              </div>
            </div>

            <div className="bg-dark-800 border border-dark-600 rounded-xl p-5 flex items-start gap-4">
              <div className="p-3 bg-accent-500/10 text-accent-400 rounded-lg">
                <Code size={20} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">Systems & Algorithms</h3>
                <p className="text-xs text-gray-400">Developing custom data structures in C++ / STL.</p>
              </div>
            </div>

            <div className="bg-dark-800 border border-dark-600 rounded-xl p-5 flex items-start gap-4">
              <div className="p-3 bg-accent-500/10 text-accent-400 rounded-lg">
                <Target size={20} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">Problem Solving</h3>
                <p className="text-xs text-gray-400">Strong foundation in data structures, algorithms, and logical debugging.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Codolio Profile */}
        <div className="mt-10 flex flex-col items-center text-center">
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mb-4 leading-relaxed">
            Want to explore my coding journey? View my Codolio profile to see my
            coding profiles, problem-solving progress, and competitive programming
            achievements.
          </p>
          <a
            href="https://codolio.com/profile/VishwasSonker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3
                       rounded-xl border border-dark-600
                       bg-dark-800 text-gray-300
                       hover:text-white hover:border-accent-400
                       hover:bg-dark-700
                       transition-all duration-300
                       text-sm sm:text-base font-medium
                       w-full sm:w-auto"
          >
            <Code size={18} className="text-accent-400" />
            View My Codolio Profile
          </a>
        </div>
      </div>
    </section>
  );
};