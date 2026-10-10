import { Briefcase, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section className="py-28 px-6 md:px-16 max-w-4xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <span className="text-sky-400 font-mono tracking-widest uppercase text-xs mb-3 block border border-sky-500/30 px-4 py-1.5 rounded-full w-fit mx-auto bg-sky-950/30 backdrop-blur-md shadow-lg shadow-sky-500/10">
          Work History
        </span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
          Professional Experience
        </h2>
        <p className="text-slate-400 text-base font-light max-w-xl mx-auto">
          Practical engineering internships delivering responsive web apps, backend optimization, and Python scripts.
        </p>
      </div>

      <div className="space-y-8">
        <div className="group relative bg-slate-900/80 backdrop-blur-2xl border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl transition-all duration-500 hover:border-sky-500/50 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sky-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700/50 shadow-inner">
                <Briefcase className="w-7 h-7 text-sky-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-wide">Software Engineer Intern</h3>
                <p className="text-sky-300 font-medium">Kokannest Information Technologies</p>
              </div>
            </div>
            <span className="text-xs font-mono bg-sky-500/10 text-sky-400 px-4 py-1.5 rounded-full border border-sky-500/20 w-fit">
              Jan 2024 - Jan 2025
            </span>
          </div>

          <ul className="space-y-4 text-slate-300 text-sm font-light leading-relaxed">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <span>Assisted in the design, coding, and testing of responsive web applications across the full development lifecycle.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <span>Collaborated closely with senior developers to debug critical issues and optimize backend application performance.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <span>Managed comprehensive project documentation and utilized version control systems to ensure smooth, clean code collaboration.</span>
            </li>
          </ul>
        </div>

        <div className="group relative bg-slate-900/80 backdrop-blur-2xl border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl transition-all duration-500 hover:border-indigo-500/50 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700/50 shadow-inner">
                <Briefcase className="w-7 h-7 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-wide">Python Intern</h3>
                <p className="text-indigo-300 font-medium">CodeAlpha</p>
              </div>
            </div>
            <span className="text-xs font-mono bg-indigo-500/10 text-indigo-400 px-4 py-1.5 rounded-full border border-indigo-500/20 w-fit">
              Jan 10, 2026 - Feb 10, 2026
            </span>
          </div>

          <ul className="space-y-4 text-slate-300 text-sm font-light leading-relaxed">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <span>Developed robust Python programs to fulfill specific mentor-assigned project deliverables.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <span>Successfully built interactive applications including a Hangman game, a Stock Portfolio Tracker, a Task Automation Script, and a Basic Chatbot.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <span>Managed version control and deployment workflows using Git, GitHub, and VS Code.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}