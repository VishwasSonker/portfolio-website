import React from 'react';

interface SkillGroupProps {
  category: string;
  skills: string[];
}

export const SkillGroup: React.FC<SkillGroupProps> = ({ category, skills }) => {
  return (
    <div className="bg-dark-800/60 border border-dark-600 rounded-xl p-5 hover:border-dark-500 transition-all">
      <h3 className="text-sm font-semibold font-mono text-accent-400 uppercase tracking-wider mb-4">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span 
            key={idx}
            className="text-xs sm:text-sm font-medium bg-dark-900/80 text-gray-200 border border-dark-700 px-3 py-1.5 rounded-lg hover:border-accent-500/50 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};