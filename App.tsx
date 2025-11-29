import React, { useState, useEffect } from 'react';
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
import VideoEditorPage from './components/VideoEditorPage';
import PhotoPostPage from './components/PhotoPostPage';
import ShopDetailPage from './components/ShopDetailPage';
import AuthPage from './components/AuthPage'; // Import the new AuthPage
import type { User, Video, GalleryMedia, ShopPost } from './types';
import { initialVideosData, mariaKhan, tusharEmran, mdesa, allUsers as initialAllUsers } from './constants';

export type View = 'feed' | 'foryou' | 'profile' | 'inbox' | 'editProfile' | 'postCreation' | 'photos' | 'observing' | 'userFeed' | 'videoEditor' | 'photoPost' | 'shopDetail';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    try {
      return localStorage.getItem('vibe-isLoggedIn') === 'true';
    } catch (error) {
      console.error("Failed to read login status from localStorage", error);
      return false;
    }
  });

  const [currentView, setCurrentView] = useState<View>('feed');
  const [viewedUser, setViewedUser] = useState<User | null>(null);
  
  const [loggedInUser, setLoggedInUser] = useState<User>(() => {
    try {
      const savedUser = localStorage.getItem('vibe-loggedInUser');
      return savedUser ? JSON.parse(savedUser) : mariaKhan;
// FIX: Added curly braces to the catch block to fix a syntax error.
    } catch (error) {
      console.error("Failed to parse loggedInUser from localStorage", error);
      return mariaKhan;
    }
  });
  
  const [allUsers, setAllUsers] = useState<User[]>(() => {
    try {
        const savedUsers = localStorage.getItem('vibe-allUsers');
        return savedUsers ? JSON.parse(savedUsers) : initialAllUsers;
    } catch (error) {
        console.error("Failed to parse allUsers from localStorage", error);
        return initialAllUsers;
    }
  });

  const [allVideos, setAllVideos] = useState<Video[]>(() => {
    try {
      const savedVideos = localStorage.getItem('vibe-allVideos');
      return savedVideos ? JSON.parse(savedVideos) : initialVideosData;
    } catch (error) {
      console.error("Failed to parse allVideos from localStorage", error);
      return initialVideosData;
    }
  });

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [userFeedVideos, setUserFeedVideos] = useState<Video[]>([]);
  const [userFeedStartIndex, setUserFeedStartIndex] = useState(0);
  const [videoToPost, setVideoToPost] = useState<string | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryMedia | null>(null);
  const [selectedShopPost, setSelectedShopPost] = useState<ShopPost | null>(null);

  const switchableAccounts = [mariaKhan, tusharEmran, mdesa];

  useEffect(() => {
    try {
      localStorage.setItem('vibe-isLoggedIn', String(isLoggedIn));
      localStorage.setItem('vibe-loggedInUser', JSON.stringify(loggedInUser));
      localStorage.setItem('vibe-allVideos', JSON.stringify(allVideos));
      localStorage.setItem('vibe-allUsers', JSON.stringify(allUsers));
    } catch (error) {
      console.error("Failed to save state to localStorage", error);
    }
  }, [isLoggedIn, loggedInUser, allVideos, allUsers]);

  const handleLoginSuccess = (user: User) => {
    setLoggedInUser(user);
    setIsLoggedIn(true);
  };
  
    const handleToggleObserve = (userToToggle: User) => {
    const isObserving = loggedInUser.observing.includes(userToToggle.username);

    const updatedLoggedInUser = {
      ...loggedInUser,
      observing: isObserving
        ? loggedInUser.observing.filter(username => username !== userToToggle.username)
        : [...loggedInUser.observing, userToToggle.username],
      stats: {
          ...loggedInUser.stats,
          observing: loggedInUser.stats.observing + (isObserving ? -1 : 1)
      }
    };

    const updatedAllUsers = allUsers.map(u => {
      if (u.username === loggedInUser.username) {
        return updatedLoggedInUser;
      }
      if (u.username === userToToggle.username) {
        return {
          ...u,
          stats: {
            ...u.stats,
            observers: u.stats.observers + (isObserving ? -1 : 1),
          },
        };
      }
      return u;
    });

    setLoggedInUser(updatedLoggedInUser);
    setAllUsers(updatedAllUsers);

    if (viewedUser?.username === userToToggle.username) {
        setViewedUser(updatedAllUsers.find(u => u.username === userToToggle.username) || null);
    }
     if (viewedUser?.username === loggedInUser.username) {
        setViewedUser(updatedLoggedInUser);
    }
  };

  const handleSelectUserFromFeed = (user: User) => {
    const freshUserData = allUsers.find(u => u.username === user.username) || user;
    if (freshUserData.username === loggedInUser.username) {
        setViewedUser(loggedInUser);
    } else {
        setViewedUser(freshUserData);
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
    
    setAllUsers(prevUsers => prevUsers.map(u => u.username === updatedUser.username ? updatedUser : u));

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
    setCurrentView('videoEditor');
  };

  const handleEditorNext = (videoUrl: string) => {
    setVideoToPost(videoUrl);
    setCurrentView('postCreation');
  };

  const handlePublishVideo = (videoData: { title: string; description: string; videoUrl: string; hashtags: string[] }) => {
    const newVideo: Video = {
      id: Date.now(),
      user: loggedInUser,
      title: videoData.title,
      caption: videoData.description,
      videoUrl: videoData.videoUrl,
      posterUrl: videoData.videoUrl, 
      hashtags: videoData.hashtags,
// FIX: Changed string values to numbers to match the Video type definition.
      likes: 0,
      comments: 0,
      shares: 0,
    };

    setAllVideos(prevVideos => [newVideo, ...prevVideos]);
    setCurrentView('feed');
  };

  const handlePlayFromProfile = (user: User, videoId: number) => {
    const userVideos = allVideos.filter(v => v.user.username === user.username);
    const startIndex = userVideos.findIndex(v => v.id === videoId);
    
    if (startIndex !== -1) {
        setUserFeedVideos(userVideos);
        setUserFeedStartIndex(startIndex);
        setViewedUser(user);
        setCurrentView('userFeed');
    }
  };
  
  const handleSelectPhoto = (photo: GalleryMedia) => {
    setSelectedPhoto(photo);
    setCurrentView('photoPost');
  };

  const handleSelectShopPost = (post: ShopPost) => {
    setSelectedShopPost(post);
    setCurrentView('shopDetail');
  };

  const handleSwitchAccount = (account: User) => {
    const freshAccountData = allUsers.find(u => u.username === account.username) || account;
    setLoggedInUser(freshAccountData);
    if (viewedUser?.username === loggedInUser.username) {
      setViewedUser(freshAccountData);
    }
  };

  const handleBackFromUserFeed = () => {
      setCurrentView('profile');
  };

  if (!isLoggedIn) {
    return <AuthPage onLoginSuccess={handleLoginSuccess} />;
  }

  const observingVideos = allVideos.filter(video => 
    loggedInUser.observing.includes(video.user.username)
  );

  let pageContent;
  switch (currentView) {
    case 'feed':
      pageContent = <VideoPlayer videos={allVideos} onSelectUser={handleSelectUserFromFeed} onNavigate={handleNavigate} currentView={currentView} loggedInUser={loggedInUser} onToggleObserve={handleToggleObserve} />;
      break;
    case 'observing':
      pageContent = <VideoPlayer videos={observingVideos} onSelectUser={handleSelectUserFromFeed} onNavigate={handleNavigate} currentView={currentView} loggedInUser={loggedInUser} onToggleObserve={handleToggleObserve} />;
      break;
    case 'userFeed':
        pageContent = <VideoPlayer 
            videos={userFeedVideos} 
            onSelectUser={handleSelectUserFromFeed} 
            onNavigate={handleNavigate} 
            currentView={currentView}
            startIndex={userFeedStartIndex}
            onBack={handleBackFromUserFeed}
            loggedInUser={loggedInUser} 
            onToggleObserve={handleToggleObserve}
        />;
        break;
    case 'photos':
      pageContent = <PhotosPage onNavigate={handleNavigate} currentView={currentView} onSelectPhoto={handleSelectPhoto} />;
      break;
    case 'photoPost':
      if (selectedPhoto) {
        pageContent = <PhotoPostPage post={selectedPhoto} onBack={() => setCurrentView('photos')} />;
      } else {
        setCurrentView('photos');
      }
      break;
    case 'foryou':
      pageContent = <ShopPage onSelectPost={handleSelectShopPost} />;
      break;
    case 'shopDetail':
      if (selectedShopPost) {
        pageContent = <ShopDetailPage post={selectedShopPost} onBack={() => setCurrentView('foryou')} />;
      } else {
        setCurrentView('foryou');
      }
      break;
    case 'profile':
      if (viewedUser) {
        const isOwnProfile = viewedUser.username === loggedInUser.username;
        pageContent = (
            <ProfilePage 
                user={viewedUser} 
                allVideos={allVideos}
                onBack={handleBackFromProfile} 
                showBackButton={!isOwnProfile}
                onEdit={isOwnProfile ? () => setCurrentView('editProfile') : undefined}
                onPlayVideo={(videoId) => handlePlayFromProfile(viewedUser, videoId)}
                loggedInUser={loggedInUser}
                switchableAccounts={isOwnProfile ? switchableAccounts : []}
                onSwitchAccount={handleSwitchAccount}
                onToggleObserve={handleToggleObserve}
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
    case 'videoEditor':
      pageContent = <VideoEditorPage onNext={handleEditorNext} onBack={() => setCurrentView('feed')} />;
      break;
    case 'postCreation':
       if (videoToPost) {
            pageContent = <PostCreationPage 
                videoUrl={videoToPost}
                onBack={() => setCurrentView('videoEditor')} 
                onPublish={handlePublishVideo} 
            />;
       } else {
           setCurrentView('feed');
           pageContent = null;
       }
      break;
    default:
      pageContent = <VideoPlayer videos={allVideos} onSelectUser={handleSelectUserFromFeed} onNavigate={handleNavigate} currentView='feed' loggedInUser={loggedInUser} onToggleObserve={handleToggleObserve} />;
  }


  return (
    <div className="w-screen h-screen bg-[#0D0F13] text-white font-sans">
        <UploadModal
            isOpen={isUploadModalOpen}
            onClose={() => setIsUploadModalOpen(false)}
            onSelectUpload={handleSelectUpload}
            loggedInUser={loggedInUser}
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
                <RightSidebar allUsers={allUsers} loggedInUser={loggedInUser} onSelectUser={handleSelectUserFromFeed} onToggleObserve={handleToggleObserve} />
            </aside>
            
        </div>
    </div>
  );
};

export default App;