import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-28 px-6 md:px-16 max-w-4xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <span className="text-sky-400 font-mono tracking-widest uppercase text-xs mb-3 block border border-sky-500/30 px-4 py-1.5 rounded-full w-fit mx-auto bg-sky-950/30 backdrop-blur-md shadow-lg shadow-sky-500/10">
          Academic Journey
        </span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
          Education & Certifications
        </h2>
        <p className="text-slate-400 text-base font-light max-w-xl mx-auto">
          Rigorous academic foundation in computer applications paired with professional enterprise certifications.
        </p>
      </div>

      <div className="space-y-8">
        {/* BBACA */}
        <div className="group relative bg-slate-900/80 backdrop-blur-2xl border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl transition-all duration-500 hover:border-sky-500/50 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sky-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700/50 shadow-inner">
                <GraduationCap className="w-7 h-7 text-sky-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-wide">BBACA (Computer Application)[cite: 7]</h3>
                <p className="text-sky-300 font-medium">Abeda Inamdar Senior College, Pune[cite: 7]</p>
              </div>
            </div>
            <span className="text-xs font-mono bg-sky-500/10 text-sky-400 px-4 py-1.5 rounded-full border border-sky-500/20 w-fit">
              2023 - 2026[cite: 7]
            </span>
          </div>

          <div className="space-y-4 text-slate-300 font-light">
            <div className="flex items-center gap-2 text-sm">
              <Award className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Affiliated with Savitribai Phule Pune University | CGPA: 9.258 (First Class with Distinction | Grade: A+)[cite: 7]</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <BookOpen className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
              <span><strong>Core Subjects:</strong> Core & Advanced Java, Python, Android Programming, Artificial Intelligence, Predictive Analytics, and Data Visualization[cite: 7].</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed pt-2 border-t border-slate-800/60">
              Completed comprehensive coursework focusing on software development methodologies, database architecture, and advanced algorithmic problem solving.
            </p>
          </div>
        </div>

        {/* Java Full Stack Certification */}
        <div className="group relative bg-slate-900/80 backdrop-blur-2xl border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl transition-all duration-500 hover:border-indigo-500/50 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-6 border-b border-slate-800">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-wide">Full Stack Java with Angular Certification[cite: 7]</h3>
              <p className="text-indigo-300 font-medium">Symbiosis Skills & Professional University[cite: 7]</p>
            </div>
            <span className="text-xs font-mono bg-indigo-500/10 text-indigo-400 px-4 py-1.5 rounded-full border border-indigo-500/20 w-fit">
              Feb 17, 2026 - May 17, 2026[cite: 7]
            </span>
          </div>
          <p className="text-slate-300 text-sm font-light leading-relaxed">
            Intensive specialized training covering enterprise Java backend development, Spring framework integration, database persistence with Hibernate/JPA, and modern responsive frontend architecture with Angular.
          </p>
        </div>

        {/* HSC */}
        <div className="group relative bg-slate-900/80 backdrop-blur-2xl border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl transition-all duration-500 hover:border-emerald-500/50 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-6 border-b border-slate-800">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-wide">Higher Secondary Certificate (HSC)[cite: 7]</h3>
              <p className="text-emerald-300 font-medium">Anjuman Khairul Islam Junior College of Arts, Commerce & Science (Goregaon - Raigad)[cite: 7]</p>
            </div>
            <span className="text-xs font-mono bg-emerald-500/10 text-emerald-400 px-4 py-1.5 rounded-full border border-emerald-500/20 w-fit">
              2021 - 2023[cite: 7]
            </span>
          </div>
          <p className="text-slate-300 text-sm font-light leading-relaxed">
            Completed higher secondary education building a strong analytical foundation in science and mathematics.
          </p>
        </div>
      </div>
    </section>
  );
}