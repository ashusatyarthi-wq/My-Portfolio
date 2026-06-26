import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Briefcase } from 'lucide-react';

const achievements = [
  {
    type: "education",
    title: "Bachelor of Science (Honours) in Computer Science",
    org: "Maharaja Agrasen College, University of Delhi",
    date: "Expected: May 2029",
    location: "New Delhi, India",
    icon: <GraduationCap className="text-violet-400" size={24} />,
    color: "violet",
    details: [
      "Relevant Coursework: Programming Fundamentals (C++, Python), Data Structures, Calculus.",
      "Campus Involvement: Active participant in Yuvaan and VIRASAT Annual Cultural Fests (Feb 2026), demonstrating consistent community engagement and formal communication."
    ]
  },
  {
    type: "certification",
    title: "Deloitte Australia Data Analytics Job Simulation",
    org: "Forage",
    date: "June 21, 2026",
    icon: <Briefcase className="text-cyan-400" size={24} />,
    color: "cyan",
    details: [
      "Completed a Deloitte job simulation involving data analysis and forensic technology.",
      "Created a data dashboard using Tableau.",
      "Used Excel to classify data and draw business conclusions."
    ]
  },
  {
    type: "certification",
    title: "Google Cloud Skill Badges (8 Credentials)",
    org: "Credly",
    date: "May 2026",
    icon: <Award className="text-indigo-400" size={24} />,
    color: "indigo",
    details: [
      "Earned credentials in App Engine, Dataplex Data Mesh, Firebase Serverless Apps, DevOps Workflows, Cloud Compute, and Machine Learning APIs."
    ]
  },
  {
    type: "achievement",
    title: "All India Naukri Campus Aptitude Test (AINCAT)",
    org: "Naukri Campus",
    date: "June 2026",
    icon: <BookOpen className="text-pink-400" size={24} />,
    color: "pink",
    details: [
      "Successfully participated in one of India's largest nationwide career aptitude assessments."
    ]
  },
  {
    type: "achievement",
    title: "Corporate E-learning Module: Resilience",
    org: "Nestle (Nesternship Initiative)",
    date: "March 2026",
    icon: <Briefcase className="text-emerald-400" size={24} />,
    color: "emerald",
    details: [
      "Focus: Workplace adaptability, agile problem solving, and professional communication."
    ]
  }
];

const colorMap = {
  violet: "from-violet-500/20 border-violet-500/30 text-violet-400 shadow-[0_0_15px_rgba(124,58,237,0.15)]",
  cyan: "from-cyan-500/20 border-cyan-500/30 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]",
  indigo: "from-indigo-500/20 border-indigo-500/30 text-indigo-400 shadow-[0_0_15px_rgba(79,70,229,0.15)]",
  pink: "from-pink-500/20 border-pink-500/30 text-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.15)]",
  emerald: "from-emerald-500/20 border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
};

const AchievementCard = ({ item, idx }) => (
  <motion.div
    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
    className="relative group"
  >
    <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${item.color === 'violet' ? 'from-violet-500/50 to-indigo-500/50' : 'from-slate-700 to-slate-800'} opacity-0 group-hover:opacity-100 transition-opacity blur-sm`} />
    <div className="relative glass-card p-6 md:p-8 rounded-2xl flex flex-col h-full bg-[#0B0F19]/90 border border-white/5 group-hover:border-white/20">
      
      <div className="flex justify-between items-start mb-6">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${colorMap[item.color].split(' ')[0]} border ${colorMap[item.color].split(' ')[1]} ${colorMap[item.color].split(' ')[3]}`}>
          {item.icon}
        </div>
        <div className="text-right">
          <p className="text-sm font-mono text-slate-400 bg-slate-900/80 px-3 py-1 rounded-full border border-white/5 inline-block">
            {item.date}
          </p>
          {item.location && <p className="text-xs text-slate-500 mt-2">{item.location}</p>}
        </div>
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{item.title}</h3>
      <p className="text-lg text-slate-400 mb-6 font-medium">{item.org}</p>

      <ul className="space-y-3 mt-auto">
        {item.details.map((detail, i) => (
          <li key={i} className="text-sm text-slate-300 flex items-start gap-3">
            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-current ${colorMap[item.color].split(' ')[2]} flex-shrink-0`} />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 max-w-7xl mx-auto w-full relative z-10">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Education & <span className="text-gradient">Achievements</span>
        </motion.h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Academic background and continuous learning milestones.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {achievements.map((item, idx) => (
          <div key={idx} className={idx === 0 ? "md:col-span-2" : ""}>
            <AchievementCard item={item} idx={idx} />
          </div>
        ))}
      </div>
    </section>
  );
}
