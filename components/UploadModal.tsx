
import React from 'react';
import { videosData, CloseIcon, UploadIcon, CameraIcon, TemplatesIcon } from '../constants';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectUpload: () => void;
}

interface ModalOptionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const ModalOptionButton: React.FC<ModalOptionButtonProps> = ({ icon, label, onClick }) => (
  <div onClick={onClick} className="flex flex-col items-center gap-2 cursor-pointer group">
    <div className="w-16 h-16 bg-black/40 rounded-2xl flex items-center justify-center group-hover:bg-purple-600/50 transition-colors">
      {icon}
    </div>
    <span className="text-sm font-medium text-gray-300">{label}</span>
  </div>
);

const UploadModal: React.FC<UploadModalProps> = ({ isOpen, onClose, onSelectUpload }) => {
  if (!isOpen) return null;

  const currentUser = videosData.length > 0 ? videosData[0].user : null;

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
        
        {currentUser ? (
            <div className="flex flex-col items-center mb-6">
                 <div className="p-1 rounded-full bg-gradient-to-tr from-yellow-300 via-purple-500 to-pink-500">
                    <img 
                    src={currentUser.avatar} 
                    alt={currentUser.username} 
                    className="w-20 h-20 rounded-full border-2 border-[#1f1b2d] object-cover"
                    />
                </div>
                <p className="font-semibold mt-3">{currentUser.username}</p>
                <h2 className="text-2xl font-bold mt-2">Create new content</h2>
            </div>
        ) : (
           <div className="mb-6">
                 <h2 className="text-2xl font-bold mt-2">Create new content</h2>
            </div>
        )}

        <div className="grid grid-cols-3 gap-4 text-center">
          <ModalOptionButton icon={<UploadIcon className="w-8 h-8 text-purple-400" />} label="Upload" onClick={onSelectUpload} />
          <ModalOptionButton icon={<CameraIcon className="w-8 h-8 text-cyan-400" />} label="Camera" />
          <ModalOptionButton icon={<TemplatesIcon className="w-8 h-8 text-pink-400" />} label="Templates" />
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
