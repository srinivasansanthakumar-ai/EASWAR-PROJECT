import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  duration: string;
  location?: string;
  description?: string;
  badge?: string;
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ 
  title, 
  subtitle, 
  duration, 
  location, 
  description,
  badge,
  isLast 
}) => {
  return (
    <div className="relative pl-12 group">
      {/* Dot on the line */}
      <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-600 ring-4 ring-slate-950 group-hover:bg-blue-500 group-hover:ring-blue-900/30 transition-all duration-300 z-10" />

      <div className="flex flex-col gap-1">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">{title}</h3>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 bg-slate-900/50 px-3 py-1 rounded-full border border-slate-800">
            <Calendar size={12} />
            <span>{duration}</span>
          </div>
        </div>
        
        <div className="text-lg text-slate-300 font-medium">{subtitle}</div>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mt-1 mb-2">
          {location && (
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>{location}</span>
            </div>
          )}
          {badge && (
            <span className="text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded text-xs font-bold">{badge}</span>
          )}
        </div>

        {description && (
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg">{description}</p>
        )}
      </div>
    </div>
  );
};