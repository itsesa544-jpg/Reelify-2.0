
import React from 'react';
import { videoData } from '../constants';
import VideoInfo from './VideoInfo';
import VideoActions from './VideoActions';

const VideoPlayer: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-black">
      <video
        className="w-full h-full object-cover"
        src={videoData.videoUrl}
        poster={videoData.posterUrl}
        loop
        autoPlay
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
      
      <div className="absolute bottom-[80px] left-0 right-0 p-4 flex items-end">
        <VideoInfo video={videoData} />
      </div>

      <div className="absolute bottom-[80px] right-2 p-2">
        <VideoActions video={videoData} />
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

export default VideoPlayer;
