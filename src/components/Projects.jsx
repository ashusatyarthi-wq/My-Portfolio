import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Package, Server } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "Console-Based Inventory Management System",
    date: "March 2026",
    tech: ["Python", "MySQL"],
    icon: <Package className="w-8 h-8 text-violet-400" />,
    color: "from-violet-500",
    description: [
      "Engineered a backend MySQL database to replace volatile in-memory structures, achieving zero data loss and a 100% data persistence rate for seamless CRUD execution.",
      "Designed a robust Python Command Line Interface (CLI) application to streamline inventory tracking, processing raw user inputs with error-free data validation."
    ]
  },
  {
    id: 2,
    title: "Python API Fetcher",
    date: "March 2026",
    tech: ["Python"],
    icon: <Server className="w-8 h-8 text-cyan-400" />,
    color: "from-cyan-500",
    description: [
      "Developed a custom API fetcher script to efficiently request, parse, and manage external data payloads, reducing data processing latency by 80%."
    ]
  }
];

const ProjectPanel = ({ project, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"]
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group relative w-full rounded-[2.5rem] overflow-hidden mb-12 glass border border-white/10"
    >
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color} to-transparent opacity-50`} />
      
      <div className="flex flex-col lg:flex-row p-8 md:p-12 gap-8 items-center">
        {/* Visual Side */}
        <div className="w-full lg:w-2/5 flex flex-col items-center justify-center p-8 rounded-3xl bg-slate-900/50 border border-white/5 relative overflow-hidden group-hover:border-white/10 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 w-24 h-24 rounded-full glass flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(124,58,237,0.2)]">
            {project.icon}
          </div>
          <div className="flex gap-2 relative z-10">
            {project.tech.map((t, i) => (
              <span key={i} className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-white/10">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-3/5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-slate-400 font-mono mb-2">{project.date}</p>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all duration-300">
                {project.title}
              </h3>
            </div>
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                <FaGithub size={20} />
              </button>
              <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                <ExternalLink size={20} />
              </button>
            </div>
          </div>
          
          <ul className="space-y-4">
            {project.description.map((desc, i) => (
              <li key={i} className="text-slate-300 text-lg leading-relaxed flex items-start gap-4">
                <span className="text-violet-500 mt-1.5 opacity-50">▹</span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto w-full relative z-10">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Showcasing backend architecture and data analysis solutions.</p>
      </div>

      <div className="flex flex-col">
        {projects.map((project, idx) => (
          <ProjectPanel key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
