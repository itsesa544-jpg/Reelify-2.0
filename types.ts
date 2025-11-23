
export interface User {
  username: string;
  avatar: string;
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
  caption: string;
  hashtags: string[];
  music: string;
  likes: string;
  comments: string;
  shares: string;
}
