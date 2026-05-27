import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Target,
  Users,
  DollarSign,
  TrendingUp,
  Search,
  Filter,
  Star,
  ArrowUpRight,
  Send,
  MoreHorizontal,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';

const stats = [
  {
    label: 'Active Campaigns',
    value: '12',
    change: '+3',
    icon: Target,
    color: 'from-purple-500/20',
  },
  {
    label: 'Creator Partners',
    value: '156',
    change: '+24',
    icon: Users,
    color: 'from-cyan-500/20',
  },
  {
    label: 'Total Spend',
    value: '$124.5K',
    change: '+18%',
    icon: DollarSign,
    color: 'from-emerald-500/20',
  },
  {
    label: 'Average ROI',
    value: '320%',
    change: '+42%',
    icon: TrendingUp,
    color: 'from-rose-500/20',
  },
];

const creators = [
  {
    id: 1,
    name: 'Alex Rivera',
    handle: '@alexrivera',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=150',
    category: 'Tech',
    followers: '520K',
    engagement: 9.2,
    match: 98,
    price: '$2,500',
  },
  {
    id: 2,
    name: 'Maya Johnson',
    handle: '@mayajohnson',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=150',
    category: 'Fashion',
    followers: '890K',
    engagement: 7.8,
    match: 95,
    price: '$3,200',
  },
  {
    id: 3,
    name: 'Chris Taylor',
    handle: '@christaylor',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=150',
    category: 'Fitness',
    followers: '340K',
    engagement: 8.5,
    match: 92,
    price: '$1,800',
  },
  {
    id: 4,
    name: 'Jordan Lee',
    handle: '@jordanlee',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?w=150',
    category: 'Lifestyle',
    followers: '1.1M',
    engagement: 6.9,
    match: 88,
    price: '$4,500',
  },
];

const campaigns = [
  {
    id: 1,
    name: 'Summer Collection 2024',
    creators: 8,
    budget: '$24,000',
    spend: '$18,500',
    roi: '280%',
    status: 'Active',
    progress: 75,
  },
  {
    id: 2,
    name: 'Product Launch Q2',
    creators: 12,
    budget: '$36,000',
    spend: '$32,400',
    roi: '320%',
    status: 'Active',
    progress: 85,
  },
  {
    id: 3,
    name: 'Brand Awareness',
    creators: 15,
    budget: '$45,000',
    spend: '$45,000',
    roi: '410%',
    status: 'Completed',
    progress: 100,
  },
];

const recentActivity = [
  { type: 'completed', title: 'Campaign "Summer Collection" reached 1M impressions', time: '2 hours ago' },
  { type: 'pending', title: '5 new creator applications for Q3 campaigns', time: '4 hours ago' },
  { type: 'warning', title: 'Campaign performance below target for "Tech Sync"', time: '6 hours ago' },
];

export default function BrandDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-white">Brand Dashboard</h1>
          <p className="text-slate-400 mt-1">Manage campaigns and discover creators</p>
        </div>

        <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors w-fit">
          <Send className="w-4 h-4" />
          New Campaign
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
            className={`p-5 rounded-xl bg-gradient-to-br ${stat.color} to-slate-800/30 border border-slate-700/50 backdrop-blur-sm`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-purple-400" />
              </div>
              <span className="flex items-center gap-1 text-xs text-emerald-400">
                <ArrowUpRight className="w-3 h-3" />
                {stat.change}
              </span>
            </div>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Creator Discovery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Discover Creators</h2>
            <Link
              to="/creator/1"
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              View All
            </Link>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-700/30 border border-slate-700/50">
              <Search className="w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search creators..."
                className="bg-transparent border-none outline-none text-sm text-slate-300 placeholder-slate-500 flex-1"
              />
            </div>
            <button className="p-2 rounded-lg bg-slate-700/30 border border-slate-700/50 text-slate-400 hover:text-white transition-colors">
              <Filter className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            {creators.map((creator, i) => (
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

                  <div className="hidden sm:flex items-center gap-4">
                    <div className="text-center">
                      <div className="font-semibold text-white text-xs">{creator.followers}</div>
                      <div className="text-xs text-slate-500">Followers</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-purple-400 text-xs">{creator.engagement}%</div>
                      <div className="text-xs text-slate-500">Engagement</div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-sm ${
                      creator.match >= 95 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                      'bg-slate-800/50 border border-slate-700/50 text-slate-400'
                    }`}>
                      {creator.match}
                    </div>
                  </div>

                  <div className="hidden lg:block px-3 py-1 rounded-lg bg-slate-800/50 border border-slate-700/50 text-white font-semibold text-xs">
                    {creator.price}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>

          <div className="space-y-3">
            {recentActivity.map((activity, i) => (
              <div key={i} className="flex gap-3 pb-3 border-b border-slate-700/50 last:border-0">
                <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                  activity.type === 'completed' ? 'bg-emerald-500/20' :
                  activity.type === 'pending' ? 'bg-blue-500/20' :
                  'bg-rose-500/20'
                }`}>
                  {activity.type === 'completed' && <CheckCircle className="w-4 h-4 text-emerald-400" />}
                  {activity.type === 'pending' && <Clock className="w-4 h-4 text-blue-400" />}
                  {activity.type === 'warning' && <AlertCircle className="w-4 h-4 text-rose-400" />}
                </div>
                <div>
                  <p className="text-sm text-slate-300">{activity.title}</p>
                  <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
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
          <h2 className="text-lg font-semibold text-white">Active Campaigns</h2>
          <Link
            to="/analytics"
            className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="space-y-4">
          {campaigns.map((campaign, i) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="p-4 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-sm">{campaign.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{campaign.creators} creators • {campaign.budget}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  campaign.status === 'Active'
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-slate-600/50 text-slate-400'
                }`}>
                  {campaign.status}
                </span>
              </div>

              <div className="space-y-2 mb-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Progress</span>
                  <span className="text-white font-semibold">{campaign.progress}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-600 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${campaign.progress}%` }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.8 }}
                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-xs">
                  <span className="text-slate-500">Spend: </span>
                  <span className="text-slate-300 font-semibold">{campaign.spend}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500">ROI: </span>
                  <span className="text-emerald-400 font-bold">{campaign.roi}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ROI Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="grid md:grid-cols-3 gap-4"
      >
        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/10 border border-purple-500/30 backdrop-blur-sm">
          <div className="text-slate-400 text-sm mb-2">Total Investment</div>
          <div className="text-3xl font-bold text-white mb-4">$124.5K</div>
          <div className="flex items-center gap-2 text-emerald-400 text-xs">
            <ArrowUpRight className="w-4 h-4" />
            <span>18% vs last quarter</span>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/30 backdrop-blur-sm">
          <div className="text-slate-400 text-sm mb-2">Generated Revenue</div>
          <div className="text-3xl font-bold text-white mb-4">$398.4K</div>
          <div className="flex items-center gap-2 text-emerald-400 text-xs">
            <ArrowUpRight className="w-4 h-4" />
            <span>24% vs last quarter</span>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/10 border border-emerald-500/30 backdrop-blur-sm">
          <div className="text-slate-400 text-sm mb-2">Average ROI</div>
          <div className="text-3xl font-bold text-white mb-4">320%</div>
          <div className="flex items-center gap-2 text-emerald-400 text-xs">
            <ArrowUpRight className="w-4 h-4" />
            <span>42% vs industry avg</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
