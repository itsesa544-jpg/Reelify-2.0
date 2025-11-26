

import React, { useState, useRef, useEffect } from 'react';
import { 
    BackIcon, 
    MusicNoteIcon, 
    TextIcon, 
    StickersIcon, 
    FiltersIcon, 
    CropIcon, 
    PrivacySettingsIcon,
    EditProfileIcon
} from '../constants';

interface VideoEditorPageProps {
  onNext: (videoUrl: string) => void;
  onBack: () => void;
}

const EditorToolButton: React.FC<{icon: React.ReactNode, label: string}> = ({ icon, label }) => (
    <button className="flex flex-col items-center gap-1 text-white group">
        {icon}
        <span className="text-xs font-bold drop-shadow-md">{label}</span>
    </button>
);


const VideoEditorPage: React.FC<VideoEditorPageProps> = ({ onNext, onBack }) => {
    const [videoSrc, setVideoSrc] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        fileInputRef.current?.click();
    }, []);
    
    useEffect(() => {
        return () => {
            if (videoSrc && videoSrc.startsWith('blob:')) {
                URL.revokeObjectURL(videoSrc);
            }
        };
    }, [videoSrc]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith('video/')) {
            const url = URL.createObjectURL(file);
            setVideoSrc(url);
        } else {
            onBack(); // Go back if no file is selected or it's not a video
        }
    };

    const handleNext = () => {
        if (videoSrc) {
            onNext(videoSrc);
        } else {
            alert("Please select a video first.");
        }
    };

    return (
        <div className="w-full h-full bg-black text-white flex flex-col relative">
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="video/*"
                onChange={handleFileChange}
            />

            {/* Header */}
            <header className="absolute top-0 left-0 right-0 z-20 p-4 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent">
                <button onClick={onBack} className="p-2">
                    <BackIcon className="w-6 h-6" />
                </button>
                <div className="flex-1 flex justify-center">
                    <button className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                        <MusicNoteIcon className="w-5 h-5"/>
                        <span className="font-semibold">BUTTERFLIES</span>
                        <div className="w-px h-4 bg-white/30 mx-2"></div>
                        <EditProfileIcon className="w-5 h-5" />
                    </button>
                </div>
                <div className="w-10"></div>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center overflow-hidden">
                {videoSrc ? (
                    <video 
                        src={videoSrc} 
                        className="max-w-full max-h-full"
                        autoPlay
                        loop
                        muted
                    />
                ) : (
                    <div className="text-gray-400">
                        <p>Select a video to start editing...</p>
                    </div>
                )}
            </main>

             {/* Right Sidebar Tools */}
            <aside className="absolute top-0 right-0 z-20 h-full flex items-center p-4">
                <div className="flex flex-col items-center gap-6 bg-black/30 backdrop-blur-sm p-3 rounded-full">
                    <EditorToolButton icon={<TextIcon />} label="Text" />
                    <EditorToolButton icon={<StickersIcon />} label="Stickers" />
                    {/* FIX: Corrected a typo from `EditorToolToolButton` to `EditorToolButton` to resolve a component not found error. */}
                    <EditorToolButton icon={<FiltersIcon />} label="Filters" />
                    <EditorToolButton icon={<CropIcon />} label="Crop" />
                    <EditorToolButton icon={<PrivacySettingsIcon />} label="Privacy" />
                </div>
            </aside>


            {/* Footer */}
            <footer className="absolute bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-black/60 to-transparent space-y-4">
                <div className="flex items-center justify-center gap-2">
                    <button className="bg-white/90 text-black px-4 py-2 rounded-lg font-semibold text-sm">Photo</button>
                    <button className="bg-white/20 text-white px-4 py-2 rounded-lg font-semibold text-sm">Video</button>
                </div>
                <div className="flex items-center gap-4">
                    <button className="flex-1 bg-white text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2">
                        Your Story
                    </button>
                    <button 
                        onClick={handleNext} 
                        className="flex-1 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-3 rounded-lg"
                    >
                        Next
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default VideoEditorPage;