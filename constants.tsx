
import React from 'react';
import type { Community, Video, ShopPost } from './types';

export const trendingTopics: string[] = ['#ARMagic', '#VibeGroove', '#LearnToCode', '#VibeGroove'];

export const featuredCommunities: Community[] = [
  { name: 'DanceVibe', icon: 'https://picsum.photos/seed/dance/100' },
  { name: 'FoodieCreators', icon: 'https://picsum.photos/seed/food/100' },
  { name: 'GamingGuild', icon: 'https://picsum.photos/seed/gaming/100' },
  { name: 'SkillShareHub', icon: 'https://picsum.photos/seed/skill/100' },
];

export const videosData: Video[] = [
  {
    id: 1,
    user: {
      username: '@maria_khan',
      name: 'Maria_Khan',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Content Creator | Storyteller | Traveler. ✨',
      coverPhoto: 'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      stats: {
        observers: '1.2M',
        observing: '350',
        totalViews: '50M',
        joined: 'Jan 2022'
      }
    },
    title: "Hidden Gems of Italy",
    videoUrl: 'https://videos.pexels.com/video-files/8357591/8357591-hd_720_1366_25fps.mp4',
    posterUrl: 'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Feeling the neon vibes tonight! Creating some awesome AR magic.',
    hashtags: ['#ARMagic', '#VibeGroove'],
    music: 'Ooolala Heenkoist - Busy P.',
    likes: '1.5K',
    comments: '25.7K',
    shares: '15.1K',
  },
  {
    id: 2,
    user: {
      username: '@dance_dynamo',
      name: 'Alex Dynamo',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Just here to dance. 🕺💃',
      coverPhoto: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      stats: {
        observers: '892K',
        observing: '150',
        totalViews: '35M',
        joined: 'Mar 2021'
      }
    },
    title: "Urban Dance Flow",
    videoUrl: 'https://videos.pexels.com/video-files/4434242/4434242-hd_720_1366_25fps.mp4',
    posterUrl: 'https://images.pexels.com/videos/4434242/pexels-photo-4434242.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    caption: 'New moves for the #VibeGroove challenge! Who is with me?',
    hashtags: ['#DanceChallenge', '#VibeGroove'],
    music: 'Groove Machine - Funky Town',
    likes: '1.1K',
    comments: '12.3K',
    shares: '8.4K',
  },
  {
    id: 3,
    user: {
      username: '@code_creator',
      name: 'Samira Chen',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Coding tutorials and tech talks. 💻',
      coverPhoto: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      stats: {
        observers: '540K',
        observing: '210',
        totalViews: '22M',
        joined: 'May 2022'
      }
    },
    title: "React in 60 Seconds",
    videoUrl: 'https://videos.pexels.com/video-files/7578544/7578544-hd_720_1366_25fps.mp4',
    posterUrl: 'https://images.pexels.com/videos/7578544/pexels-photo-7578544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    caption: 'Quick tutorial on building a React component. #LearnToCode',
    hashtags: ['#LearnToCode', '#ReactJS'],
    music: 'Lo-fi Beats to Code To - Study Mix',
    likes: '381',
    comments: '18.9K',
    shares: '11.2K',
  },
  {
    id: 4,
    user: {
      username: '@maria_khan',
      name: 'Maria_Khan',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Content Creator | Storyteller | Traveler. ✨',
      coverPhoto: 'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      stats: {
        observers: '1.2M',
        observing: '350',
        totalViews: '50M',
        joined: 'Jan 2022'
      }
    },
    title: "Morning Coffee",
    videoUrl: 'https://videos.pexels.com/video-files/8357591/8357591-hd_720_1366_25fps.mp4',
    posterUrl: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'A perfect start to the day.',
    hashtags: ['#coffee', '#morning'],
    music: 'Acoustic Breeze - Bensound',
    likes: '94',
    comments: '1.2K',
    shares: '300',
  },
  {
    id: 5,
    user: {
      username: '@maria_khan',
      name: 'Maria_Khan',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Content Creator | Storyteller | Traveler. ✨',
      coverPhoto: 'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      stats: {
        observers: '1.2M',
        observing: '350',
        totalViews: '50M',
        joined: 'Jan 2022'
      }
    },
    title: "City Lights",
    videoUrl: 'https://videos.pexels.com/video-files/8357591/8357591-hd_720_1366_25fps.mp4',
    posterUrl: 'https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'City that never sleeps.',
    hashtags: ['#city', '#night'],
    music: 'Electronic Vibes - Mixkit',
    likes: '280',
    comments: '3.5K',
    shares: '800',
  },
];

