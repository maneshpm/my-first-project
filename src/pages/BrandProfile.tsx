import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import {
  Star,
  MapPin,
  Globe,
  Users,
  TrendingUp,
  DollarSign,
  MessageCircle,
  Send,
  MoreHorizontal,
  CheckCircle,
  Award,
  BarChart3,
  Calendar,
  ArrowUpRight
} from 'lucide-react';

const brandData = {
  id: 1,
  name: 'REVOLVE',
  logo: 'https://images.pexels.com/photos/1484527/pexels-photo-1484527.jpeg?w=400',
  cover: 'https://images.pexels.com/photos/1536882/pexels-photo-1536882.jpeg?w=1200',
  bio: 'Global fashion and lifestyle brand connecting creators with premium apparel and accessories.',
  location: 'Los Angeles, CA',
  website: 'revolve.com',
  verified: true,
  rating: 4.8,
  totalReviews: 234,
  avgPayout: '$8,500',
  totalCollaborations: 156,
  paymentSpeed: '7 days',
  responseTime: '2 hours',
  followers: '3.2M',
};

const activeCampaigns = [
  { id: 1, title: 'Summer Collection Launch', budget: '$5K - $15K', deadline: 'June 30', applicants: 156, status: 'Active' },
  { id: 2, title: 'New Arrivals Showcase', budget: '$3K - $10K', deadline: 'July 15', applicants: 98, status: 'Active' },
  { id: 3, title: 'Seasonal Campaign', budget: '$6K - $18K', deadline: 'August 1', applicants: 145, status: 'Active' },
];

const pastCollaborations = [
  {
    creator: 'Emma Wilson',
    handle: '@emmawilson',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=100',
    campaign: 'Holiday Sale Campaign',
    date: 'December 2023',
    performance: '12.5K likes',
    rating: 5.0,
  },
  {
    creator: 'Alex Rivera',
    handle: '@alexrivera',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=100',
    campaign: 'Spring Collection',
    date: 'March 2024',
    performance: '18.3K likes',
    rating: 4.9,
  },
  {
    creator: 'Maya Johnson',
    handle: '@mayajohnson',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=100',
    campaign: 'Summer Preview',
    date: 'May 2024',
    performance: '15.8K likes',
    rating: 4.8,
  },
];

const stats = [
  {
    label: 'Total Creators',
    value: '156',
    icon: Users,
    color: 'from-purple-500/20',
  },
  {
    label: 'Active Campaigns',
    value: '3',
    icon: TrendingUp,
    color: 'from-cyan-500/20',
  },
  {
    label: 'Avg. ROI',
    value: '280%',
    icon: BarChart3,
    color: 'from-emerald-500/20',
  },
  {
    label: 'Total Spend',
    value: '$1.3M',
    icon: DollarSign,
    color: 'from-rose-500/20',
  },
];

export default function BrandProfile() {
  const { id } = useParams();

  return (
    <div className="space-y-6">
      {/* Cover & Header */}
      <div className="relative h-40 lg:h-48 rounded-2xl overflow-hidden">
        <img
          src={brandData.cover}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-6 py-4 lg:px-8 flex items-end justify-between">
          <div className="relative">
            <img
              src={brandData.logo}
              alt={brandData.name}
              className="w-20 h-20 lg:w-24 lg:h-24 rounded-xl object-cover ring-4 ring-slate-950"
            />
            {brandData.verified && (
              <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center ring-2 ring-slate-950">
                <CheckCircle className="w-4 h-4 text-white fill-white" />
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <button className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5" />
            </button>
            <button className="px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors flex items-center gap-2">
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Contact Brand</span>
            </button>
          </div>
        </div>
      </div>

      {/* Brand Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-white">{brandData.name}</h1>
            {brandData.verified && <CheckCircle className="w-6 h-6 text-purple-400 fill-purple-400" />}
          </div>
          <p className="text-slate-400">{brandData.bio}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {brandData.location}
          </span>
          <span className="flex items-center gap-1">
            <Globe className="w-4 h-4" />
            {brandData.website}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {brandData.followers} followers
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 pt-4 border-t border-slate-800/50">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(brandData.rating) ? 'text-amber-400 fill-amber-400' : 'text-slate-700'}`}
              />
            ))}
          </div>
          <span className="font-semibold text-white">{brandData.rating}</span>
          <span className="text-slate-500">({brandData.totalReviews} reviews)</span>
        </div>
      </motion.div>

      {/* Key Metrics */}
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
            <div className="flex items-center gap-2 mb-2">
              <stat.icon className="w-4 h-4 text-slate-400" />
            </div>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Brand Details Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Payout & Speed Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm"
        >
          <h3 className="text-lg font-semibold text-white mb-6">Working Details</h3>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-400 mb-1">Average Payout</p>
              <p className="text-2xl font-bold text-emerald-400">{brandData.avgPayout}</p>
            </div>

            <div>
              <p className="text-sm text-slate-400 mb-1">Payment Speed</p>
              <p className="text-lg font-semibold text-white">{brandData.paymentSpeed}</p>
            </div>

            <div>
              <p className="text-sm text-slate-400 mb-1">Response Time</p>
              <p className="text-lg font-semibold text-white">{brandData.responseTime}</p>
            </div>

            <button className="w-full mt-4 px-4 py-2 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-300 text-sm font-medium hover:bg-purple-600/30 transition-colors">
              See All Campaigns
            </button>
          </div>
        </motion.div>

        {/* Active Campaigns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-2 p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Active Campaigns</h3>
            <Link to="/campaigns" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
              View All
            </Link>
          </div>

          <div className="space-y-3">
            {activeCampaigns.map((campaign, i) => (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-medium text-white text-sm">{campaign.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">{campaign.deadline}</p>
                  </div>
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400">
                    {campaign.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-emerald-400 font-semibold">{campaign.budget}</span>
                  <span className="text-slate-500">{campaign.applicants} applicants</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Past Collaborations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm"
      >
        <h3 className="text-lg font-semibold text-white mb-6">Creator Reviews & Past Collaborations</h3>

        <div className="space-y-4">
          {pastCollaborations.map((collab, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <img
                  src={collab.avatar}
                  alt={collab.creator}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-white">{collab.creator}</p>
                    <span className="text-xs text-slate-500">{collab.handle}</span>
                  </div>

                  <div className="flex items-center gap-1 my-1">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className={`w-3 h-3 ${j < Math.floor(collab.rating) ? 'text-amber-400 fill-amber-400' : 'text-slate-700'}`}
                      />
                    ))}
                    <span className="text-xs text-slate-400 ml-1">{collab.rating}</span>
                  </div>

                  <p className="text-sm text-slate-300">{collab.campaign}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mt-2">
                    <span>{collab.date}</span>
                    <span>{collab.performance}</span>
                  </div>
                </div>

                <div className="text-right text-sm">
                  <p className="font-semibold text-emerald-400">Great Work!</p>
                  <p className="text-xs text-slate-500">Recommended</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Back Link */}
      <Link
        to="/campaigns"
        className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors pt-4"
      >
        ← Back to Campaigns
      </Link>
    </div>
  );
}
