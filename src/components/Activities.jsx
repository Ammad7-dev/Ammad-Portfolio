import { Award } from 'lucide-react';

export default function Activities() {
  return (
    <section className="py-24 px-6 md:px-16 max-w-4xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <span className="text-sky-400 font-mono tracking-widest uppercase text-xs mb-3 block border border-sky-500/30 px-4 py-1.5 rounded-full w-fit mx-auto bg-sky-950/30 backdrop-blur-md shadow-lg shadow-sky-500/10">
          Leadership & Honors
        </span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
          Key Activities
        </h2>
      </div>

      <div className="group relative bg-slate-900/80 backdrop-blur-2xl border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl transition-all duration-500 hover:border-amber-500/50 overflow-hidden flex flex-col md:flex-row items-center gap-8">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="p-5 bg-amber-500/10 rounded-3xl border border-amber-500/20 shrink-0 shadow-inner">
          <Award className="w-10 h-10 text-amber-400" />
        </div>

        <div className="text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
            <span className="text-xs font-mono bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full border border-amber-500/20">
              August 2025
            </span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Leadership Milestone</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Google Student Ambassador</h3>
          <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed">
            Selected through a highly competitive application and multi-stage interview process to represent Google technologies, organize student developer events, and foster community tech engagement.
          </p>
        </div>
      </div>
    </section>
  );
}