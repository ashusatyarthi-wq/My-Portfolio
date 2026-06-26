import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, Target } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto w-full relative z-10">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Professional <span className="text-gradient">Experience</span>
        </motion.h2>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-indigo-500/20 to-transparent -translate-x-1/2 hidden md:block" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full glass-card p-8 rounded-3xl border border-violet-500/20"
        >
          {/* Hologram/glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-3xl opacity-10 blur-xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4 border-b border-white/5 pb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Student Affiliate Partner</h3>
              <div className="flex items-center gap-2 text-violet-400 font-medium">
                <Building2 size={18} />
                <span>Perplexity</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-white/5 text-slate-300 text-sm font-mono">
              <Calendar size={16} className="text-slate-400" />
              <span>Oct 2025 – Dec 2025</span>
            </div>
          </div>

          <div className="relative z-10 flex items-start gap-4">
            <div className="mt-1 p-2 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400">
              <Target size={20} />
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              Executed targeted product promotion tasks within the university demographic to drive product awareness and user acquisition for AI research tools, generating continuous affiliate commissions tracked via Dub.co.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
