import React, { useState } from 'react';
import { galleryMediaData } from '../constants';
import type { GalleryMedia } from '../types';
import { CloseIcon, CameraIcon } from '../constants';

interface UploadPageProps {
  onClose: () => void;
}

const TabButton: React.FC<{ label: string; active: boolean; onClick: () => void }> = ({ label, active, onClick }) => (
  <button onClick={onClick} className="relative px-2 py-2 text-sm font-semibold transition-colors">
    <span className={active ? 'text-white' : 'text-gray-500'}>{label}</span>
    {active && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"></div>}
  </button>
);

const UploadPage: React.FC<UploadPageProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Videos' | 'Photos'>('All');
  const [selectedUrls, setSelectedUrls] = useState<string[]>([]);
  const [isMultiSelect, setIsMultiSelect] = useState(false);

  const filteredMedia = galleryMediaData.filter(item => {
    if (activeTab === 'Photos') return item.type === 'photo';
    if (activeTab === 'Videos') return item.type === 'video';
    return true;
  });

  const handleSelectMedia = (media: GalleryMedia) => {
    if (isMultiSelect) {
      setSelectedUrls(prev => 
        prev.includes(media.url) 
          ? prev.filter(url => url !== media.url)
          : [...prev, media.url]
      );
    } else {
      setSelectedUrls([media.url]);
    }
  };

  const toggleMultiSelect = () => {
    setIsMultiSelect(!isMultiSelect);
    setSelectedUrls([]); // Reset selection when mode changes
  };
  
  const handleCameraClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      // We have permission, we can now use the stream.
      // For this example, we'll just log success and maybe close the stream.
      alert('Camera and microphone access granted!');
      // Stop using the camera immediately after getting permission.
      stream.getTracks().forEach(track => track.stop());
    } catch (err) {
      console.error("Error accessing media devices.", err);
      alert('Failed to get camera and microphone access. Please check your browser settings.');
    }
  };

  return (
    <div className="w-full h-full bg-black text-white flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center justify-between shrink-0">
        <button onClick={onClose} className="text-white">
          <CloseIcon />
        </button>
        <div className="flex items-center gap-6">
          <TabButton label="All" active={activeTab === 'All'} onClick={() => setActiveTab('All')} />
          <TabButton label="Videos" active={activeTab === 'Videos'} onClick={() => setActiveTab('Videos')} />
          <TabButton label="Photos" active={activeTab === 'Photos'} onClick={() => setActiveTab('Photos')} />
        </div>
        <button onClick={handleCameraClick} className="text-white">
          <CameraIcon className="w-7 h-7" />
        </button>
      </header>

      {/* Gallery Grid */}
      <main className="flex-grow overflow-y-auto p-0.5">
        <div className="grid grid-cols-4 gap-0.5">
          {filteredMedia.map((media) => {
            const isSelected = selectedUrls.includes(media.url);
            const selectionIndex = selectedUrls.indexOf(media.url) + 1;

            return (
              <button 
                key={media.id} 
                className="relative aspect-square w-full h-full overflow-hidden group"
                onClick={() => handleSelectMedia(media)}
              >
                <img src={media.thumbnailUrl} alt="gallery item" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                {media.type === 'video' && (
                    <span className="absolute bottom-1 right-1 text-white text-xs font-bold [text-shadow:_1px_1px_1px_rgb(0_0_0_/_80%)]">
                        {/* Placeholder for video duration */}
                    </span>
                )}
                {isSelected && (
                  <div className="absolute inset-0 bg-black/40 border-2 border-white"></div>
                )}
                <div className="absolute top-1 right-1 w-5 h-5">
                   <div className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-200 ${isSelected ? 'bg-white' : 'bg-black/30 border border-white'}`}>
                      {isSelected && isMultiSelect && (
                        <span className="text-black text-xs font-bold">{selectionIndex}</span>
                      )}
                   </div>
                </div>
              </button>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3 cursor-pointer" onClick={toggleMultiSelect}>
          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isMultiSelect ? 'border-white bg-white' : 'border-gray-400'}`}>
            {isMultiSelect && <div className="w-3 h-3 bg-black rounded-full"></div>}
          </div>
          <span className="font-semibold text-white">Select multiple</span>
        </div>
        {selectedUrls.length > 0 && (
          <button className="bg-white text-black font-bold px-6 py-2 rounded-lg text-sm">
            Next
          </button>
        )}
      </footer>
    </div>
  );
};

export default UploadPage;