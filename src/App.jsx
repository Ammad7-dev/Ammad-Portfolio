import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sparkles } from '@react-three/drei';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Activities from './components/Activities';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <main className="bg-[#020617] min-h-screen text-white selection:bg-sky-500 selection:text-slate-950 relative overflow-hidden">
      {/* Unified 3D Starfield Background Canvas */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 7] }}>
          <ambientLight intensity={2} />
          <directionalLight position={[10, 10, 5]} intensity={4} color="#38bdf8" />
          <Sparkles count={400} scale={15} size={3} speed={0.4} color="#38bdf8" />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
        </Canvas>
      </div>

      {/* Structured Sections */}
      <div className="relative z-10">
        <Hero />
        <Education />
        <Skills />
        <Experience />
        <Activities />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}