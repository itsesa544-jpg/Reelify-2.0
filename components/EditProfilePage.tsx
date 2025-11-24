
import React, { useState } from 'react';
import type { User } from '../types';
import { BackIcon } from '../constants';

interface EditProfilePageProps {
  user: User;
  onSave: (updatedUser: User) => void;
  onCancel: () => void;
}

const EditProfilePage: React.FC<EditProfilePageProps> = ({ user, onSave, onCancel }) => {
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);

  const handleSave = () => {
    const updatedUser = {
      ...user,
      name,
      bio,
    };
    onSave(updatedUser);
  };

  return (
    <div className="w-full h-full bg-[#0D0F13] overflow-y-auto text-white">
      {/* Header */}
      <header className="p-4 bg-[#1A1B20]/80 backdrop-blur-sm sticky top-0 z-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
            <button onClick={onCancel} className="text-white">
                <BackIcon />
            </button>
            <h1 className="text-xl font-bold text-white">Edit Profile</h1>
        </div>
        <div>
            <button onClick={onCancel} className="font-semibold px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">
                Cancel
            </button>
            <button 
                onClick={handleSave} 
                className="bg-cyan-500 text-black font-bold px-4 py-2 rounded-lg hover:bg-cyan-400 transition-colors ml-2"
            >
                Save
            </button>
        </div>
      </header>

      {/* Content */}
      <div className="p-4 space-y-6">
        {/* Cover Photo */}
        <div>
          <label className="text-sm font-semibold text-gray-400">Cover Photo</label>
          <div className="relative mt-2">
            <img src={user.coverPhoto} alt="Cover" className="w-full h-36 object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
              <button className="bg-black/50 backdrop-blur-sm text-white font-semibold py-2 px-4 rounded-lg border border-white/20">
                Change
              </button>
            </div>
          </div>
        </div>

        {/* Profile Picture */}
        <div>
          <label className="text-sm font-semibold text-gray-400">Profile Picture</label>
          <div className="relative mt-2 w-24 h-24">
            <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover rounded-full" />
            <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <button className="text-white text-xs font-semibold">Change</button>
            </div>
          </div>
        </div>

        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-400 mb-2">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-[#1A1B20] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        {/* Bio Textarea */}
        <div>
          <label htmlFor="bio" className="block text-sm font-semibold text-gray-400 mb-2">Bio</label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={4}
            className="w-full bg-[#1A1B20] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
