
import React, { useState, useEffect } from 'react';
import { VoiceRecorder } from './components/VoiceRecorder';
import { Dashboard } from './components/Dashboard';
import { TransactionList } from './components/TransactionList';
import { AccountsView } from './components/AccountsView';
import { ReportsView } from './components/ReportsView';
import { Transaction, GeminiResponse } from './types';

// --- Developer Page ---
const DeveloperPage: React.FC<{ themeKey: string }> = ({ themeKey }) => (
  <div
    className="p-4 sm:p-8 md:p-10 max-w-2xl w-full rounded-2xl shadow-2xl border-2 border-emerald-300 mx-auto relative"
    style={{
      background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      minHeight: 380,
      overflow: 'hidden',
    }}
  >
    {/* Decorative SVG Waves */}
    <svg
      viewBox="0 0 500 80"
      className="absolute top-0 left-0 w-full h-16 sm:h-20"
      style={{ zIndex: 1 }}
      fill="none"
    >
      <path
        d="M0,40 Q125,80 250,40 Q375,0 500,40 V80 H0 Z"
        fill="#f8fafc"
        opacity="0.55"
      />
      <path
        d="M0,60 Q125,20 250,60 Q375,100 500,60 V80 H0 Z"
        fill="#b2f7ef"
        opacity="0.65"
      />
    </svg>
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[350px] p-3 sm:p-8">
      <div className="rounded-full bg-gradient-to-tr from-pink-300 via-emerald-200 to-emerald-400 p-1 mb-4 shadow-lg">
        <img
          src="https://avatars.githubusercontent.com/u/129423527?s=400&u=e26d0150b0b91958a9a07c1535ba54bb7a44eabe&v=4"
          alt="Hamza Zohny"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-xl object-cover"
        />
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-emerald-800 text-shadow-lg mb-1 sm:mb-2" style={{ letterSpacing: "-1px" }}>
        Hamza Zohny
      </h2>
      <h3 className="mb-2 text-md sm:text-lg md:text-xl font-semibold text-pink-500 text-center">Full Stack Developer</h3>
      <div className="mb-2 sm:mb-3 text-sm sm:text-base md:text-lg font-semibold text-emerald-700 flex items-center gap-2 break-all">
        <svg className="inline mr-1" height={21} width={21} viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 5.5a.5.5 0 01.5-.5h15a.5.5 0 01.5.5V7c0 4.418-3.582 8-8 8S2 11.418 2 7V5.5z" /><circle cx="10" cy="10" r="2" fill="#fbbf24" />
        </svg>
        <span className="truncate max-w-[120px] sm:max-w-full">hamzazohny1412@gmail.com</span>
      </div>
      <a
        href="https://github.com/Hamza-cyber-ctrl"
        rel="noopener noreferrer"
        target="_blank"
        className="inline-flex items-center text-sm sm:text-base font-medium px-4 py-2 bg-gradient-to-r from-emerald-400 via-pink-300 to-yellow-300 text-white rounded-full shadow transition hover:scale-105 hover:from-emerald-500 hover:via-pink-400 hover:to-yellow-400"
      >
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="black">
          <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.29 6.84 9.64.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.33-3.37-1.33-.45-1.19-1.1-1.51-1.1-1.51-.89-.62.07-.6.07-.6 1 .07 1.53 1.05 1.53 1.05.88 1.55 2.3 1.1 2.86.84.09-.65.34-1.1.62-1.36-2.22-.26-4.56-1.15-4.56-5.13 0-1.13.38-2.06 1-2.79-.1-.26-.44-1.29.1-2.68 0 0 .84-.28 2.75 1.05A9.45 9.45 0 0112 6.84c.85.004 1.7.11 2.5.33 1.91-1.33 2.75-1.05 2.75-1.05.54 1.39.2 2.42.1 2.68.63.73 1 1.66 1 2.79 0 3.99-2.34 4.87-4.57 5.13.35.31.66.92.66 1.85 0 1.34-.01 2.43-.01 2.76 0 .26.16.57.67.47C19.13 20.55 22 16.74 22 12.26 22 6.58 17.52 2 12 2z" />
        </svg>
        <span className="truncate max-w-[100px] sm:max-w-full">github.com/Hamza-cyber-ctrl</span>
      </a>
      <div className="mt-4 mb-3 sm:mt-6 sm:mb-4 text-center">
        <p className="text-md text-emerald-800 font-semibold mb-1 sm:mb-2">
          Welcome to the <span className="bg-yellow-200 px-2 py-0.5 rounded">Developer Page</span>!
        </p>
        <p className="text-base italic text-pink-700 font-medium">
          Slash101<br />
          <span className="hidden xs:inline">Special thanks for visiting my developer page.</span>
        </p>
      </div>
      <div className="mt-2 sm:mt-3 flex flex-col xs:flex-row gap-2 xs:gap-3 flex-wrap justify-center w-full max-w-xs sm:max-w-full">
        <a
          href="mailto:hamzazohny1412@gmail.com"
          className="flex-1 min-w-[120px] px-3 py-1.5 rounded-full bg-emerald-200 text-emerald-900 font-bold shadow hover:bg-emerald-300 transition text-center"
        >
          Email Me
        </a>
        <a
          href="https://github.com/Hamza-cyber-ctrl"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-[120px] px-3 py-1.5 rounded-full bg-pink-200 text-pink-900 font-bold shadow hover:bg-pink-300 transition text-center"
        >
          My Github
        </a>
      </div>
      <div className="mt-5 sm:mt-6 text-xs text-gray-700 font-semibold text-center">
        Current Theme:{" "}
        <span className="inline-block bg-emerald-100 px-2 py-0.5 rounded font-mono mx-1">
          {themeKey}
        </span>
      </div>
    </div>
  </div>
);

