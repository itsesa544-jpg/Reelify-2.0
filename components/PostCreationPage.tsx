

import React, { useState, useRef } from 'react';
import { 
    BackIcon, 
    // FIX: Renamed UploadPlaceholderIcon to UploadIcon to fix import error.
    UploadIcon, 
    HashtagIcon, 
    AtIcon, 
    ContentDisclosureIcon, 
    ChevronRightIcon, 
    LockIcon,
    ChatBubbleIcon,
    DuetIcon,
    PublishIcon
} from '../constants';

interface PostCreationPageProps {
    onBack: () => void;
}

const ToggleSwitch: React.FC<{ enabled: boolean; onChange: (enabled: boolean) => void }> = ({ enabled, onChange }) => {
    return (
        <button
            onClick={() => onChange(!enabled)}
            className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${
                enabled ? 'bg-cyan-400' : 'bg-gray-600'
            }`}
        >
            <span
                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                    enabled ? 'translate-x-6' : 'translate-x-1'
                }`}
            />
        </button>
    );
};

const PostCreationPage: React.FC<PostCreationPageProps> = ({ onBack }) => {
    const [videoPreview, setVideoPreview] = useState<string | null>(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleVideoUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith('video/')) {
            const url = URL.createObjectURL(file);
            setVideoPreview(url);
        } else {
            alert('Please select a video file.');
        }
    };

    return (
        <div className="w-full h-full bg-white text-black flex flex-col">
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="video/*"
                onChange={handleFileChange}
            />

            {/* Header */}
            <header className="p-4 flex items-center shrink-0 border-b">
                <button onClick={onBack} className="mr-4">
                    <BackIcon className="w-6 h-6 text-black" />
                </button>
                <h1 className="text-lg font-bold">New Video Upload</h1>
            </header>

            {/* Main Content */}
            <main className="flex-grow overflow-y-auto p-4 space-y-4">
                <div className="flex gap-4">
                    <div
                        onClick={handleVideoUploadClick}
                        className="w-32 h-48 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-center text-gray-500 cursor-pointer"
                    >
                       {videoPreview ? (
                            <video src={videoPreview} className="w-full h-full object-cover rounded-lg" controls={false} muted autoPlay loop />
                        ) : (
                            <>
                                {/* FIX: Renamed UploadPlaceholderIcon to UploadIcon to fix import error. */}
                                <UploadIcon className="w-8 h-8 text-gray-400 mb-2" />
                                <span className="text-xs">Tap to upload video</span>
                            </>
                        )}
                    </div>
                    <div className="flex-grow space-y-2">
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full bg-gray-100 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <textarea
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full h-28 bg-gray-100 p-2 rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button className="bg-gray-200 text-sm font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1"><HashtagIcon /> Hashtags</button>
                    <button className="bg-gray-200 text-sm font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1"><AtIcon /> Friends</button>
                </div>

                <div className="border-t border-b border-gray-200 py-3 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <ContentDisclosureIcon className="text-gray-600"/>
                        <span className="font-semibold">Content disclosure</span>
                    </div>
                    <button className="flex items-center gap-1 text-gray-500">
                        Everyone <ChevronRightIcon />
                    </button>
                </div>
            </main>
            
            {/* Footer */}
            <footer className="p-4 flex items-center gap-4 shrink-0 border-t">
                <button className="flex-1 bg-gray-200 text-black font-bold py-3 rounded-lg">Save as Draft</button>
                <button className="flex-1 bg-red-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2">
                    <PublishIcon /> Publish
                </button>
            </footer>
        </div>
    );
};

export default PostCreationPage;