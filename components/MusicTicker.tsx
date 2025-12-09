import React from 'react';

interface MusicTickerProps {
    coverUrl?: string;
    title?: string;
    artist?: string;
}

const MusicTicker: React.FC<MusicTickerProps> = ({ coverUrl, title, artist }) => {
    if (!title) return null;

    return (
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-2 flex items-center justify-between overflow-hidden">
            <div className="w-10 h-10 rounded-md overflow-hidden shrink-0">
                {coverUrl ? (
                    <img src={coverUrl} alt="Music cover" className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" /></svg>
                    </div>
                )}
            </div>
            <div className="shrink-0 animate-spin-slow [animation-duration:4s]">
                 <img src="https://res.cloudinary.com/dlklqihg6/image/upload/v1764031351/ehxzfirmajfwnn72tu11.jpg" alt="Spinning disc" className="w-10 h-10" />
            </div>
            <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 4s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default MusicTicker;
