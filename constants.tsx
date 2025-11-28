

import React from 'react';
import type { Community, Video, ShopPost, Conversation, Notification, GalleryMedia, User } from './types';

export const trendingTopics: string[] = ['#ARMagic', '#VibeGroove', '#LearnToCode', '#VibeGroove'];

export const featuredCommunities: Community[] = [
  { name: 'DanceVibe', icon: 'https://picsum.photos/seed/dance/100' },
  { name: 'FoodieCreators', icon: 'https://picsum.photos/seed/food/100' },
  { name: 'GamingGuild', icon: 'https://picsum.photos/seed/gaming/100' },
  { name: 'SkillShareHub', icon: 'https://picsum.photos/seed/skill/100' },
];

export const mariaKhan: User = {
  username: '@maria_khan',
  name: 'Maria_Khan',
  avatar: 'https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=800',
  bio: 'Content Creator | Storyteller | Traveler. ✨ Exploring the world one frame at a time and sharing stories that inspire, captivate, and move you. Join me on this incredible journey!',
  coverPhoto: 'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  stats: {
    observers: '1.2M',
    observing: '350',
    totalViews: '50M',
    joined: 'Jan 2022'
  },
  observing: ['@dance_dynamo']
};

const alexDynamo: User = {
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
  },
  observing: ['@code_creator']
};

const samiraChen: User = {
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
  },
  observing: []
};

const jasmineFoodie: User = {
  username: '@food_blogger',
  name: 'Jasmine Foodie',
  avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  bio: 'Exploring the world one dish at a time. 🍲',
  coverPhoto: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  stats: {
    observers: '750K',
    observing: '400',
    totalViews: '42M',
    joined: 'Feb 2021'
  },
  observing: []
};

const tusharEmran: User = {
  username: 'Tushar Emran',
  name: 'Tushar Emran',
  avatar: 'https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-1/410065022_122108394412120192_8828020922442294136_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG71M-r8L2Y4sTfL7vB0L76_z5b5dJ5zZn_Plvl0nnNmd2mFk-t79v9l-L8z1g1K0g4h2iA134uU3M7_119lQYc&_nc_ohc=y-m-qFwL4k4Q7kNvgFX0uDx&_nc_ht=scontent.fdac135-1.fna&oh=00_AYDBuylbIeMLa_0yY13tWjIq4G_tT33T7mY17k39T5_pTQ&oe=66567280',
  bio: 'Photographer',
  coverPhoto: '',
  stats: { observers: '', observing: '', totalViews: '', joined: ''},
  observing: [],
};


export const initialVideosData: Video[] = [
  {
    id: 1,
    user: mariaKhan,
    title: "Hidden Gems of Italy",
    videoUrl: 'https://videos.pexels.com/video-files/8357591/8357591-hd_720_1366_25fps.mp4',
    posterUrl: 'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Feeling the neon vibes tonight! Creating some awesome AR magic.',
    hashtags: ['#ARMagic', '#VibeGroove'],
    likes: '1.5K',
    comments: '25.7K',
    shares: '15.1K',
    audio: {
      title: 'Synthwave Dreams',
      artist: 'Vibe Tracks'
    }
  },
  {
    id: 2,
    user: alexDynamo,
    title: "Urban Dance Flow",
    videoUrl: 'https://videos.pexels.com/video-files/4434242/4434242-hd_720_1366_25fps.mp4',
    posterUrl: 'https://images.pexels.com/videos/4434242/pexels-photo-4434242.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    caption: 'New moves for the #VibeGroove challenge! Who is with me?',
    hashtags: ['#DanceChallenge', '#VibeGroove'],
    likes: '1.1K',
    comments: '12.3K',
    shares: '8.4K',
    audio: {
      title: 'City Groove',
      artist: 'Alex Dynamo'
    }
  },
  {
    id: 3,
    user: samiraChen,
    title: "React in 60 Seconds",
    videoUrl: 'https://videos.pexels.com/video-files/7578544/7578544-hd_720_1366_25fps.mp4',
    posterUrl: 'https://images.pexels.com/videos/7578544/pexels-photo-7578544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    caption: 'Quick tutorial on building a React component. #LearnToCode',
    hashtags: ['#LearnToCode', '#ReactJS'],
    likes: '381',
    comments: '18.9K',
    shares: '11.2K',
  },
  {
    id: 4,
    user: mariaKhan,
    title: "Morning Coffee",
    videoUrl: 'https://videos.pexels.com/video-files/8357591/8357591-hd_720_1366_25fps.mp4',
    posterUrl: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'A perfect start to the day.',
    hashtags: ['#coffee', '#morning'],
    likes: '94',
    comments: '1.2K',
    shares: '300',
  },
  {
    id: 5,
    user: mariaKhan,
    title: "City Lights",
    videoUrl: 'https://videos.pexels.com/video-files/8357591/8357591-hd_720_1366_25fps.mp4',
    posterUrl: 'https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'City that never sleeps.',
    hashtags: ['#city', '#night'],
    likes: '280',
    comments: '3.5K',
    shares: '800',
  },
];

