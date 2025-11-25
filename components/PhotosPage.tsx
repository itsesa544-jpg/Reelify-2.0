
import React from 'react';
import { galleryMediaData, SearchIcon } from '../constants';
import type { View } from '../App';

interface PhotosPageProps {
    onNavigate: (view: View) => void;
    currentView: View;
}

const NavTab: React.FC<{ label: string; active: boolean; onClick: () => void }> = ({ label, active, onClick }) => (
    <button 
      onClick={onClick} 
      className={`relative py-1 text-lg font-semibold transition-colors duration-200 ${active ? 'text-white' : 'text-gray-400 hover:text-white'}`}
    >
      {label}
      {active && 
        <div className="absolute bottom-[-4px] left-0 right-0 h-1 bg-white rounded-full"></div>
      }
    </button>
  );

const PhotosPage: React.FC<PhotosPageProps> = ({ onNavigate, currentView }) => {
    const photos = galleryMediaData.filter(media => media.type === 'photo');

    return (
        <div className="w-full h-full bg-[#0D0F13] flex flex-col">
            <header className="absolute top-0 left-0 right-0 z-10 p-4 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent">
                <button className="p-2">
                    <SearchIcon className="w-6 h-6 text-white" />
                </button>
                <div className="flex items-center gap-6">
                    <NavTab label="For You" active={currentView === 'feed'} onClick={() => onNavigate('feed')} />
                    <NavTab label="Photos" active={currentView === 'photos'} onClick={() => onNavigate('photos')} />
                    <NavTab label="Followers" active={false} onClick={() => {}} />
                </div>
                <div className="w-10 h-10"></div>
            </header>

            <main className="flex-grow overflow-y-auto pt-20">
                {photos.length > 0 ? (
                    <div className="grid grid-cols-3 gap-1 p-1">
                        {photos.map(photo => (
                            <div key={photo.id} className="aspect-square bg-gray-800">
                                <img src={photo.thumbnailUrl} alt="photo" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                        <div className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <h3 className="mt-2 text-sm font-medium text-gray-300">No Photos</h3>
                            <p className="mt-1 text-sm text-gray-500">Get started by uploading your first photo.</p>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default PhotosPage;
