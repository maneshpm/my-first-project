import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Users,
  TrendingUp,
  Zap,
  Heart,
  Eye,
  CheckCircle,
  Sparkles,
  Building2,
  BarChart3,
  Target,
  Send,
  Star,
  DollarSign,
  Brain,
  Trophy,
  Activity,
  ArrowUp,
  ArrowDown,
  Clock,
  Flame,
  Shield,
} from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import {
  useInterval,
  useFluctuatingValue,
  useLiveTimestamp,
  formatRelativeTime,
  useInView,
} from '../hooks';

/* ─── Data ─── */
const creators = [
  { name: 'Ali Abdaal', handle: '@aliabdaal', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=100', score: 96.4, growth: '+2.1K', trend: 'up' as const, eng: '8.9%', followers: '5.2M', collabs: 34, revenue: '$142K', sparkline: [32,38,35,42,40,48,52], tier: 'diamond' as const },
  { name: 'MrBeast', handle: '@mrbeast', avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?w=100', score: 95.7, growth: '+15K', trend: 'up' as const, eng: '12.4%', followers: '230M', collabs: 12, revenue: '$890K', sparkline: [60,65,72,68,80,85,90], tier: 'diamond' as const },
  { name: 'Emma Wilson', handle: '@emmawilson', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=100', score: 94.1, growth: '+4.2K', trend: 'up' as const, eng: '7.6%', followers: '1.8M', collabs: 28, revenue: '$85K', sparkline: [20,22,28,25,30,35,38], tier: 'gold' as const },
  { name: 'Jordan Lee', handle: '@jordanlee', avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?w=100', score: 93.7, growth: '+1.8K', trend: 'up' as const, eng: '9.2%', followers: '820K', collabs: 19, revenue: '$54K', sparkline: [15,18,16,22,20,25,28], tier: 'gold' as const },
  { name: 'Sarah Chen', handle: '@sarahchen', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=100', score: 92.3, growth: '-340', trend: 'down' as const, eng: '6.8%', followers: '3.1M', collabs: 41, revenue: '$210K', sparkline: [45,42,40,38,35,33,30], tier: 'gold' as const },
  { name: 'Mike Chen', handle: '@mikechen', avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?w=100', score: 91.8, growth: '+890', trend: 'up' as const, eng: '5.4%', followers: '640K', collabs: 15, revenue: '$38K', sparkline: [10,12,14,13,16,18,20], tier: 'silver' as const },
];

const campaigns = [
  { id: 1, brand: 'REVOLVE', budget: '$5K-$15K', deliverables: '3 Posts + 2 Reels', deadline: 'Jun 30', match: 94, applicants: 156, maxApplicants: 200, logo: 'https://images.pexels.com/photos/1484527/pexels-photo-1484527.jpeg?w=80', category: 'Fashion', urgency: 'high' as const, impressions: '2.4M', roi: '+320%' },
  { id: 2, brand: 'Apple', budget: '$8K-$25K', deliverables: '4 Posts + 1 Video', deadline: 'Jul 15', match: 91, applicants: 234, maxApplicants: 300, logo: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?w=80', category: 'Tech', urgency: 'medium' as const, impressions: '8.1M', roi: '+280%' },
  { id: 3, brand: 'Glossier', budget: '$4K-$18K', deliverables: '3 Posts + 2 Reels + TikTok', deadline: 'Jun 15', match: 89, applicants: 345, maxApplicants: 400, logo: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?w=80', category: 'Beauty', urgency: 'critical' as const, impressions: '1.8M', roi: '+240%' },
  { id: 4, brand: 'Lululemon', budget: '$3.5K-$12K', deliverables: '5 Posts + Stories', deadline: 'Jul 1', match: 88, applicants: 89, maxApplicants: 150, logo: 'https://images.pexels.com/photos/3621519/pexels-photo-3619969.jpeg?w=80', category: 'Fitness', urgency: 'low' as const, impressions: '920K', roi: '+190%' },
];

const brands = [
  { name: 'REVOLVE', logo: 'https://images.pexels.com/photos/1484527/pexels-photo-1484527.jpeg?w=100', verified: true, rating: 4.8, campaigns: 3, payout: '$8.5K', success: '94', overlap: '87', satisfaction: '96', avgRoi: '+320', sparkline: [42,48,45,52,58,55,62], activeNow: 12 },
  { name: 'Apple', logo: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?w=100', verified: true, rating: 4.9, campaigns: 2, payout: '$12.5K', success: '97', overlap: '82', satisfaction: '98', avgRoi: '+280', sparkline: [60,58,65,62,70,75,72], activeNow: 8 },
  { name: 'Glossier', logo: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?w=100', verified: true, rating: 4.7, campaigns: 4, payout: '$6.8K', success: '91', overlap: '79', satisfaction: '93', avgRoi: '+240', sparkline: [30,35,32,38,42,40,48], activeNow: 15 },
  { name: 'Lululemon', logo: 'https://images.pexels.com/photos/3621519/pexels-photo-3619969.jpeg?w=100', verified: true, rating: 4.8, campaigns: 3, payout: '$7.2K', success: '93', overlap: '85', satisfaction: '95', avgRoi: '+190', sparkline: [25,28,32,30,35,38,42], activeNow: 6 },
];

const activityFeed = [
  { icon: Sparkles, color: 'text-purple-400', bg: 'bg-purple-400/10', text: 'Nike launched Summer Campaign 2024', time: 120 },
  { icon: TrendingUp, color: 'text-emerald-400', bg: 'bg-emerald-400/10', text: 'Ava Styles gained 14K followers this week', time: 300 },
  { icon: CheckCircle, color: 'text-cyan-400', bg: 'bg-cyan-400/10', text: 'TechNova accepted your collaboration', time: 480 },
  { icon: Eye, color: 'text-blue-400', bg: 'bg-blue-400/10', text: 'Campaign reached 2.1M impressions', time: 720 },
  { icon: DollarSign, color: 'text-emerald-400', bg: 'bg-emerald-400/10', text: 'Payment received: $8,500 from REVOLVE', time: 900 },
  { icon: TrendingUp, color: 'text-purple-400', bg: 'bg-purple-400/10', text: 'Brand ROI increased 28% this quarter', time: 1320 },
  { icon: Users, color: 'text-cyan-400', bg: 'bg-cyan-400/10', text: '312 new creators joined the platform', time: 1680 },
  { icon: Send, color: 'text-orange-400', bg: 'bg-orange-400/10', text: 'Jordan Lee applied to Apple campaign', time: 1860 },
];

const matchPairs = [
  { creator: 'Sarah Chen', cAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=60', brand: 'REVOLVE', bLogo: 'https://images.pexels.com/photos/1484527/pexels-photo-1484527.jpeg?w=60', match: 98, roi: '+340%', prob: '96%' },
  { creator: 'Jordan Lee', cAvatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?w=60', brand: 'Apple', bLogo: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?w=60', match: 94, roi: '+280%', prob: '92%' },
  { creator: 'Alex Rivera', cAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=60', brand: 'Glossier', bLogo: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?w=60', match: 91, roi: '+220%', prob: '88%' },
];

const chartVals = [2400, 2800, 3200, 2900, 3100, 3400, 3600];
const roiVals = [180, 210, 195, 240, 220, 260, 280];

/* ─── Animated Counter with direction ─── */
function LiveCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down' | null>(null);
  const prevRef = useRef(0);

  useEffect(() => {
    const prev = prevRef.current;
    prevRef.current = value;
    if (value > prev) setDirection('up');
    else if (value < prev) setDirection('down');

    const start = display;
    const diff = value - start;
    const steps = 30;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + diff * eased));
      if (step >= steps) clearInterval(timer);
    }, 20);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className={`tabular-nums transition-colors duration-300 ${direction === 'up' ? 'text-emerald-300' : direction === 'down' ? 'text-rose-300' : 'text-white'}`}>
      {display.toLocaleString()}{suffix}
    </span>
  );
}

/* ─── Shimmer loader ─── */
function Shimmer({ w = '100%', h = 14, rounded = 'rounded' }: { w?: string | number; h?: number; rounded?: string }) {
  return <div className={`${rounded} bg-gradient-to-r from-white/[0.03] via-white/[0.06] to-white/[0.03] bg-[length:200%_100%] animate-[shimmer_2s_infinite_linear]`} style={{ width: w, height: h }} />;
}

/* ─── Mini Bar Chart ─── */
function MiniChart({ data, color = 'from-purple-500 to-indigo-500', h = 48 }: { data: number[]; color?: string; h?: number }) {
  const { ref, inView } = useInView();
  const max = Math.max(...data);
  return (
    <div ref={ref} className="flex items-end gap-[3px]" style={{ height: h }}>
      {data.map((v, i) => (
        <motion.div key={i} className={`flex-1 rounded-sm bg-gradient-to-t ${color} min-w-[4px]`} initial={{ height: 0 }} animate={inView ? { height: `${(v / max) * 100}%` } : {}} transition={{ delay: i * 0.08, duration: 0.6, ease: 'easeOut' }} />
      ))}
    </div>
  );
}

/* ─── Animated SVG Line Chart ─── */
function AnimatedLineChart({ data, color = '#a78bfa', w = 200, h = 60 }: { data: number[]; color?: string; w?: number; h?: number }) {
  const { ref, inView } = useInView();
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const pad = 4;
  const points = data.map((v, i) => ({ x: pad + (i / (data.length - 1)) * (w - pad * 2), y: pad + (1 - (v - min) / range) * (h - pad * 2) }));
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');
  const areaD = pathD + ` L${points[points.length - 1].x},${h} L${points[0].x},${h} Z`;
  const gid = `g-${color.replace('#', '')}-${w}`;

  return (
    <div ref={ref}>
      <svg width={w} height={h} className="overflow-visible">
        <defs><linearGradient id={gid} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={color} stopOpacity="0.3" /><stop offset="100%" stopColor={color} stopOpacity="0" /></linearGradient></defs>
        <motion.path d={areaD} fill={`url(#${gid})`} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1.5, delay: 0.5 }} />
        <motion.path d={pathD} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}} transition={{ duration: 2, ease: 'easeInOut' }} />
        {points.map((p, i) => (
          <motion.circle key={i} cx={p.x} cy={p.y} r="2.5" fill={color} initial={{ opacity: 0, scale: 0 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.8 + i * 0.12, duration: 0.3 }} />
        ))}
      </svg>
    </div>
  );
}

/* ─── Micro Sparkline ─── */
function MicroSparkline({ data, color = '#a78bfa', w = 48, h = 16 }: { data: number[]; color?: string; w?: number; h?: number }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const pts = data.map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / range) * h}`).join(' ');
  return <svg width={w} height={h}><polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

/* ─── Floating Panel ─── */
function FloatingPanel({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay, duration: 0.6, ease: 'easeOut' }} className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent rounded-xl pointer-events-none" />
      <div className="relative bg-[#0c0f1a]/80 backdrop-blur-xl border border-white/[0.08] rounded-xl shadow-[0_0_30px_-5px_rgba(139,92,246,0.08)]">
        {children}
      </div>
    </motion.div>
  );
}

/* ─── Pulse Dot ─── */
function PulseDot({ color = 'bg-emerald-400' }: { color?: string }) {
  return <span className="relative flex h-2 w-2"><span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${color} opacity-75`} /><span className={`relative inline-flex rounded-full h-2 w-2 ${color}`} /></span>;
}

