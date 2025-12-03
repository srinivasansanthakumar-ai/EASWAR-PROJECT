import React from 'react';
import { RESUME_DATA } from './constants';
import { ProjectCard } from './components/ProjectCard';
import { TimelineItem } from './components/TimelineItem';
import { ChatWidget } from './components/ChatWidget';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Download, 
  Cpu,
  Award,
  BookOpen,
  Briefcase,
  Terminal,
  MapPin
} from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30 font-sans">
      
      {/* Background Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-30 mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl opacity-30 mix-blend-screen animate-pulse" style={{ animationDuration: '7s' }}></div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-slate-950/70 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight text-white flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            Eswar<span className="text-slate-400 font-light">V</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all"><Github size={20} /></a>
            <a href="#" className="p-2 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-full transition-all"><Linkedin size={20} /></a>
          </div>
        </div>
      </nav>

      <main className="relative max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-32">

        {/* Hero Section */}
        <section className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider border border-blue-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Open to Opportunities
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
                Hello, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-emerald-400">
                  {RESUME_DATA.name}
                </span>
              </h1>
              <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {RESUME_DATA.summary}
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a 
                href={`mailto:${RESUME_DATA.contact.email}`}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold shadow-lg shadow-blue-600/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </a>
              <button className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold border border-slate-700 transition-all hover:border-slate-500 flex items-center gap-2 group">
                <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                Download CV
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 pt-4 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer">
                <Phone size={18} />
                {RESUME_DATA.contact.phone}
              </div>
              <div className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer">
                <Mail size={18} />
                {RESUME_DATA.contact.email}
              </div>
              <div className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer">
                <MapPin size={18} />
                {RESUME_DATA.location}
              </div>
            </div>
          </div>
          
          <div className="relative group shrink-0">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl bg-slate-900">
               {/* Placeholder for user image if they have one, using a professional gradient fallback */}
               <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <span className="text-6xl font-bold text-slate-700 select-none">EV</span>
               </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400"><Cpu size={28} /></div>
            <h2 className="text-3xl font-bold text-white">Technical Arsenal</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESUME_DATA.skills.map((category, idx) => (
              <div key={idx} className="group bg-slate-900/40 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:animate-pulse"></span>
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-4 py-2 bg-slate-800/50 text-slate-300 text-sm font-medium rounded-lg border border-slate-700/50 hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/30 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section>
          <div className="flex items-center gap-3 mb-12">
             <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400"><Terminal size={28} /></div>
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESUME_DATA.projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </section>

        {/* Experience & Education */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-12">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400"><BookOpen size={28} /></div>
              <h2 className="text-3xl font-bold text-white">Education</h2>
            </div>
            <div className="relative border-l border-slate-800 ml-4 space-y-12">
              {RESUME_DATA.education.map((edu, idx) => (
                <TimelineItem 
                  key={idx}
                  title={edu.institution}
                  subtitle={edu.degree}
                  duration={edu.duration}
                  badge={edu.score}
                  isLast={idx === RESUME_DATA.education.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Internships & Certifications */}
          <div className="space-y-16">
             <div>
              <div className="flex items-center gap-3 mb-12">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400"><Briefcase size={28} /></div>
                <h2 className="text-3xl font-bold text-white">Experience</h2>
              </div>
              <div className="relative border-l border-slate-800 ml-4">
                {RESUME_DATA.internships.map((job, idx) => (
                  <TimelineItem 
                    key={idx}
                    title={job.role}
                    subtitle={job.company}
                    duration={job.duration}
                    location={job.location}
                    isLast={true}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400"><Award size={28} /></div>
                <h2 className="text-3xl font-bold text-white">Certifications</h2>
              </div>
              <div className="space-y-4">
                {RESUME_DATA.certifications.map((cert, idx) => (
                  <div key={idx} className="group bg-slate-900/50 hover:bg-slate-800/50 p-5 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all flex items-start gap-4">
                    <div className="mt-1 w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                      <Award size={16} />
                    </div>
                    <div>
                      <h4 className="text-slate-200 font-semibold group-hover:text-white transition-colors">{cert.title}</h4>
                      <p className="text-slate-500 text-sm mt-1 leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900/10 to-slate-900 rounded-3xl p-8 md:p-12 border border-white/5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <h2 className="relative z-10 text-2xl md:text-3xl font-bold text-white mb-10 text-center">Leadership & Achievements</h2>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESUME_DATA.achievements.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-slate-950/50 p-6 rounded-2xl border border-white/5">
                <div className="mt-1 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)] flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-slate-200">{item.title}</h4>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-white/5 mt-32">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-4">
          <p className="text-slate-500">
            © {new Date().getFullYear()} Eswar V. Built with innovation.
          </p>
          <div className="flex justify-center gap-6 text-sm text-slate-600">
             <span>React</span>
             <span>Tailwind</span>
             <span>Gemini AI</span>
          </div>
        </div>
      </footer>

      {/* AI Chat Bot */}
      <ChatWidget />
    </div>
  );
};

export default App;