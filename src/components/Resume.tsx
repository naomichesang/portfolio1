import { GraduationCap, Briefcase, Award, Code2, Cpu, Database, Globe, Shield, Wifi, FileSearch, Terminal, Bug } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Science in Cybersecurity',
    institution: 'University of Technology',
    period: '2021 – Present',
    details: 'Specializing in Information Security, Digital Forensics, and Network Defense. Active member of the Cybersecurity Club and CTF team.',
  },
  {
    degree: 'Cisco Certified Network Associate (CCNA) Training',
    institution: 'Cisco Networking Academy',
    period: '2022',
    details: 'Completed comprehensive training in networking fundamentals, IP connectivity, security fundamentals, and automation.',
  },
];

const experience = [
  {
    role: 'Cybersecurity Intern',
    company: 'SecureNet Solutions Ltd.',
    period: 'June 2024 – Present',
    tasks: [
      'Conducted vulnerability assessments and penetration testing on client networks',
      'Monitored SIEM dashboards and analyzed security alerts for potential threats',
      'Assisted in incident response procedures and forensic evidence collection',
      'Documented security findings and prepared reports for stakeholders',
    ],
  },
  {
    role: 'IT Support Assistant',
    company: 'University IT Department',
    period: 'Jan 2023 – May 2024',
    tasks: [
      'Provided technical support for faculty and students across campus',
      'Managed user accounts and access controls in Active Directory',
      'Assisted in network troubleshooting and infrastructure maintenance',
      'Implemented basic security policies and endpoint protection measures',
    ],
  },
];

const certifications = [
  { name: 'CompTIA Security+', issuer: 'CompTIA', year: '2023' },
  { name: 'Certified Ethical Hacker (CEH)', issuer: 'EC-Council', year: '2024' },
  { name: 'TryHackMe - Complete Learning Path', issuer: 'TryHackMe', year: '2024' },
  { name: 'Cisco CyberOps Associate', issuer: 'Cisco', year: '2024' },
];

const skillCategories = [
  {
    title: 'Security Tools',
    icon: Shield,
    skills: [
      { name: 'Penetration Testing', level: 85 },
      { name: 'Vulnerability Assessment', level: 90 },
      { name: 'SIEM (Splunk, ELK)', level: 80 },
      { name: 'Digital Forensics', level: 75 },
      { name: 'Incident Response', level: 80 },
    ],
  },
  {
    title: 'Technical Skills',
    icon: Code2,
    skills: [
      { name: 'Python Scripting', level: 85 },
      { name: 'Bash Scripting', level: 80 },
      { name: 'Network Analysis (Wireshark)', level: 90 },
      { name: 'Linux Administration', level: 85 },
      { name: 'SQL & Databases', level: 70 },
    ],
  },
  {
    title: 'Networking',
    icon: Wifi,
    skills: [
      { name: 'TCP/IP Protocols', level: 90 },
      { name: 'Firewall Configuration', level: 80 },
      { name: 'VPN & Cryptography', level: 75 },
      { name: 'DNS & DHCP', level: 85 },
      { name: 'Cloud Security (AWS)', level: 70 },
    ],
  },
];

const techStack = [
  { name: 'Kali Linux', icon: Terminal },
  { name: 'Burp Suite', icon: Bug },
  { name: 'Nmap', icon: Globe },
  { name: 'Metasploit', icon: Cpu },
  { name: 'Wireshark', icon: Wifi },
  { name: 'John the Ripper', icon: FileSearch },
  { name: 'SQLMap', icon: Database },
  { name: 'Autopsy', icon: FileSearch },
];

export default function Resume() {
  return (
    <section id="resume" className="relative py-20 sm:py-28 bg-cyber-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyber-card border border-cyber-border rounded-full px-4 py-1.5 mb-4">
            <span className="terminal-text text-xs text-cyber-green">cat resume.md</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            My <span className="text-cyber-green glow-green">Resume</span>
          </h2>
          <p className="text-cyber-text-dim max-w-xl mx-auto">
            A comprehensive overview of my academic background, professional experience, and technical expertise.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-10">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-cyber-green/10 border border-cyber-green/20 rounded-lg p-2">
                  <GraduationCap className="w-5 h-5 text-cyber-green" />
                </div>
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i} className="bg-cyber-card border border-cyber-border rounded-xl p-5 card-hover">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-white font-semibold text-sm">{edu.degree}</h4>
                    </div>
                    <p className="text-cyber-cyan text-sm terminal-text">{edu.institution}</p>
                    <p className="text-cyber-text-dim text-xs mt-1">{edu.period}</p>
                    <p className="text-cyber-text-dim text-sm mt-3 leading-relaxed">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-lg p-2">
                  <Briefcase className="w-5 h-5 text-cyber-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white">Work Experience</h3>
              </div>
              <div className="space-y-4">
                {experience.map((exp, i) => (
                  <div key={i} className="bg-cyber-card border border-cyber-border rounded-xl p-5 card-hover">
                    <h4 className="text-white font-semibold">{exp.role}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-cyber-cyan text-sm terminal-text">{exp.company}</span>
                      <span className="text-cyber-text-dim text-xs">• {exp.period}</span>
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {exp.tasks.map((task, j) => (
                        <li key={j} className="text-cyber-text-dim text-sm flex items-start gap-2">
                          <span className="text-cyber-green mt-1 text-xs">▹</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-cyber-purple/10 border border-cyber-purple/20 rounded-lg p-2">
                  <Award className="w-5 h-5 text-cyber-purple" />
                </div>
                <h3 className="text-xl font-bold text-white">Certifications</h3>
              </div>
              <div className="grid gap-3">
                {certifications.map((cert, i) => (
                  <div key={i} className="bg-cyber-card border border-cyber-border rounded-xl p-4 card-hover flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-semibold text-sm">{cert.name}</h4>
                      <p className="text-cyber-text-dim text-xs mt-0.5">{cert.issuer}</p>
                    </div>
                    <span className="terminal-text text-xs text-cyber-green bg-cyber-green/10 px-3 py-1 rounded-full">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-cyber-green/10 border border-cyber-green/20 rounded-lg p-2">
                  <Code2 className="w-5 h-5 text-cyber-green" />
                </div>
                <h3 className="text-xl font-bold text-white">Skills & Proficiency</h3>
              </div>
              <div className="space-y-6">
                {skillCategories.map((cat) => (
                  <div key={cat.title}>
                    <div className="flex items-center gap-2 mb-3">
                      <cat.icon className="w-4 h-4 text-cyber-cyan" />
                      <span className="text-white text-sm font-semibold">{cat.title}</span>
                    </div>
                    <div className="space-y-3">
                      {cat.skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-1">
                            <span className="text-cyber-text-dim text-xs">{skill.name}</span>
                            <span className="terminal-text text-xs text-cyber-green">{skill.level}%</span>
                          </div>
                          <div className="h-1.5 bg-cyber-border rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-cyber-green to-cyber-cyan rounded-full skill-bar"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-white font-semibold mb-4">Tools & Technologies</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {techStack.map((tool) => (
                  <div
                    key={tool.name}
                    className="bg-cyber-card border border-cyber-border rounded-lg p-3 text-center card-hover group"
                  >
                    <tool.icon className="w-5 h-5 text-cyber-text-dim group-hover:text-cyber-green mx-auto mb-2 transition-colors" />
                    <span className="text-cyber-text-dim text-xs group-hover:text-white transition-colors">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