function UrgencyBadge({ urgency }: { urgency: 'critical' | 'high' | 'medium' | 'low' }) {
  const s = { critical: 'bg-rose-500/15 text-rose-400 border-rose-500/20', high: 'bg-amber-500/15 text-amber-400 border-amber-500/20', medium: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/20', low: 'bg-slate-500/15 text-slate-400 border-slate-500/20' };
  return <span className={`px-1 py-0.5 rounded text-[8px] border font-semibold uppercase ${s[urgency]}`}>{urgency}</span>;
}

function TierBadge({ tier }: { tier: 'diamond' | 'gold' | 'silver' }) {
  const c = { diamond: 'text-cyan-300', gold: 'text-amber-300', silver: 'text-slate-400' };
  const l = { diamond: 'D', gold: 'G', silver: 'S' };
  return <span className={`text-[8px] font-black ${c[tier]}`}>{l[tier]}</span>;
}

/* ─── Section wrapper with unified spacing + glow continuity ─── */
function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`px-4 lg:px-6 py-3 ${className}`}>
      {children}
    </section>
  );
}

/* ─── Section Transition ─── */
function SectionConnector() {
  return <div className="px-4 lg:px-6"><div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" /></div>;
}

/* ─── Main ─── */
export default function LandingPage() {
  const [activeMatch, setActiveMatch] = useState(0);
  const [activityIdx, setActivityIdx] = useState(0);
  const [hoveredCreator, setHoveredCreator] = useState<number | null>(null);
  const [hoveredCampaign, setHoveredCampaign] = useState<number | null>(null);
  const [hoveredBrand, setHoveredBrand] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [newNotification, setNewNotification] = useState<string | null>(null);
  const now = useLiveTimestamp();

  // Live fluctuating platform metrics
  const liveCreators = useFluctuatingValue(50234, 15, 3000);
  const liveCampaigns = useFluctuatingValue(2456, 3, 5000);
  const liveCollabs = useFluctuatingValue(156780, 40, 4000);
  const liveMatches = useFluctuatingValue(1247, 8, 3500);

  // Simulate loading
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 600); return () => clearTimeout(t); }, []);

  // Cycle activity highlight
  useInterval(() => setActivityIdx(i => (i + 1) % activityFeed.length), 3000);

  // Periodic "new notification" simulation
  const notifTexts = [
    'New creator matched: 96% with Nike',
    'Campaign "Summer Vibes" went live',
    'Ava Styles accepted your invite',
    'Revenue milestone: $10K this month',
  ];
  useInterval(() => {
    setNewNotification(notifTexts[Math.floor(Math.random() * notifTexts.length)]);
  }, 8000);
  useEffect(() => {
    if (newNotification) {
      const t = setTimeout(() => setNewNotification(null), 4000);
      return () => clearTimeout(t);
    }
  }, [newNotification]);

  return (
    <div className="min-h-screen bg-[#06080f] text-slate-100 overflow-hidden">
      {/* Continuous ambient glow across entire page */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-[25%] w-[700px] h-[400px] bg-purple-500/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-[35%] right-[-5%] w-[500px] h-[400px] bg-indigo-500/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[300px] bg-cyan-500/[0.02] rounded-full blur-[120px]" />
      </div>

      {/* Floating notification toast */}
      <AnimatePresence>
        {newNotification && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -10, x: 20 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="fixed top-14 right-4 lg:right-6 z-50 px-4 py-2.5 rounded-xl bg-[#0f1219]/95 border border-purple-500/20 shadow-[0_0_30px_-5px_rgba(139,92,246,0.15)] backdrop-blur-xl max-w-xs"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400" /></span>
              <p className="text-[11px] text-slate-200">{newNotification}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10">
        {/* ═══════════════════ LOADING SKELETON ═══════════════════ */}
        <AnimatePresence mode="wait">
          {!loaded ? (
            <motion.div key="skeleton" exit={{ opacity: 0 }} className="px-4 lg:px-6 pt-6 pb-4">
              <div className="rounded-2xl overflow-hidden bg-[#0a0d16] border border-white/[0.06] p-6 lg:p-8">
                <div className="grid lg:grid-cols-12 gap-5">
                  <div className="lg:col-span-5 space-y-3">
                    <Shimmer w="40%" h={10} />
                    <Shimmer w="80%" h={36} />
                    <Shimmer w="70%" h={36} />
                    <Shimmer w="60%" h={14} />
                    <div className="flex gap-2 mt-4">
                      <Shimmer w={120} h={36} rounded="rounded-lg" />
                      <Shimmer w={120} h={36} rounded="rounded-lg" />
                    </div>
                  </div>
                  <div className="lg:col-span-4 grid grid-cols-2 gap-3">
                    {[0,1,2,3].map(i => <div key={i} className="p-3 rounded-xl border border-white/[0.04]"><Shimmer w="60%" h={8} /><Shimmer w="80%" h={20} className="mt-2" /></div>)}
                    <div className="col-span-2 p-3 rounded-xl border border-white/[0.04]"><Shimmer w="50%" h={8} /><Shimmer h={56} className="mt-2" /></div>
                  </div>
                  <div className="lg:col-span-3 space-y-3">
                    <div className="p-3 rounded-xl border border-white/[0.04]"><Shimmer w="50%" h={8} />{[0,1,2,3,4].map(i => <div key={i} className="flex items-center gap-2 mt-2"><Shimmer w={20} h={20} rounded="rounded-full" /><Shimmer w="60%" h={10} /></div>)}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              {/* ═══════════════════ HERO ═══════════════════ */}
              <Section>
                <div className="relative rounded-2xl overflow-hidden">
                  {/* Layered gradients */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0a0620] via-[#0d1020] to-[#06080f]" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(120,80,255,0.12),transparent)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_50%,rgba(60,100,255,0.06),transparent)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_10%_80%,rgba(80,200,255,0.04),transparent)]" />
                  <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

                  {/* Floating particles */}
                  <motion.div animate={{ y: [0, -12, 0], x: [0, 6, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-12 right-[15%] w-2 h-2 bg-purple-400/40 rounded-full blur-[2px]" />
                  <motion.div animate={{ y: [0, 8, 0], x: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-1/3 right-[25%] w-1.5 h-1.5 bg-cyan-400/30 rounded-full blur-[1px]" />
                  <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-1/4 left-[10%] w-1.5 h-1.5 bg-indigo-400/30 rounded-full blur-[1px]" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/[0.06] rounded-full blur-[100px]" />

                  <div className="relative px-5 pt-7 pb-5 lg:px-8 lg:pt-8 lg:pb-6">
                    {/* Top bar */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2.5">
                        <PulseDot color="bg-purple-400" />
                        <span className="text-[10px] uppercase tracking-[0.2em] text-purple-300/70 font-semibold">Live Platform</span>
                        <span className="text-[10px] text-slate-700">|</span>
                        <span className="text-[10px] text-slate-500">v2.4.1</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-1.5">
                          {creators.slice(0, 3).map((c, i) => <img key={i} src={c.avatar} alt={c.name} className="w-5 h-5 rounded-full ring-1 ring-[#0d1020] object-cover" />)}
                        </div>
                        <span className="text-[9px] text-slate-500 tabular-nums">{useFluctuatingValue(2341, 30, 4000).toLocaleString()} online</span>
                      </div>
                    </div>

                    {/* Hero grid */}
                    <div className="grid lg:grid-cols-12 gap-4 lg:gap-5">
                      {/* Left: Headline */}
                      <div className="lg:col-span-5 flex flex-col justify-center">
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
                          <h1 className="text-[2.5rem] lg:text-[3.5rem] font-extrabold leading-[1.05] tracking-[-0.02em] mb-2.5">
                            <span className="text-white">The AI</span><br />
                            <span className="text-white">Operating System</span><br />
                            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">for Collaborations</span>
                          </h1>
                          <p className="text-[12px] lg:text-[13px] text-slate-400/90 mb-4 max-w-md leading-relaxed">
                            Discover creators, launch campaigns, predict performance, and manage partnerships — all in real time.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Link to="/dashboard" className="group px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 font-semibold text-[13px] transition-all flex items-center gap-1.5 shadow-[0_0_24px_-6px_rgba(139,92,246,0.4)]">
                              Launch Dashboard <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                            <Link to="/campaigns" className="px-4 py-2 rounded-lg border border-white/[0.1] hover:border-purple-500/30 hover:bg-white/[0.03] font-medium text-[13px] text-slate-300 transition-all backdrop-blur-sm">Campaigns</Link>
                            <Link to="/brands" className="px-4 py-2 rounded-lg border border-white/[0.06] hover:border-cyan-500/30 hover:bg-white/[0.03] font-medium text-[13px] text-slate-400 transition-all backdrop-blur-sm">Brands</Link>
                          </div>
                        </motion.div>
                      </div>

                      {/* Center: Live Metric Panels */}
                      <div className="lg:col-span-4 space-y-2.5">
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { label: 'Active Creators', value: liveCreators, icon: Users, color: 'text-purple-400' },
                            { label: 'Live Campaigns', value: liveCampaigns, icon: Sparkles, color: 'text-cyan-400' },
                            { label: 'Collaborations', value: liveCollabs, icon: CheckCircle, color: 'text-emerald-400' },
                            { label: "AI Matches", value: liveMatches, icon: Brain, color: 'text-amber-400' },
                          ].map((m, i) => (
                            <FloatingPanel key={i} delay={0.15 + i * 0.1}>
                              <div className="p-2.5">
                                <div className="flex items-center gap-1.5 mb-1">
                                  <m.icon className={`w-3 h-3 ${m.color}`} />
                                  <span className="text-[8px] text-slate-500 uppercase tracking-wider">{m.label}</span>
                                </div>
                                <div className="text-lg font-extrabold tabular-nums">
                                  <LiveCounter value={m.value} />
                                </div>
                              </div>
                            </FloatingPanel>
                          ))}
                        </div>
                        <FloatingPanel delay={0.5}>
                          <div className="p-2.5">
                            <div className="flex items-center justify-between mb-1.5">
                              <div className="flex items-center gap-1.5"><TrendingUp className="w-3 h-3 text-purple-400" /><span className="text-[8px] text-slate-500 uppercase tracking-wider">Engagement (7d)</span></div>
                              <span className="text-[9px] text-emerald-400 font-semibold">+24.5%</span>
                            </div>
                            <AnimatedLineChart data={chartVals} color="#a78bfa" w={280} h={52} />
                          </div>
                        </FloatingPanel>
                        <FloatingPanel delay={0.6}>
                          <div className="p-2.5 flex items-center gap-2">
                            <div className="flex-1"><span className="text-[8px] text-slate-500 uppercase tracking-wider block mb-0.5">Campaign ROI</span><span className="text-base font-extrabold text-white tabular-nums">+42.3%</span></div>
                            <AnimatedLineChart data={roiVals} color="#22d3ee" w={90} h={32} />
                          </div>
                        </FloatingPanel>
                      </div>

                      {/* Right: Rankings + Ticker */}
                      <div className="lg:col-span-3 space-y-2.5">
                        <FloatingPanel delay={0.3}>
                          <div className="p-2.5">
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-[8px] text-slate-500 uppercase tracking-wider font-semibold">Creator Rankings</span>
                              <Link to="/dashboard" className="text-[8px] text-purple-400 hover:text-purple-300">View all</Link>
                            </div>
                            <div className="space-y-0.5">
                              {creators.slice(0, 5).map((c, i) => (
                                <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.07 }} className="flex items-center gap-1.5 p-1 rounded-lg hover:bg-white/[0.04] transition-colors cursor-pointer">
                                  <span className="w-3.5 h-3.5 rounded bg-white/[0.05] flex items-center justify-center flex-shrink-0"><TierBadge tier={c.tier} /></span>
                                  <img src={c.avatar} alt={c.name} className="w-5 h-5 rounded-full object-cover ring-1 ring-white/10 flex-shrink-0" />
                                  <div className="flex-1 min-w-0"><p className="text-[9px] font-semibold truncate text-slate-200">{c.name}</p></div>
                                  <div className="flex items-center gap-0.5 flex-shrink-0">
                                    <span className="text-[9px] font-bold text-purple-400 tabular-nums">{c.score}</span>
                                    {c.trend === 'up' ? <ArrowUp className="w-2 h-2 text-emerald-400" /> : <ArrowDown className="w-2 h-2 text-rose-400" />}
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </FloatingPanel>
                        <FloatingPanel delay={0.45}>
                          <div className="p-2.5">
                            <span className="text-[8px] text-slate-500 uppercase tracking-wider font-semibold block mb-1.5">Brand Activity</span>
                            <div className="flex items-center gap-1.5 flex-wrap">
                              {brands.map((b, i) => <motion.img key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 + i * 0.08 }} src={b.logo} alt={b.name} className="w-5 h-5 rounded-lg object-cover ring-1 ring-white/10 hover:ring-purple-500/40 transition-all cursor-pointer" />)}
                              <span className="text-[8px] text-slate-600 ml-0.5">+2.5K</span>
                            </div>
                          </div>
                        </FloatingPanel>
                        <FloatingPanel delay={0.55}>
                          <div className="p-2.5 flex items-center justify-between">
                            <div className="text-center flex-1"><p className="text-[8px] text-slate-600 uppercase">CTR</p><p className="text-[12px] font-bold text-white tabular-nums">4.2%</p></div>
                            <div className="w-px h-5 bg-white/[0.06]" />
                            <div className="text-center flex-1"><p className="text-[8px] text-slate-600 uppercase">Conv</p><p className="text-[12px] font-bold text-white tabular-nums">2.1%</p></div>
                            <div className="w-px h-5 bg-white/[0.06]" />
                            <div className="text-center flex-1"><p className="text-[8px] text-slate-600 uppercase">CPA</p><p className="text-[12px] font-bold text-emerald-400 tabular-nums">$12</p></div>
                          </div>
                        </FloatingPanel>
                      </div>
                    </div>
                  </div>
                </div>
              </Section>

              <SectionConnector />

              {/* ═══════════════════ LIVE PLATFORM PREVIEW ═══════════════════ */}
              <Section>
                <div className="grid lg:grid-cols-12 gap-2.5">
                  {/* LEFT: Creator Rankings */}
                  <div className="lg:col-span-3">
                    <div className="bg-[#0a0d16] border border-white/[0.06] rounded-2xl p-3 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/[0.03] rounded-full blur-[40px]" />
                      <div className="relative">
                        <div className="flex items-center justify-between mb-2">
                          <h2 className="text-[11px] font-bold flex items-center gap-1.5 text-slate-200"><Trophy className="w-3 h-3 text-amber-400" />Creator Rankings</h2>
                          <div className="flex items-center gap-1"><PulseDot color="bg-amber-400" /><span className="text-[7px] text-amber-400/70 uppercase font-semibold">Live</span></div>
                        </div>
                        <div className="grid grid-cols-3 gap-1 mb-2">
                          <div className="p-1 rounded bg-white/[0.02] border border-white/[0.04] text-center"><p className="text-[7px] text-slate-600 uppercase">Avg</p><p className="text-[9px] font-bold text-purple-400 tabular-nums">94.0</p></div>
                          <div className="p-1 rounded bg-white/[0.02] border border-white/[0.04] text-center"><p className="text-[7px] text-slate-600 uppercase">Rev</p><p className="text-[9px] font-bold text-emerald-400 tabular-nums">$1.4M</p></div>
                          <div className="p-1 rounded bg-white/[0.02] border border-white/[0.04] text-center"><p className="text-[7px] text-slate-600 uppercase">Active</p><p className="text-[9px] font-bold text-cyan-400 tabular-nums">{useFluctuatingValue(149, 2, 6000)}</p></div>
                        </div>
                        <div className="space-y-0.5">
                          {creators.map((c, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.06 }}
                              onMouseEnter={() => setHoveredCreator(i)} onMouseLeave={() => setHoveredCreator(null)}
                              className={`p-1.5 rounded-lg transition-all cursor-pointer ${hoveredCreator === i ? 'bg-purple-500/10 border border-purple-500/20 shadow-[0_0_16px_-4px_rgba(139,92,246,0.15)]' : 'hover:bg-white/[0.03] border border-transparent'}`}
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="w-4 h-4 rounded bg-white/[0.04] flex items-center justify-center text-[9px] font-bold text-slate-500 flex-shrink-0">{i + 1}</span>
                                <img src={c.avatar} alt={c.name} className="w-6 h-6 rounded-full object-cover ring-1 ring-white/10 flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-0.5"><p className="text-[10px] font-semibold truncate">{c.name}</p><TierBadge tier={c.tier} /></div>
                                  <div className="flex items-center gap-1.5"><span className="text-[8px] text-slate-500">{c.followers}</span><span className={`text-[8px] font-medium flex items-center gap-0.5 ${c.trend === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>{c.trend === 'up' ? <ArrowUp className="w-1.5 h-1.5" /> : <ArrowDown className="w-1.5 h-1.5" />}{c.growth}</span></div>
                                </div>
                                <div className="flex flex-col items-end gap-0.5 flex-shrink-0">
                                  <span className="text-[10px] font-bold text-purple-400 tabular-nums">{c.score}</span>
                                  <MicroSparkline data={c.sparkline} color={c.trend === 'up' ? '#34d399' : '#f87171'} w={32} h={8} />
                                </div>
                              </div>
                              <AnimatePresence>
                                {hoveredCreator === i && (
                                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.15 }} className="overflow-hidden">
                                    <div className="grid grid-cols-3 gap-1 mt-1.5 pt-1.5 border-t border-white/[0.04]">
                                      <div className="p-0.5 rounded bg-white/[0.03] text-center"><p className="text-[7px] text-slate-600">Eng</p><p className="text-[8px] font-bold text-cyan-400">{c.eng}</p></div>
                                      <div className="p-0.5 rounded bg-white/[0.03] text-center"><p className="text-[7px] text-slate-600">Collabs</p><p className="text-[8px] font-bold text-white">{c.collabs}</p></div>
                                      <div className="p-0.5 rounded bg-white/[0.03] text-center"><p className="text-[7px] text-slate-600">Rev</p><p className="text-[8px] font-bold text-emerald-400">{c.revenue}</p></div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CENTER: Campaign Marketplace */}
                  <div className="lg:col-span-5">
                    <div className="bg-[#0a0d16] border border-white/[0.06] rounded-2xl p-3 relative overflow-hidden">
                      <div className="absolute top-0 left-1/3 w-32 h-32 bg-purple-500/[0.03] rounded-full blur-[50px]" />
                      <div className="relative">
                        <div className="flex items-center justify-between mb-2">
                          <h2 className="text-[11px] font-bold flex items-center gap-1.5 text-slate-200"><Sparkles className="w-3 h-3 text-purple-400" />Campaign Marketplace</h2>
                          <div className="flex items-center gap-1.5"><PulseDot color="bg-purple-400" /><Link to="/campaigns" className="text-[8px] text-purple-400 hover:text-purple-300">View all →</Link></div>
                        </div>
                        <div className="flex items-center gap-2 mb-2 p-1.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                          <div className="flex items-center gap-1"><Flame className="w-2 h-2 text-amber-400" /><span className="text-[8px] text-slate-400">4 trending</span></div>
                          <div className="w-px h-2.5 bg-white/[0.06]" />
                          <div className="flex items-center gap-1"><Clock className="w-2 h-2 text-cyan-400" /><span className="text-[8px] text-slate-400">2 closing</span></div>
                          <div className="w-px h-2.5 bg-white/[0.06]" />
                          <div className="flex items-center gap-1"><DollarSign className="w-2 h-2 text-emerald-400" /><span className="text-[8px] text-slate-400">$284K budget</span></div>
                        </div>
                        <div className="space-y-1.5">
                          {campaigns.map((c, i) => {
                            const fillPct = Math.round((c.applicants / c.maxApplicants) * 100);
                            return (
                              <motion.div key={c.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08 }}
                                onMouseEnter={() => setHoveredCampaign(i)} onMouseLeave={() => setHoveredCampaign(null)}
                                className={`p-2.5 rounded-xl transition-all cursor-pointer ${hoveredCampaign === i ? 'bg-purple-500/[0.06] border border-purple-500/20 shadow-[0_0_20px_-5px_rgba(139,92,246,0.1)]' : 'bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/15'}`}
                              >
                                <div className="flex items-start gap-2">
                                  <img src={c.logo} alt={c.brand} className="w-8 h-8 rounded-lg object-cover flex-shrink-0 ring-1 ring-white/10" />
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-1 mb-0.5">
                                      <p className="text-[11px] font-bold">{c.brand}</p>
                                      <span className="px-1 py-0.5 rounded text-[7px] bg-white/[0.05] text-slate-500 border border-white/[0.04]">{c.category}</span>
                                      <UrgencyBadge urgency={c.urgency} />
                                    </div>
                                    <p className="text-[8px] text-slate-500 mb-1">{c.deliverables}</p>
                                    <div className="flex items-center gap-1.5 mb-1">
                                      <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden">
                                        <motion.div className={`h-full rounded-full ${fillPct > 80 ? 'bg-rose-500' : fillPct > 50 ? 'bg-amber-500' : 'bg-emerald-500'}`} initial={{ width: 0 }} animate={{ width: `${fillPct}%` }} transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }} />
                                      </div>
                                      <span className="text-[7px] text-slate-500 tabular-nums">{c.applicants}/{c.maxApplicants}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-[8px]">
                                      <span className="text-emerald-400 font-semibold">{c.budget}</span>
                                      <span className="text-slate-700">|</span>
                                      <span className="text-slate-500 flex items-center gap-0.5"><Clock className="w-2 h-2" />{c.deadline}</span>
                                      <span className="text-slate-700">|</span>
                                      <span className="text-slate-500 flex items-center gap-0.5"><Eye className="w-2 h-2" />{c.impressions}</span>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-end gap-0.5 flex-shrink-0">
                                    <span className="px-1.5 py-0.5 rounded text-[9px] bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/20 text-purple-300 font-bold tabular-nums">{c.match}%</span>
                                    <span className="text-[7px] text-emerald-400 font-semibold">{c.roi} ROI</span>
                                    <Link to="/campaigns" className={`text-[8px] text-purple-400 hover:text-purple-300 transition-opacity ${hoveredCampaign === i ? 'opacity-100' : 'opacity-0'}`}>Apply →</Link>
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT: Brand Intelligence */}
                  <div className="lg:col-span-4">
                    <div className="bg-[#0a0d16] border border-white/[0.06] rounded-2xl p-3 relative overflow-hidden">
                      <div className="absolute bottom-0 right-0 w-24 h-24 bg-cyan-500/[0.03] rounded-full blur-[40px]" />
                      <div className="relative">
                        <div className="flex items-center justify-between mb-2">
                          <h2 className="text-[11px] font-bold flex items-center gap-1.5 text-slate-200"><Building2 className="w-3 h-3 text-cyan-400" />Brand Intelligence</h2>
                          <div className="flex items-center gap-1.5"><PulseDot color="bg-cyan-400" /><Link to="/brands" className="text-[8px] text-cyan-400 hover:text-cyan-300">View all →</Link></div>
                        </div>
                        <div className="flex items-center gap-2 mb-2 p-1.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                          <div className="flex items-center gap-1"><Shield className="w-2 h-2 text-purple-400" /><span className="text-[8px] text-slate-400">Verified</span></div>
                          <div className="w-px h-2.5 bg-white/[0.06]" />
                          <div className="flex items-center gap-1"><DollarSign className="w-2 h-2 text-emerald-400" /><span className="text-[8px] text-slate-400">$8.8K avg</span></div>
                          <div className="w-px h-2.5 bg-white/[0.06]" />
                          <div className="flex items-center gap-1"><Users className="w-2 h-2 text-cyan-400" /><span className="text-[8px] text-slate-400 tabular-nums">{useFluctuatingValue(41, 2, 7000)} active</span></div>
                        </div>
                        <div className="space-y-1.5">
                          {brands.map((b, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.08 }}
                              onMouseEnter={() => setHoveredBrand(i)} onMouseLeave={() => setHoveredBrand(null)}
                              className={`p-2 rounded-xl transition-all cursor-pointer ${hoveredBrand === i ? 'bg-cyan-500/[0.06] border border-cyan-500/20 shadow-[0_0_20px_-5px_rgba(34,211,238,0.1)]' : 'bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/15'}`}
                            >
                              <div className="flex items-center gap-1.5 mb-1.5">
                                <img src={b.logo} alt={b.name} className="w-6 h-6 rounded-lg object-cover ring-1 ring-white/10" />
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-0.5"><p className="text-[10px] font-bold truncate">{b.name}</p>{b.verified && <CheckCircle className="w-2 h-2 text-purple-400 fill-purple-400" />}</div>
                                  <div className="flex items-center gap-0.5 mt-0.5">
                                    {[...Array(5)].map((_, j) => <Star key={j} className={`w-1.5 h-1.5 ${j < Math.floor(b.rating) ? 'text-amber-400 fill-amber-400' : 'text-slate-700'}`} />)}
                                    <span className="text-[7px] text-slate-500 ml-0.5">{b.rating}</span>
                                    <span className="text-[7px] text-emerald-400 ml-1 flex items-center gap-0.5"><ArrowUp className="w-1.5 h-1.5" />{b.avgRoi}</span>
                                  </div>
                                </div>
                                <div className="flex flex-col items-end gap-0.5 flex-shrink-0">
                                  <div className="flex items-center gap-0.5"><PulseDot color="bg-emerald-400" /><span className="text-[7px] text-emerald-400 tabular-nums">{useFluctuatingValue(b.activeNow, 1, 5000 + i * 1000)}</span></div>
                                  <MicroSparkline data={b.sparkline} color="#22d3ee" w={36} h={8} />
                                </div>
                              </div>
                              <div className="grid grid-cols-4 gap-0.5 text-[7px]">
                                <div className="p-0.5 rounded bg-white/[0.03] text-center"><p className="text-slate-600">Succ</p><p className="text-emerald-400 font-bold">{b.success}%</p></div>
                                <div className="p-0.5 rounded bg-white/[0.03] text-center"><p className="text-slate-600">Pay</p><p className="text-purple-400 font-bold">{b.payout}</p></div>
                                <div className="p-0.5 rounded bg-white/[0.03] text-center"><p className="text-slate-600">Over</p><p className="text-cyan-400 font-bold">{b.overlap}%</p></div>
                                <div className="p-0.5 rounded bg-white/[0.03] text-center"><p className="text-slate-600">Sat</p><p className="text-amber-400 font-bold">{b.satisfaction}%</p></div>
                              </div>
                              <AnimatePresence>
                                {hoveredBrand === i && (
                                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.15 }} className="overflow-hidden">
                                    <div className="mt-1.5 pt-1.5 border-t border-white/[0.04]">
                                      <div className="flex items-center justify-between text-[7px] mb-0.5"><span className="text-slate-500">Collaboration Success</span><span className="text-emerald-400 font-bold">{b.success}%</span></div>
                                      <div className="h-1 bg-slate-800 rounded-full overflow-hidden"><motion.div className="h-full bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full" initial={{ width: 0 }} animate={{ width: `${b.success}%` }} transition={{ duration: 0.6 }} /></div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Section>

              <SectionConnector />

              {/* ═══════════════════ LIVE ACTIVITY FEED ═══════════════════ */}
              <Section>
                <div className="bg-[#0a0d16] border border-white/[0.06] rounded-2xl p-3">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-[11px] font-bold flex items-center gap-1.5 text-slate-200"><Activity className="w-3 h-3 text-emerald-400" />Live Activity<PulseDot color="bg-emerald-400" /></h2>
                    <span className="text-[8px] text-slate-500">Real-time</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5">
                    {activityFeed.map((a, i) => {
                      const elapsed = Math.max(0, Math.floor((now / 1000) - a.time));
                      return (
                        <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 + i * 0.04 }}
                          className={`p-2 rounded-lg border transition-all ${i === activityIdx ? 'bg-white/[0.04] border-purple-500/20' : 'bg-white/[0.01] border-white/[0.04] hover:bg-white/[0.03]'}`}
                        >
                          <div className="flex items-start gap-1.5">
                            <div className={`p-0.5 rounded ${a.bg}`}><a.icon className={`w-2 h-2 ${a.color}`} /></div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[9px] text-slate-300 leading-tight">{a.text}</p>
                              <p className="text-[8px] text-slate-600 mt-0.5">{formatRelativeTime(elapsed)}</p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </Section>

              <SectionConnector />

              {/* ═══════════════════ AI MATCH ENGINE ═══════════════════ */}
              <Section>
                <div className="bg-gradient-to-br from-[#0d0f1a] to-[#0a0d16] border border-white/[0.06] rounded-2xl p-3 relative overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/[0.04] rounded-full blur-[80px]" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <h2 className="text-[11px] font-bold flex items-center gap-1.5 text-slate-200"><Brain className="w-3 h-3 text-purple-400" />AI Match Engine</h2>
                      <div className="flex items-center gap-1"><PulseDot color="bg-purple-400" /><span className="text-[8px] text-purple-400/60">Processing</span></div>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-2.5">
                      {matchPairs.map((pair, i) => (
                        <motion.button key={i} onClick={() => setActiveMatch(i)} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
                          className={`p-2.5 rounded-xl text-left transition-all ${activeMatch === i ? 'bg-purple-500/10 border border-purple-500/30 shadow-lg shadow-purple-500/5' : 'bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/20'}`}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <img src={pair.cAvatar} alt={pair.creator} className="w-6 h-6 rounded-full object-cover ring-2 ring-purple-500/30" />
                            <div className="flex-1"><div className="h-px bg-gradient-to-r from-purple-500/50 via-indigo-500/50 to-transparent relative"><motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full" animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 2 }} /></div></div>
                            <img src={pair.bLogo} alt={pair.brand} className="w-6 h-6 rounded-lg object-cover ring-2 ring-cyan-500/30" />
                          </div>
                          <div className="flex items-center justify-between mb-1.5"><span className="text-[9px] text-slate-400">{pair.creator}</span><span className="text-[9px] text-slate-500">→</span><span className="text-[9px] text-slate-400">{pair.brand}</span></div>
                          <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden mb-1.5"><motion.div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" initial={{ width: 0 }} animate={{ width: `${pair.match}%` }} transition={{ delay: 0.3 + i * 0.15, duration: 1.2, ease: 'easeOut' }} /></div>
                          <div className="grid grid-cols-3 gap-1 text-[8px]">
                            <div className="p-0.5 rounded bg-white/[0.03] text-center"><p className="text-slate-500">Match</p><p className="text-purple-400 font-bold">{pair.match}%</p></div>
                            <div className="p-0.5 rounded bg-white/[0.03] text-center"><p className="text-slate-500">ROI</p><p className="text-emerald-400 font-bold">{pair.roi}</p></div>
                            <div className="p-0.5 rounded bg-white/[0.03] text-center"><p className="text-slate-500">Prob</p><p className="text-cyan-400 font-bold">{pair.prob}</p></div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </Section>

              <SectionConnector />

              {/* ═══════════════════ TOP CAMPAIGNS + ANALYTICS ═══════════════════ */}
              <Section>
                <div className="grid lg:grid-cols-12 gap-2.5">
                  <div className="lg:col-span-7 space-y-2">
                    <h2 className="text-[11px] font-bold flex items-center gap-1.5 px-0.5 text-slate-200"><Target className="w-3 h-3 text-purple-400" />Featured Campaigns<Link to="/campaigns" className="ml-auto text-[8px] text-purple-400 hover:text-purple-300">View all →</Link></h2>
                    {campaigns.map((c, i) => (
                      <motion.div key={c.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.08 }} className="group p-3 rounded-xl bg-[#0a0d16] border border-white/[0.06] hover:border-purple-500/20 hover:bg-white/[0.02] transition-all">
                        <div className="flex items-center gap-2.5">
                          <img src={c.logo} alt={c.brand} className="w-9 h-9 rounded-lg object-cover ring-1 ring-white/10" />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5"><p className="text-[12px] font-semibold">{c.brand}</p><span className="px-1 py-0.5 rounded text-[8px] bg-purple-500/10 text-purple-300 border border-purple-500/20">{c.category}</span><UrgencyBadge urgency={c.urgency} /></div>
                            <p className="text-[10px] text-slate-400 mt-0.5">{c.deliverables} · Due {c.deadline}</p>
                          </div>
                          <div className="text-right flex-shrink-0"><p className="text-[12px] font-bold text-emerald-400">{c.budget}</p><p className="text-[9px] text-slate-500">{c.applicants} applied</p></div>
                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            <span className="px-2 py-0.5 rounded text-[10px] bg-gradient-to-r from-purple-500/15 to-indigo-500/15 border border-purple-500/20 text-purple-300 font-bold tabular-nums">{c.match}%</span>
                            <Link to="/campaigns" className="px-2.5 py-1 rounded-lg text-[10px] bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-colors">Apply</Link>
                            <button className="p-1 rounded-lg hover:bg-white/[0.05] transition-colors"><Heart className="w-3 h-3 text-slate-500 hover:text-rose-400 transition-colors" /></button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="lg:col-span-5 space-y-2">
                    <h2 className="text-[11px] font-bold flex items-center gap-1.5 px-0.5 text-slate-200"><BarChart3 className="w-3 h-3 text-cyan-400" />Analytics</h2>
                    <div className="p-3 rounded-xl bg-[#0a0d16] border border-white/[0.06]">
                      <div className="flex items-center justify-between mb-2"><span className="text-[10px] text-slate-400">Engagement Growth</span><span className="text-[9px] text-emerald-400 font-medium">+24.5%</span></div>
                      <MiniChart data={chartVals} color="from-purple-500 to-indigo-500" h={48} />
                    </div>
                    <div className="p-3 rounded-xl bg-[#0a0d16] border border-white/[0.06]">
                      <div className="flex items-center justify-between mb-2"><span className="text-[10px] text-slate-400">Campaign ROI</span><span className="text-[9px] text-emerald-400 font-medium">+42.3%</span></div>
                      <MiniChart data={roiVals} color="from-cyan-500 to-blue-500" h={48} />
                    </div>
                    <div className="p-3 rounded-xl bg-[#0a0d16] border border-white/[0.06]">
                      <span className="text-[10px] text-slate-400 mb-2 block">Audience Demographics</span>
                      <div className="space-y-1.5">
                        {[{ label: '18-24', pct: 38, color: 'bg-purple-500' }, { label: '25-34', pct: 32, color: 'bg-indigo-500' }, { label: '35-44', pct: 18, color: 'bg-cyan-500' }, { label: '45+', pct: 12, color: 'bg-slate-500' }].map((d, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <span className="text-[9px] text-slate-500 w-8">{d.label}</span>
                            <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden"><motion.div className={`h-full ${d.color} rounded-full`} initial={{ width: 0 }} animate={{ width: `${d.pct}%` }} transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }} /></div>
                            <span className="text-[9px] text-slate-400 tabular-nums w-6 text-right">{d.pct}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5">
                      {[{ label: 'CTR', value: '4.2%', trend: '+0.8%' }, { label: 'Conv.', value: '2.1%', trend: '+0.3%' }, { label: 'CPA', value: '$12', trend: '-$3' }].map((m, i) => (
                        <div key={i} className="p-2 rounded-xl bg-[#0a0d16] border border-white/[0.06] text-center">
                          <p className="text-[8px] text-slate-500 uppercase mb-0.5">{m.label}</p>
                          <p className="text-[12px] font-bold">{m.value}</p>
                          <p className="text-[8px] text-emerald-400">{m.trend}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Section>

              <SectionConnector />

              {/* ═══════════════════ TOP BRANDS ═══════════════════ */}
              <Section className="pb-8">
                <div className="flex items-center justify-between mb-2 px-0.5">
                  <h2 className="text-[11px] font-bold flex items-center gap-1.5 text-slate-200"><Building2 className="w-3 h-3 text-cyan-400" />Top Brands</h2>
                  <Link to="/brands" className="text-[8px] text-cyan-400 hover:text-cyan-300">View all →</Link>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {brands.map((b, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.08 }} className="p-2.5 rounded-xl bg-[#0a0d16] border border-white/[0.06] hover:border-cyan-500/20 hover:bg-white/[0.02] transition-all group">
                      <div className="flex items-center gap-1.5 mb-2">
                        <img src={b.logo} alt={b.name} className="w-7 h-7 rounded-lg object-cover ring-1 ring-white/10 group-hover:ring-cyan-500/30 transition-all" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-0.5"><p className="text-[11px] font-semibold truncate">{b.name}</p>{b.verified && <CheckCircle className="w-2.5 h-2.5 text-purple-400 fill-purple-400 flex-shrink-0" />}</div>
                          <div className="flex items-center gap-0.5 mt-0.5">{[...Array(5)].map((_, j) => <Star key={j} className={`w-1.5 h-1.5 ${j < Math.floor(b.rating) ? 'text-amber-400 fill-amber-400' : 'text-slate-700'}`} />)}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-1 text-[8px] mb-2">
                        <div className="p-1 rounded bg-white/[0.03] text-center"><p className="text-slate-500">Campaigns</p><p className="text-white font-bold">{b.campaigns}</p></div>
                        <div className="p-1 rounded bg-white/[0.03] text-center"><p className="text-slate-500">Avg Pay</p><p className="text-emerald-400 font-bold">{b.payout}</p></div>
                      </div>
                      <Link to={`/brand/${i + 1}`} className="w-full block px-2 py-1 rounded-lg text-[9px] bg-purple-500/10 border border-purple-500/20 text-purple-300 font-medium hover:bg-purple-500/20 text-center transition-colors">View Brand</Link>
                    </motion.div>
                  ))}
                </div>
              </Section>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Shimmer keyframe animation */}
      <style>{`@keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }`}</style>
    </div>
  );
}
