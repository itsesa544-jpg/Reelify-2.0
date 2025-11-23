
import React from 'react';
import { trendingTopics, featuredCommunities } from '../constants';
import type { Community } from '../types';

const LeftSidebar: React.FC = () => {
  return (
    <div className="text-white p-4 space-y-8 bg-[#181520] rounded-2xl">
      <div>
        <h3 className="text-lg font-bold mb-4 text-gray-300">Trending Topics</h3>
        <ul className="space-y-2">
          {trendingTopics.map((topic, index) => (
            <li key={index} className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">{topic}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-4 text-gray-300">Featured Communities</h3>
        <ul className="space-y-4">
          {featuredCommunities.map((community: Community) => (
            <li key={community.name} className="flex items-center space-x-3 cursor-pointer group">
              <img src={community.icon} alt={community.name} className="w-10 h-10 rounded-full border-2 border-purple-500 group-hover:border-cyan-400 transition-colors" />
              <span className="font-semibold text-gray-300 group-hover:text-white transition-colors">{community.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;
