import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, TerminalSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate network request
    setTimeout(() => {
      setIsSending(false);
      setFormData({ name: '', email: '', message: '' });
      // Usually you'd use mailto or a service here.
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=ashusatyarthi@gmail.com&su=Contact from Portfolio - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`, '_blank');
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto w-full relative z-10 mb-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card p-1 rounded-3xl overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-600/20 via-transparent to-slate-400/20 z-0" />
        
        <div className="bg-[#0B0F19]/90 backdrop-blur-xl rounded-[1.4rem] p-8 md:p-12 relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <TerminalSquare className="text-slate-400" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Initialize Connection
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Name_</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all placeholder:text-slate-600"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Email_</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all placeholder:text-slate-600"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Transmission_</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all placeholder:text-slate-600 resize-none"
                placeholder="Type your message here..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSending}
              className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all relative overflow-hidden group ${
                isSending ? 'bg-slate-800 text-slate-400' : 'bg-white text-slate-950 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]'
              }`}
            >
              {!isSending && (
                <div className="absolute inset-0 bg-gradient-to-r from-slate-200 to-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {isSending ? 'Transmitting...' : 'Send Message'}
                <Send size={18} className={isSending ? 'animate-pulse' : 'group-hover:translate-x-1 transition-transform'} />
              </span>
            </motion.button>
          </form>
        </div>
      </motion.div>
      
      <div className="mt-20 text-center text-sm font-mono text-slate-500 border-t border-white/5 pt-8">
        <p>© {new Date().getFullYear()} Nitesh Satyarthi. All systems operational.</p>
      </div>
    </section>
  );
}
