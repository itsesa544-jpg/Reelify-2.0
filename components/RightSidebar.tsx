

import React from 'react';
// FIX: The `videosData` import has been removed and replaced with a `Video` type import. The component now receives data via props, resolving an error where `videosData` was not an exported member of the `constants` module.
import type { User, Video } from '../types';

interface RightSidebarProps {
    allVideos: Video[];
    onSelectUser: (user: User) => void;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ allVideos, onSelectUser }) => {
    // Get unique users, excluding the logged-in user
    // FIX: The component now uses the `allVideos` prop to derive user data. This change ensures that the component is using the correct, strongly-typed data source, which resolves multiple errors where properties were not found on type `unknown`.
    const loggedInUser = allVideos[0].user;
    const suggestedUsers = Array.from(new Map(allVideos.map(v => [v.user.username, v.user])).values())
        .filter(u => u.username !== loggedInUser.username);

    return (
        <div className="text-white p-4 bg-[#181520] rounded-2xl h-full flex flex-col">
            <h3 className="text-lg font-bold mb-4 text-gray-300">Suggested for you</h3>
            <ul className="space-y-4 overflow-y-auto">
                {suggestedUsers.map(user => (
                    <li key={user.username} className="flex items-center justify-between">
                        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onSelectUser(user)}>
                            <img src={user.avatar} alt={user.username} className="w-10 h-10 rounded-full" />
                            <div>
                                <p className="font-semibold text-sm text-gray-200 group-hover:text-white">{user.name}</p>
                                <p className="text-xs text-gray-500 group-hover:text-gray-400">{user.username}</p>
                            </div>
                        </div>
                        <button className="text-cyan-400 font-bold text-sm hover:text-cyan-300 transition-colors">
                            Observe
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RightSidebar;