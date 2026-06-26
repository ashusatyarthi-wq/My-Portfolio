import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Terminal', href: '#terminal' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Simple intersection observer logic could be here, but for now we rely on scroll position
      const sections = navLinks.map(link => link.name.toLowerCase());
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="relative group flex items-center gap-2 text-xl font-bold tracking-tighter">
          <span className="text-white">NITESH</span>
          <span className="text-violet-400">.</span>
          {/* Subtle glow behind logo */}
          <div className="absolute -inset-2 bg-violet-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </a>

        <div className="hidden md:flex items-center gap-1 glass px-6 py-2 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                activeSection === link.name.toLowerCase() ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {activeSection === link.name.toLowerCase() && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all hover:bg-slate-900">
            Initialize
          </span>
        </a>
      </div>
    </motion.nav>
  );
}