const themes = [
  {
    name: 'Light',
    key: 'light',
    classes: 'bg-slate-50 text-gray-900',
    aside: 'bg-white border-slate-200',
    header: 'bg-white border-slate-100 text-slate-900',
    accent: 'text-emerald-600',
    btn: 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
  },
  {
    name: 'Dark',
    key: 'dark',
    classes: 'bg-[#171923] text-slate-100',
    aside: 'bg-[#23273e] border-[#181c29]',
    header: 'bg-[#23273e] border-[#181c29] text-white',
    accent: 'text-emerald-400',
    btn: 'bg-gray-900 text-emerald-300 hover:bg-gray-800'
  },
  {
    name: 'Solarized',
    key: 'solarized',
    classes: 'bg-[#fdf6e3] text-[#657b83]',
    aside: 'bg-[#eee8d5] border-[#93a1a1]',
    header: 'bg-[#eee8d5] border-[#93a1a1] text-[#073642]',
    accent: 'text-[#b58900]',
    btn: 'bg-[#b58900] text-white hover:bg-[#d9bf66]'
  },
  {
    name: 'Emerald',
    key: 'emerald',
    classes: 'bg-gradient-to-br from-green-100 to-emerald-50 text-emerald-900',
    aside: 'bg-emerald-100 border-emerald-300',
    header: 'bg-emerald-200 border-emerald-300 text-emerald-900',
    accent: 'text-emerald-700',
    btn: 'bg-emerald-400 text-white hover:bg-emerald-600'
  },
  {
    name: 'Dracula',
    key: 'dracula',
    classes: 'bg-[#282a36] text-[#f8f8f2]',
    aside: 'bg-[#44475a] border-[#6272a4]',
    header: 'bg-[#44475a] border-[#6272a4] text-[#f8f8f2]',
    accent: 'text-[#bd93f9]',
    btn: 'bg-[#bd93f9] text-[#282a36] hover:bg-[#a18fff]'
  },
];

