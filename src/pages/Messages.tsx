import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search,
  Send,
  Paperclip,
  MoreHorizontal,
  Clock,
  CheckCircle,
  AlertCircle,
  Phone,
  Video,
  Info
} from 'lucide-react';
import { useState } from 'react';

const conversations = [
  {
    id: 1,
    brand: 'REVOLVE',
    logo: 'https://images.pexels.com/photos/1484527/pexels-photo-1484527.jpeg?w=100',
    campaign: 'Summer Collection Launch',
    lastMessage: 'We loved your application! Let\'s discuss the details.',
    timestamp: '2 hours ago',
    unread: true,
    status: 'waiting' as const,
  },
  {
    id: 2,
    brand: 'Apple',
    logo: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?w=100',
    campaign: 'Tech Gadget Review',
    lastMessage: 'Thanks for completing the campaign! Payment sent.',
    timestamp: '1 day ago',
    unread: false,
    status: 'completed' as const,
  },
  {
    id: 3,
    brand: 'Glossier',
    logo: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?w=100',
    campaign: 'Skincare Product Launch',
    lastMessage: 'Can you provide more details about your audience demographics?',
    timestamp: '3 days ago',
    unread: true,
    status: 'waiting' as const,
  },
  {
    id: 4,
    brand: 'Lululemon',
    logo: 'https://images.pexels.com/photos/3621519/pexels-photo-3621519.jpeg?w=100',
    campaign: 'Fitness & Wellness Partnership',
    lastMessage: 'We\'re all set! The campaign starts next week.',
    timestamp: '5 days ago',
    unread: false,
    status: 'accepted' as const,
  },
];

const messages = [
  {
    id: 1,
    sender: 'brand',
    text: 'We loved your application for the Summer Collection campaign!',
    timestamp: '2 hours ago',
  },
  {
    id: 2,
    sender: 'brand',
    text: 'Your engagement rates perfectly match our target audience. We\'d love to work with you.',
    timestamp: '2 hours ago',
  },
  {
    id: 3,
    sender: 'user',
    text: 'Thank you so much! I\'m really excited about this opportunity.',
    timestamp: '1 hour ago',
  },
  {
    id: 4,
    sender: 'user',
    text: 'When would you like to start?',
    timestamp: '1 hour ago',
  },
  {
    id: 5,
    sender: 'brand',
    text: 'We can start next week! Let me send you the detailed brief.',
    timestamp: '58 minutes ago',
  },
  {
    id: 6,
    sender: 'brand',
    text: 'Here\'s the deliverables list and content guidelines. Please review and let me know if you have any questions.',
    timestamp: '58 minutes ago',
  },
];

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [messageText, setMessageText] = useState('');

  const handleSendMessage = () => {
    if (messageText.trim()) {
      setMessageText('');
    }
  };

  return (
    <div className="h-[calc(100vh-200px)] flex gap-6">
      {/* Conversations List */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full lg:w-96 flex flex-col bg-slate-800/30 border border-slate-700/50 rounded-2xl backdrop-blur-sm"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-700/50">
          <h2 className="text-lg font-semibold text-white mb-4">Messages</h2>

          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-700/30 border border-slate-700/50">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="bg-transparent border-none outline-none text-sm text-slate-300 placeholder-slate-500 flex-1"
            />
          </div>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto space-y-1 p-3">
          {conversations.map((conversation, i) => (
            <motion.button
              key={conversation.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedConversation(conversation)}
              className={`w-full p-3 rounded-lg transition-all text-left ${
                selectedConversation.id === conversation.id
                  ? 'bg-purple-600/20 border border-purple-500/30'
                  : 'hover:bg-slate-700/30'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="relative">
                  <img
                    src={conversation.logo}
                    alt={conversation.brand}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  {conversation.unread && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-purple-500 rounded-full" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-white text-sm truncate">
                      {conversation.brand}
                    </p>
                    {conversation.status === 'completed' && (
                      <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                    )}
                    {conversation.status === 'waiting' && (
                      <Clock className="w-3 h-3 text-orange-400 flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-slate-500 truncate">
                    {conversation.campaign}
                  </p>
                  <p className="text-xs text-slate-400 truncate mt-1">
                    {conversation.lastMessage}
                  </p>
                </div>

                <span className="text-xs text-slate-500 flex-shrink-0 mt-1">
                  {conversation.timestamp}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Chat Window */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden lg:flex flex-1 flex-col bg-slate-800/30 border border-slate-700/50 rounded-2xl backdrop-blur-sm overflow-hidden"
      >
        {/* Chat Header */}
        <div className="p-6 border-b border-slate-700/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={selectedConversation.logo}
              alt={selectedConversation.brand}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-white">{selectedConversation.brand}</h3>
              <p className="text-sm text-slate-500">{selectedConversation.campaign}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-slate-700/50 transition-colors text-slate-400 hover:text-white">
              <Phone className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg hover:bg-slate-700/50 transition-colors text-slate-400 hover:text-white">
              <Video className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg hover:bg-slate-700/50 transition-colors text-slate-400 hover:text-white">
              <Info className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg hover:bg-slate-700/50 transition-colors text-slate-400 hover:text-white">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message, i) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-700/50 text-slate-300'
                }`}
              >
                <p className="text-sm mb-1">{message.text}</p>
                <p className={`text-xs ${message.sender === 'user' ? 'text-purple-100' : 'text-slate-500'}`}>
                  {message.timestamp}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input */}
        <div className="p-6 border-t border-slate-700/50">
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors text-slate-400 hover:text-white">
              <Paperclip className="w-5 h-5" />
            </button>

            <input
              type="text"
              placeholder="Type your message..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 px-4 py-2 rounded-lg bg-slate-700/30 border border-slate-700/50 text-white placeholder-slate-500 outline-none focus:border-purple-500/50 transition-colors"
            />

            <button
              onClick={handleSendMessage}
              className="p-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors text-white"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Chat Placeholder */}
      <div className="lg:hidden flex-1 flex items-center justify-center rounded-2xl bg-slate-800/30 border border-slate-700/50">
        <div className="text-center">
          <MessageCircle className="w-12 h-12 text-slate-700 mx-auto mb-4" />
          <p className="text-slate-400">Select a conversation to start chatting</p>
        </div>
      </div>
    </div>
  );
}

function MessageCircle(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
