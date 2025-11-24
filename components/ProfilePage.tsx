
import React, { useState } from 'react';
import type { User } from '../types';
import { 
  BackIcon, EditProfileIcon, SettingsIcon, ShareIcon, videosData,
  VideosIcon, ShopIcon, PhotosIcon,
  PlayIconSimple, GalleryIcon
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
    <div className="text-center">
        <p className="text-base font-bold text-white">{value}</p>
        <p className="text-[11px] text-gray-400 uppercase tracking-wider">{label}</p>
    </div>
);

const ProfileTab: React.FC<{icon: React.ReactNode, label: string, active?: boolean, onClick: () => void}> = ({ icon, label, active, onClick }) => (
  <button onClick={onClick} className={`flex items-center gap-2 py-3 px-4 rounded-lg transition-colors ${active ? 'bg-gray-700/50' : 'hover:bg-gray-800/50'}`}>
    {icon}
    <span className={`font-semibold ${active ? 'text-white' : 'text-gray-400'}`}>{label}</span>
  </button>
);

const VideoGridItem: React.FC<{ video: (typeof videosData)[0]; index: number }> = ({ video, index }) => {
    const neonClasses = index % 4 < 2 
        ? "border-cyan-400 shadow-[0_0_8px_theme(colors.cyan.400)] group-hover:shadow-[0_0_15px_theme(colors.cyan.400)]" 
        : "border-fuchsia-500 shadow-[0_0_8px_theme(colors.fuchsia.500)] group-hover:shadow-[0_0_15px_theme(colors.fuchsia.500)]";

    return (
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group">
            <img src={video.posterUrl} alt={video.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className={`absolute inset-0 border-2 ${neonClasses} rounded-2xl pointer-events-none`}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none"></div>

            <div className="absolute top-2 right-2 text-white pointer-events-none">
                <GalleryIcon className="w-5 h-5" />
            </div>

            <div className="absolute bottom-2 left-2 flex items-center gap-1.5 text-white text-sm font-bold [text-shadow:_1px_1px_2px_rgb(0_0_0_/_80%)] pointer-events-none">
                <PlayIconSimple className="w-4 h-4" />
                <span>{video.likes}</span>
            </div>
        </div>
    );
};


const ProfilePage: React.FC<ProfilePageProps> = ({ user, onBack, showBackButton }) => {
  const userVideos = videosData.filter(video => video.user.username === user.username);
  const [activeTab, setActiveTab] = useState('Videos');
  const [isBioExpanded, setIsBioExpanded] = useState(false);
  
  const BioText: React.FC<{text: string}> = ({text}) => {
    const maxLength = 80;
    if (text.length <= maxLength) {
        return <p className="text-gray-400 mt-1">{text}</p>;
    }
    
    if (isBioExpanded) {
        return (
            <p className="text-gray-400 mt-1">
                {text}
                <button onClick={() => setIsBioExpanded(false)} className="text-cyan-400 font-semibold ml-2">See less</button>
            </p>
        );
    }
    
    return (
        <p className="text-gray-400 mt-1">
            {`${text.substring(0, maxLength)}...`}
            <button onClick={() => setIsBioExpanded(true)} className="text-cyan-400 font-semibold ml-2">See more</button>
        </p>
    );
  };

  return (
    <div className="w-full h-full bg-[#0D0F13] overflow-y-auto">
      {/* Profile Info */}
      <div className="relative">
        <img src={user.coverPhoto} alt="Cover" className="w-full h-36 object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        {showBackButton && (
            <button 
                onClick={onBack} 
                className="absolute top-4 left-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/75 transition-colors"
            >
              <BackIcon />
            </button>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start">
            {/* Left side: Avatar and subsequent info */}
            <div className="relative flex-shrink-0">
                <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="w-24 h-24 rounded-full border-4 border-[#0D0F13] object-cover -mt-14" 
                />
            </div>
            
            <div className="flex-grow flex justify-between items-start ml-4">
                 <div className="mt-0">
                    <h1 className="text-2xl font-bold text-white">{user.name}</h1>
                    <BioText text={user.bio} />
                </div>

                {/* Right side: Buttons */}
                <div className="flex flex-col items-end gap-3 pt-2 flex-shrink-0">
                    <div className="flex">
                        <button className="bg-[#282A36] hover:bg-[#3b3d4d] text-white font-semibold py-2 px-5 rounded-lg transition-colors mr-2">
                            Observe
                        </button>
                        <button className="bg-[#282A36] hover:bg-[#3b3d4d] text-white font-semibold py-2 px-5 rounded-lg transition-colors">
                            Message
                        </button>
                    </div>
                    <div className="flex items-center space-x-3">
                        <IconButton><EditProfileIcon /></IconButton>
                        <IconButton><SettingsIcon /></IconButton>
                        <IconButton><ShareIcon /></IconButton>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="p-4 pt-0">
        <div className="bg-[#1A1B20] p-3 rounded-xl">
            <div className="flex items-center justify-around">
                <StatItem value={user.stats.observers} label="Observers" />
                <div className="h-10 w-px bg-white/10"></div>
                <StatItem value={user.stats.observing} label="Observing" />
                <div className="h-10 w-px bg-white/10"></div>
                <StatItem value={user.stats.totalViews} label="Total Views" />
                <div className="h-10 w-px bg-white/10"></div>
                <StatItem value={`${user.stats.joined}`} label="Joined" />
            </div>
        </div>
      </div>

      {/* Tabs & Content */}
      <div className="px-4 mt-2 pb-4">
         <div className="flex items-center justify-around bg-[#1A1B20] p-1 rounded-xl">
           <ProfileTab icon={<VideosIcon />} label="Videos" active={activeTab === 'Videos'} onClick={() => setActiveTab('Videos')} />
           <ProfileTab icon={<ShopIcon />} label="Shop" active={activeTab === 'Shop'} onClick={() => setActiveTab('Shop')} />
           <ProfileTab icon={<PhotosIcon />} label="Photos" active={activeTab === 'Photos'} onClick={() => setActiveTab('Photos')} />
         </div>

         <div className="mt-4">
            {activeTab === 'Videos' && (
              <div className="grid grid-cols-3 gap-1">
                  {userVideos.map((video, index) => (
                    <VideoGridItem key={video.id} video={video} index={index} />
                  ))}
              </div>
            )}
            {activeTab === 'Shop' && (
              <div className="text-center py-10 text-gray-500">
                  <ShopIcon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold">This user's shop is empty.</h3>
                  <p>Check back later for cool products!</p>
              </div>
            )}
            {activeTab === 'Photos' && (
                <div className="text-center py-10 text-gray-500">
                    <PhotosIcon className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold">No photos yet.</h3>
                    <p>This user hasn't posted any photos.</p>
                </div>
            )}
         </div>
      </div>
    </div>
  );
};

export default ProfilePage;
