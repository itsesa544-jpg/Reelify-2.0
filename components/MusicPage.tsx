import React from 'react';
import type { Audio, Video } from '../types';
import { BackIcon, PlayIconSimple, formatNumber } from '../constants';

interface MusicPageProps {
    audio: Audio;
    allVideos: Video[];
    onBack: () => void;
    onPlayVideos: (videos: Video[], startIndex: number) => void;
    onUseSound: (audio: Audio) => void;
}

const MusicPage: React.FC<MusicPageProps> = ({ audio, allVideos, onBack, onPlayVideos, onUseSound }) => {
    // Filter videos that use this audio track
    const relatedVideos = allVideos.filter(v => v.audio?.title === audio.title);

    return (
        <div className="w-full h-full bg-[#0D0F13] flex flex-col relative overflow-y-auto">
             {/* Header */}
             <header className="absolute top-0 left-0 right-0 z-20 p-4 flex items-center justify-between">
                <button onClick={onBack} className="p-2 bg-black/30 rounded-full backdrop-blur-md text-white hover:bg-black/50">
                    <BackIcon className="w-6 h-6" />
                </button>
                <div className="flex-1"></div>
                <button className="p-2 bg-black/30 rounded-full backdrop-blur-md text-white hover:bg-black/50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.368a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                </button>
            </header>

            {/* Banner Section */}
            <div className="bg-gradient-to-b from-gray-800 to-[#0D0F13] pt-20 pb-8 px-6 flex flex-col items-center text-center shrink-0">
                <div className="w-32 h-32 rounded-lg shadow-2xl mb-4 overflow-hidden border-2 border-white/20">
                    <img src={audio.coverUrl} alt={audio.title} className="w-full h-full object-cover" />
                </div>
                <h1 className="text-2xl font-bold text-white mb-1 leading-tight max-w-sm">{audio.title}</h1>
                <p className="text-gray-400 font-medium mb-4">{audio.artist}</p>
                <div className="text-gray-500 text-sm flex items-center gap-4 mb-6">
                    <span>{formatNumber(relatedVideos.length)} videos</span>
                </div>
                
                {/* Mobile Floating Action Button Placeholder - or simple button here */}
                <button 
                    onClick={() => onUseSound(audio)}
                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg shadow-red-500/30"
                >
                   <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                   </svg>
                   Use this sound
                </button>
            </div>

            {/* Video Grid */}
            <div className="flex-grow p-1">
                <div className="grid grid-cols-3 gap-1">
                    {relatedVideos.map((video, index) => (
                         <button 
                            key={video.id} 
                            onClick={() => onPlayVideos(relatedVideos, index)} 
                            className="relative aspect-[3/4] bg-gray-900 cursor-pointer overflow-hidden"
                         >
                            <img src={video.posterUrl} alt={video.title} className="w-full h-full object-cover" />
                             <div className="absolute bottom-1 left-1 flex items-center gap-1 text-white text-xs font-bold [text-shadow:_0_1px_2px_rgb(0_0_0_/_60%)]">
                                <PlayIconSimple className="w-3 h-3" />
                                <span>{formatNumber(video.likes)}</span>
                            </div>
                         </button>
                    ))}
                </div>
                 {relatedVideos.length === 0 && (
                     <div className="text-center py-20 text-gray-500">
                         <p>No videos used this sound yet.</p>
                         <p className="text-sm">Be the first to create one!</p>
                     </div>
                 )}
            </div>
            
             {/* Sticky Bottom Bar for Mobile (Optional, currently button is in banner) */}
             {/* Use if needed to fix button at bottom */}
        </div>
    );
};

export default MusicPage;