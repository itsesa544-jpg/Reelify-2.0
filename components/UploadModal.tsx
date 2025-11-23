
import React from 'react';
import { videoData, CloseIcon, UploadIcon, CameraIcon, TemplatesIcon } from '../constants';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalOptionButton = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex flex-col items-center gap-2 cursor-pointer group">
    <div className="w-16 h-16 bg-black/40 rounded-2xl flex items-center justify-center group-hover:bg-purple-600/50 transition-colors">
      {icon}
    </div>
    <span className="text-sm font-medium text-gray-300">{label}</span>
  </div>
);

const UploadModal: React.FC<UploadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center transition-opacity duration-300" 
      onClick={onClose}
    >
      <div 
        className="bg-gradient-to-br from-[#1f1b2d] to-[#110e1b] rounded-2xl shadow-xl p-6 w-11/12 max-w-sm text-white text-center relative border border-purple-500/20" 
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <CloseIcon />
        </button>
        
        <div className="flex flex-col items-center mb-6">
            <img 
              src={videoData.user.avatar} 
              alt={videoData.user.username} 
              className="w-20 h-20 rounded-full border-4 border-purple-500 mb-3"
            />
            <p className="font-semibold">{videoData.user.username}</p>
            <h2 className="text-2xl font-bold mt-2">Create new content</h2>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <ModalOptionButton icon={<UploadIcon />} label="Upload" />
          <ModalOptionButton icon={<CameraIcon />} label="Camera" />
          <ModalOptionButton icon={<TemplatesIcon />} label="Templates" />
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
