import React from 'react';
import type { ShopPost } from '../types';
import { BackIcon, StarIcon } from '../constants';

interface ShopDetailPageProps {
  post: ShopPost;
  onBack: () => void;
}

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <StarIcon key={`full-${i}`} className="w-5 h-5 text-yellow-400" />
      ))}
      {hasHalfStar && (
        <div className="relative">
          <StarIcon className="w-5 h-5 text-gray-300" />
          <div className="absolute top-0 left-0 overflow-hidden w-1/2">
            <StarIcon className="w-5 h-5 text-yellow-400" />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <StarIcon key={`empty-${i}`} className="w-5 h-5 text-gray-300" filled={false} />
      ))}
    </div>
  );
};


const ShopDetailPage: React.FC<ShopDetailPageProps> = ({ post, onBack }) => {
  return (
    <div className="w-full h-full bg-[#0D0F13] text-white flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center shrink-0 border-b border-gray-700/50">
        <button onClick={onBack} className="mr-4 p-2 rounded-full hover:bg-white/10">
          <BackIcon className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-xl font-bold">Product Details</h1>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {/* FIX: Use `imageUrls[0]` to display the first image from the array. */}
          <img src={post.imageUrls[0]} alt={post.title} className="w-full h-64 object-cover" />
          
          <div className="p-4 space-y-4">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            
            <div className="flex items-center justify-between">
                <p className="text-3xl font-bold text-cyan-400">{post.price}</p>
                {post.rating !== undefined && (
                    <div className="flex items-center gap-2">
                        <RatingStars rating={post.rating} />
                        <span className="text-gray-400 text-sm font-semibold">{post.rating.toFixed(1)}</span>
                    </div>
                )}
            </div>

            <div className="border-t border-gray-700/50 pt-4 flex items-center gap-3">
              <img src={post.seller.avatar} alt={post.seller.name} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">Sold by</p>
                <p className="text-sm text-gray-300">{post.seller.name}</p>
              </div>
            </div>
            
            <div className="border-t border-gray-700/50 pt-4">
              <h2 className="font-bold text-lg mb-2">Description</h2>
              <p className="text-gray-400">{post.description}</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-4xl mx-auto p-4 shrink-0 border-t border-gray-700/50">
        <button className="w-full bg-cyan-500 text-black font-bold py-3 rounded-lg hover:bg-cyan-400 transition-colors">
          Add to Cart
        </button>
      </footer>
    </div>
  );
};

export default ShopDetailPage;