import React from 'react';
import { resumeData } from '../data/resumeData';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-400 block mb-2">Academic Background</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Education</h2>
        </div>

        <div className="space-y-6">
          {resumeData.education.map((edu, idx) => (
            <div key={idx} className="bg-dark-800 border border-dark-600 rounded-2xl p-6 sm:p-8 hover:border-dark-500 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent-500/10 text-accent-400 rounded-xl shrink-0 mt-1">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-sm text-gray-300 font-medium mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {edu.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> {edu.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="shrink-0 self-start sm:self-center">
                <span className="inline-block px-4 py-2 bg-dark-900 border border-dark-600 text-accent-400 font-mono font-semibold text-sm rounded-xl">
                  {edu.score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};