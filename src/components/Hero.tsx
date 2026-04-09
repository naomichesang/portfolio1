import { ChevronDown, Terminal, ShieldCheck, Lock } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center matrix-bg overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,255,136,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,255,136,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-green/5 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyber-cyan/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Terminal-style header */}
        <div className="inline-flex items-center gap-2 bg-cyber-card border border-cyber-border rounded-full px-4 py-1.5 mb-8 animate-fade-in-up">
          <div className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
          <span className="terminal-text text-xs text-cyber-green">system online — all ports monitored</span>
        </div>

        {/* Profile Image */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="relative inline-block">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-cyber-green/50 animate-pulse-glow mx-auto">
              <img
                src="/images/naomi-profile.jpg"
                alt="Naomi Chesang"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-cyber-green text-cyber-darker rounded-full p-2">
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-white">Naomi</span>{' '}
          <span className="text-cyber-green glow-green">Chesang</span>
        </h1>

        {/* Tagline */}
        <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Terminal className="w-4 h-4 text-cyber-cyan" />
          <span className="terminal-text text-cyber-cyan text-sm sm:text-base">
            Cybersecurity Professional &bull; Ethical Hacker &bull; Digital Forensics Enthusiast
          </span>
        </div>

        {/* Professional Statement */}
        <p className="text-cyber-text-dim text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Passionate about safeguarding digital infrastructure through proactive threat detection,
          vulnerability assessment, and incident response. Committed to continuous learning in the
          ever-evolving landscape of cybersecurity.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <a
            href="#projects"
            className="group flex items-center gap-2 bg-cyber-green text-cyber-darker font-semibold px-6 py-3 rounded-lg hover:bg-cyber-green-dim transition-all hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]"
          >
            <Lock className="w-4 h-4" />
            View My Work
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 border border-cyber-border text-cyber-text px-6 py-3 rounded-lg hover:border-cyber-green/50 hover:text-cyber-green transition-all"
          >
            Get In Touch
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {[
            { value: '4+', label: 'Projects' },
            { value: '15+', label: 'Labs Done' },
            { value: '3+', label: 'Certifications' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="terminal-text text-2xl sm:text-3xl font-bold text-cyber-green glow-green">{stat.value}</div>
              <div className="text-cyber-text-dim text-xs sm:text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#resume"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyber-text-dim hover:text-cyber-green transition-colors animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
