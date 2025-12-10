import React from 'react';
import type { Video, User } from '../types';

interface VideoInfoProps {
  video: Video;
  onSelectUser: (user: User) => void;
}

const VideoInfo: React.FC<VideoInfoProps> = ({ video, onSelectUser }) => {
  return (
    <div className="text-white space-y-2 max-w-[80%]">
      <button onClick={() => onSelectUser(video.user)} className="font-bold text-lg text-left hover:underline drop-shadow-md">
        {video.user.username}
      </button>
      <p className="text-sm drop-shadow-md leading-relaxed">
        {video.caption} {' '}
        {video.hashtags.map((tag, i) => (
          <span key={i} className="font-bold text-white cursor-pointer mr-1">
            {tag}
          </span>
        ))}
      </p>
    </div>
  );
};

export default VideoInfo;