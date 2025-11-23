
import React, { useState } from 'react';
import type { User } from '../types';
import { 
  BackIcon, LinkIcon, SettingsIcon, ShareIcon, videosData,
  SearchIcon, VideosIcon, JobsIcon, PhotosIcon, OverviewIcon
} from '../constants';

interface ProfilePageProps {
  user: User;
  onBack: () => void;
  showBackButton: boolean;
}

const IconButton: React.FC<{children: React.ReactNode}> = ({children}) => (
    <button className="w-10 h-10 bg-[#282A36]/80 rounded-full flex items-center justify-center text-gray-300 hover:bg-[#3b3d4d] transition-colors">
        {children}
    </button>
);

const StatItem: React.FC<{value: string; label: string}> = ({value, label}) => (
    <div className="text-center md:text-left">
        <p className="text-xl font-bold text-white">{value}</p>
        <p className="text-sm text-gray-400">{label}</p>
    </div>
);

const ProfileTab: React.FC<{icon: React.ReactNode, label: string, active?: boolean}> = ({ icon, label, active }) => (
  <button className={`flex items-center gap-2 py-3 px-4 rounded-lg transition-colors ${active ? 'bg-gray-700/50' : 'hover:bg-gray-800/50'}`}>
    {icon}
    <span className={`font-semibold ${active ? 'text-white' : 'text-gray-400'}`}>{label}</span>
  </button>
);

const PostCard: React.FC<{video: (typeof videosData)[0]}> = ({ video }) => (
  <div className="bg-[#1A1B20] rounded-xl overflow-hidden">
    <img src={video.posterUrl} alt={video.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-white text-lg">{video.title}</h3>
      <div className="flex items-center gap-2 mt-2">
        <img src={video.user.avatar} alt={video.user.name} className="w-6 h-6 rounded-full" />
        <span className="text-sm text-gray-400">{video.user.name}</span>
      </div>
      <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
        </svg>
        <span>{video.likes} views</span>
      </div>
    </div>
  </div>
);


const ProfilePage: React.FC<ProfilePageProps> = ({ user, onBack, showBackButton }) => {
  const userVideos = videosData.filter(video => video.user.username === user.username);
  const [activeTab, setActiveTab] = useState('Videos');

  return (
    <div className="w-full h-full bg-[#0D0F13] overflow-y-auto">
      {/* Header */}
      <header className="p-4 bg-[#1A1B20]/80 backdrop-blur-sm sticky top-0 z-20 flex items-center gap-4">
        {showBackButton && (
          <button onClick={onBack} className="text-white">
            <BackIcon />
          </button>
        )}
        <div className="relative flex-grow">
          <SearchIcon className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
          <input type="text" placeholder="Search videos..." className="bg-[#282A36] text-white w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </div>
        <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full" />
      </header>
      
      {/* Profile Info */}
      <div className="relative">
        <img src={user.coverPhoto} alt="Cover" className="w-full h-36 object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="p-4 relative">
        <div className="absolute -top-14 left-4">
          <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full border-4 border-[#0D0F13] object-cover" />
        </div>

        <div className="flex justify-end pt-2">
            <div className="flex flex-col items-end gap-3">
                <div className="flex">
                    <button className="bg-[#282A36] hover:bg-[#3b3d4d] text-white font-semibold py-2 px-5 rounded-lg transition-colors mr-2">
                        Observe
                    </button>
                    <button className="bg-[#282A36] hover:bg-[#3b3d4d] text-white font-semibold py-2 px-5 rounded-lg transition-colors">
                        Message
                    </button>
                