import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search,
  Filter,
  Star,
  Users,
  DollarSign,
  TrendingUp,
  MoreHorizontal,
  CheckCircle
} from 'lucide-react';
import { useState } from 'react';

const brands = [
  {
    id: 1,
    name: 'REVOLVE',
    logo: 'https://images.pexels.com/photos/1484527/pexels-photo-1484527.jpeg?w=150',
    category: 'Fashion',
    followers: '3.2M',
    verified: true,
    rating: 4.8,
    reviews: 234,
    totalCollaborations: 156,
    avgPayout: '$8,500',
    activeCampaigns: 3,
  },
  {
    id: 2,
    name: 'Apple',
    logo: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?w=150',
    category: 'Tech',
    followers: '5.1M',
    verified: true,
    rating: 4.9,
    reviews: 567,
    totalCollaborations: 234,
    avgPayout: '$12,500',
    activeCampaigns: 2,
  },
  {
    id: 3,
    name: 'Glossier',
    logo: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?w=150',
    category: 'Beauty',
    followers: '2.8M',
    verified: true,
    rating: 4.7,
    reviews: 345,
    totalCollaborations: 189,
    avgPayout: '$6,800',
    activeCampaigns: 4,
  },
  {
    id: 4,
    name: 'Lululemon',
    logo: 'https://images.pexels.com/photos/3621519/pexels-photo-3621519.jpeg?w=150',
    category: 'Fitness',
    followers: '4.2M',
    verified: true,
    rating: 4.8,
    reviews: 456,
    totalCollaborations: 203,
    avgPayout: '$7,200',
    activeCampaigns: 3,
  },
  {
    id: 5,
    name: 'Airbnb',
    logo: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?w=150',
    category: 'Travel',
    followers: '6.5M',
    verified: true,
    rating: 4.9,
    reviews: 678,
    totalCollaborations: 312,
    avgPayout: '$10,500',
    activeCampaigns: 5,
  },
  {
    id: 6,
    name: 'Notion',
    logo: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?w=150',
    category: 'Tech',
    followers: '1.8M',
    verified: true,
    rating: 4.6,
    reviews: 289,
    totalCollaborations: 145,
    avgPayout: '$5,200',
    activeCampaigns: 2,
  },
];

export default function Brands() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ['All', 'Fashion', 'Tech', 'Beauty', 'Fitness', 'Travel'];

  const filteredBrands = brands.filter(brand => {
    const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === 'All' || brand.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div>
          <h1 className="text-3xl font-bold text-white">Discover Brands</h1>
          <p className="text-slate-400 mt-1">Connect with top brands seeking creators</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
            <Search className="w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search brands..."
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

      {/* Brands Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredBrands.map((brand, i) => (
          <motion.div
            key={brand.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="group p-6 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 backdrop-blur-xl hover:border-purple-500/30 transition-all"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-14 h-14 rounded-lg object-cover ring-2 ring-slate-700 group-hover:ring-purple-500/50 transition-all"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {brand.name}
                    </h3>
                    {brand.verified && (
                      <CheckCircle className="w-4 h-4 text-purple-400 fill-purple-400" />
                    )}
                  </div>
                  <p className="text-xs text-slate-500">{brand.category}</p>
                </div>
              </div>

              <button className="p-2 rounded-lg hover:bg-slate-700/50 transition-colors opacity-0 group-hover:opacity-100">
                <MoreHorizontal className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            {/* Stats */}
            <div className="space-y-3 mb-4 pb-4 border-t border-slate-700/50">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400 flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-400" />
                  Rating
                </span>
                <span className="font-semibold text-white">
                  {brand.rating} ({brand.reviews})
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400 flex items-center gap-1">
                  <Users className="w-4 h-4 text-cyan-400" />
                  Collaborations
                </span>
                <span className="font-semibold text-white">{brand.totalCollaborations}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400 flex items-center gap-1">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  Avg. Payout
                </span>
                <span className="font-semibold text-white">{brand.avgPayout}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400 flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                  Active Campaigns
                </span>
                <span className="font-semibold text-white">{brand.activeCampaigns}</span>
              </div>
            </div>

            {/* Followers */}
            <div className="mb-4 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
              <p className="text-xs text-slate-500 mb-1">Social Followers</p>
              <p className="font-semibold text-white">{brand.followers}</p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Link
                to={`/brand/${brand.id}`}
                className="flex-1 px-4 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm transition-colors text-center"
              >
                View Profile
              </Link>
              <button className="flex-1 px-4 py-2.5 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-slate-300 font-semibold text-sm transition-colors">
                Follow
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredBrands.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-20"
        >
          <Search className="w-12 h-12 text-slate-700 mb-4" />
          <p className="text-slate-400 mb-2">No brands found</p>
          <p className="text-slate-500 text-sm">Try adjusting your search or filters</p>
        </motion.div>
      )}
    </div>
  );
}
