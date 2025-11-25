
import React, { useState, useRef, useEffect } from 'react';
import { BackIcon, CheckmarkIcon, VideoIconSimple } from '../constants';

interface UploadPageProps {
  onClose: () => void;
}

interface MediaItem {
    file: File;
    previewUrl: string;
}

const TabButton: React.FC<{ label: string; active: boolean; onClick: () => void }> = ({ label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
        active ? 'bg-cyan-500 text-black' : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
        }`}
    >
        {label}
    </button>
);

const UploadPage: React.FC<UploadPageProps> = ({ onClose }) => {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<'All' | 'Photos' | 'Videos'>('All');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, []);

  useEffect(() => {
    return () => {
      mediaItems.forEach(item => URL.revokeObjectURL(item.previewUrl));
    };
  }, [mediaItems]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      const newMediaItems = selectedFiles.map(file => ({
        file,
        previewUrl: URL.createObjectURL(file)
      }));
      
      setMediaItems(prev => [...prev, ...newMediaItems]);

      if (!selectedMedia && newMediaItems.length > 0) {
        setSelectedMedia(newMediaItems[0]);
      }
    }
  };

  const isVideo = (file?: File) => file?.type.startsWith('video/');
  
  const filteredMediaItems = mediaItems.filter(item => {
    if (activeFilter === 'Photos') {
      return item.file.type.startsWith('image/');
    }
    if (activeFilter === 'Videos') {
      return item.file.type.startsWith('video/');
    }
    return true;
  });

  useEffect(() => {
    if (selectedMedia && !filteredMediaItems.some(item => item.previewUrl === selectedMedia.previewUrl)) {
        setSelectedMedia(filteredMediaItems.length > 0 ? filteredMediaItems[0] : null);
    } else if (!selectedMedia && filteredMediaItems.length > 0) {
        setSelectedMedia(filteredMediaItems[0]);
    }
  }, [activeFilter, mediaItems]);


  return (
    <div className="w-full h-full bg-[#0D0F13] text-white flex flex-col">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        multiple
        accept="image/*,video/*"
      />

      <header className="p-4 bg-[#1A1B20]/80 backdrop-blur-sm sticky top-0 z-20 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="text-white">
            <BackIcon />
          </button>
          <h1 className="text-xl font-bold text-white">Upload Content</h1>
        </div>
        <button className="bg-cyan-500 text-black font-bold px-4 py-2 rounded-lg hover:bg-cyan-400 transition-colors disabled:bg-gray-500" disabled={mediaItems.length === 0}>
          Next
        </button>
      </header>

      {mediaItems.length > 0 ? (
        <div className="flex-grow flex flex-col lg:flex-row overflow-hidden">
          <div className="w-full lg:w-3/4 h-1/2 lg:h-full bg-black flex items-center justify-center relative">
            {selectedMedia && (
              <>
                {isVideo(selectedMedia.file) ? (
                  <video src={selectedMedia.previewUrl} className="max-w-full max-h-full object-contain" controls autoPlay loop />
                ) : (
                  <img src={selectedMedia.previewUrl} className="max-w-full max-h-full object-contain" alt="Selected Preview" />
                )}
              </>
            )}
          </div>

          <div className="w-full lg:w-1/4 h-1/2 lg:h-full bg-[#1A1B20] flex flex-col overflow-hidden">
             <div className="p-2 border-b border-gray-700/50 flex justify-around shrink-0">
                <TabButton label="All" active={activeFilter === 'All'} onClick={() => setActiveFilter('All')} />
                <TabButton label="Photos" active={activeFilter === 'Photos'} onClick={() => setActiveFilter('Photos')} />
                <TabButton label="Videos" active={activeFilter === 'Videos'} onClick={() => setActiveFilter('Videos')} />
            </div>
            <div className="p-2 overflow-y-auto">
              <div className="grid grid-cols-3 gap-2">
                {filteredMediaItems.map((item, index) => {
                  const isSelected = item.previewUrl === selectedMedia?.previewUrl;
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedMedia(item)}
                      className={`relative aspect-square rounded-md overflow-hidden border-2 ${isSelected ? 'border-cyan-400' : 'border-transparent'}`}
                    >
                      {isVideo(item.file) ? (
                        <>
                          <video src={item.previewUrl} className="w-full h-full object-cover" />
                          <div className="absolute bottom-1 right-1">
                             <VideoIconSimple className="w-4 h-4" />
                          </div>
                        </>
                      ) : (
                        <img src={item.previewUrl} className="w-full h-full object-cover" alt={`Preview ${index}`} />
                      )}
                      {isSelected && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
                                  <CheckmarkIcon />
                              </div>
                          </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-grow flex flex-col items-center justify-center text-gray-500">
            <h2 className="text-xl font-semibold">Select files to upload</h2>
            <p>Your selected photos and videos will appear here.</p>
            <button 
                onClick={() => fileInputRef.current?.click()}
                className="mt-4 bg-purple-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-purple-500 transition-colors"
            >
                Select from computer
            </button>
        </div>
      )}
    </div>
  );
};

export default UploadPage;
