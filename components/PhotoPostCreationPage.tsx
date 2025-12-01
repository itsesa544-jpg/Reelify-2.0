import React, { useState } from 'react';
import { BackIcon, PublishIcon } from '../constants';

interface PhotoPostCreationPageProps {
    imageUrl: string;
    onBack: () => void;
    onPublish: (caption: string) => void;
}

const PhotoPostCreationPage: React.FC<PhotoPostCreationPageProps> = ({ imageUrl, onBack, onPublish }) => {
    const [caption, setCaption] = useState('');

    const handlePublish = () => {
        onPublish(caption);
    };

    return (
        <div className="w-full h-full bg-white text-black flex flex-col">
            {/* Header */}
            <header className="p-4 flex items-center shrink-0 border-b">
                <button onClick={onBack} className="mr-4">
                    <BackIcon className="w-6 h-6 text-black" />
                </button>
                <h1 className="text-lg font-bold">New Photo Post</h1>
            </header>

            {/* Main Content */}
            <main className="flex-grow overflow-y-auto p-4 space-y-4">
                <div className="w-full aspect-square bg-gray-100 border border-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
                    <img src={imageUrl} alt="New post preview" className="max-w-full max-h-full object-contain" />
                </div>
                <textarea
                    placeholder="Write a caption..."
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    className="w-full h-28 bg-gray-100 p-3 rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
            </main>
            
            {/* Footer */}
            <footer className="p-4 shrink-0 border-t bg-white">
                <button onClick={handlePublish} className="w-full bg-red-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2">
                    <PublishIcon /> Publish Photo
                </button>
            </footer>
        </div>
    );
};

export default PhotoPostCreationPage;