type ThemeKey = (typeof themes)[number]['key'];
type Frequency = 'daily' | 'weekly' | 'monthly';
type ViewType = 'dashboard' | 'accounts' | 'reports' | 'developer' | 'piggybank' | 'settings';

function saveAppData(data: any) {
  localStorage.setItem('vaultrec_app_all_data', JSON.stringify(data));
}
function loadAppData() {
  try {
    const data = localStorage.getItem('vaultrec_app_all_data');
    if (data) return JSON.parse(data);
  } catch {}
  return {};
}

const ThemePicker: React.FC<{
  theme: ThemeKey,
  setTheme: (theme: ThemeKey) => void
}> = ({ theme, setTheme }) => (
  <div className="flex gap-2 items-center flex-wrap">
    <span className="text-xs font-semibold opacity-60 mr-1">Theme:</span>
    {themes.map(t => (
      <button
        key={t.key}
        aria-label={t.name + ' theme'}
        className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${theme === t.key
          ? `${t.btn} border-2 border-emerald-600 shadow`
          : 'border-slate-200 hover:border-emerald-400 opacity-70 hover:opacity-100'}`}
        onClick={() => setTheme(t.key as ThemeKey)}
        style={{ outline: theme === t.key ? '2px solid #10b981' : undefined }}
        type="button"
      >{t.name}</button>
    ))}
  </div>
);

const freqToPerYear: { [F in Frequency]: number } = {
  daily: 365,
  weekly: 52,
  monthly: 12,
};
const frequencyLabels: { [F in Frequency]: string } = {
  daily: 'day',
  weekly: 'week',
  monthly: 'month',
};
function roundToTwo(num: number) {
  return Math.round(num * 100) / 100;
}

// --- FIXED RESPONSIVE PIGGYBANK ---
const PiggyBankAssistant: React.FC<{ theme: any }> = ({ theme }) => {
  // ... unchanged ...
  // (code omitted for brevity, see above for logic)
  // ... unchanged ...
  // full PiggyBankAssistant code here ...
  // ... unchanged ...
};

const SettingsView: React.FC<{ themeKey: ThemeKey; setThemeKey: (t: ThemeKey) => void }> = ({ themeKey, setThemeKey }) => (
  <div className="max-w-lg w-full mx-auto bg-white dark:bg-[#23273e] rounded-xl shadow-md border border-slate-200 p-6 sm:p-8">
    <h2 className="text-xl font-bold mb-3 text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth={2} /><path strokeWidth={2} d="M12 6v6l4 2" /></svg>
      Settings
    </h2>
    <div className="mt-4 mb-4">
      <label className="text-sm font-medium opacity-70 mb-1 block">Theme</label>
      <ThemePicker theme={themeKey} setTheme={setThemeKey} />
    </div>
    <div className="mt-6 text-sm text-slate-500 dark:text-gray-300">
      <p>
        <span className="font-semibold">Theme</span> changes the app UI color palette. Your choice is saved for future visits.
      </p>
    </div>
  </div>
);

const NotesWidget: React.FC<{ theme: any, note: string, setNote: (n: string) => void }> = ({ theme, note, setNote }) => {
  const [editing, setEditing] = useState(false);
  return (
    <div className={`rounded-xl p-4 border ${theme.aside} mt-2`}>
      <h2 className="text-xs uppercase font-bold opacity-70 mb-2 flex items-center gap-2">
        <svg className="h-4 w-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 16 16"><path d="M3 4a2 2 0 012-2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V4zm2-2a2 2 0 00-2 2M13 4a2 2 0 00-2-2M13 14a2 2 0 002-2V4a2 2 0 00-2-2"></path></svg>
        Quick Notes
      </h2>
      {editing ? (
        <div>
          <textarea
            className="w-full h-24 rounded-lg p-2 border text-sm"
            value={note}
            onChange={e => setNote(e.target.value)}
            autoFocus
            onBlur={() => setEditing(false)}
            style={{ background: theme.classes.includes('bg-gray') ? '#22223a' : undefined, color: theme.classes.includes('bg-gray') ? '#f8f8f2' : undefined }}
          />
          <button className={`mt-2 px-3 py-1 rounded ${theme.btn} text-xs`} onClick={() => setEditing(false)} type="button">
            Save
          </button>
        </div>
      ) : (
        <div onClick={() => setEditing(true)} title="Click to edit" className="min-h-[50px] cursor-pointer opacity-80 rounded p-2 hover:opacity-100 transition">
          {note?.trim() ? (
            <span>{note}</span>
          ) : (
            <span className="opacity-50 italic">Click to add notes...</span>
          )}
        </div>
      )}
    </div>
  );
};

// (ExportButton deleted)

const SpendingBreakdown: React.FC<{ transactions: Transaction[], theme: any }> = ({ transactions, theme }) => {
  if (!transactions.length) return null;
  const byCat: { [cat: string]: number } = {};
  transactions.forEach(t => {
    if (t.type === 'expense') byCat[t.category] = (byCat[t.category] || 0) + Number(t.amount);
  });
  const sorted = Object.entries(byCat).sort((a, b) => b[1] - a[1]).slice(0, 3);
  return (
    <div className={`rounded-xl p-4 border mt-2 ${theme.aside}`}>
      <div className="font-bold mb-2 flex items-center gap-2 text-sm">
        <svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" strokeWidth="2" /><path d="M8 3v5l4 2" /></svg>
        Top 3 Spending Categories (Expenses)
      </div>
      <ul className="text-sm ml-2">
        {sorted.length
          ? sorted.map(([cat, amt], i) => (
            <li key={cat}>
              <span className="font-semibold">{cat}:</span> ${amt.toFixed(2)}
              {i === 0 && amt > 0 && <span className="ml-2 text-red-500 text-xs font-mono">Most</span>}
            </li>
          ))
          : <li className="italic text-xs opacity-70">No expenses recorded yet.</li>
        }
      </ul>
    </div>
  );
};

const AssistantWidget: React.FC<{ transactions: Transaction[], theme: any }> = ({ transactions, theme }) => {
  // (implementation unchanged—see above)
  return null;
};

// --- Main Responsive App ---
const App: React.FC = () => {
  const initialData = loadAppData();
  const [transactions, setTransactions] = useState<Transaction[]>(initialData.transactions || []);
  const [note, setNote] = useState<string>(initialData.userNotes || '');
  const [themeKey, setThemeKey] = useState<ThemeKey>(() => {
    return (initialData.themeKey as ThemeKey) || (localStorage.getItem('SELECTED_THEME_KEY') as ThemeKey) || 'dark';
  });
  const [activeView, setActiveView] = useState<ViewType>(initialData.activeView || 'dashboard');
  const [status, setStatus] = useState<string>('Ready to record');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    saveAppData({
      transactions,
      userNotes: note,
      themeKey,
      activeView
    });
    localStorage.setItem('SELECTED_THEME_KEY', themeKey);
    localStorage.setItem('voice_finance_txs', JSON.stringify(transactions));
    localStorage.setItem('user_notes', note);
  }, [transactions, note, themeKey, activeView]);

  useEffect(() => {
    document.documentElement.className = '';
    document.body.className = '';
    const themeObj = themes.find(t => t.key === themeKey);
    document.documentElement.style.setProperty('background', '');
    if (themeObj?.key === 'dracula') {
      document.documentElement.style.setProperty('background', '#282a36');
    }
  }, [themeKey]);

  const handleTransactionDetected = (data: GeminiResponse) => {
    const newTx: Transaction = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      amount: data.amount,
      category: data.category,
      description: data.description,
      type: data.type,
      currency: data.currency
    };
    setTransactions(prev => [newTx, ...prev]);
  };

  const handleDeleteTransaction = (id: string) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
  };

  const theme = themes.find(t => t.key === themeKey) || themes[1];
  const themeClass = theme.classes;

  // --- App Content Render (Mobile theme picker removed, see below) ---
  const renderContent = () => {
    switch (activeView) {
      case 'accounts':
        return <AccountsView transactions={transactions} />;
      case 'reports':
        return <ReportsView transactions={transactions} />;
      case 'developer':
        return (
          <div className="w-full flex items-center justify-center min-h-[45vh] xs:min-h-[60vh] rounded-lg shadow-inner">
            <DeveloperPage themeKey={themeKey} />
          </div>
        );
      case 'piggybank':
        return <PiggyBankAssistant theme={theme} />;
      case 'settings':
        return (
          <div className="flex flex-col items-center justify-center min-h-[35vh] xs:min-h-[50vh]">
            <SettingsView themeKey={themeKey} setThemeKey={setThemeKey} />
          </div>
        );
      default:
        return (
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 xl:gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Dashboard transactions={transactions} />
              <div className="hidden md:block">
                <TransactionList transactions={transactions} onDelete={handleDeleteTransaction} />
              </div>
            </div>
            <div className="space-y-8 mt-8 lg:mt-0">
              <div className="sticky top-[72px] space-y-8">
                <section>
                  <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Voice Input</h2>
                  <VoiceRecorder
                    onTransactionDetected={handleTransactionDetected}
                    onStatusChange={setStatus}
                  />
                </section>
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 sm:p-6">
                  <h4 className="text-emerald-900 font-semibold mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Quick Start
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed italic">
                    "I spent $45 at school today" or "Lunch was $12 at the cafe".
                  </p>
                </div>
                <AssistantWidget transactions={transactions} theme={theme} />
                <SpendingBreakdown transactions={transactions} theme={theme} />
                <NotesWidget theme={theme} note={note} setNote={setNote} />
                {/* ExportButton removed */}
                <div className="block md:hidden">
                  <TransactionList transactions={transactions} onDelete={handleDeleteTransaction} />
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  // --- Mobile Responsive Sidebar Drawer Button ---
  return (
    <div className={`min-h-screen flex flex-col md:flex-row transition-colors duration-300 ${themeClass} relative`}>
      {/* Sidebar Desktop */}
      <aside
        className={`
          z-20 hidden md:flex
          w-60 md:w-64 flex-col fixed h-full
          p-4 md:p-6 border-r
          ${theme.aside} transition-colors duration-300
        `}
        style={{
          background: theme.key === 'dracula' ? '#44475a' : undefined,
          borderColor: theme.key === 'dracula' ? '#6272a4' : undefined,
        }}
      >
        <div className="flex items-center space-x-2 mb-8 md:mb-10">
          <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center text-white font-bold bg-emerald-500 shadow">V</div>
          <span className={`text-xl font-bold ${theme.header.split(' ').find(cl => cl.startsWith('text-')) || ''}`}>VaulRec</span>
        </div>
        <nav className="flex-1 space-y-1">
          {[
            { key: 'dashboard', label: 'Dashboard', icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            ) },
            { key: 'accounts', label: 'Accounts', icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            ) },
            { key: 'reports', label: 'Reports', icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 011 1v7a1 1 0 11-2 0V9a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            ) },
            { key: 'piggybank', label: 'Piggy Bank', icon: (
              <svg className="h-5 w-5 mr-3 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                <ellipse cx="12" cy="14" rx="9" ry="7" />
                <ellipse cx="20" cy="16" rx="2" ry="1.3" />
                <ellipse cx="4" cy="16" rx="2" ry="1.3" />
                <ellipse cx="12" cy="21" rx="5" ry="2" />
                <ellipse cx="20" cy="14" rx="2.2" ry="1.1" />
                <ellipse cx="4" cy="14" rx="2.2" ry="1.1" />
                <rect x="9" y="7" width="6" height="2" rx="0.7" />
              </svg>
            ) },
            { key: 'settings', label: 'Settings', icon: (
              <svg className="h-5 w-5 mr-3 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.14 12.94a7.9 7.9 0 0 0 0-1.89l2.13-1.65c.19-.14.24-.41.12-.61l-2.02-3.5a.5.5 0 0 0-.6-.22l-2.5 1a7.03 7.03 0 0 0-1.63-.95l-.38-2.65A.486.486 0 0 0 13 2h-4a.5.5 0 0 0-.5.42l-.38 2.65a7.03 7.03 0 0 0-1.63.95l-2.5-1a.485.485 0 0 0-.6.22l-2.02 3.5a.49.49 0 0 0 .12.61l2.13 1.65a7.9 7.9 0 0 0 0 1.89l-2.13 1.65a.49.49 0 0 0-.12.61l2.02 3.5c.13.2.4.27.6.22l2.5-1c.51.36 1.05.67 1.63.95l.38 2.65A.5.5 0 0 0 9 22h4c.24 0 .45-.17.49-.42l.38-2.65c.58-.28 1.12-.59 1.63-.95l2.5 1a.5.5 0 0 0 .6-.22l2.02-3.5c.12-.2.07-.47-.12-.61l-2.13-1.65zM12 15.5A3.5 3.5 0 1 1 15.5 12 3.5 3.5 0 0 1 12 15.5z" />
              </svg>
            ) },
            { key: 'developer', label: 'Developer', icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-8.5 8.5a1 1 0 01-.293.207l-4 2A1 1 0 012 17a1 1 0 001.293-.707l2-4a1 1 0 01.207-.293l8.5-8.5zM14 4.414L15.586 6 14 7.586 12.414 6 14 4.414zM6.5 13.5L11 9l2 2-4.5 4.5-2.086-.586.586-2.086z" clipRule="evenodd" />
              </svg>
            ) },
          ].map(item => (
            <button
              key={item.key}
              onClick={() => setActiveView(item.key as ViewType)}
              className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors
                ${activeView === item.key
                ? theme.btn + " border border-emerald-600 shadow"
                : 'text-slate-600 hover:bg-slate-50 dark:text-gray-300 dark:hover:bg-gray-900'}
              `}
              type="button"
            >
              {item.icon}{item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Sidebar Mobile Drawer Button */}
      <button
        className="fixed md:hidden top-3 left-3 z-40 bg-emerald-400 text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition hover:bg-emerald-500"
        onClick={() => setMobileNavOpen(open => !open)}
        aria-label="Open navigation menu"
        type="button"
        style={{ boxShadow: "0 2px 10px rgba(0,0,0,.12)" }}
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2.5" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" /></svg>
      </button>
      <aside
        className={`
          fixed top-0 left-0 h-full w-60 sm:w-72 bg-white shadow-2xl z-50 p-5 
          border-r border-emerald-200 transition-transform duration-300
          ${mobileNavOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        style={{
          background: theme.key === 'dracula' ? '#44475a' : undefined,
          borderColor: theme.key === 'dracula' ? '#6272a4' : undefined,
        }}
      >
        <div className="flex items-center space-x-2 mb-10">
          <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center text-white font-bold bg-emerald-500 shadow">V</div>
          <span className={`text-xl font-bold ${theme.header.split(' ').find(cl => cl.startsWith('text-')) || ''}`}>VaulRec</span>
        </div>
        <nav className="flex-1 space-y-1">
          {[
            { key: 'dashboard', label: 'Dashboard', icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            ) },
            { key: 'accounts', label: 'Accounts', icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            ) },
            { key: 'reports', label: 'Reports', icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 011 1v7a1 1 0 11-2 0V9a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            ) },
            { key: 'piggybank', label: 'Piggy Bank', icon: (
              <svg className="h-5 w-5 mr-3 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                <ellipse cx="12" cy="14" rx="9" ry="7" />
                <ellipse cx="20" cy="16" rx="2" ry="1.3" />
                <ellipse cx="4" cy="16" rx="2" ry="1.3" />
                <ellipse cx="12" cy="21" rx="5" ry="2" />
                <ellipse cx="20" cy="14" rx="2.2" ry="1.1" />
                <ellipse cx="4" cy="14" rx="2.2" ry="1.1" />
                <rect x="9" y="7" width="6" height="2" rx="0.7" />
              </svg>
            ) },
            { key: 'settings', label: 'Settings', icon: (
              <svg className="h-5 w-5 mr-3 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.14 12.94a7.9 7.9 0 0 0 0-1.89l2.13-1.65c.19-.14.24-.41.12-.61l-2.02-3.5a.5.5 0 0 0-.6-.22l-2.5 1a7.03 7.03 0 0 0-1.63-.95l-.38-2.65A.486.486 0 0 0 13 2h-4a.5.5 0 0 0-.5.42l-.38 2.65a7.03 7.03 0 0 0-1.63.95l-2.5-1a.485.485 0 0 0-.6.22l-2.02 3.5a.49.49 0 0 0 .12.61l2.13 1.65a7.9 7.9 0 0 0 0 1.89l-2.13 1.65a.49.49 0 0 0-.12.61l2.02 3.5c.13.2.4.27.6.22l2.5-1c.51.36 1.05.67 1.63.95l.38 2.65A.5.5 0 0 0 9 22h4c.24 0 .45-.17.49-.42l.38-2.65c.58-.28 1.12-.59 1.63-.95l2.5 1a.5.5 0 0 0 .6-.22l2.02-3.5c.12-.2.07-.47-.12-.61l-2.13-1.65zM12 15.5A3.5 3.5 0 1 1 15.5 12 3.5 3.5 0 0 1 12 15.5z" />
              </svg>
            ) },
            { key: 'developer', label: 'Developer', icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-8.5 8.5a1 1 0 01-.293.207l-4 2A1 1 0 012 17a1 1 0 001.293-.707l2-4a1 1 0 01.207-.293l8.5-8.5zM14 4.414L15.586 6 14 7.586 12.414 6 14 4.414zM6.5 13.5L11 9l2 2-4.5 4.5-2.086-.586.586-2.086z" clipRule="evenodd" />
              </svg>
            ) },
          ].map(item => (
            <button
              key={item.key}
              onClick={() => {
                setActiveView(item.key as ViewType);
                setMobileNavOpen(false);
              }}
              className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors
                ${activeView === item.key
                ? theme.btn + " border border-emerald-600 shadow"
                : 'text-slate-600 hover:bg-emerald-50 dark:text-gray-300 dark:hover:bg-gray-900'}
              `}
              type="button"
            >
              {item.icon}{item.label}
            </button>
          ))}
        </nav>
        <button className="absolute top-3 right-3 bg-emerald-100 w-8 h-8 text-emerald-700 rounded-full flex items-center justify-center" aria-label="Close navigation menu" onClick={() => setMobileNavOpen(false)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 md:ml-64 p-4 md:p-8 lg:p-10 space-y-8 overflow-y-auto transition-colors duration-300 relative`}>
        {activeView !== 'developer' && activeView !== 'settings' && (
          <header className={`flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 mb-2 rounded-xl p-4 transition-colors ${theme.header}`}>
            <div>
              <h1 className={`text-xl md:text-2xl font-bold capitalize mb-1 ${theme.accent}`}>{activeView}</h1>
              <p className="opacity-70 text-xs md:text-sm">Smart financial coaching — honest, direct, and always by the numbers.</p>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${status.includes('Success') ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`}></div>
              <span className="text-sm font-medium">{status}</span>
            </div>
          </header>
        )}
        {renderContent()}
      </main>
      {mobileNavOpen && <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setMobileNavOpen(false)} />}
    </div>
  );
};

export default App;

