import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const COMMANDS = {
  help: [
    { text: 'Available commands:', type: 'system' },
    { text: '  help     - List available commands', type: 'info' },
    { text: '  about    - Print summary from resume', type: 'info' },
    { text: '  projects - List technical projects', type: 'info' },
    { text: '  clear    - Clear terminal output', type: 'info' },
  ],
  about: [
    { text: 'Fetching profile data...', type: 'system' },
    { text: 'Computer Science undergraduate specializing in backend architecture, relational database management, and data analysis. Building resilient software systems and scaling software solutions.', type: 'success' },
  ],
  projects: [
    { text: 'Initializing project database query...', type: 'system' },
    { text: '1. Console-Based Inventory Management System (Mar 2026)', type: 'success' },
    { text: '   Tech: Python, MySQL', type: 'info' },
    { text: '2. Python API Fetcher (Mar 2026)', type: 'success' },
    { text: '   Tech: Python', type: 'info' },
    { text: 'Type `help` for more options.', type: 'system' },
  ],
};

export default function TerminalSection() {
  const [history, setHistory] = useState([
    { text: 'System initialized.', type: 'system' },
    { text: 'Type "help" to view available commands.', type: 'system' }
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    if (!cmd) return;
    
    const newHistory = [...history, { text: `> ${cmd}`, type: 'command' }];

    if (cmd === 'clear') {
      setHistory([]);
    } else if (COMMANDS[cmd]) {
      setHistory([...newHistory, ...COMMANDS[cmd]]);
    } else {
      setHistory([...newHistory, { text: `Command not found: ${cmd}`, type: 'error' }]);
    }
    
    setInput('');
  };

  return (
    <section id="terminal" className="py-20 px-6 max-w-5xl mx-auto w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card rounded-2xl overflow-hidden border border-white/10 glow-border"
      >
        {/* Mac-like header */}
        <div className="bg-slate-900/80 px-4 py-3 flex items-center gap-2 border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="mx-auto flex gap-2 items-center opacity-50">
            <span className="text-xs font-mono">root@nitesh-satyarthi:~</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div 
          className="p-6 h-[400px] overflow-y-auto font-mono text-sm bg-[#05070a]/90 custom-scrollbar cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((line, i) => (
            <div 
              key={i} 
              className={`mb-2 ${
                line.type === 'command' ? 'text-white' :
                line.type === 'error' ? 'text-red-400' :
                line.type === 'success' ? 'text-green-400' :
                line.type === 'info' ? 'text-cyan-400' :
                'text-slate-500'
              }`}
            >
              {line.text}
            </div>
          ))}
          
          <form onSubmit={handleCommand} className="flex items-center gap-2 mt-4 text-white">
            <span className="text-violet-500">➜</span>
            <span className="text-cyan-400">~</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0"
              spellCheck="false"
              autoComplete="off"
              autoFocus
            />
          </form>
          <div ref={bottomRef} />
        </div>
      </motion.div>
    </section>
  );
}
