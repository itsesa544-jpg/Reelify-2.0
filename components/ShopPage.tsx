import React from 'react';
import { shopPostsData } from '../constants';
import type { ShopPost } from '../types';

const ShopPostCard: React.FC<{ post: ShopPost }> = ({ post }) => (
  <div className="bg-[#1A1B20] rounded-xl overflow-hidden">
    <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
    <div className="p-3">
      <h3 className="font-semibold text-white text-md truncate">{post.title}</h3>
      <p className="text-lg font-bold text-cyan-400 mt-1">{post.price}</p>
      <div className="flex items-center gap-2 mt-3">
        <img src={post.seller.avatar} alt={post.seller.name} className="w-6 h-6 rounded-full" />
        <span className="text-sm text-gray-400">{post.seller.name}</span>
      </div>
    </div>
  </div>
);

const ShopPage: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0D0F13] overflow-y-auto pb-20">
      <header className="p-4 bg-[#1A1B20]/80 backdrop-blur-sm sticky top-0 z-20 flex items-center justify-center">
        <h1 className="text-xl font-bold text-white">Shop</h1>
      </header>
      <div className="p-4 grid grid-cols-2 gap-4">
        {shopPostsData.map(post => (
          <ShopPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;