export const shopPostsData: ShopPost[] = [
  { id: 1, imageUrl: 'https://picsum.photos/seed/product1/400/400', title: 'Aesthetic Vase', price: '$49.99', seller: { name: 'DecorFinds', avatar: 'https://picsum.photos/seed/seller1/50' }, rating: 4.8, description: 'A beautifully crafted ceramic vase to add a touch of elegance to your home. Perfect for fresh or dried flowers. Available in multiple colors.' },
  { id: 2, imageUrl: 'https://picsum.photos/seed/product2/400/400', title: 'Minimalist Lamp', price: '$89.00', seller: { name: 'LightUp', avatar: 'https://picsum.photos/seed/seller2/50' }, rating: 4.9, description: 'Sleek and modern minimalist desk lamp with adjustable brightness. Provides a warm, diffused light ideal for reading or working.' },
  { id: 3, imageUrl: 'https://picsum.photos/seed/product3/400/400', title: 'Cozy Knit Blanket', price: '$120.00', seller: { name: 'ComfyHome', avatar: 'https://picsum.photos/seed/seller3/50' }, rating: 4.7, description: 'Ultra-soft and chunky knit blanket, perfect for adding a cozy feel to your living room or bedroom. Made from 100% merino wool.' },
  { id: 4, imageUrl: 'https://picsum.photos/seed/product4/400/400', title: 'Abstract Wall Art', price: '$250.00', seller: { name: 'ArtHouse', avatar: 'https://picsum.photos/seed/seller4/50' }, rating: 4.6, description: 'A unique piece of abstract canvas art to be the centerpiece of any room. Hand-painted by our resident artist, with vibrant colors and textures.' },
];

