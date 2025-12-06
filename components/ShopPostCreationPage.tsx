import React, { useState } from 'react';
import { BackIcon, PublishIcon } from '../constants';
import type { ShopPost } from '../types';

interface ShopPostCreationPageProps {
    imageUrl: string;
    onBack: () => void;
    // FIX: Corrected the onPublish prop type to align with the handler in App.tsx.
    onPublish: (postData: Omit<ShopPost, 'id' | 'seller' | 'rating' | 'imageUrls'>) => void;
}

const ShopPostCreationPage: React.FC<ShopPostCreationPageProps> = ({ imageUrl, onBack, onPublish }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handlePublish = () => {
        if (!title.trim() || !price.trim()) {
            alert('Please fill out the title and price.');
            return;
        }
        // FIX: Pass all required fields to satisfy the `ShopPost` type, using defaults for fields not in the form.
        onPublish({ 
            title, 
            price, 
            description,
            category: 'Default Category',
            condition: 'New',
            location: 'Not specified',
            deliveryOption: 'Courier',
            deliveryCharge: 'Separate',
        });
    };

    return (
        <div className="w-full h-full bg-white text-black flex flex-col">
            {/* Header */}
            <header className="p-4 flex items-center shrink-0 border-b">
                <button onClick={onBack} className="mr-4">
                    <BackIcon className="w-6 h-6 text-black" />
                </button>
                <h1 className="text-lg font-bold">New Shop Post</h1>
            </header>

            {/* Main Content */}
            <main className="flex-grow overflow-y-auto p-4 space-y-4">
                <div className="w-full aspect-square bg-gray-100 border border-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
                    <img src={imageUrl} alt="New product preview" className="max-w-full max-h-full object-contain" />
                </div>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-gray-100 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                 <input
                    type="text"
                    placeholder="Price (e.g., $19.99)"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full bg-gray-100 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <textarea
                    placeholder="Product description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full h-28 bg-gray-100 p-3 rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
            </main>
            
            {/* Footer */}
            <footer className="p-4 shrink-0 border-t bg-white">
                <button onClick={handlePublish} className="w-full bg-red-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2">
                    <PublishIcon /> Publish Item
                </button>
            </footer>
        </div>
    );
};

export default ShopPostCreationPage;