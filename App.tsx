

import React, { useState } from 'react';
import VideoPlayer from './components/VideoPlayer';
import BottomNav from './components/BottomNav';
import ProfilePage from './components/ProfilePage';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import InboxPage from './components/InboxPage';
import ShopPage from './components/ShopPage';
import EditProfilePage from './components/EditProfilePage';
import PostCreationPage from './components/PostCreationPage';
import UploadModal from './components/UploadModal';
import PhotosPage from './components/PhotosPage';
import type { User, Video } from './types';
import { initialVideosData } from './constants';

export type View = 'feed' | 'foryou' | 'profile' | 'inbox' | 'editProfile' | 'postCreation' | 'photos' | 'observing';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('feed');
  const [viewedUser, setViewedUser] = useState<User | null>(null);
  const [loggedInUser, setLoggedInUser] = useState<User>(initialVideosData[0].user);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [allVideos, setAllVideos] = useState<Video[]>(initialVideosData);

  const handleSelectUserFromFeed = (user: User) => {
    if (user.username === loggedInUser.username) {
        setViewedUser(loggedInUser);
    } else {
        setViewedUser(user);
    }
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

  const handleSaveProfile = (updatedUser: User) => {
    setLoggedInUser(updatedUser);
    setViewedUser(updatedUser);
    // Also update user details in the videos list
    setAllVideos(prevVideos => prevVideos.map(video => {
        if (video.user.username === updatedUser.username) {
            return { ...video, user: updatedUser };
        }
        return video;
    }));
    setCurrentView('profile');
  };

  const handleUploadClick = () => {
    setIsUploadModalOpen(true);
  };

  const handleSelectUpload = () => {
    setIsUploadModalOpen(false);
    setCurrentView('postCreation');
  };

  const handlePublishVideo = (videoData: { title: string; description: string; videoUrl: string; posterUrl: string; hashtags: string[] }) => {
    const newVideo: Video = {
      id: Date.now(),
      user: loggedInUser,
      title: videoData.title,
      caption: videoData.description,
      videoUrl: videoData.videoUrl,
      posterUrl: videoData.posterUrl || `https://picsum.photos/seed/${Date.now()}/400/600`,
      hashtags: videoData.hashtags,
      likes: '0',
      comments: '0',
      shares: '0',
    };

    setAllVideos(prevVideos => [newVideo, ...prevVideos]);
    setCurrentView('feed');
  };

  const observingVideos = allVideos.filter(video => 
    loggedInUser.observing.includes(video.user.username)
  );

  let pageContent;
  switch (currentView) {
    case 'feed':
      // FIX: The `VideoPlayer` component now correctly receives the `videos` prop, aligning with its updated interface and resolving a type error.
      pageContent = <VideoPlayer videos={allVideos} onSelectUser={handleSelectUserFromFeed} onNavigate={handleNavigate} currentView={currentView} />;
      break;
    case 'observing':
      // FIX: The `VideoPlayer` component now correctly receives the `videos` prop, aligning with its updated interface and resolving a type error.
      pageContent = <VideoPlayer videos={observingVideos} onSelectUser={handleSelectUserFromFeed} onNavigate={handleNavigate} currentView={currentView} />;
      break;
    case 'photos':
      pageContent = <PhotosPage onNavigate={handleNavigate} currentView={currentView} />;
      break;
    case 'foryou':
      pageContent = <ShopPage />;
      break;
    case 'profile':
      if (viewedUser) {
        const isOwnProfile = viewedUser.username === loggedInUser.username;
        pageContent = (
            <ProfilePage 
                user={viewedUser} 
                // FIX: The `ProfilePage` component now correctly receives the `allVideos` prop, aligning with its updated interface and resolving a type error.
                allVideos={allVideos}
                onBack={handleBackFromProfile} 
                showBackButton={!isOwnProfile}
                onEdit={() => setCurrentView('editProfile')}
            />
        );
      }
      break;
    case 'inbox':
      pageContent = <InboxPage onSelectUser={handleSelectUserFromFeed} />;
      break;
    case 'editProfile':
      pageContent = (
          <EditProfilePage
              user={loggedInUser}
              onSave={handleSaveProfile}
              onCancel={() => {
                  setViewedUser(loggedInUser);
                  setCurrentView('profile');
              }}
          />
      );
      break;
    case 'postCreation':
      // FIX: The `PostCreationPage` component now correctly receives the `onPublish` prop, aligning with its updated interface and resolving a type error.
      pageContent = <PostCreationPage onBack={() => setCurrentView('feed')} onPublish={handlePublishVideo} />;
      break;
    default:
      // FIX: The `VideoPlayer` component now correctly receives the `videos` prop, aligning with its updated interface and resolving a type error.
      pageContent = <VideoPlayer videos={allVideos} onSelectUser={handleSelectUserFromFeed} onNavigate={handleNavigate} currentView='feed' />;
  }


  return (
    <div className="w-screen h-screen bg-[#0D0F13] text-white font-sans">
        <UploadModal
            isOpen={isUploadModalOpen}
            onClose={() => setIsUploadModalOpen(false)}
            onSelectUpload={handleSelectUpload}
        />
        <div className="container mx-auto h-full max-w-screen-xl flex lg:gap-6 lg:p-4">
            
            <nav className="hidden lg:block w-[280px] shrink-0">
                <LeftSidebar onNavigate={handleNavigate} currentView={currentView} />
            </nav>

            <div className="flex-grow flex flex-col h-full overflow-hidden">
                <main className="flex-grow h-full overflow-hidden relative bg-black lg:rounded-2xl">
                    {pageContent}
                </main>
                <div className="lg:hidden">
                     <BottomNav 
                        currentView={currentView}
                        onNavigate={handleNavigate}
                        onUploadClick={handleUploadClick}
                    />
                </div>
            </div>

            <aside className="hidden lg:block w-[320px] shrink-0">
                {/* FIX: The `RightSidebar` component now correctly receives the `allVideos` prop, aligning with its updated interface and resolving a type error. */}
                <RightSidebar allVideos={allVideos} onSelectUser={handleSelectUserFromFeed} />
            </aside>
            
        </div>
    </div>
  );
};

export default App;