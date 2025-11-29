import React from 'react';
import type { PhotoPost } from '../types';
import { VerifiedBadgeIcon, GlobeIcon, MoreHorizIcon, CloseIcon } from '../constants';

interface PhotoPostCardProps {
  post: PhotoPost;
}

const PhotoPostCard: React.FC<PhotoPostCardProps> = ({ post }) => {
  return (
    <div className="bg-[#181520] rounded-lg mb-4">
      {/* Header */}
      <div className="p-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={post.user.avatar} alt={post.user.name} className="w-10 h-10 rounded-full" />
          <div>
            <div className="flex items-center gap-1">
              <p className="font-bold text-white">{post.user.name}</p>
              {post.user.isVerified && <VerifiedBadgeIcon className="w-4 h-4 text-blue-500" />}
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <span>{post.timestamp}</span>
              <span>•</span>
              <GlobeIcon />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 text-gray-400">
          <button className="hover:text-white"><MoreHorizIcon /></button>
          <button className="hover:text-white"><CloseIcon className="w-5 h-5" /></button>
        </div>
      </div>

      {/* Caption */}
      <div className="px-3 pb-3">
        <p className="text-white">{post.caption}</p>
      </div>

      {/* Image */}
      <div className="w-full bg-black flex justify-center">
        <img src={post.imageUrl} alt="Post content" className="max-h-[70vh] w-auto" />
      </div>
       {/* Actions placeholder - can be added later */}
       <div className="p-3 border-t border-white/10">
          <p className="text-xs text-gray-500">Likes, comments, and shares will be here.</p>
       </div>
    </div>
  );
};

export default PhotoPostCard;
