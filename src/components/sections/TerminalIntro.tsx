import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

interface TerminalIntroProps {
  onComplete: () => void;
  onMinimize?: () => void;
  instant?: boolean;
  isResizing?: boolean;
}

const AVAILABLE_COMMANDS = [
  'help', 'about', 'experience', 'projects', 'skills',
  'roadmap', 'philosophy', 'achievements', 'writings',
  'resume', 'contact', 'clear', 'home', 'ls'
];

const TerminalIntro: React.FC<TerminalIntroProps> = ({ onComplete, onMinimize, instant = false, isResizing = false }) => {
  const navigate = useNavigate();
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState('');
  const [history, setHistory] = useState<Array<{type: string, content: string, color?: string}>>([]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [isInteractive, setIsInteractive] = useState(false);
  const [user] = useState('yanshi');

  const hasStarted = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestion = input.trim() && AVAILABLE_COMMANDS.find(cmd => cmd.startsWith(input.toLowerCase().trim()))
    ? AVAILABLE_COMMANDS.find(cmd => cmd.startsWith(input.toLowerCase().trim())) || ''
    : '';

  const birthDate = new Date('2004-07-02');
  const currentDate = new Date();
  const ageInYears = Math.floor((currentDate.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25));

  const expStartDate = new Date('2024-06-05');
  const expInYears = ((currentDate.getTime() - expStartDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(2);

  const bootSequence = [
    { text: '> initializing portfolio...', color: 'text-cyan-400' },
    { text: '> loading neurons: landing, neural_navigator...', color: 'text-gray-400' },
    { text: `> uptime: ${ageInYears}y | deployed: ${expInYears}y (active)`, color: 'text-blue-400' },
    { text: '> status: online', color: 'text-green-400' },
    { text: '> hello - i\'m Yanshi', color: 'text-white font-bold' },
    { text: '> Data Analyst | Data Scientist | AI Automation Lover | Solution Architect', color: 'text-gray-300' },
    { text: "> type 'help' to see available commands...", color: 'text-cyan-400 animate-pulse' },
  ];

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    if (instant) {
      setCompletedLines(bootSequence.map(l => l.text));
      setIsInteractive(true);
      onComplete();
      return;
    }

    const typeLines = async () => {
      for (let i = 0; i < bootSequence.length; i++) {
        const line = bootSequence[i].text;
        for (let charIndex = 0; charIndex < line.length; charIndex++) {
          setCurrentLine(prev => prev + line[charIndex]);
          await new Promise(r => setTimeout(r, Math.random() * 20 + 20));
        }
        await new Promise(r => setTimeout(r, 300));
        setCompletedLines(prev => [...prev, line]);
        setCurrentLine('');
      }

      setIsInteractive(true);
      onComplete();
    };

    typeLines();
  }, [instant, onComplete]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [completedLines, currentLine, history]);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim();
    const lowerCmd = cleanCmd.toLowerCase();
    const newHistory = [...history, { type: 'input', content: `${user}@portfolio:~$ ${cmd}`, color: 'text-slate-300' }];

    if (lowerCmd.startsWith('sudo apt -access admin')) {
      newHistory.push({ type: 'output', content: '> Admin access is disabled in this static portfolio build.', color: 'text-yellow-400' });
      setHistory(newHistory);
      setInput('');
      return;
    }

    switch (lowerCmd) {
      case 'help':
      case 'ls':
        newHistory.push({ type: 'output', content: 'Available Commands:', color: 'text-cyan-400' });
        newHistory.push({ type: 'output', content: "  - home        : Return to Neural Nav", color: 'text-gray-300' });
        newHistory.push({ type: 'output', content: "  - about       : View About Me", color: 'text-gray-300' });
        newHistory.push({ type: 'output', content: "  - experience  : Work History", color: 'text-gray-300' });
        newHistory.push({ type: 'output', content: "  - projects    : View Projects", color: 'text-gray-300' });
        newHistory.push({ type: 'output', content: "  - skills      : Skills", color: 'text-gray-300' });
        newHistory.push({ type: 'output', content: "  - roadmap     : Future Plans", color: 'text-gray-300' });
        newHistory.push({ type: 'output', content: "  - philosophy  : Core Values", color: 'text-gray-300' });
        newHistory.push({ type: 'output', content: "  - achievements: Achievements", color: 'text-gray-300' });
        newHistory.push({ type: 'output', content: "  - writings    : Writings", color: 'text-gray-300' });
        newHistory.push({ type: 'output', content: "  - resume      : View Resume", color: 'text-gray-300' });
        newHistory.push({ type: 'output', content: "  - contact     : Send Message", color: 'text-gray-300' });
        newHistory.push({ type: 'output', content: "  - clear       : Clear Terminal", color: 'text-gray-300' });
        break;
      case 'home':
        newHistory.push({ type: 'output', content: 'Returning to Base...', color: 'text-cyan-400' });
        navigate('/');
        break;
      case 'about':
        newHistory.push({ type: 'output', content: 'Navigating to /about...', color: 'text-green-400' });
        navigate('/about');
        break;
      case 'skills':
        newHistory.push({ type: 'output', content: 'Navigating to /skills...', color: 'text-green-400' });
        navigate('/skills');
        break;
      case 'philosophy':
        newHistory.push({ type: 'output', content: 'Navigating to /philosophy...', color: 'text-green-400' });
        navigate('/philosophy');
        break;
      case 'resume':
        newHistory.push({ type: 'output', content: 'Opening Resume...', color: 'text-green-400' });
        navigate('/resume');
        break;
      case 'roadmap':
        newHistory.push({ type: 'output', content: 'Navigating to /roadmap...', color: 'text-green-400' });
        navigate('/roadmap');
        break;
      case 'projects':
        newHistory.push({ type: 'output', content: 'Navigating to /projects...', color: 'text-green-400' });
        navigate('/projects');
        break;
      case 'achievements':
        newHistory.push({ type: 'output', content: 'Navigating to /achievements...', color: 'text-green-400' });
        navigate('/achievements');
        break;
      case 'experience':
        newHistory.push({ type: 'output', content: 'Navigating to /experience...', color: 'text-green-400' });
        navigate('/experience');
        break;
      case 'writings':
        newHistory.push({ type: 'output', content: 'Navigating to /blog...', color: 'text-green-400' });
        navigate('/blog');
        break;
      case 'contact':
        newHistory.push({ type: 'output', content: 'Navigating to /contact...', color: 'text-green-400' });
        navigate('/contact');
        break;
      case 'clear':
        setHistory([]);
        setCompletedLines([]);
        setInput('');
        return;
      case '':
        break;
      default:
        newHistory.push({ type: 'output', content: `Command not found: ${cleanCmd}. Type 'help' for list.`, color: 'text-red-400' });
    }

    if (onMinimize && ['about','skills','experience','projects','roadmap','philosophy','achievements','writings','resume','contact','home'].includes(lowerCmd)) {
      setTimeout(() => onMinimize(), 800);
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleDivClick = () => {
    if (isInteractive) inputRef.current?.focus();
  };

  return (
    <div className="w-full h-full flex items-center justify-center pointer-events-auto" onClick={handleDivClick}>
      <div className={`w-full h-full max-w-3xl border border-white/10 rounded-xl flex flex-col overflow-hidden relative z-20 transition-all duration-300 ${
        isResizing ? 'bg-[#050a14]' : 'glass bg-[#050a14]/90 backdrop-blur-md shadow-2xl'
      }`}>
        <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10 shrink-0">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="mx-auto text-slate-400 text-xs font-medium opacity-75 font-mono">
            {user}@portfolio:~
          </div>
          {onMinimize && (
            <button 
              onClick={onMinimize}
              className="p-1 text-white/50 hover:text-white hover:bg-white/10 rounded-md transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>

        <div ref={scrollRef} className="p-6 space-y-1 flex-1 overflow-y-auto terminal-scrollbar flex flex-col justify-start items-start font-mono text-sm leading-relaxed text-slate-300">
          {completedLines.map((line, index) => {
            const lineData = bootSequence.find(r => r.text === line);
            const colorClass = lineData?.color || 'text-slate-300';
            return <div key={`boot-${index}`} className={`${colorClass} whitespace-pre-wrap`}>{line}</div>;
          })}

          {currentLine && (
            <div className={`${bootSequence[completedLines.length]?.color || 'text-slate-300'}`}>
              {currentLine}
              <span className="w-2 h-4 bg-cyan-400 inline-block ml-1 animate-pulse align-middle" />
            </div>
          )}

          {history.map((item, idx) => (
            <div key={`hist-${idx}`} className={`${item.color || 'text-slate-300'} whitespace-pre-wrap`}>
              {item.content}
            </div>
          ))}

          {isInteractive && (
            <div className="flex items-center w-full text-slate-300">
              <span className="text-green-400 mr-2 whitespace-nowrap">{user}@portfolio:~$</span>
              <div className="relative flex-1">
                {suggestion && (
                  <div className="absolute inset-0 pointer-events-none font-mono flex">
                    <span className="opacity-0 whitespace-pre">{input}</span>
                    <span className="text-slate-600 opacity-50">{suggestion.slice(input.length)}</span>
                  </div>
                )}
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    setHistoryIndex(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      if (input.trim()) {
                        setCommandHistory(prev => [...prev, input]);
                        setHistoryIndex(null);
                      }
                      handleCommand(input);
                    } else if ((e.key === 'Tab' || e.key === ' ') && suggestion && input !== suggestion) {
                      e.preventDefault();
                      setInput(suggestion);
                    } else if (e.key === 'ArrowUp') {
                      e.preventDefault();
                      if (commandHistory.length === 0) return;
                      const newIndex = historyIndex === null
                        ? commandHistory.length - 1
                        : Math.max(0, historyIndex - 1);
                      setHistoryIndex(newIndex);
                      setInput(commandHistory[newIndex]);
                    } else if (e.key === 'ArrowDown') {
                      e.preventDefault();
                      if (historyIndex !== null) {
                        const newIndex = historyIndex + 1;
                        if (newIndex < commandHistory.length) {
                          setHistoryIndex(newIndex);
                          setInput(commandHistory[newIndex]);
                        } else {
                          setHistoryIndex(null);
                          setInput('');
                        }
                      }
                    }
                  }}
                  className="bg-transparent border-none outline-none w-full text-slate-300 font-mono relative z-10"
                  autoFocus
                  spellCheck={false}
                  autoComplete="off"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TerminalIntro;