export const galleryMediaData: GalleryMedia[] = [
    { 
      id: 1, 
      type: 'photo', 
      url: 'https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/410034449_122108394236120192_4380921085202473467_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF4tqL1X0g1eXQ2-4H_yT65F9a7V9nLAkUX1rtX2csCRbT7zYg93Xg5Dqf4Lw_Tz0yB7nB1D2-v0QYgC51c_uO2&_nc_ohc=WkU3oOk-8qgQ7kNvgEg99-I&_nc_ht=scontent.fdac135-1.fna&oh=00_AYB7q-PyFhN27m6hJz0G_GCHo3nVy5t1q8nO_xWl238-Ag&oe=665675F1', 
      thumbnailUrl: 'https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/410034449_122108394236120192_4380921085202473467_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF4tqL1X0g1eXQ2-4H_yT65F9a7V9nLAkUX1rtX2csCRbT7zYg93Xg5Dqf4Lw_Tz0yB7nB1D2-v0QYgC51c_uO2&_nc_ohc=WkU3oOk-8qgQ7kNvgEg99-I&_nc_ht=scontent.fdac135-1.fna&oh=00_AYB7q-PyFhN27m6hJz0G_GCHo3nVy5t1q8nO_xWl238-Ag&oe=665675F1',
      user: tusharEmran,
      caption: 'নির্বাচনের আগে আগে full Protection 🙂😂',
      timestamp: '1d',
      stats: {
        likes: '1.2K',
        comments: '150',
        shares: '50',
        views: '5.5K',
      },
    },
    { 
      id: 2, 
      type: 'video', 
      url: 'https://videos.pexels.com/video-files/4434242/4434242-hd_720_1366_25fps.mp4', 
      thumbnailUrl: 'https://images.pexels.com/videos/4434242/pexels-photo-4434242.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300' 
    },
    { 
      id: 3, 
      type: 'photo', 
      url: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800', 
      thumbnailUrl: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=300',
      user: jasmineFoodie,
      caption: 'A morning without coffee is like... sleep.',
      timestamp: '3d',
      stats: {
        likes: '2.5K',
        comments: '210',
        shares: '80',
        views: '10.1K',
      },
    },
    { 
      id: 4, 
      type: 'photo', 
      url: 'https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=800', 
      thumbnailUrl: 'https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=300',
      user: mariaKhan,
      caption: 'Lost in the city lights.',
      timestamp: '5d',
      stats: {
        likes: '8.1K',
        comments: '450',
        shares: '200',
        views: '35.8K',
      },
    },
    { 
      id: 5, 
      type: 'video', 
      url: 'https://videos.pexels.com/video-files/7578544/7578544-hd_720_1366_25fps.mp4', 
      thumbnailUrl: 'https://images.pexels.com/videos/7578544/pexels-photo-7578544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300' 
    },
    { 
      id: 6, 
      type: 'photo', 
      url: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800', 
      thumbnailUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=300',
      user: samiraChen,
      caption: 'Late night coding session. #womenintech',
      timestamp: '1w',
      stats: {
        likes: '1.8K',
        comments: '300',
        shares: '120',
        views: '9.2K',
      },
    },
    { 
      id: 7, 
      type: 'photo', 
      url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800', 
      thumbnailUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300',
      user: alexDynamo,
      caption: 'The energy was unreal last night!',
      timestamp: '2w',
      stats: {
        likes: '4.2K',
        comments: '500',
        shares: '250',
        views: '22.3K',
      },
    },
    { 
      id: 8, 
      type: 'video', 
      url: 'https://videos.pexels.com/video-files/8357591/8357591-hd_720_1366_25fps.mp4', 
      thumbnailUrl: 'https://images.pexels.com/videos/8357591/pexels-photo-8357591.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300' 
    },
];

export const conversationsData: Conversation[] = [
  {
    id: 1,
    user: alexDynamo,
    lastMessage: 'Sure, I will send it over by tonight!',
    timestamp: '5:45 PM',
    unread: 2,
    messages: [
      { id: 1, sender: 'other', text: 'Hey, did you get a chance to look at the draft?', timestamp: '5:40 PM' },
      { id: 2, sender: 'me', text: 'Hey Alex, yes I did. Looks great!', timestamp: '5:42 PM' },
      { id: 3, sender: 'other', text: 'Awesome! Can you add the final transitions?', timestamp: '5:44 PM' },
      { id: 4, sender: 'me', text: 'Sure, I will send it over by tonight!', timestamp: '5:45 PM' },
    ],
  },
  {
    id: 2,
    user: samiraChen,
    lastMessage: 'You: Perfect, thanks!',
    timestamp: '3:10 PM',
    unread: 0,
    messages: [
      { id: 1, sender: 'other', text: 'The new component is ready for review.', timestamp: '3:05 PM' },
      { id: 2, sender: 'me', text: 'Perfect, thanks!', timestamp: '3:10 PM' },
    ],
  },
   {
    id: 3,
    user: jasmineFoodie,
    lastMessage: 'That recipe was amazing!',
    timestamp: 'Yesterday',
    unread: 0,
    messages: [
       { id: 1, sender: 'me', text: 'That recipe was amazing!', timestamp: 'Yesterday' },
    ],
  },
];

