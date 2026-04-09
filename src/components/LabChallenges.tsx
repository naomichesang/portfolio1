import { useState } from 'react';
import { Terminal, Target, BookOpen, ChevronDown, ChevronUp, Wrench, Lightbulb, Flag } from 'lucide-react';

interface LabChallenge {
  id: number;
  title: string;
  platform: string;
  platformColor: string;
  difficulty: string;
  diffColor: string;
  category: string;
  problemStatement: string;
  approach: string[];
  tools: string[];
  lessonsLearned: string[];
  flag?: string;
}

const labs: LabChallenge[] = [
  {
    id: 1,
    title: 'RootMe — Linux Privilege Escalation',
    platform: 'TryHackMe',
    platformColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    difficulty: 'Medium',
    diffColor: 'bg-yellow-500/10 text-yellow-400',
    category: 'Privilege Escalation',
    problemStatement:
      'Gain root access to a vulnerable Linux machine by exploiting misconfigurations, SUID binaries, and cron jobs. The target runs an outdated Ubuntu server with multiple escalation paths available.',
    approach: [
      'Performed initial reconnaissance with Nmap to identify open ports (22, 80, 8080)',
      'Enumerated the web application and found a hidden /uploads directory',
      'Uploaded a PHP reverse shell through a file upload vulnerability',
      'Stabilized the shell using Python pty and gained a proper TTY',
      'Ran LinPEAS to enumerate privilege escalation vectors',
      'Discovered a SUID binary (find) that could be exploited',
      'Escalated to root using: find . -exec /bin/sh -p \\;',
    ],
    tools: ['Nmap', 'Gobuster', 'LinPEAS', 'Netcat', 'Python', 'GTFOBins'],
    lessonsLearned: [
      'Always check for SUID/SGID binaries as common escalation vectors',
      'GTFOBins is an invaluable resource for binary exploitation',
      'Cron jobs and world-writable scripts are often overlooked escalation paths',
      'Shell stabilization is crucial for effective post-exploitation',
    ],
    flag: 'THM{r00t_m3_1f_y0u_c4n}',
  },
  {
    id: 2,
    title: 'Blue — Windows Exploitation',
    platform: 'HackTheBox',
    platformColor: 'bg-green-500/10 text-green-400 border-green-500/20',
    difficulty: 'Easy',
    diffColor: 'bg-cyber-green/10 text-cyber-green',
    category: 'System Exploitation',
    problemStatement:
      'Compromise a Windows machine vulnerable to the EternalBlue exploit (MS17-010). Gain initial access, escalate privileges, and capture both the user and root flags.',
    approach: [
      'Conducted Nmap scan revealing SMB on port 445 with MS17-010 vulnerability',
      'Used Nmap NSE scripts to confirm the vulnerability: --script vuln',
      'Launched Metasploit and searched for eternalblue exploit module',
      'Configured the exploit (exploit/windows/smb/ms17_0_1_eternalblue) with target IP',
      'Gained a Meterpreter session with SYSTEM privileges',
      'Navigated file system to locate and read user.txt and root.txt flags',
    ],
    tools: ['Nmap', 'Metasploit', 'Meterpreter', 'SMBClient', 'SearchSploit'],
    lessonsLearned: [
      'EternalBlue remains relevant in real-world penetration testing on unpatched systems',
      'Always verify vulnerabilities with multiple tools before exploitation',
      'Meterpreter provides powerful post-exploitation capabilities',
      'Understanding SMB protocol is essential for Windows exploitation',
    ],
    flag: 'HTB{3t3rn4l_blu3_expl01t}',
  },
  {
    id: 3,
    title: 'Bandit — Linux Command Line Mastery',
    platform: 'OverTheWire',
    platformColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    difficulty: 'Beginner – Intermediate',
    diffColor: 'bg-cyber-cyan/10 text-cyber-cyan',
    category: 'Linux Fundamentals',
    problemStatement:
      'Complete a series of progressively challenging levels (Level 0–34) designed to teach Linux command line skills essential for cybersecurity. Each level requires finding a password to advance to the next.',
    approach: [
      'Started with basic SSH login and file system navigation (Levels 0–5)',
      'Learned to find hidden files and use grep, sort, and uniq (Levels 6–10)',
      'Practiced base64 decoding and ROT13 cipher cracking (Levels 10–15)',
      'Used openssl and netcat for network-level challenges (Levels 15–20)',
      'Wrote cron jobs and shell scripts for automation tasks (Levels 20–25)',
      'Tackled advanced topics like setuid, daemons, and git repo analysis (Levels 25–34)',
    ],
    tools: ['SSH', 'Bash', 'grep', 'sed', 'awk', 'openssl', 'netcat', 'cron', 'git'],
    lessonsLearned: [
      'Mastering Linux CLI is foundational for all cybersecurity disciplines',
      'Combining simple commands with pipes creates powerful data processing chains',
      'Understanding file permissions and setuid is critical for privilege escalation',
      'Regular CLI practice dramatically improves speed in CTF competitions',
    ],
  },
  {
    id: 4,
    title: 'SQL Injection Challenge — OWASP Juice Shop',
    platform: 'OWASP Juice Shop',
    platformColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    difficulty: 'Medium',
    diffColor: 'bg-yellow-500/10 text-yellow-400',
    category: 'Web Application Security',
    problemStatement:
      'Identify and exploit SQL injection vulnerabilities in the OWASP Juice Shop web application. Extract user credentials, bypass authentication, and access restricted admin functionality.',
    approach: [
      'Explored the application and identified login and search forms',
      'Tested input fields with single quotes to detect SQL injection points',
      'Used UNION-based injection to enumerate database tables',
      'Extracted user emails and password hashes from the database',
      'Cracked hashes using online tools and John the Ripper',
      'Logged in as admin using extracted credentials',
      'Documented all findings with screenshots and proof of exploitation',
    ],
    tools: ['Burp Suite', 'SQLMap', 'Browser DevTools', 'John the Ripper', 'CyberChef'],
    lessonsLearned: [
      'Input validation and parameterized queries prevent SQL injection',
      'Burp Suite Proxy is essential for intercepting and modifying HTTP requests',
      'UNION-based injection is powerful for data extraction',
      'Always hash passwords with strong algorithms (bcrypt, Argon2)',
    ],
    flag: 'OWASP{sql_1nj3ct10n_m4st3ry}',
  },
];

