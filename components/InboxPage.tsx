import React from 'react';
import { InboxIcon } from '../constants';

// Props are no longer needed as the page is static.
interface InboxPageProps {}

const InboxPage: React.FC<InboxPageProps> = () => {
  return (
    <div className="w-full h-full bg-white text-black flex flex-col">
        <header className="p-4 border-b sticky top-0 bg-white z-10">
            <div className="flex justify-between items-center">
                 <div className="w-10"></div>
                 <h1 className="text-xl font-bold">Chats</h1>
                 <button className="text-gray-600" aria-label="New message">
                     <i className="fas fa-edit text-xl"></i>
                 </button>
            </div>
        </header>

        <main className="flex-grow overflow-y-auto flex flex-col items-center justify-center text-center p-8">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <InboxIcon className="w-12 h-12 text-gray-400" active={false} />
            </div>
            <h2 className="text-xl font-bold text-black">Your Messages</h2>
            <p className="mt-2 text-gray-500">
              Messages from friends will appear here.
            </p>
        </main>
    </div>
  );
};

export default InboxPage;
