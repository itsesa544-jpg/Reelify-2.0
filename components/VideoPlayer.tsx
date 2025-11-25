

import React, { useRef, useEffect, useState } from 'react';
import { videosData, SearchIcon } from '../constants';
import VideoInfo from './VideoInfo';
import VideoActions from './VideoActions';
import type { Video, User } from '../types';
import type { View } from '../App';

interface VideoItemProps {
  video: Video;
  isActive: boolean;
  onSelectUser: (user: User) => void;
  onNavigate: (view: View) => void;
}

const VideoItem: React.FC<VideoItemProps> = ({ video, isActive, onSelectUser, onNavigate }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play().catch(error => {
          console.log("Autoplay prevented: ", error);
        });
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isActive]);

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={video.videoUrl}
        poster={video.posterUrl}
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end">
        <div className="flex-grow">
          <VideoInfo video={video} onSelectUser={onSelectUser} />
        </div>
        <div className="shrink-0">
          <VideoActions video={video} onSelectUser={onSelectUser} />
        </div>
      </div>
      
      {/* Shop Now Buttons */}
      <button 
        onClick={() => onNavigate('foryou')}
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cyan-400/80 backdrop-blur-sm text-black font-bold py-2 px-5 rounded-lg border-2 border-cyan-200 shadow-lg shadow-cyan-500/50 hover:bg-cyan-300 transition-all"
      >
        Shop Now
      </button>
       <button 
        onClick={() => onNavigate('foryou')}
        className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-purple-500/80 backdrop-blur-sm text-white font-bold py-2 px-5 rounded-lg border-2 border-purple-300 shadow-lg shadow-purple-500/50 hover:bg-purple-400 transition-all"
       >
        Shop Now
      </button>

    </div>
  );
};

interface VideoPlayerProps {
  onSelectUser: (user: User) => void;
  onNavigate: (view: View) => void;
  currentView: View;
}

const NavTab: React.FC<{ label: string; active: boolean; onClick: () => void }> = ({ label, active, onClick }) => (
  <button 
    onClick={onClick} 
    className={`relative py-1 text-lg font-semibold transition-colors duration-200 ${active ? 'text-white' : 'text-gray-400 hover:text-white'}`}
  >
    {label}
    {active && 
      <div className="absolute bottom-[-4px] left-0 right-0 h-1 bg-white rounded-full"></div>
    }
  </button>
);


const VideoPlayer: React.FC<VideoPlayerProps> = ({ onSelectUser, onNavigate, currentView }) => {
    const [currentVideo, setCurrentVideo] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = entry.target.getAttribute('data-index');
                    if (index) {
                        setCurrentVideo(parseInt(index, 10));
                    }
                }
            });
        }, options);

        const currentContainer = containerRef.current;
        if (currentContainer) {
            const videoElements = currentContainer.querySelectorAll('.video-container');
            videoElements.forEach(video => observer.observe(video));
        }

        return () => {
            if (currentContainer) {
                const videoElements = currentContainer.querySelectorAll('.video-container');
                videoElements.forEach(video => observer.unobserve(video));
            }
        };
    }, []);

    return (
        <div className="w-full h-full relative">
            <div ref={containerRef} className="w-full h-full bg-black overflow-y-auto snap-y snap-mandatory">
                {videosData.map((video, index) => (
                    <div 
                        key={video.id} 
                        data-index={index}
                        className="video-container w-full h-full snap-start relative"
                    >
                        <VideoItem 
                          video={video} 
                          isActive={index === currentVideo} 
                          onSelectUser={onSelectUser}
                          onNavigate={onNavigate}
                        />
                    </div>
                ))}
            </div>

            <header className="absolute top-0 left-0 right-0 z-10 p-4 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent">
                <button className="p-2">
                    <SearchIcon className="w-6 h-6 text-white" />
                </button>
                <div className="flex items-center gap-6">
                    <NavTab label="For You" active={currentView === 'feed'} onClick={() => onNavigate('feed')} />
                    <NavTab label="Photos" active={currentView === 'photos'} onClick={() => onNavigate('photos')} />
                    <NavTab label="Followers" active={false} onClick={() => {}} />
                </div>
                <div className="w-10 h-10"></div>
            </header>
        </div>
    );
};

export default VideoPlayer;
