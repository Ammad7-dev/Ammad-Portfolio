import { Layout, Server } from 'lucide-react';

const projects = [
  {
    title: "Vahan Share",
    category: "Full-Stack Vehicle Sharing Application",
    description: "An advanced full-stack vehicle sharing platform built with React, Node.js, Express.js, and MongoDB. Features comprehensive architecture documentation, secure user authentication, real-time vehicle availability tracking, and seamless booking workflow pipelines.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    icon: <Layout className="w-7 h-7 text-sky-400" />,
    gradient: "from-sky-500/20 via-transparent to-transparent",
    border: "group-hover:border-sky-500/50"
  },
  {
    title: "Banking & Finance System",
    category: "Enterprise Backend & Frontend Architecture",
    description: "A robust enterprise-grade banking and finance management system powered by Java Spring Boot, React, and MySQL. Implements secure REST API endpoints, user account models, data persistence repositories, and transactional ledger operations.",
    tech: ["Java Spring Boot", "React", "MySQL", "Hibernate", "JPA"],
    icon: <Server className="w-7 h-7 text-indigo-400" />,
    gradient: "from-indigo-500/20 via-transparent to-transparent",
    border: "group-hover:border-indigo-500/50"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 md:px-16 max-w-4xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <span className="text-sky-400 font-mono tracking-widest uppercase text-xs mb-3 block border border-sky-500/30 px-4 py-1.5 rounded-full w-fit mx-auto bg-sky-950/30 backdrop-blur-md shadow-lg shadow-sky-500/10">
          Portfolio Showcase
        </span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-slate-400 text-base font-light max-w-xl mx-auto">
          Production-grade applications engineered with modern web technologies and scalable enterprise backends.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`group relative bg-slate-900/80 backdrop-blur-2xl border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl transition-all duration-500 ${project.border} overflow-hidden flex flex-col justify-between`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

            <div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800/80">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700/50 shadow-inner">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-wide group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-slate-300 text-base font-light leading-relaxed mb-8">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-xs font-mono bg-slate-950/60 text-sky-300 px-3.5 py-1.5 rounded-xl border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-800/80">
                <a 
                  href="https://github.com/ammad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-white hover:text-sky-400 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg> 
                  View Source & Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}