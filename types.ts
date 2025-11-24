
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
  music: string;
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
