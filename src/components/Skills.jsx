import { Code, Cpu, Database } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages[cite: 7]",
    icon: <Code className="w-6 h-6 text-sky-400" />,
    skills: ["Java", "Python", "JavaScript", "C", "C++"],
    borderColor: "hover:border-sky-500/50",
    glow: "hover:shadow-sky-500/10",
    description: "Proficient in object-oriented programming, scripting, and low-level system design[cite: 7]."
  },
  {
    title: "Frameworks & Web[cite: 7]",
    icon: <Cpu className="w-6 h-6 text-indigo-400" />,
    skills: ["Angular", "React", "Node.js", "Spring", "Hibernate", "JPA"],
    borderColor: "hover:border-indigo-500/50",
    glow: "hover:shadow-indigo-500/10",
    description: "Building responsive web user interfaces and robust enterprise backend services[cite: 7]."
  },
  {
    title: "Databases & Tools[cite: 7]",
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    skills: ["MongoDB", "MySQL", "Git", "GitHub", "VS Code", "Maven", "IntelliJ IDEA"],
    borderColor: "hover:border-emerald-500/50",
    glow: "hover:shadow-emerald-500/10",
    description: "Managing relational and document databases, version control, and development environments[cite: 7]."
  }
];

export default function Skills() {
  return (
    <section className="py-28 px-6 md:px-16 max-w-4xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <span className="text-sky-400 font-mono tracking-widest uppercase text-xs mb-3 block border border-sky-500/30 px-4 py-1.5 rounded-full w-fit mx-auto bg-sky-950/30 backdrop-blur-md shadow-lg shadow-sky-500/10">
          Technical Arsenal
        </span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
          Skills & Technologies
        </h2>
        <p className="text-slate-400 text-base font-light max-w-xl mx-auto">
          Comprehensive toolset mastered through professional internships and academic projects[cite: 7].
        </p>
      </div>

      <div className="space-y-8">
        {skillCategories.map((cat, index) => (
          <div 
            key={index}
            className={`group relative bg-slate-900/80 backdrop-blur-2xl border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl transition-all duration-500 ${cat.borderColor} ${cat.glow} overflow-hidden`}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sky-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800/80">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700/50 shadow-inner">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-wide">
                    {cat.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-light mt-1">{cat.description}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill, i) => (
                <div 
                  key={i}
                  className="px-5 py-2.5 bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800 hover:border-sky-500/40 rounded-xl text-sm font-mono text-slate-300 hover:text-white shadow-md transition-all duration-300 hover:scale-105 flex items-center gap-2.5 group/pill"
                >
                  <span className="w-2 h-2 rounded-full bg-sky-400 group-hover/pill:bg-sky-300 group-hover/pill:shadow-[0_0_10px_#38bdf8] transition-all" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-3 px-8 py-4 bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-800 shadow-xl">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Spoken Languages:</span>
          <span className="text-sky-300 font-semibold text-sm">English, Hindi, Urdu, Marathi[cite: 7]</span>
        </div>
      </div>
    </section>
  );
}