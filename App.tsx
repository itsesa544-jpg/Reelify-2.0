
import React, { useState } from 'react';
import VideoPlayer from './components/VideoPlayer';
import BottomNav from './components/BottomNav';
import Header from './components/Header';
import UploadModal from './components/UploadModal';
import ProfilePage from './components/ProfilePage';
import ShopPage from './components/ShopPage';
import type { User } from './types';
import { videosData } from './constants';

export type View = 'feed' | 'profile' | 'foryou';

const App: React.FC = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<View>('feed');
  const [viewedUser, setViewedUser] = useState<User | null>(null);
  
  const loggedInUser = videosData[0].user;

  const handleSelectUserFromFeed = (user: User) => {
    setViewedUser(user);
    setCurrentView('profile');
  };

  const handleNavigate = (view: View) => {
    if (view === 'profile') {
      setViewedUser(loggedInUser);
    }
    setCurrentView(view);
  };
  
  const handleBackFromProfile = () => {
    setCurrentView('feed');
    setViewedUser(null);
  };

  let pageContent;
  if (currentView === 'feed') {
    pageContent = (
      <>
        <Header />
        <VideoPlayer onSelectUser={handleSelectUserFromFeed} onNavigate={handleNavigate} />
      </>
    );
  } else if (currentView === 'profile' && viewedUser) {
    const isOwnProfile = viewedUser.username === loggedInUser.username;
    pageContent = <ProfilePage user={viewedUser} onBack={handleBackFromProfile} showBackButton={!isOwnProfile} />;
  } else if (currentView === 'foryou') {
    pageContent = <ShopPage />;
  }


  return (
    <div className="w-screen h-screen bg-black font-sans text-white flex flex-col overflow-hidden">
      <main className="flex-grow h-full overflow-hidden relative">
        {pageContent}
      </main>
      
      <BottomNav 
        currentView={currentView}
        onNavigate={handleNavigate}
        onUploadClick={() => setIsUploadModalOpen(true)} 
      />
      
      <UploadModal 
        isOpen={isUploadModalOpen} 
        onClose={() => setIsUploadModalOpen(false)} 
      />
    </div>
  );
};

export default App;