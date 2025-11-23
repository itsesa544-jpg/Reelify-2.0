
import React, { useState } from 'react';
import VideoPlayer from './components/VideoPlayer';
import BottomNav from './components/BottomNav';
import Header from './components/Header';
import UploadModal from './components/UploadModal';

const App: React.FC = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  return (
    <div className="w-screen h-screen bg-black font-sans text-white overflow-hidden">
      <div className="relative w-full h-full">
        <Header />
        <VideoPlayer />
        <BottomNav onUploadClick={() => setIsUploadModalOpen(true)} />
        <UploadModal 
          isOpen={isUploadModalOpen} 
          onClose={() => setIsUploadModalOpen(false)} 
        />
      </div>
    </div>
  );
};

export default App;
