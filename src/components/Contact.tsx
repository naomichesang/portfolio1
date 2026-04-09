import { Mail, Globe, GitBranch, Phone, Send, MapPin, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'naomi.chesang@email.com',
    href: 'mailto:naomi.chesang@email.com',
    color: 'from-red-500 to-orange-500',
    bgHover: 'hover:border-red-500/30',
  },
  {
    icon: Globe,
    label: 'LinkedIn',
    value: 'linkedin.com/in/naomi-chesang',
    href: 'https://linkedin.com/in/naomi-chesang',
    color: 'from-blue-500 to-blue-600',
    bgHover: 'hover:border-blue-500/30',
  },
  {
    icon: GitBranch,
    label: 'GitHub',
    value: 'github.com/naomi-chesang',
    href: 'https://github.com/naomi-chesang',
    color: 'from-purple-500 to-purple-600',
    bgHover: 'hover:border-purple-500/30',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+254 7XX XXX XXX',
    href: 'tel:+254700000000',
    color: 'from-green-500 to-emerald-500',
    bgHover: 'hover:border-green-500/30',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-cyber-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyber-card border border-cyber-border rounded-full px-4 py-1.5 mb-4">
            <span className="terminal-text text-xs text-cyber-green">ping naomi.chesang</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Get In <span className="text-cyber-green glow-green">Touch</span>
          </h2>
          <p className="text-cyber-text-dim max-w-xl mx-auto">
            Interested in collaborating on cybersecurity projects, discussing research, or have an opportunity?
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`flex items-center gap-4 bg-cyber-card border border-cyber-border rounded-xl p-4 card-hover group ${link.bgHover}`}
              >
                <div className={`bg-gradient-to-br ${link.color} rounded-lg p-3 group-hover:scale-110 transition-transform`}>
                  <link.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-cyber-text-dim text-xs mb-0.5">{link.label}</p>
                  <p className="text-white text-sm truncate">{link.value}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-cyber-text-dim group-hover:text-cyber-green transition-colors" />
              </a>
            ))}

            {/* Location */}
            <div className="flex items-center gap-4 bg-cyber-card border border-cyber-border rounded-xl p-4">
              <div className="bg-gradient-to-br from-cyber-green to-emerald-600 rounded-lg p-3">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-cyber-text-dim text-xs mb-0.5">Location</p>
                <p className="text-white text-sm">Nairobi, Kenya</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-cyber-card border border-cyber-border rounded-2xl p-6 sm:p-8">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-cyber-green" />
              Send a Message
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-cyber-text-dim text-xs mb-1.5 terminal-text">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-cyber-darker border border-cyber-border rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-cyber-text-dim/50 focus:outline-none focus:border-cyber-green/50 focus:ring-1 focus:ring-cyber-green/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-cyber-text-dim text-xs mb-1.5 terminal-text">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-cyber-darker border border-cyber-border rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-cyber-text-dim/50 focus:outline-none focus:border-cyber-green/50 focus:ring-1 focus:ring-cyber-green/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-cyber-text-dim text-xs mb-1.5 terminal-text">Subject</label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="w-full bg-cyber-darker border border-cyber-border rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-cyber-text-dim/50 focus:outline-none focus:border-cyber-green/50 focus:ring-1 focus:ring-cyber-green/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-cyber-text-dim text-xs mb-1.5 terminal-text">Message</label>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  className="w-full bg-cyber-darker border border-cyber-border rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-cyber-text-dim/50 focus:outline-none focus:border-cyber-green/50 focus:ring-1 focus:ring-cyber-green/20 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-cyber-green text-cyber-darker font-semibold py-3 rounded-lg hover:bg-cyber-green-dim transition-all hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
