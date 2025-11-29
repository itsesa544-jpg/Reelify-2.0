import React, { useRef } from 'react';
import { BackIcon, UploadIcon } from '../constants';

interface UploadPageProps {
  onVideoSelected: (videoUrl: string) => void;
  onClose: () => void;
}

const UploadPage: React.FC<UploadPageProps> = ({ onVideoSelected, onClose }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      const url = URL.createObjectURL(file);
      onVideoSelected(url);
    } else {
      alert('Please select a valid video file.');
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full h-full bg-[#0D0F13] text-white flex flex-col">
       <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="video/*"
        onChange={handleFileChange}
      />

      {/* Header */}
      <header className="p-4 flex items-center shrink-0">
        <button onClick={onClose} className="mr-4 p-2 rounded-full hover:bg-white/10">
          <BackIcon />
        </button>
        <h1 className="text-lg font-bold">Upload video</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md">
            <button 
                onClick={triggerFileInput}
                className="w-full aspect-video border-2 border-dashed border-gray-600 rounded-2xl flex flex-col items-center justify-center text-center text-gray-400 hover:border-cyan-400 hover:text-white transition-colors"
            >
                <UploadIcon className="w-12 h-12 text-gray-500 mb-4" />
                <h2 className="text-xl font-bold">Tap to upload</h2>
                <p className="text-sm mt-1">Select a video file from your device</p>
            </button>
        </div>
      </main>
    </div>
  );
};

export default UploadPage;