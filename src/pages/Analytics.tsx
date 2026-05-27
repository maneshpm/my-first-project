import { motion } from 'framer-motion';
import {
  Eye,
  Heart,
  MessageSquare,
  Share2,
  Users,
  TrendingUp,
  ArrowUpRight,
  Calendar,
  Download,
  MoreHorizontal
} from 'lucide-react';

const metrics = [
  {
    label: 'Total Impressions',
    value: '24.5M',
    change: '+18.2%',
    icon: Eye,
    color: 'from-cyan-500/20',
  },
  {
    label: 'Total Likes',
    value: '1.2M',
    change: '+12.8%',
    icon: Heart,
    color: 'from-rose-500/20',
  },
  {
    label: 'Total Engagement Rate',
    value: '4.8%',
    change: '+2.1%',
    icon: TrendingUp,
    color: 'from-emerald-500/20',
  },
  {
    label: 'Campaign ROI',
    value: '128',
    change: '+24.5%',
    icon: TrendingUp,
    color: 'from-purple-500/20',
  },
];

const weeklyData = [
  { day: 'May 1', impressions: 2400, engagement: 140 },
  { day: 'May 8', impressions: 2800, engagement: 180 },
  { day: 'May 15', impressions: 3200, engagement: 210 },
  { day: 'May 22', impressions: 2900, engagement: 190 },
  { day: 'May 29', impressions: 3100, engagement: 220 },
  { day: 'Jun 5', impressions: 3400, engagement: 240 },
];

const platformData = [
  { platform: 'YouTube', followers: '4.2M', percentage: 45, color: 'from-red-500 to-red-600' },
  { platform: 'Instagram', followers: '2.8M', percentage: 30, color: 'from-pink-500 to-purple-500' },
  { platform: 'TikTok', followers: '1.5M', percentage: 16, color: 'from-black to-gray-800' },
  { platform: 'LinkedIn', followers: '650K', percentage: 7, color: 'from-blue-600 to-blue-700' },
];

const audienceData = [
  { ageGroup: '13-17', percentage: 15 },
  { ageGroup: '18-24', percentage: 28 },
  { ageGroup: '25-34', percentage: 35 },
  { ageGroup: '35-44', percentage: 15 },
  { ageGroup: '45+', percentage: 7 },
];

export default function Analytics() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-white">Analytics</h1>
          <p className="text-slate-400 mt-1">Track engagement metrics and audience insights</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm hover:bg-slate-800 transition-colors">
            <Calendar className="w-4 h-4" />
            May 1 - May 31
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm hover:bg-slate-800 transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </motion.div>

      {/* Metrics Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {metrics.map((metric, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`p-5 rounded-xl bg-gradient-to-br ${metric.color} to-slate-800/30 border border-slate-700/50 backdrop-blur-sm`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center">
                <metric.icon className="w-5 h-5 text-purple-400" />
              </div>
              <span className="flex items-center gap-1 text-xs text-emerald-400">
                <ArrowUpRight className="w-3 h-3" />
                {metric.change}
              </span>
            </div>
            <div className="text-2xl font-bold text-white">{metric.value}</div>
            <div className="text-xs text-slate-500 mt-1">{metric.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Impressions & Engagement Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Impressions Over Time</h2>
            <button className="p-2 rounded-lg hover:bg-slate-700/50 transition-colors">
              <MoreHorizontal className="w-5 h-5 text-slate-400" />
            </button>
          </div>

          <div className="h-56 flex items-end justify-between gap-2">
            {weeklyData.map((data, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(data.impressions / 3400) * 100}%` }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                  className="w-full rounded-t-lg bg-gradient-to-t from-cyan-500 to-purple-500"
                />
                <span className="text-xs text-slate-500 mt-2">{data.day.split(' ')[1]}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Platform Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm"
        >
          <h2 className="text-lg font-semibold text-white mb-6">Reach by Platform</h2>

          <div className="space-y-4">
            {platformData.map((platform, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-300">{platform.platform}</span>
                  <span className="text-sm text-slate-500">{platform.followers}</span>
                </div>
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${platform.percentage}%` }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.8 }}
                    className={`h-full bg-gradient-to-r ${platform.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Audience Demographics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm"
      >
        <h2 className="text-lg font-semibold text-white mb-6">Audience Age Distribution</h2>

        <div className="grid md:grid-cols-5 gap-4">
          {audienceData.map((data, i) => (
            <div key={i} className="text-center">
              <div className="h-40 flex items-end justify-center mb-3">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(data.percentage / 35) * 100}%` }}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.8 }}
                  className="w-full bg-gradient-to-t from-purple-500 to-indigo-500 rounded-t-lg"
                />
              </div>
              <span className="text-sm font-medium text-white">{data.ageGroup}</span>
              <span className="text-xs text-slate-500">{data.percentage}%</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Engagement Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm"
      >
        <h2 className="text-lg font-semibold text-white mb-6">Engagement Breakdown</h2>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
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
                  stroke="url(#gradient1)"
                  strokeWidth="8"
                  strokeDasharray="200"
                  initial={{ strokeDashoffset: 200 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient1">
                    <stop offset="0%" stopColor="#f43f5e" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-2xl font-bold text-white">68%</span>
                <span className="text-xs text-slate-500">Likes</span>
              </div>
            </div>
            <p className="text-sm text-slate-400">845K Likes</p>
          </div>

          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
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
                  stroke="url(#gradient2)"
                  strokeWidth="8"
                  strokeDasharray="100"
                  initial={{ strokeDashoffset: 100 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ delay: 0.9, duration: 1 }}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient2">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-2xl font-bold text-white">22%</span>
                <span className="text-xs text-slate-500">Comments</span>
              </div>
            </div>
            <p className="text-sm text-slate-400">275K Comments</p>
          </div>

          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
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
                  stroke="url(#gradient3)"
                  strokeWidth="8"
                  strokeDasharray="50"
                  initial={{ strokeDashoffset: 50 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient3">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-2xl font-bold text-white">10%</span>
                <span className="text-xs text-slate-500">Shares</span>
              </div>
            </div>
            <p className="text-sm text-slate-400">125K Shares</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
