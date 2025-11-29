
export interface User {
  username: string;
  avatar: string;
  name: string;
  isVerified?: boolean;
  bio: string;
  coverPhoto: string;
  stats: {
    observers: number;
    observing: number;
    totalViews: number;
    joined: string;
  };
  observing: string[];
}

export interface Community {
  name: string;
  icon: string;
}

export interface Video {
  id: number;
  user: User;
  videoUrl: string;
  posterUrl: string;
  title: string;
  caption: string;
  hashtags: string[];
  likes: number;
  comments: number;
  shares: number;
  audio?: {
    title: string;
    artist: string;
  };
  musicCoverUrl?: string;
}

export interface ShopPost {
  id: number;
  imageUrl: string;
  title: string;
  price: string;
  seller: {
    name: string;
    avatar: string;
  };
  description: string;
  rating: number;
}

export interface Message {
  id: number;
  sender: 'me' | 'other';
  text: string;
  timestamp: string;
}

export interface Conversation {
  id: number;
  user: User;
  lastMessage: string;
  timestamp: string;
  unread: number;
  messages: Message[];
}

export interface Notification {
  id: number;
  type: 'like' | 'comment' | 'follow';
  user: User;
  post?: {
    id: number;
    thumbnail: string;
  };
  read: boolean;
  timestamp: string;
}

export interface GalleryMedia {
  id: number;
  type: 'photo' | 'video';
  url: string;
  thumbnailUrl: string;
  user?: User;
  caption?: string;
  timestamp?: string;
  stats?: {
    likes: number;
    comments: number;
    shares: number;
    views: number;
  };
}

export interface PhotoPost {
  id: number;
  user: User;
  timestamp: string;
  caption: string;
  imageUrl: string;
}
