import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 md:px-16 max-w-4xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <span className="text-sky-400 font-mono tracking-widest uppercase text-xs mb-3 block border border-sky-500/30 px-4 py-1.5 rounded-full w-fit mx-auto bg-sky-950/30 backdrop-blur-md shadow-lg shadow-sky-500/10">
          Get in Touch
        </span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
          Contact Me
        </h2>
        <p className="text-slate-400 text-base font-light max-w-xl mx-auto">
          Open for full-stack developer roles, enterprise backend positions, and exciting collaborations[cite: 7].
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-slate-900/80 backdrop-blur-2xl border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
          <div className="flex items-center gap-5">
            <div className="p-4 bg-sky-500/10 rounded-2xl border border-sky-500/20 text-sky-400 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-slate-400 block uppercase tracking-wider">Location</span>
              <span className="text-white font-medium text-lg">Camp, Pune 411001[cite: 7]</span>
            </div>
          </div>

          <div className="flex items-center gap-5 pt-6 border-t border-slate-800/80">
            <div className="p-4 bg-sky-500/10 rounded-2xl border border-sky-500/20 text-sky-400 shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-slate-400 block uppercase tracking-wider">Email</span>
              <a href="mailto:ammadmukadam34@gmail.com" className="text-white font-medium text-lg hover:text-sky-400 transition-colors">
                ammadmukadam34@gmail.com[cite: 7]
              </a>
            </div>
          </div>

          <div className="flex items-center gap-5 pt-6 border-t border-slate-800/80">
            <div className="p-4 bg-sky-500/10 rounded-2xl border border-sky-500/20 text-sky-400 shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-slate-400 block uppercase tracking-wider">Phone</span>
              <a href="tel:+917219681431" className="text-white font-medium text-lg hover:text-sky-400 transition-colors">
                +91 7219681431[cite: 7]
              </a>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/80 backdrop-blur-2xl border border-slate-800 rounded-3xl p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="p-4 bg-sky-500/10 rounded-2xl border border-sky-500/20 text-sky-400 shrink-0">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <div>
              <span className="text-xs font-mono text-slate-400 block uppercase tracking-wider">Professional Network</span>
              <span className="text-white font-medium text-lg">LinkedIn Profile</span>
            </div>
          </div>

          <a 
            href="https://linkedin.com/in/ammad-mukadam" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto px-8 py-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-2xl text-center transition-all shadow-lg shadow-sky-500/25 block"
          >
            Visit LinkedIn Profile[cite: 7]
          </a>
        </div>
      </div>
    </section>
  );
}