import React from 'react';
import { ArrowUpRight, CheckCircle2, Building2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Experience: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section id="experience" className="py-20 sm:py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title & Download Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 tracking-wider">
              <span>// 02 //</span>
              <span className="uppercase font-bold">CAREER TIMELINE</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Engineering Experience
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400">
              Proven track record of engineering scalable platforms and client systems.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>Download Full Resume (PDF)</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-6">
          
          {/* AWS Solutions Architecture Simulation Card */}
          <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
            isDark
              ? 'bg-[#080c14] border-white/10 hover:border-cyan-500/40 shadow-xl'
              : 'bg-white border-slate-200 shadow-md'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 uppercase">
                    CLOUD ARCHITECTURE
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    2024 – 2025
                  </span>
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  AWS - Solutions Architecture Job Simulation
                </h3>
                <div className="flex items-center gap-2 text-sm font-medium text-cyan-400 mt-0.5">
                  <Building2 className="w-4 h-4" />
                  <span>Forage / Amazon Web Services (AWS)</span>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="px-3 py-1 rounded-md text-xs font-mono font-bold border border-cyan-500/40 text-cyan-400 bg-cyan-500/10 uppercase">
                  JOB SIMULATION
                </span>
              </div>
            </div>

            {/* Description & Bullet points */}
            <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Gained practical experience in designing resilient, scalable and cost-effective cloud-based solutions to fulfill enterprise requirements. Explored core AWS architectural patterns, IAM security protocols, scalable database tiering, and high-availability storage configurations.
            </p>

            <ul className="space-y-2 mb-6 font-mono text-xs">
              <li className="flex items-start gap-2.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Designed secure cloud infrastructure diagrams involving Amazon EC2 compute nodes, Amazon S3 bucket storage, and RDS relational instances.</span>
              </li>
              <li className="flex items-start gap-2.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Applied AWS best practices for multi-tier isolation, least privilege security policies, fault tolerance, and workload disaster recovery.</span>
              </li>
            </ul>

            {/* Tech Tags */}
            <div className={`pt-4 border-t flex flex-wrap gap-2 ${isDark ? 'border-white/[0.08]' : 'border-slate-200'}`}>
              {['AWS', 'Amazon EC2', 'Amazon S3', 'Amazon RDS', 'Cloud Architecture', 'Security Groups'].map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1 rounded-lg border text-xs font-mono ${
                    isDark
                      ? 'bg-[#0d121f] border-white/[0.08] text-slate-300'
                      : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Front-End Software Engineering Simulation Card */}
          <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
            isDark
              ? 'bg-[#080c14] border-white/10 hover:border-cyan-500/40 shadow-xl'
              : 'bg-white border-slate-200 shadow-md'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-slate-800 border border-slate-700 text-slate-300 uppercase">
                    FRONTEND ENGINEERING
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    2024 – 2025
                  </span>
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Front-End Software Engineering Job Simulation
                </h3>
                <div className="flex items-center gap-2 text-sm font-medium text-cyan-400 mt-0.5">
                  <Building2 className="w-4 h-4" />
                  <span>Forage</span>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="px-3 py-1 rounded-md text-xs font-mono font-bold border border-slate-700 text-slate-400 bg-slate-800/40 uppercase">
                  JOB SIMULATION
                </span>
              </div>
            </div>

            <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Built responsive, intuitive, and user-friendly web interfaces implementing modern component workflows, dynamic state management, responsive UI utilities, and seamless API client integrations.
            </p>

            <ul className="space-y-2 mb-6 font-mono text-xs">
              <li className="flex items-start gap-2.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Engineered modern responsive user interfaces with reusable React components and Tailwind CSS styling.</span>
              </li>
              <li className="flex items-start gap-2.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Integrated REST API endpoints with robust error handling, cross-browser compatibility, and accessibility standards.</span>
              </li>
            </ul>

            <div className={`pt-4 border-t flex flex-wrap gap-2 ${isDark ? 'border-white/[0.08]' : 'border-slate-200'}`}>
              {['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5/CSS3', 'REST API Integration', 'Git'].map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1 rounded-lg border text-xs font-mono ${
                    isDark
                      ? 'bg-[#0d121f] border-white/[0.08] text-slate-300'
                      : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
