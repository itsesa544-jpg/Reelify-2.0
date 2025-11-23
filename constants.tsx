
import React from 'react';
import type { Community, Video } from './types';

export const trendingTopics: string[] = ['#ARMagic', '#VibeGroove', '#LearnToCode', '#VibeGroove'];

export const featuredCommunities: Community[] = [
  { name: 'DanceVibe', icon: 'https://picsum.photos/seed/dance/100' },
  { name: 'FoodieCreators', icon: 'https://picsum.photos/seed/food/100' },
  { name: 'GamingGuild', icon: 'https://picsum.photos/seed/gaming/100' },
  { name: 'SkillShareHub', icon: 'https://picsum.photos/seed/skill/100' },
];

export const videoData: Video = {
  id: 1,
  user: {
    username: '@coille_shape',
    avatar: 'https://picsum.photos/seed/coille/100',
  },
  videoUrl: 'https://videos.pexels.com/video-files/8357591/8357591-hd_720_1366_25fps.mp4',
  posterUrl: 'https://images.pexels.com/videos/8357591/pexels-photo-8357591.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  caption: 'Feeling the neon vibes tonight! Creating some awesome AR magic.',
  hashtags: ['#ARMagic', '#VibeGroove'],
  music: 'Ooolala Heenkoist - Busy P.',
  likes: '1.2M',
  comments: '25.7K',
  shares: '15.1K',
};

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
