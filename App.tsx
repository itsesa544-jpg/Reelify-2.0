
import React, { useState } from 'react';
import VideoPlayer from './components/VideoPlayer';
import BottomNav from './components/BottomNav';
import Header from './components/Header';
import UploadModal from './components/UploadModal';
import ProfilePage from './components/ProfilePage';
import type { User } from './types';

type View = 'feed' | 'profile';

const App: React.FC = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<View>('feed');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleSelectUser = (user: User) => {
    setSelectedUser(user);
    setCurrentView('profile');
  };

  const handleBackToFeed = () => {
    setSelectedUser(null);
    setCurrentView('feed');
  };

  return (
    <div className="w-screen h-screen bg-black font-sans text-white overflow-hidden">
      <div className="relative w-full h-full">
        {currentView === 'feed' && (
          <>
            <Header />
            <VideoPlayer onSelectUser={handleSelectUser} />
            <BottomNav onUploadClick={() => setIsUploadModalOpen(true)} />
            <UploadModal 
              isOpen={isUploadModalOpen} 
              onClose={() => setIsUploadModalOpen(false)} 
            />
          </>
        )}
        {currentView === 'profile' && selectedUser && (
          <ProfilePage user={selectedUser} onBack={handleBackToFeed} />
        )}
      </div>
    </div>
  );
};

export default App;
