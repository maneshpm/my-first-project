import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users,
  TrendingUp,
  Zap,
  Eye,
  Heart,
  MessageSquare,
  Share2,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Star,
  Target,
  BarChart3
} from 'lucide-react';

const creators = [
  {
    id: 1,
    name: 'Ali Abdaal',
    handle: '@aliabdaal',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=150',
    followers: '4.2M',
    engagement: 8.6,
    growth: 12.5,
    category: 'Productivity',
    score: 96.4,
  },
  {
    id: 2,
    name: 'MrBeast',
    handle: '@mrbeast',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?w=150',
    followers: '190M',
    engagement: 7.2,
    growth: 15.3,
    category: 'Entertainment',
    score: 95.7,
  },
  {
    id: 3,
    name: 'Casey Neistat',
    handle: '@caseyneistat',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?w=150',
    followers: '12.4M',
    engagement: 6.8,
    growth: 8.9,
    category: 'Vlogging',
    score: 94.1,
  },
  {
    id: 4,
    name: 'Emma Chamberlain',
    handle: '@emmachamberlain',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=150',
    followers: '7.2M',
    engagement: 9.1,
    growth: 22.4,
    category: 'Lifestyle',
    score: 93.7,
  },
  {
    id: 5,
    name: 'Marques Brownlee',
    handle: '@mkbhd',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=150',
    followers: '19.2M',
    engagement: 7.5,
    growth: 18.2,
    category: 'Tech',
    score: 92.8,
  },
];

const stats = [
  {
    label: 'Total Creators',
    value: '24,568',
    change: '+18.5%',
    positive: true,
    icon: Users,
    color: 'from-purple-500/20 to-indigo-500/20',
    border: 'border-purple-500/30'
  },
  {
    label: 'Active Campaigns',
    value: '128',
    change: '+8.3%',
    positive: true,
    icon: Target,
    color: 'from-cyan-500/20 to-purple-500/20',
    border: 'border-cyan-500/30'
  },
  {
    label: 'Total Reach',
    value: '22.5M',
    change: '+12.1%',
    positive: true,
    icon: TrendingUp,
    color: 'from-emerald-500/20 to-cyan-500/20',
    border: 'border-emerald-500/30'
  },
  {
    label: 'Avg. Engagement',
    value: '4.8%',
    change: '+2.3%',
    positive: true,
    icon: BarChart3,
    color: 'from-rose-500/20 to-purple-500/20',
    border: 'border-rose-500/30'
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-slate-400 mt-1">Welcome back, Brand! Here's what's happening today.</p>
        </div>
        <button className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm hover:bg-slate-800 transition-colors">
          This Month
        </button>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`p-5 rounded-xl bg-gradient-to-br ${stat.color} border ${stat.border} backdrop-blur-sm`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-purple-400" />
              </div>
              <span className={`flex items-center gap-1 text-xs ${stat.positive ? 'text-emerald-400' : 'text-rose-400'}`}>
                {stat.positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.change}
              </span>
            </div>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Two Column Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Top Performing Creators - Takes 2 columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Top Performing Creators</h2>
            <Link
              to="/analytics"
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              View All
            </Link>
          </div>

          <div className="space-y-3">
            {creators.slice(0, 3).map((creator, i) => (
              <motion.div
                key={creator.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <Link
                  to={`/creator/${creator.id}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-all group"
                >
                  <div className="text-center w-8">
                    <span className="font-bold text-purple-400">{i + 1}</span>
                  </div>
                  <img
                    src={creator.avatar}
                    alt={creator.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-700 group-hover:ring-purple-500/50 transition-all"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-white text-sm truncate">{creator.name}</p>
                      {i < 2 && <Star className="w-3 h-3 text-amber-400 fill-amber-400" />}
                    </div>
                    <p className="text-xs text-slate-500">{creator.category}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-white text-sm">{creator.followers}</div>
                    <div className="text-xs text-slate-500">Followers</div>
                  </div>
                  <div className="hidden sm:block text-center">
                    <div className="font-semibold text-purple-400 text-sm">{creator.engagement}%</div>
                    <div className="text-xs text-slate-500">Engagement</div>
                  </div>
                  <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-lg bg-slate-800/50">
                    <span className="font-bold text-purple-400">{creator.score}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Engagement Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm"
        >
          <h3 className="text-lg font-semibold text-white mb-6">Engagement Overview</h3>

          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-300 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rose-400" />
                  Likes
                </span>
                <span className="text-sm font-semibold text-white">8%</span>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '80%' }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="h-full bg-gradient-to-r from-rose-500 to-pink-500"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-300 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                  Comments
                </span>
                <span className="text-sm font-semibold text-white">2%</span>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '20%' }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-300 flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-green-400" />
                  Shares
                </span>
                <span className="text-sm font-semibold text-white">1%</span>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '10%' }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                />
              </div>
            </div>
          </div>

          <button className="w-full mt-6 px-4 py-2 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-300 text-sm font-medium hover:bg-purple-600/30 transition-colors">
            View Detailed Report
          </button>
        </motion.div>
      </div>

      {/* Campaign Performance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-white">Campaign Performance</h2>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-slate-700/50 transition-colors">
              <MoreHorizontal className="w-5 h-5 text-slate-400" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center h-32">
          <div className="relative w-24 h-24">
            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="rgba(100, 116, 139, 0.2)"
                strokeWidth="8"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="8"
                strokeDasharray="188.4"
                strokeDashoffset="0"
                initial={{ strokeDashoffset: 188.4 }}
                animate={{ strokeDashoffset: 47.1 }}
                transition={{ delay: 0.7, duration: 1 }}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#4f46e5" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-2xl font-bold text-white">68%</span>
              <span className="text-xs text-slate-500">Completed</span>
            </div>
          </div>

          <div className="ml-12">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-purple-500" />
                <span className="text-sm text-slate-300">Completed: 68%</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-slate-600" />
                <span className="text-sm text-slate-300">Draft: 22%</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-slate-700" />
                <span className="text-sm text-slate-300">Planning: 10%</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
