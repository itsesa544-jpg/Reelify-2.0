
import React from 'react';
import type { Video } from '../types';

interface VideoInfoProps {
  video: Video;
}

const VideoInfo: React.FC<VideoInfoProps> = ({ video }) => {
  return (
    <div className="text-white space-y-2 max-w-[80%]">
      <h3 className="font-bold text-lg">{video.user.username}</h3>
      <p className="text-sm">
        {video.caption} {' '}
        {video.hashtags.map((tag, i) => (
          <span key={i} className="font-bold text-cyan-300 cursor-pointer">
            {tag}
          </span>
        ))}
      </p>
      <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V3z" />
        </svg>
        <p className="text-sm font-medium">{video.music}</p>
      </div>
    </div>
  );
};

export default VideoInfo;
