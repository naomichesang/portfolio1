import { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#resume', label: 'Resume' },
  { href: '#projects', label: 'Projects' },
  { href: '#labs', label: 'Labs' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cyber-darker/95 backdrop-blur-md border-b border-cyber-border shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <Shield className="w-7 h-7 text-cyber-green group-hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.6)] transition-all" />
            <span className="terminal-text font-bold text-lg text-white">
              NC<span className="text-cyber-green">_</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`terminal-text text-sm px-4 py-2 rounded-md transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? 'text-cyber-green bg-cyber-green/10'
                    : 'text-cyber-text-dim hover:text-cyber-green hover:bg-cyber-green/5'
                }`}
              >
                <span className="text-cyber-green mr-1">&gt;</span>
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-cyber-text-dim hover:text-cyber-green transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cyber-darker/98 backdrop-blur-md border-b border-cyber-border">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`terminal-text block text-sm px-4 py-3 rounded-md transition-all ${
                  activeSection === link.href.slice(1)
                    ? 'text-cyber-green bg-cyber-green/10'
                    : 'text-cyber-text-dim hover:text-cyber-green hover:bg-cyber-green/5'
                }`}
              >
                <span className="text-cyber-green mr-2">&gt;</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
