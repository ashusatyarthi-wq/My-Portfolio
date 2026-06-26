import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ChevronRight, Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const TypeWriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  // Typing logic
  useEffect(() => {
    if (index === words.length) {
      setIndex(0);
      return;
    }

    if (
      subIndex === words[index].length + 1 && 
      !reverse
    ) {
      setTimeout(() => setReverse(true), 1500);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : 100, parseInt(Math.random() * 150)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="inline-block min-h-[1.2em]">
      {`${words[index].substring(0, subIndex)}`}
      <span className={`${blink ? 'opacity-100' : 'opacity-0'} text-slate-400 transition-opacity duration-100`}>_</span>
    </span>
  );
};

export default function Hero() {
  const roles = ["Backend Developer", "Data Analyst", "Cloud Enthusiast"];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Cinematic Particle Grid Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 perspective-[1000px]">
        <motion.div 
          initial={{ rotateX: 60, y: 100, scale: 2, opacity: 0 }}
          animate={{ rotateX: 60, y: 150, scale: 2, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full max-w-[200vw] absolute bottom-[-50vh] origin-top"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(124, 58, 237, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(124, 58, 237, 0.1) 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-start mt-[-10vh]">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="glass px-4 py-1.5 rounded-full border border-slate-500/30 mb-6 flex items-center gap-2"
        >
          <Terminal size={14} className="text-slate-400" />
          <span className="text-xs font-mono tracking-wider text-slate-300">SYSTEM.INIT()</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4"
        >
          <span className="block text-slate-400">NITESH</span>
          <span className="block text-white glow-text">SATYARTHI</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-300 mb-8 h-12"
        >
          <TypeWriter words={roles} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="max-w-2xl text-lg text-slate-400 leading-relaxed mb-10"
        >
          Computer Science undergraduate specializing in backend architecture, relational database management, and data analysis. Building resilient software systems and scaling software solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1 }}
          className="flex flex-wrap gap-4 items-center"
        >
          <a href="#projects" className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-950 font-semibold rounded-full overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-slate-200 to-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative">View My Projects</span>
            <ChevronRight size={18} className="relative group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="px-8 py-4 glass rounded-full font-medium hover:bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
            Let's Connect
          </a>
        </motion.div>

        {/* Floating Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-6 right-6 flex justify-between items-end pointer-events-none"
        >
          <div className="flex flex-col gap-4 pointer-events-auto">
            <SocialLink href="https://github.com/ashusatyarthi-wq" icon={<FaGithub size={20} />} />
            <SocialLink href="https://linkedin.com/in/nitesh-satyarthi-746877137/" icon={<FaLinkedin size={20} />} />
            <SocialLink href="https://mail.google.com/mail/?view=cm&fs=1&to=ashusatyarthi@gmail.com" icon={<Mail size={20} />} />
          </div>
          
          <div className="hidden md:flex flex-col items-end gap-2 text-xs font-mono text-slate-500 pointer-events-auto">
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <MapPin size={14} />
              <span>New Delhi, India</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center glass rounded-full text-slate-400 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-300 hover:scale-110"
  >
    {icon}
  </a>
);
