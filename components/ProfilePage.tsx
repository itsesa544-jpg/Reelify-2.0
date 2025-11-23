
import React from 'react';
import type { User } from '../types';
import { BackIcon, LinkIcon, SettingsIcon, ShareIcon } from '../constants';

interface ProfilePageProps {
  user: User;
  onBack: () => void;
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


const ProfilePage: React.FC<ProfilePageProps> = ({ user, onBack }) => {
  return (
    <div className="w-full h-full bg-[#1A1B20] overflow-y-auto">
      <div className="relative">
        <img src={user.coverPhoto} alt="Cover" className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <button onClick={onBack} className="absolute top-4 left-4 text-white z-10 bg-black/30 p-2 rounded-full hover:bg-black/60 transition-colors">
            <BackIcon />
        </button>
      </div>

      <div className="p-4 relative">
        <div className="absolute -top-16 left-4">
          <img src={user.avatar} alt={user.name} className="w-28 h-28 rounded-full border-4 border-[#1A1B20] object-cover" />
        </div>

        <div className="flex justify-end pt-4">
          <button className="bg-[#282A36] hover:bg-[#3b3d4d] text-white font-semibold py-2 px-6 rounded-full transition-colors mr-2">
            Observe
          </button>
          <button className="bg-[#282A36] hover:bg-[#3b3d4d] text-white font-semibold py-2 px-6 rounded-full transition-colors">
            Message
          </button>
        </div>

        <div className="mt-8">
            <h1 className="text-3xl font-bold text-white">{user.name}</h1>
            <p className="text-gray-400 mt-1">{user.bio}</p>
        </div>

        <div className="flex items-center space-x-3 mt-4">
            <IconButton><LinkIcon /></IconButton>
            <IconButton><SettingsIcon /></IconButton>
            <IconButton><ShareIcon /></IconButton>
        </div>
      </div>
      
      <div className="p-4 mt-2">
        <div className="bg-[#282A36]/50 p-4 rounded-xl">
            <h2 className="text-lg font-semibold text-white mb-4">Overview Section</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatItem value={user.stats.observers} label="Observers" />
                <StatItem value={user.stats.observing} label="Observing" />
                <StatItem value={user.stats.totalViews} label="Total Views" />
                <StatItem value={user.stats.joined} label="Joined, Dubai" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
