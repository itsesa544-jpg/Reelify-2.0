import React, { useState, useRef } from 'react';
import type { PhotoPost } from '../types';
import { VerifiedBadgeIcon, GlobeIcon, MoreHorizIcon, CloseIcon, HeartIconFilled, CommentBubbleIconSimple, ShareIconSimple, EyeIcon, formatNumber } from '../constants';

interface PhotoPostCardProps {
  post: PhotoPost;
  onReactionSelect: (postId: number, reaction: string) => void;
}

const reactions = ['❤️', '😥', '🤣', '💓', '🥰', '🤭'];

const ReactionButton: React.FC<{ post: PhotoPost, onReactionSelect: (postId: number, reaction: string) => void }> = ({ post, onReactionSelect }) => {
    const [isPopoverVisible, setIsPopoverVisible] = useState(false);
    const holdTimer = useRef<number | null>(null);

    const handleMouseDown = () => {
        holdTimer.current = window.setTimeout(() => {
            setIsPopoverVisible(true);
        }, 400);
    };

    const handleMouseUp = () => {
        if (holdTimer.current) {
            clearTimeout(holdTimer.current);
            holdTimer.current = null;
        }
        if (!isPopoverVisible) {
            handleLikeClick();
        }
    };
    
    const handleMouseLeave = () => {
        if (holdTimer.current) {
            clearTimeout(holdTimer.current);
            holdTimer.current = null;
        }
        setIsPopoverVisible(false);
    };
    
    const handleLikeClick = () => {
        // Toggle default 'like'
        onReactionSelect(post.id, '❤️');
    };

    const handleReactionSelect = (reaction: string) => {
        onReactionSelect(post.id, reaction);
        setIsPopoverVisible(false);
    };
    
    const getReactionIcon = () => {
        if (post.myReaction && reactions.includes(post.myReaction)) {
            return <span className="text-xl">{post.myReaction}</span>;
        }
        return <HeartIconFilled className="w-5 h-5" />;
    };

    return (
        <div 
            className="relative" 
            onMouseLeave={handleMouseLeave}
        >
            {isPopoverVisible && (
                <div className="absolute bottom-full mb-2 flex items-center gap-2 bg-[#282A36] p-2 rounded-full shadow-lg border border-gray-700">
                    {reactions.map(reaction => (
                        <button 
                            key={reaction} 
                            onClick={() => handleReactionSelect(reaction)}
                            className="text-2xl transform transition-transform duration-150 hover:scale-125"
                        >
                            {reaction}
                        </button>
                    ))}
                </div>
            )}
            <button
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onTouchStart={handleMouseDown}
                onTouchEnd={handleMouseUp}
                className={`flex items-center gap-2 transition-colors ${post.myReaction ? 'text-teal-400' : 'text-teal-500 hover:text-teal-400'}`}
            >
                {getReactionIcon()}
                <span className="font-semibold text-sm">{formatNumber(post.stats?.likes || 0)}</span>
            </button>
        </div>
    );
};


const ActionItem: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
    <div className="flex items-center gap-2 text-teal-500 hover:text-teal-400 cursor-pointer transition-colors">
        {icon}
        <span className="font-semibold text-sm">{label}</span>
    </div>
);

const PhotoPostCard: React.FC<PhotoPostCardProps> = ({ post, onReactionSelect }) => {
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
      
       {/* Actions */}
       {post.stats && (
           <div className="p-3 border-t border-white/10">
              <div className="flex items-center justify-around">
                  <ReactionButton post={post} onReactionSelect={onReactionSelect} />
                  <ActionItem icon={<CommentBubbleIconSimple className="w-5 h-5" />} label={formatNumber(post.stats.comments)} />
                  <ActionItem icon={<ShareIconSimple className="w-5 h-5" />} label={formatNumber(post.stats.shares)} />
                  <ActionItem icon={<EyeIcon className="w-5 h-5" />} label={formatNumber(post.stats.views)} />
              </div>
           </div>
       )}
    </div>
  );
};

export default PhotoPostCard;