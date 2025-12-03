import React from 'react';
import { Project } from '../types';
import { FolderGit2, Calendar, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/20 flex flex-col h-full">
      <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowUpRight className="text-blue-500" size={20} />
      </div>

      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
          <FolderGit2 size={24} />
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>

      <div className="space-y-4 mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, idx) => (
            <span 
              key={idx} 
              className="text-xs font-medium px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700/50"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {project.year && (
          <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-slate-500 font-medium uppercase tracking-wider">
            <Calendar size={12} />
            <span>{project.year}</span>
          </div>
        )}
      </div>
    </div>
  );
};