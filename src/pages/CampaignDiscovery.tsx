import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search,
  Filter,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  Heart,
  Share2,
  Zap,
  Star,
  MessageCircle,
  ArrowUpRight
} from 'lucide-react';
import { useState } from 'react';

const campaigns = [
  {
    id: 1,
    title: 'Summer Fashion Collection Launch',
    brand: 'REVOLVE',
    logo: 'https://images.pexels.com/photos/1484527/pexels-photo-1484527.jpeg?w=100',
    budget: '$5,000 - $15,000',
    deliverables: '3 Posts + 2 Reels',
    deadline: 'June 30',
    daysLeft: 14,
    category: 'Fashion',
    match: 94,
    applicants: 156,
    followers: '1M+',
    engagementRate: '8.5%',
    saved: false,
  },
  {
    id: 2,
    title: 'Tech Gadget Review Campaign',
    brand: 'Apple',
    logo: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?w=100',
    budget: '$8,000 - $25,000',
    deliverables: '4 Posts + 1 Video',
    deadline: 'July 15',
    daysLeft: 29,
    category: 'Tech',
    match: 91,
    applicants: 234,
    followers: '500K+',
    engagementRate: '7.2%',
    saved: false,
  },
  {
    id: 3,
    title: 'Fitness & Wellness Brand Partnership',
    brand: 'Lululemon',
    logo: 'https://images.pexels.com/photos/3621519/pexels-photo-3621519.jpeg?w=100',
    budget: '$3,500 - $12,000',
    deliverables: '5 Posts + Stories',
    deadline: 'June 15',
    daysLeft: 5,
    category: 'Fitness',
    match: 88,
    applicants: 89,
    followers: '250K+',
    engagementRate: '9.1%',
    saved: false,
  },
  {
    id: 4,
    title: 'Skincare Product Launch',
    brand: 'Glossier',
    logo: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?w=100',
    budget: '$4,000 - $18,000',
    deliverables: '3 Posts + 2 Reels + TikTok',
    deadline: 'July 1',
    daysLeft: 15,
    category: 'Beauty',
    match: 89,
    applicants: 345,
    followers: '2M+',
    engagementRate: '8.9%',
    saved: false,
  },
  {
    id: 5,
    title: 'Lifestyle Content Creation',
    brand: 'Airbnb',
    logo: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?w=100',
    budget: '$6,000 - $20,000',
    deliverables: '6 Posts + Video Series',
    deadline: 'August 10',
    daysLeft: 45,
    category: 'Lifestyle',
    match: 92,
    applicants: 178,
    followers: '800K+',
    engagementRate: '8.2%',
    saved: false,
  },
  {
    id: 6,
    title: 'Productivity Tools Promotion',
    brand: 'Notion',
    logo: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?w=100',
    budget: '$2,500 - $10,000',
    deliverables: '4 Posts + Tutorial Video',
    deadline: 'July 20',
    daysLeft: 34,
    category: 'Tech',
    match: 87,
    applicants: 112,
    followers: '600K+',
    engagementRate: '7.8%',
    saved: false,
  },
];

export default function CampaignDiscovery() {
  const [savedCampaigns, setSavedCampaigns] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ['All', 'Fashion', 'Tech', 'Beauty', 'Fitness', 'Lifestyle'];

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campaign.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === 'All' || campaign.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleSave = (id: number) => {
    setSavedCampaigns(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div>
          <h1 className="text-3xl font-bold text-white">Campaign Marketplace</h1>
          <p className="text-slate-400 mt-1">Discover brand partnerships perfectly matched for you</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
            <Search className="w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search campaigns or brands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none outline-none text-white placeholder-slate-500 flex-1"
            />
          </div>
          <button className="px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white transition-colors flex items-center gap-2">
            <Filter className="w-5 h-5" />
            <span className="hidden sm:inline">Filters</span>
          </button>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat === 'All' ? null : cat)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                (cat === 'All' && !selectedCategory) || selectedCategory === cat
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:border-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Campaign Cards Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        className="grid gap-6"
      >
        {filteredCampaigns.map((campaign, i) => (
          <motion.div
            key={campaign.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="group p-6 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 backdrop-blur-xl hover:border-purple-500/30 transition-all"
          >
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Campaign Info */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {campaign.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      <img
                        src={campaign.logo}
                        alt={campaign.brand}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-medium text-slate-300">{campaign.brand}</p>
                        <p className="text-xs text-slate-500">{campaign.category}</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleSave(campaign.id)}
                    className="p-2 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 transition-all ${
                        savedCampaigns.includes(campaign.id)
                          ? 'fill-rose-400 text-rose-400'
                          : 'text-slate-400'
                      }`}
                    />
                  </button>
                </div>

                {/* Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-slate-300">
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                    <span>{campaign.budget}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Target className="w-4 h-4 text-cyan-400" />
                    <span>{campaign.deliverables}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Clock className="w-4 h-4 text-orange-400" />
                    <span>Deadline: {campaign.deadline} ({campaign.daysLeft} days left)</span>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="lg:col-span-1 space-y-3">
                <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
                  <p className="text-xs text-slate-500 mb-1">Min. Followers</p>
                  <p className="font-semibold text-white">{campaign.followers}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
                  <p className="text-xs text-slate-500 mb-1">Min. Engagement</p>
                  <p className="font-semibold text-white">{campaign.engagementRate}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
                  <p className="text-xs text-slate-500 mb-1">Applicants</p>
                  <p className="font-semibold text-white">{campaign.applicants}</p>
                </div>
              </div>

              {/* Match & Actions */}
              <div className="lg:col-span-1 flex flex-col justify-between">
                {/* Match Score */}
                <div className="flex items-center justify-center w-full h-24 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">{campaign.match}%</div>
                    <div className="text-xs text-slate-400 mt-1">Match Score</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2 mt-4">
                  <button className="px-4 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm transition-colors">
                    Apply Now
                  </button>
                  <Link
                    to={`/brand/${campaign.id}`}
                    className="px-4 py-2.5 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-slate-300 font-semibold text-sm transition-colors text-center"
                  >
                    View Brand
                  </Link>
                </div>
              </div>
            </div>

            {/* Status Indicator */}
            {campaign.daysLeft <= 7 && (
              <div className="mt-4 pt-4 border-t border-slate-700/50">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-medium">
                  <Zap className="w-3 h-3" />
                  Closing Soon
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredCampaigns.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-20"
        >
          <Search className="w-12 h-12 text-slate-700 mb-4" />
          <p className="text-slate-400 mb-2">No campaigns found</p>
          <p className="text-slate-500 text-sm">Try adjusting your search or filters</p>
        </motion.div>
      )}
    </div>
  );
}
