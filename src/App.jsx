import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TerminalSection from './components/TerminalSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import WebGlBackground from './components/WebGlBackground';
import SmoothScroller from './components/SmoothScroller';

function App() {
  return (
    <SmoothScroller>
      <div className="relative min-h-screen overflow-hidden selection:bg-white/30 selection:text-white bg-[#050505]">
        <Cursor />
        
        <WebGlBackground />

        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <TerminalSection />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </div>
      </div>
    </SmoothScroller>
  );
}

export default App;