export const shopPostsData: ShopPost[] = [
  {
    id: 1,
    imageUrl: 'https://images.pexels.com/photos/1793525/pexels-photo-1793525.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Cyberpunk Cityscape Canvas',
    price: '$89.99',
    seller: {
      name: 'Future Art',
      avatar: 'https://picsum.photos/seed/seller1/100',
    },
  },
  {
    id: 2,
    imageUrl: 'https://images.pexels.com/photos/2088205/pexels-photo-2088205.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Holographic AR Filter Pack',
    price: '$19.99',
    seller: {
      name: 'Vibe Filters',
      avatar: 'https://picsum.photos/seed/seller2/100',
    },
  },
  {
    id: 3,
    imageUrl: 'https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Luminous Sole Sneakers',
    price: '$149.50',
    seller: {
      name: 'GlowGear',
      avatar: 'https://picsum.photos/seed/seller3/100',
    },
  },
  {
    id: 4,
    imageUrl: 'https://images.pexels.com/photos/3944377/pexels-photo-3944377.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Portable RGB Light Stick',
    price: '$75.00',
    seller: {
      name: 'Creator Tools',
      avatar: 'https://picsum.photos/seed/seller4/100',
    },
  },
  {
    id: 5,
    imageUrl: 'https://images.pexels.com/photos/716107/pexels-photo-716107.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'VibeWave Oversized Hoodie',
    price: '$65.00',
    seller: {
      name: 'Vibe Apparel',
      avatar: 'https://picsum.photos/seed/seller5/100',
    },
  },
  {
    id: 6,
    imageUrl: 'https://images.pexels.com/photos/3183164/pexels-photo-3183164.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Neon Room Sign "VIBE"',
    price: '$120.00',
    seller: {
      name: 'Neon Dreams',
      avatar: 'https://picsum.photos/seed/seller6/100',
    },
  },
];


export const VibeLogo = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
        <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#c026d3" />
            </linearGradient>
        </defs>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="url(#logoGradient)" strokeWidth="2" fill="none" />
    </svg>
);

export const CloseIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const UploadIcon = ({ className = "w-8 h-8 text-purple-400" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
);

export const CameraIcon = ({ className = "w-8 h-8 text-cyan-400" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const TemplatesIcon = ({ className = "w-8 h-8 text-pink-400" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
);

export const BackIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

export const LinkIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
);

export const SettingsIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const ShareIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8m-4-6l-4-4m0 0l-4 4m4-4v12" />
    </svg>
);

export const SearchIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

export const VideosIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

export const ShopIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);

export const PhotosIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

export const OverviewIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

export const PlayIconSimple = ({ className = "w-3 h-3" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
    </svg>
);

export const GalleryIcon = ({ className = "w-4 h-4" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect x="3" y="3" width="13" height="13" rx="2"></rect>
        <path d="M8 21h11a2 2 0 002-2V8"></path>
    </svg>
);

export const HomeIcon = ({ className = "w-6 h-6", active = false }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

export const ForYouIcon = ({ className = "w-6 h-6", active = false }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
    </svg>
);

export const ProfileIcon = ({ className = "w-6 h-6", active = false }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);
