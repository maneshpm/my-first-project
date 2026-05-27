import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  BarChart3,
  Home,
  Menu,
  X,
  Sparkles,
  Building2,
  MessageSquare,
  Brain,
  Trophy,
  Settings,
  Search,
  Bell,
  Zap,
  ChevronDown,
  Activity,
  CheckCircle,
  Users,
} from 'lucide-react';
import { useState } from 'react';
import { useInterval, useFluctuatingValue } from '../hooks';

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/campaigns', label: 'Campaigns', icon: Sparkles, badge: null },
  { path: '/brands', label: 'Brands', icon: Building2 },
  { path: '/analytics', label: 'Analytics', icon: BarChart3 },
  { path: '/messages', label: 'Messages', icon: MessageSquare, badge: 3 },
  { path: '/dashboard', label: 'Rankings', icon: Trophy },
  { path: '/dashboard', label: 'AI Match', icon: Brain },
  { path: '/dashboard', label: 'Settings', icon: Settings },
];

const notifications = [
  { text: 'Nike launched Summer Campaign', time: '2m', color: 'text-purple-400', icon: Sparkles },
  { text: 'New match: 97% with REVOLVE', time: '5m', color: 'text-cyan-400', icon: Brain },
  { text: 'Payment received: $8,500', time: '12m', color: 'text-emerald-400', icon: CheckCircle },
];

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const isHome = location.pathname === '/';

  const liveUsers = useFluctuatingValue(2341, 30, 4000);
  const liveMatches = useFluctuatingValue(47, 8, 5000);

  return (
    <div className="min-h-screen bg-[#06080f]">
      {/* Global ambient glow - connects all sections */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-[20%] w-[500px] h-[300px] bg-purple-500/[0.03] rounded-full blur-[100px]" />
        <div className="absolute top-[50%] right-[10%] w-[400px] h-[400px] bg-indigo-500/[0.02] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-[40%] w-[500px] h-[300px] bg-cyan-500/[0.02] rounded-full blur-[100px]" />
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-3 left-3 z-50 lg:hidden p-2 rounded-lg bg-[#0a0d16]/90 border border-white/[0.06] backdrop-blur-xl"
      >
        {sidebarOpen ? <X className="w-4 h-4 text-slate-300" /> : <Menu className="w-4 h-4 text-slate-300" />}
      </button>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-52 bg-[#080b14]/95 border-r border-white/[0.05] backdrop-blur-2xl lg:translate-x-0 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="px-3 py-4 border-b border-white/[0.05]">
            <NavLink to="/" className="flex items-center gap-2" onClick={() => setSidebarOpen(false)}>
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                <Zap className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-sm font-bold bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent tracking-tight">CollabEngine</span>
            </NavLink>
          </div>

          {/* System status indicator */}
          <div className="px-3 py-2 border-b border-white/[0.05]">
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/[0.06] border border-emerald-500/10">
              <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" /></span>
              <span className="text-[9px] text-emerald-400/80 font-medium">All systems operational</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 py-2 space-y-0.5 overflow-y-auto">
            {navItems.map((item) => {
              const active = isActive(item.path) && !['Rankings', 'AI Match', 'Settings'].includes(item.label);
              return (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[12px] transition-all relative group ${
                    active ? 'bg-purple-500/10 text-purple-300' : 'text-slate-500 hover:text-slate-300 hover:bg-white/[0.03]'
                  }`}
                >
                  {active && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-3.5 bg-purple-400 rounded-full" />}
                  <item.icon className={`w-3.5 h-3.5 flex-shrink-0 ${active ? 'text-purple-400' : ''}`} />
                  <span className="truncate">{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto px-1 py-0.5 rounded-full text-[9px] bg-purple-500/15 text-purple-300 font-medium tabular-nums">{item.badge}</span>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* User */}
          <div className="px-2 py-2 border-t border-white/[0.05]">
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/[0.03] transition-colors cursor-pointer">
              <div className="relative flex-shrink-0">
                <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?w=100" alt="User" className="w-7 h-7 rounded-full object-cover ring-1 ring-white/10" />
                <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full ring-2 ring-[#080b14]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-medium text-slate-300 truncate">Alex Morgan</p>
                <p className="text-[9px] text-slate-600">Pro Creator</p>
              </div>
              <ChevronDown className="w-3 h-3 text-slate-600" />
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && <div className="fixed inset-0 z-30 bg-black/60 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main */}
      <main className="lg:ml-52 min-h-screen flex flex-col relative z-10">
        {/* Topbar */}
        <header className="sticky top-0 z-30 h-10 flex items-center justify-between px-4 lg:px-5 border-b border-white/[0.05] bg-[#06080f]/85 backdrop-blur-2xl">
          <div className="flex items-center gap-3 flex-1">
            <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-slate-500 hover:border-white/[0.1] transition-colors cursor-pointer w-52">
              <Search className="w-3 h-3" />
              <span className="text-[11px]">Search...</span>
              <kbd className="ml-auto text-[9px] text-slate-600 bg-white/[0.04] px-1 py-0.5 rounded">⌘K</kbd>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Live system pulse */}
            <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-md bg-purple-500/[0.06] border border-purple-500/10">
              <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" /><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-400" /></span>
              <span className="text-[9px] text-purple-300/80 font-medium tabular-nums">{liveMatches} AI matches/min</span>
            </div>

            {/* Online users */}
            <div className="hidden md:flex items-center gap-1 px-2 py-1 rounded-md bg-white/[0.02] border border-white/[0.04]">
              <Users className="w-3 h-3 text-slate-500" />
              <span className="text-[9px] text-slate-400 tabular-nums">{liveUsers.toLocaleString()} online</span>
            </div>

            {/* AI button */}
            <button className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple-500/[0.08] border border-purple-500/15 text-purple-300 text-[11px] font-medium hover:bg-purple-500/15 transition-colors">
              <Brain className="w-3 h-3" />
              <span className="hidden sm:inline">AI</span>
            </button>

            {/* Notifications */}
            <div className="relative">
              <button onClick={() => setShowNotifications(!showNotifications)} className="p-1.5 rounded-lg hover:bg-white/[0.04] transition-colors relative">
                <Bell className="w-3.5 h-3.5 text-slate-400" />
                <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
              </button>
              <AnimatePresence>
                {showNotifications && (
                  <motion.div initial={{ opacity: 0, y: -8, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.95 }} transition={{ duration: 0.15 }} className="absolute right-0 top-9 w-64 bg-[#0f1219] border border-white/[0.08] rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-50">
                    <div className="px-3 py-2 border-b border-white/[0.05] flex items-center justify-between">
                      <span className="text-[10px] font-semibold text-slate-300">Notifications</span>
                      <span className="text-[9px] text-purple-400">3 new</span>
                    </div>
                    {notifications.map((n, i) => (
                      <div key={i} className="px-3 py-2 hover:bg-white/[0.03] transition-colors border-b border-white/[0.03] last:border-0">
                        <div className="flex items-center gap-1.5">
                          <n.icon className={`w-2.5 h-2.5 ${n.color}`} />
                          <p className="text-[10px] text-slate-300">{n.text}</p>
                        </div>
                        <p className="text-[9px] text-slate-600 ml-4 mt-0.5">{n.time} ago</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="w-px h-4 bg-white/[0.05]" />
            <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?w=100" alt="User" className="w-6 h-6 rounded-full object-cover ring-1 ring-white/10" />
          </div>
        </header>

        {/* Content */}
        <div className={`flex-1 ${isHome ? '' : 'p-4 lg:p-5'}`}>
          <motion.div key={location.pathname} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
            <Outlet />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
