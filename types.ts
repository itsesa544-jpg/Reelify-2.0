

export interface User {
  username: string;
  avatar: string;
  name: string;
  bio: string;
  coverPhoto: string;
  stats: {
    observers: string;
    observing: string;
    totalViews: string;
    joined: string;
  };
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
  likes: string;
  comments: string;
  shares: string;
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
}
