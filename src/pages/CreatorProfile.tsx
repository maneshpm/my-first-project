import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import {
  Heart,
  MessageSquare,
  Share2,
  Star,
  MapPin,
  Link as LinkIcon,
  Mail,
  Send,
  MoreHorizontal,
  TrendingUp,
  Users,
  Eye,
  BarChart3,
  CheckCircle,
  Zap
} from 'lucide-react';

const creatorData = {
  id: 1,
  name: 'Ali Abdaal',
  username: '@aliabdaal',
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=400',
  cover: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?w=1200',
  bio: 'Productivity Hacker | Yale CS + Medicine',
  location: 'London, UK',
  followers: '4.2M',
  following: 345,
  posts: 1230,
  engagementRate: 8.6,
  score: 96.4,
  verified: true,
  avgLikes: '45.2K',
  avgComments: '2.1K',
  avgShares: '892',
  monthlyGrowth: '+12.5%',
};

const stats = [
  { label: 'Total Followers', value: '4.2M', icon: Users, color: 'from-purple-500/20' },
  { label: 'Total Posts', value: '1.2K', icon: BarChart3, color: 'from-cyan-500/20' },
  { label: 'Total Impressions', value: '68.2M', icon: Eye, color: 'from-emerald-500/20' },
  { label: 'Engagement Rate', value: '8.6%', icon: TrendingUp, color: 'from-rose-500/20' },
];

const recentPosts = [
  { title: 'How to Build Multiple Income Streams', engagementRate: 12.3 },
  { title: 'My Favorite Productivity Tools 2024', engagementRate: 10.8 },
  { title: 'YouTube Algorithm Secrets Revealed', engagementRate: 14.2 },
];

const topBrands = [
  'Apple',
  'Google',
  'Notion',
  'Skillshare',
  'MasterClass',
  'LinkedIn'
];

export default function CreatorProfile() {
  const { id } = useParams();

  return (
    <div className="space-y-6">
      {/* Cover Section */}
      <div className="relative h-40 lg:h-48 rounded-2xl overflow-hidden">
        <img
          src={creatorData.cover}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-6 py-4 lg:px-8 flex items-end justify-between">
          <div className="relative">
            <img
              src={creatorData.avatar}
              alt={creatorData.name}
              className="w-20 h-20 lg:w-24 lg:h-24 rounded-xl object-cover ring-4 ring-slate-950"
            />
            {creatorData.verified && (
              <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center ring-2 ring-slate-950">
                <CheckCircle className="w-4 h-4 text-white fill-white" />
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <button className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </button>
            <button className="px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors flex items-center gap-2">
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Contact Creator</span>
            </button>
          </div>
        </div>
      </div>

      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-white">{creatorData.name}</h1>
            {creatorData.verified && <Star className="w-6 h-6 text-amber-400 fill-amber-400" />}
          </div>
          <p className="text-slate-400">{creatorData.username}</p>
        </div>

        <p className="text-slate-300 max-w-2xl">{creatorData.bio}</p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {creatorData.location}
          </span>
          <span className="flex items-center gap-1">
            <LinkIcon className="w-4 h-4" />
            aliabdaal.com
          </span>
        </div>

        {/* Key Stats */}
        <div className="flex flex-wrap gap-6 pt-4 border-t border-slate-800/50">
          <div>
            <div className="text-2xl font-bold text-white">{creatorData.followers}</div>
            <div className="text-sm text-slate-500">Followers</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">{creatorData.following}</div>
            <div className="text-sm text-slate-500">Following</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400">{creatorData.engagementRate}%</div>
            <div className="text-sm text-slate-500">Engagement</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-400">+{creatorData.monthlyGrowth}</div>
            <div className="text-sm text-slate-500">Monthly Growth</div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`p-4 rounded-xl bg-gradient-to-br ${stat.color} to-slate-800/30 border border-slate-700/50 backdrop-blur-sm`}
          >
            <div className="flex items-center gap-2 mb-3">
              <stat.icon className="w-4 h-4 text-slate-400" />
            </div>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Content Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm"
        >
          <h2 className="text-lg font-semibold text-white mb-6">Recent Content Performance</h2>

          <div className="space-y-4">
            {recentPosts.map((post, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors">
                <div className="flex-1">
                  <p className="font-medium text-white text-sm">{post.title}</p>
                  <p className="text-xs text-slate-500 mt-1">Published 2 days ago</p>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-purple-400 text-sm">{post.engagementRate}%</div>
                  <div className="text-xs text-slate-500">Engagement</div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 px-4 py-2 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-300 text-sm font-medium hover:bg-purple-600/30 transition-colors">
            View All Posts
          </button>
        </motion.div>

        {/* Engagement Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm"
        >
          <h3 className="text-lg font-semibold text-white mb-6">Avg. Post Metrics</h3>

          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-4 h-4 text-rose-400" />
                <span className="text-sm text-slate-300">Likes</span>
              </div>
              <p className="text-2xl font-bold text-white">{creatorData.avgLikes}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-slate-300">Comments</span>
              </div>
              <p className="text-2xl font-bold text-white">{creatorData.avgComments}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Share2 className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-slate-300">Shares</span>
              </div>
              <p className="text-2xl font-bold text-white">{creatorData.avgShares}</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-700/50">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-slate-300">Engagement Score</span>
            </div>
            <p className="text-3xl font-bold text-purple-400">{creatorData.score}</p>
          </div>
        </motion.div>
      </div>

      {/* Brand Partnerships */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm"
      >
        <h2 className="text-lg font-semibold text-white mb-4">Brand Collaborations</h2>

        <div className="flex flex-wrap gap-3">
          {topBrands.map((brand) => (
            <span
              key={brand}
              className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm font-medium"
            >
              {brand}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Back Link */}
      <Link
        to="/dashboard"
        className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors pt-4"
      >
        ← Back to Dashboard
      </Link>
    </div>
  );
}
