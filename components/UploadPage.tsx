import React, { useState, useRef } from 'react';
import { BackIcon, UploadIcon, CameraIcon, ShopBagIcon } from '../constants';

interface UploadPageProps {
  onVideoSelected: (videoUrl: string) => void;
  onPhotoSelected: (photoUrl: string) => void;
  onShopImageSelected: (imageUrl: string) => void;
  onClose: () => void;
}

const TabButton: React.FC<{label: string, active: boolean, onClick: () => void}> = ({ label, active, onClick }) => (
    <button 
        onClick={onClick}
        className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${active ? 'bg-cyan-500 text-black' : 'text-gray-400 hover:bg-white/10'}`}
    >
        {label}
    </button>
);

const UploadArea: React.FC<{onFileSelected: (url: string) => void, fileType: 'video' | 'photo' | 'shop'}> = ({ onFileSelected, fileType }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const acceptType = fileType === 'video' ? 'video/*' : 'image/*';

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            onFileSelected(url);
        }
    };
    
    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    const textMap = {
        video: 'video',
        photo: 'photo',
        shop: 'product image'
    }

    return (
        <div className="w-full max-w-md">
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept={acceptType}
                onChange={handleFileChange}
            />
            <button 
                onClick={triggerFileInput}
                className="w-full aspect-video border-2 border-dashed border-gray-600 rounded-2xl flex flex-col items-center justify-center text-center text-gray-400 hover:border-cyan-400 hover:text-white transition-colors"
            >
                <UploadIcon className="w-12 h-12 text-gray-500 mb-4" />
                <h2 className="text-xl font-bold">Tap to upload</h2>
                <p className="text-sm mt-1">Select a {textMap[fileType]} from your device</p>
            </button>
        </div>
    );
};


const UploadPage: React.FC<UploadPageProps> = ({ onVideoSelected, onPhotoSelected, onShopImageSelected, onClose }) => {
  const [activeTab, setActiveTab] = useState<'video' | 'photo' | 'shop'>('video');

  return (
    <div className="w-full h-full bg-[#0D0F13] text-white flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center shrink-0 border-b border-white/10">
        <button onClick={onClose} className="mr-4 p-2 rounded-full hover:bg-white/10">
          <BackIcon />
        </button>
        <h1 className="text-lg font-bold">Create new post</h1>
      </header>
      
      {/* Tabs */}
      <div className="p-4 flex items-center justify-center gap-2 border-b border-white/10">
          <TabButton label="Video" active={activeTab === 'video'} onClick={() => setActiveTab('video')} />
          <TabButton label="Photo" active={activeTab === 'photo'} onClick={() => setActiveTab('photo')} />
          <TabButton label="Shop" active={activeTab === 'shop'} onClick={() => setActiveTab('shop')} />
      </div>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4">
        {activeTab === 'video' && <UploadArea onFileSelected={onVideoSelected} fileType="video" />}
        {activeTab === 'photo' && <UploadArea onFileSelected={onPhotoSelected} fileType="photo" />}
        {activeTab === 'shop' && <UploadArea onFileSelected={onShopImageSelected} fileType="shop" />}
      </main>
    </div>
  );
};

export default UploadPage;