export const notificationsData: Notification[] = [
  {
    id: 1,
    type: 'like',
    user: alexDynamo,
    post: { id: 1, thumbnail: initialVideosData[0].posterUrl },
    read: false,
    timestamp: '2m ago',
  },
  {
    id: 2,
    type: 'comment',
    user: samiraChen,
    post: { id: 1, thumbnail: initialVideosData[0].posterUrl },
    read: false,
    timestamp: '15m ago',
  },
  {
    id: 3,
    type: 'follow',
    user: jasmineFoodie,
    read: true,
    timestamp: '1h ago',
  },
    {
    id: 4,
    type: 'like',
    user: samiraChen,
    post: { id: 2, thumbnail: initialVideosData[1].posterUrl },
    read: true,
    timestamp: '3h ago',
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

export const CameraIcon = ({ className = "w-8 h-8 text-cyan-400" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const BackIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

export const EditProfileIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L16.732 3.732z" />
    </svg>
);

export const SettingsIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066 2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
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

export const ShopIcon = ({ className = "w-5 h-5", active = false }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);

export const PhotosIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
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

export const DiscoverIcon = ({ className = "w-6 h-6", active = false }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 8.5L8.5 15.5M8.5 8.5l-2.121 2.121" />
    </svg>
);

export const ProfileIcon = ({ className = "w-6 h-6", active = false }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

export const InboxIcon = ({ className = "w-6 h-6", active = false }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

export const NotificationIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
);

export const LikeIcon = ({ className = "w-5 h-5 text-red-500" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    </svg>
);

export const CommentIcon = ({ className = "w-5 h-5 text-cyan-400" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.157-3.471A8.962 8.962 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.416 11.584A6.962 6.962 0 004 10c0-2.667 2.686-5 6-5s6 2.333 6 5-2.686 5-6 5a6.962 6.962 0 01-1.584-.233L6.5 14.5l-2.084-2.916z" clipRule="evenodd" />
    </svg>
);

export const CheckmarkIcon = ({ className = "w-4 h-4 text-black" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
);

export const VideoIconSimple = ({ className = "w-5 h-5 text-white drop-shadow-lg" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
    </svg>
);

export const HashtagIcon = ({ className = "w-4 h-4" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
    </svg>
);

export const AtIcon = ({ className = "w-4 h-4" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
    </svg>
);

export const ContentDisclosureIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

export const ChevronRightIcon = ({ className = "w-4 h-4" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);

export const LockIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);

export const ChatBubbleIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

export const DuetIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 16.5A5.5 5.5 0 105.5 11 5.5 5.5 0 0011 16.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.5 11A5.5 5.5 0 1113 5.5 5.5 5.5 0 0118.5 11z" />
    </svg>
);

export const UploadIcon = ({ className = "w-8 h-8 text-purple-400" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
  </svg>
);

export const TemplatesIcon = ({ className = "w-8 h-8 text-pink-400" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

export const PublishIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);

export const ShopBagIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);

export const MusicNoteIcon = ({ className = "w-4 h-4" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
    </svg>
);

export const TextIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-4-8h8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 8h1" />
    </svg>
);

export const StickersIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.5 7.5c-1.2-1.2-3.1-1.2-4.2 0L12 12.7 6.7 7.5c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2L7.8 17 2.5 22.2c-1.2 1.2-1.2 3.1 0 4.2 1.2 1.2 3.1 1.2 4.2 0L12 21.2l5.3 5.3c1.2 1.2 3.1 1.2 4.2 0 1.2-1.2 1.2-3.1 0-4.2L16.2 17l5.3-5.3c1.2-1.2 1.2-3.1 0-4.2z" />
    </svg>
);

export const FiltersIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.5l-6 6h12l-6-6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.5l-6 6h12l-6-6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5l-6 6h12l-6-6z" />
    </svg>
);

export const CropIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 1H1v6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 1h6v6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 23H1v-6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 23h6v-6" />
    </svg>
);

export const PrivacySettingsIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm0 2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
);

export const HeartIconFilled = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    </svg>
);

export const CommentBubbleIconSimple = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v7a2 2 0 01-2 2H8.828a1 1 0 00-.707.293L4 18.586V14a2 2 0 01-2-2V5z" />
    </svg>
);

export const ShareIconSimple = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
    </svg>
);

export const EyeIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.018 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
    </svg>
);

// FIX: Explicitly typed StarIcon as a React.FC to allow React-specific props like `key`, resolving errors when it's used in lists.
export const StarIcon: React.FC<{ className?: string; filled?: boolean }> = ({ className = "w-5 h-5", filled = true }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);