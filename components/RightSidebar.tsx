
import React from 'react';
import { videosData } from '../constants';
import type { User } from '../types';

interface RightSidebarProps {
    onSelectUser: (user: User) => void;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ onSelectUser }) => {
    // Get unique users, excluding the logged-in user
    const loggedInUser = videosData[0].user;
    const suggestedUsers = Array.from(new Map(videosData.map(v => [v.user.username, v.user])).values())
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
