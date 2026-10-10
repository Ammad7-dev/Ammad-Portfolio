import { ArrowRight, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center px-6 md:px-16 overflow-hidden">
      {/* Rich multi-layered atmospheric background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-sky-500/15 blur-[180px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-indigo-500/15 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Elite Glowing Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-slate-900/90 border border-sky-500/40 backdrop-blur-2xl mb-8 shadow-2xl shadow-sky-500/20 group hover:border-sky-400 transition-all">
          <Code2 className="w-4 h-4 text-sky-400 animate-spin" style={{ animationDuration: '10s' }} />
          <span className="text-sky-300 font-mono tracking-wider uppercase text-xs font-semibold">
            Computer Applications Graduate & Java Developer
          </span>
        </div>

        {/* Striking Gradient Heading */}
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter mb-6 bg-gradient-to-r from-white via-sky-200 to-sky-500 bg-clip-text text-transparent drop-shadow-2xl leading-none">
          AMMAD MUKADAM
        </h1>

        {/* Refined Subtext with styled emphasis */}
        <p className="text-slate-300 text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-10 tracking-wide">
          Recent Computer Applications graduate specializing in <span className="text-sky-400 font-medium">full-stack web development</span> and <span className="text-indigo-400 font-medium">backend engineering</span>, skilled in Java, the MERN stack.
        </p>

        {/* High-End Interactive Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-sky-500/30 hover:scale-105 flex items-center justify-center gap-2 group"
          >
            View Projects 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 bg-slate-950/80 hover:bg-slate-900 border border-slate-700/80 hover:border-sky-500/50 text-white font-bold rounded-2xl transition-all duration-300 backdrop-blur-xl shadow-xl hover:scale-105 flex items-center justify-center gap-2"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}