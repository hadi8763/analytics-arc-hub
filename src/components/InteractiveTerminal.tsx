import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const ASCII_ART = `
    _    _         _       _ _       _     
   / \\  | |__   __| |_   _| | | __ _| |__  
  / _ \\ | '_ \\ / _\` | | | | | |/ _\` | '_ \\ 
 / ___ \\| |_) | (_| | |_| | | | (_| | | | |
/_/   \\_\\_.__/ \\__,_|\\__,_|_|_|\\__,_|_| |_|
`;

const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

const commands: Record<string, string | (() => string)> = {
  help: `Available commands:
  about     - Learn about me
  skills    - View my technical skills  
  projects  - See my projects
  contact   - Get my contact info
  education - View my education
  clear     - Clear terminal
  
  🥚 Easter eggs (try these!):
  matrix    - Enter the matrix
  hack      - Initiate hack sequence
  coffee    - Get coffee status
  sudo      - Super user mode
  whoami    - Who are you?
  fortune   - Get your fortune
  cowsay    - Moo!`,
  about: `> Abdullah Al Hadi
  Final-year CS student majoring in Data Science
  Location: Kedah, Malaysia
  Focus: Machine Learning & Data Analytics`,
  skills: `> Technical Skills:
  Languages: Python, SQL, R, JavaScript
  ML/AI: TensorFlow, Keras, Scikit-learn
  Data: Tableau, Power BI, Excel, Pandas
  Cloud: AWS, Azure, Docker`,
  projects: `> Featured Projects:
  1. Mental Health Detection - ML Classification (92% accuracy)
  2. Phishing Email Detection - NLP & Deep Learning
  3. Airbnb Dashboard - Power BI Analytics
  4. Twitter Sentiment Analysis - Real-time Dashboard`,
  contact: `> Contact Info:
  Email: abdullahhadi@email.com
  GitHub: github.com/abdullahhadi
  LinkedIn: linkedin.com/in/abdullahhadi`,
  education: `> Education:
  B.Sc Computer Science (Data Science)
  Albukhary International University
  Expected Graduation: March 2026`,
  
  // Easter egg commands
  matrix: `
  ░█▀▄▀█ ░█▀▀█ ▀▀█▀▀ ░█▀▀█ ▀█▀ ▀▄▀ 
  ░█░█░█ ░█▄▄█ ─░█── ░█▄▄▀ ░█─ ─█─ 
  ░█──░█ ░█─░█ ─░█── ░█─░█ ▄█▄ ▄▀▄
  
  Wake up, Neo...
  The Matrix has you...
  Follow the white rabbit. 🐇`,
  
  hack: () => {
    const messages = [
      '> Initializing hack sequence...',
      '> Bypassing firewall... [████████████] 100%',
      '> Accessing mainframe...',
      '> Decrypting data... [████████████] 100%',
      '> Just kidding! I\'m a nice developer 😄',
      '> But that was fun, right?'
    ];
    return messages.join('\n  ');
  },
  
  coffee: () => {
    const coffeeLevel = Math.floor(Math.random() * 100);
    const cups = '☕'.repeat(Math.ceil(coffeeLevel / 20));
    return `> Coffee Level: ${coffeeLevel}%\n  ${cups}\n  ${coffeeLevel < 30 ? '⚠️ DANGER: Need more coffee!' : coffeeLevel > 70 ? '✨ Fully caffeinated!' : '🔄 Getting there...'}`;
  },
  
  sudo: `> [sudo] password for guest: ********
  Nice try! You're not root here 😏
  This incident will be reported... to no one.`,
  
  whoami: `> guest@abdullah.dev
  Role: Curious Visitor
  Status: Awesome for finding this!
  Powers: Reading code, clicking things`,
  
  fortune: () => {
    const fortunes = [
      '🔮 You will write bug-free code today... just kidding.',
      '🎯 A great opportunity awaits in your terminal.',
      '💡 The bug you\'re looking for is on line 42.',
      '🚀 Your next project will be legendary!',
      '🌟 Stack Overflow will be your friend today.',
      '🎨 Clean code is in your future.',
      '☕ Coffee + Code = Magic',
    ];
    return `> ${fortunes[Math.floor(Math.random() * fortunes.length)]}`;
  },
  
  cowsay: `
   _____________________
  < Moo! Hire Abdullah! >
   ---------------------
          \\   ^__^
           \\  (oo)\\_______
              (__)\\       )\\/\\
                  ||----w |
                  ||     ||`,
  
  rm: `> rm: cannot remove '/': Permission denied
  Nice try! The universe is safe... for now.`,
  
  'rm -rf': `> rm: cannot remove '/': Permission denied
  🛡️ The system has been protected from your chaos!`,
  
  exit: `> Goodbye! But you can't really exit a portfolio...
  Refresh the page if you must leave! 👋`,
  
  neofetch: `
  ▄▀█ █▀▄ █▀▀ █░█
  █▀█ █▄▀ ██▄ ▀▄▀
  
  OS: Abdullah.Dev v1.0
  Host: Kedah, Malaysia
  Kernel: React + TypeScript
  Shell: Interactive Terminal
  Theme: Cyber Hacker 🌙
  Terminal: JetBrains Mono`,
};

export const InteractiveTerminal = () => {
  const [history, setHistory] = useState<{ command: string; output: string }[]>([]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    
    let output = '';
    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (commands[cmd]) {
      const cmdResult = commands[cmd];
      output = typeof cmdResult === 'function' ? cmdResult() : cmdResult;
    } else if (cmd) {
      output = `Command not found: ${cmd}. Type 'help' for available commands.`;
    }

    if (cmd) {
      setHistory([...history, { command: cmd, output }]);
    }
    setInput('');
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="terminal-window max-w-2xl mx-auto"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="terminal-header">
        <div className="terminal-dot terminal-dot-red" />
        <div className="terminal-dot terminal-dot-yellow" />
        <div className="terminal-dot terminal-dot-green" />
        <span className="ml-4 text-xs text-muted-foreground font-mono">Interactive Terminal</span>
      </div>
      <div 
        ref={terminalRef}
        className="terminal-body h-64 overflow-y-auto"
      >
        <pre className="text-primary text-xs mb-4 leading-tight hidden sm:block">{ASCII_ART}</pre>
        <p className="text-primary text-xs mb-2">Welcome to Abdullah.Dev Terminal v1.0</p>
        <p className="text-muted-foreground text-xs mb-4">Type 'help' for available commands</p>
        
        {history.map((item, index) => (
          <div key={index} className="mb-3">
            <p className="text-foreground">
              <span className="text-primary">guest@abdullah.dev</span>
              <span className="text-muted-foreground">:~$ </span>
              {item.command}
            </p>
            <pre className="text-muted-foreground text-xs whitespace-pre-wrap mt-1">{item.output}</pre>
          </div>
        ))}
        
        <form onSubmit={handleCommand} className="flex items-center">
          <span className="text-primary">guest@abdullah.dev</span>
          <span className="text-muted-foreground">:~$ </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-foreground ml-1"
            autoFocus
          />
          <span className="typing-cursor" />
        </form>
      </div>
    </motion.div>
  );
};
