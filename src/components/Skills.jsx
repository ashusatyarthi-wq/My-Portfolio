import React from 'react';
import { motion } from 'framer-motion';
import { Database, Code2, LayoutDashboard, Cloud, Users } from 'lucide-react';

const skills = [
  {
    category: "Programming & Core",
    icon: <Code2 className="text-violet-400" size={24} />,
    items: ["Python Programming", "C++", "Software Development", "Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOP)"],
    color: "from-violet-500/20 to-violet-500/0",
    border: "group-hover:border-violet-500/50"
  },
  {
    category: "Data & Analytics",
    icon: <Database className="text-cyan-400" size={24} />,
    items: ["Data Analysis", "Data Modeling", "Data Visualization", "Spreadsheet Skills", "Log Analysis", "SQL (MySQL, SQLite)"],
    color: "from-cyan-500/20 to-cyan-500/0",
    border: "group-hover:border-cyan-500/50"
  },
  {
    category: "Architecture & Systems",
    icon: <LayoutDashboard className="text-indigo-400" size={24} />,
    items: ["Backend Architecture", "System Planning", "Computer Networking", "Web Security"],
    color: "from-indigo-500/20 to-indigo-500/0",
    border: "group-hover:border-indigo-500/50"
  },
  {
    category: "Tools & Cloud",
    icon: <Cloud className="text-pink-400" size={24} />,
    items: ["Google Cloud Platform (GCP)", "VS Code", "Git", "GitHub", "Dub.co"],
    color: "from-pink-500/20 to-pink-500/0",
    border: "group-hover:border-pink-500/50"
  },
  {
    category: "Professional Skills",
    icon: <Users className="text-emerald-400" size={24} />,
    items: ["Formal Communication", "Planning", "Agile Problem Solving", "Workplace Adaptability"],
    color: "from-emerald-500/20 to-emerald-500/0",
    border: "group-hover:border-emerald-500/50"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto w-full relative z-10">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Technical <span className="text-gradient">Ecosystem</span>
        </motion.h2>
        <p className="text-slate-400 max-w-2xl mx-auto">A comprehensive overview of my technical capabilities and professional skill set.</p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skills.map((skillGroup, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            className={`group glass-card p-6 rounded-2xl relative overflow-hidden transition-colors ${skillGroup.border}`}
          >
            {/* Subtle background gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${skillGroup.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-slate-900/50 flex items-center justify-center mb-6 border border-white/5">
                {skillGroup.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{skillGroup.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <li 
                    key={i}
                    className="text-sm px-3 py-1 rounded-full bg-slate-900/80 text-slate-300 border border-white/5 hover:border-white/20 transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
