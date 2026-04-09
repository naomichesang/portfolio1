import { ExternalLink, GitBranch, FolderGit2 } from 'lucide-react';

const projects = [
  {
    title: 'Network Vulnerability Scanner',
    description:
      'A Python-based automated vulnerability scanning tool that identifies open ports, running services, and known CVEs on target networks. Features Nmap integration, report generation, and a web dashboard for visualizing scan results.',
    tags: ['Python', 'Nmap', 'SQLite', 'Flask', 'HTML/CSS'],
    category: 'Network Security',
    highlights: [
      'Automated port scanning and service enumeration',
      'CVE database integration for vulnerability correlation',
      'Web-based dashboard with interactive charts',
      'PDF and HTML report generation',
    ],
    github: '#',
    live: '#',
    status: 'Completed',
  },
  {
    title: 'Phishing Email Detection System',
    description:
      'A machine learning-powered system that analyzes email content, headers, and URLs to detect phishing attempts. Trained on a dataset of 10,000+ emails with feature extraction for URL analysis, text classification, and sender reputation.',
    tags: ['Python', 'Scikit-learn', 'NLP', 'TensorFlow', 'Pandas'],
    category: ' Defensive Security',
    highlights: [
      '97.3% accuracy on test dataset',
      'Real-time email header and content analysis',
      'URL reputation checking integration',
      'Confidence scoring with explainable results',
    ],
    github: '#',
    live: '#',
    status: 'Completed',
  },
  {
    title: 'Secure Encrypted Chat Application',
    description:
      'An end-to-end encrypted messaging application built with Python that uses AES-256 encryption for message confidentiality and RSA for key exchange. Features include group chats, file sharing, and message integrity verification.',
    tags: ['Python', 'Cryptography', 'Sockets', 'Tkinter', 'AES/RSA'],
    category: 'Application Security',
    highlights: [
      'End-to-end AES-256-CBC encryption',
      'RSA-2048 key exchange protocol',
      'Message integrity verification with HMAC',
      'Multi-user group chat support',
    ],
    github: '#',
    live: '#',
    status: 'Completed',
  },
  {
    title: 'Digital Forensics Evidence Collector',
    description:
      'A forensic toolkit for automated evidence collection from compromised systems. Gathers system logs, network connections, running processes, browser history, and file metadata while maintaining chain of custody documentation.',
    tags: ['Python', 'Bash', 'Linux', 'Forensics', 'Autopsy'],
    category: 'Digital Forensics',
    highlights: [
      'Automated disk imaging and hashing (SHA-256)',
      'Browser history and cookie extraction',
      'Network connection timeline reconstruction',
      'Chain of custody report generation',
    ],
    github: '#',
    live: '#',
    status: 'In Progress',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28 bg-cyber-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyber-card border border-cyber-border rounded-full px-4 py-1.5 mb-4">
            <span className="terminal-text text-xs text-cyber-green">ls -la /projects/</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Featured <span className="text-cyber-green glow-green">Projects</span>
          </h2>
          <p className="text-cyber-text-dim max-w-xl mx-auto">
            A showcase of my hands-on work in cybersecurity, from vulnerability assessment tools to encrypted applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-cyber-card border border-cyber-border rounded-2xl overflow-hidden card-hover group"
            >
              {/* Card Header */}
              <div className="p-6 pb-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="w-5 h-5 text-cyber-green" />
                    <span className="terminal-text text-xs text-cyber-green bg-cyber-green/10 px-2.5 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <span className={`terminal-text text-xs px-2.5 py-1 rounded-full ${
                    project.status === 'Completed'
                      ? 'bg-cyber-green/10 text-cyber-green'
                      : 'bg-yellow-500/10 text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyber-green transition-colors mb-3">
                  {project.title}
                </h3>
                <p className="text-cyber-text-dim text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="px-6">
                <ul className="space-y-1.5 mb-4">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="text-cyber-text-dim text-xs flex items-start gap-2">
                      <span className="text-cyber-cyan mt-0.5">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="terminal-text text-[10px] text-cyber-text-dim bg-cyber-darker border border-cyber-border px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="border-t border-cyber-border px-6 py-3 flex items-center justify-between bg-cyber-darker/50">
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    className="text-cyber-text-dim hover:text-cyber-green transition-colors flex items-center gap-1.5 text-xs"
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                    Source
                  </a>
                  <a
                    href={project.live}
                    className="text-cyber-text-dim hover:text-cyber-cyan transition-colors flex items-center gap-1.5 text-xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Demo
                  </a>
                </div>
                <span className="terminal-text text-[10px] text-cyber-text-dim">
                  P-{String(i + 1).padStart(3, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
