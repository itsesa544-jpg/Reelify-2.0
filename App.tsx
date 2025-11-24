

import React, { useState } from 'react';
import VideoPlayer from './components/VideoPlayer';
import BottomNav from './components/BottomNav';
import UploadModal from './components/UploadModal';
import ProfilePage from './components/ProfilePage';
import ShopPage from './components/ShopPage';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import InboxPage from './components/InboxPage';
import type { User } from './types';
import { videosData } from './constants';

export type View = 'feed' | 'profile' | 'foryou' | 'inbox';

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
    pageContent = <VideoPlayer onSelectUser={handleSelectUserFromFeed} onNavigate={handleNavigate} />;
  } else if (currentView === 'profile' && viewedUser) {
    const isOwnProfile = viewedUser.username === loggedInUser.username;
    pageContent = <ProfilePage user={viewedUser} onBack={handleBackFromProfile} showBackButton={!isOwnProfile} />;
  } else if (currentView === 'foryou') {
    pageContent = <ShopPage />;
  } else if (currentView === 'inbox') {
    pageContent = <InboxPage onSelectUser={handleSelectUserFromFeed} />;
  }

  return (
    <div className="w-screen h-screen bg-[#0D0F13] text-white font-sans">
        <div className="container mx-auto h-full max-w-screen-xl flex lg:gap-6 lg:p-4">
            
            {/* Left Sidebar (Desktop Nav) */}
            <nav className="hidden lg:block w-[280px] shrink-0">
                <LeftSidebar onNavigate={handleNavigate} currentView={currentView} />
            </nav>

            {/* Main content + Mobile Nav */}
            <div className="flex-grow flex flex-col h-full overflow-hidden">
                <main className="flex-grow h-full overflow-hidden relative bg-black lg:rounded-2xl">
                    {pageContent}
                </main>
                <div className="lg:hidden">
                     <BottomNav 
                        currentView={currentView}
                        onNavigate={handleNavigate}
                        onUploadClick={() => setIsUploadModalOpen(true)} 
                    />
                </div>
            </div>

            {/* Right Sidebar (Desktop Suggestions) */}
            <aside className="hidden lg:block w-[320px] shrink-0">
                <RightSidebar onSelectUser={handleSelectUserFromFeed} />
            </aside>
            
            {/* Modal - outside the layout flow */}
            <UploadModal 
                isOpen={isUploadModalOpen} 
                onClose={() => setIsUploadModalOpen(false)} 
            />
        </div>
    </div>
  );
};

export default App;