function LabCard({ lab }: { lab: LabChallenge }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-cyber-card border border-cyber-border rounded-2xl overflow-hidden card-hover">
      {/* Header */}
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className={`terminal-text text-xs px-2.5 py-1 rounded-full border ${lab.platformColor}`}>
            {lab.platform}
          </span>
          <span className={`terminal-text text-xs px-2.5 py-1 rounded-full ${lab.diffColor}`}>
            {lab.difficulty}
          </span>
          <span className="terminal-text text-xs px-2.5 py-1 rounded-full bg-cyber-green/10 text-cyber-green">
            {lab.category}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
          <Target className="w-5 h-5 text-cyber-green flex-shrink-0" />
          {lab.title}
        </h3>

        <p className="text-cyber-text-dim text-sm leading-relaxed">{lab.problemStatement}</p>

        {/* Expand Toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex items-center gap-2 text-cyber-cyan hover:text-cyber-green transition-colors text-sm terminal-text"
        >
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          {expanded ? 'Hide Details' : 'View Full Writeup'}
        </button>
      </div>

      {/* Expanded Details */}
      {expanded && (
        <div className="border-t border-cyber-border px-6 py-5 space-y-5 bg-cyber-darker/30">
          {/* Approach */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Terminal className="w-4 h-4 text-cyber-cyan" />
              <h4 className="text-white font-semibold text-sm">Approach & Methodology</h4>
            </div>
            <ol className="space-y-2 ml-2">
              {lab.approach.map((step, i) => (
                <li key={i} className="text-cyber-text-dim text-sm flex items-start gap-3">
                  <span className="terminal-text text-cyber-green text-xs font-bold bg-cyber-green/10 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Tools */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Wrench className="w-4 h-4 text-cyber-cyan" />
              <h4 className="text-white font-semibold text-sm">Tools Used</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {lab.tools.map((tool) => (
                <span
                  key={tool}
                  className="terminal-text text-xs text-cyber-green bg-cyber-green/5 border border-cyber-green/20 px-3 py-1 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Lessons Learned */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-4 h-4 text-cyber-cyan" />
              <h4 className="text-white font-semibold text-sm">Key Lessons Learned</h4>
            </div>
            <ul className="space-y-2">
              {lab.lessonsLearned.map((lesson, i) => (
                <li key={i} className="text-cyber-text-dim text-sm flex items-start gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-cyber-purple mt-0.5 flex-shrink-0" />
                  {lesson}
                </li>
              ))}
            </ul>
          </div>

          {/* Flag */}
          {lab.flag && (
            <div className="flex items-center gap-2 bg-cyber-green/5 border border-cyber-green/20 rounded-lg p-3">
              <Flag className="w-4 h-4 text-cyber-green" />
              <span className="terminal-text text-xs text-cyber-text-dim">Flag:</span>
              <span className="terminal-text text-sm text-cyber-green font-bold">{lab.flag}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function LabChallenges() {
  return (
    <section id="labs" className="relative py-20 sm:py-28 bg-cyber-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyber-card border border-cyber-border rounded-full px-4 py-1.5 mb-4">
            <span className="terminal-text text-xs text-cyber-green">./exploit —writeup</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Lab <span className="text-cyber-green glow-green">Challenges</span>
          </h2>
          <p className="text-cyber-text-dim max-w-xl mx-auto">
            Detailed writeups of CTF challenges, machine walkthroughs, and hands-on lab exercises I've completed.
          </p>
        </div>

        {/* Lab Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {labs.map((lab) => (
            <LabCard key={lab.id} lab={lab} />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-cyber-text-dim text-sm terminal-text">
            <span className="text-cyber-green">&gt;</span> More writeups available on my{' '}
            <span className="text-cyber-cyan hover:underline cursor-pointer">GitHub</span> and{' '}
            <span className="text-cyber-cyan hover:underline cursor-pointer">blog</span>
          </p>
        </div>
      </div>
    </section>
  );
}
