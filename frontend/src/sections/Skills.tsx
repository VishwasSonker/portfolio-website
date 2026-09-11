import React from 'react';
import { resumeData } from '../data/resumeData';
import { SkillGroup } from '../components/SkillGroup';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-400 block mb-2">Expertise</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(resumeData.skills).map(([category, skills]) => (
            <SkillGroup key={category} category={category} skills={skills} />
          ))}
        </div>
      </div>
    </section>
  );
};