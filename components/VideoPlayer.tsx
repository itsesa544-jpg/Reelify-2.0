import React, { useRef, useEffect, useState } from 'react';
import { videosData } from '../constants';
import VideoInfo from './VideoInfo';
import VideoActions from './VideoActions';
import type { Video } from '../types';

const VideoItem: React.FC<{ video: Video; isActive: boolean }> = ({ video, isActive }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play().catch(error => {
          // Autoplay was prevented.
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
      
      <div className="absolute bottom-[80px] left-0 right-0 p-4 flex items-end">
        <VideoInfo video={video} />
      </div>

      <div className="absolute bottom-[80px] right-2 p-2">
        <VideoActions video={video} />
      </div>
      
      {/* Shop Now Buttons */}
      <button className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cyan-400/80 backdrop-blur-sm text-black font-bold py-2 px-5 rounded-lg border-2 border-cyan-200 shadow-lg shadow-cyan-500/50 hover:bg-cyan-300 transition-all">
        Shop Now
      </button>
       <button className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-purple-500/80 backdrop-blur-sm text-white font-bold py-2 px-5 rounded-lg border-2 border-purple-300 shadow-lg shadow-purple-500/50 hover:bg-purple-400 transition-all">
        Shop Now
      </button>

    </div>
  );
};


const VideoPlayer: React.FC = () => {
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
        <div ref={containerRef} className="w-full h-full bg-black overflow-y-auto snap-y snap-mandatory">
            {videosData.map((video, index) => (
                <div 
                    key={video.id} 
                    data-index={index}
                    className="video-container w-screen h-screen snap-start relative"
                >
                    <VideoItem video={video} isActive={index === currentVideo} />
                </div>
            ))}
        </div>
    );
};

export default VideoPlayer;