import { Shield, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-cyber-darker border-t border-cyber-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyber-green" />
            <span className="terminal-text font-bold text-sm text-white">
              NC<span className="text-cyber-green">_</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-cyber-text-dim text-xs flex items-center gap-1">
            © {new Date().getFullYear()} Naomi Chesang. Built with <Heart className="w-3 h-3 text-red-400 inline" /> and React.
          </p>

          {/* Terminal Easter Egg */}
          <div className="terminal-text text-[10px] text-cyber-text-dim/50">
            <span className="text-cyber-green">root@naomi</span>:<span className="text-cyber-cyan">~</span>$ echo "Stay curious, stay secure"
          </div>
        </div>
      </div>
    </footer>
  );
}
