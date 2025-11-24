import React from 'react';
import type { View } from '../App';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false }) => (
  <div className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-white' : 'text-gray-500 hover:text-white'}`}>
    {icon}
    <span className="text-xs font-medium">{label}</span>
  </div>
);

interface BottomNavProps {
  onUploadClick: () => void;
  currentView: View;
  onNavigate: (view: View) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ onUploadClick, currentView, onNavigate }) => {
  const iconClasses = "w-6 h-6";

  return (
    <nav className="bg-black px-4 py-2 border-t border-white/10 w-full shrink-0">
      <div className="flex justify-around items-center">
        <button onClick={() => onNavigate('feed')} className="flex-1">
          <NavItem
            label="Home"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill={currentView === 'feed' ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>}
            active={currentView === 'feed'}
          />
        </button>
        <button onClick={() => onNavigate('foryou')} className="flex-1">
          <NavItem
            label="Shop"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill={currentView === 'foryou' ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>}
            active={currentView === 'foryou'}
          />
        </button>
        <button 
          onClick={onUploadClick}
          className="w-14 h-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-400 to-purple-600 shadow-lg shadow-purple-600/50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
        </button>
        <button className="flex-1">
          <NavItem
            label="Inbox"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
          />
        </button>
        <button onClick={() => onNavigate('profile')} className="flex-1">
          <NavItem
            label="Profile"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill={currentView === 'profile' ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
            active={currentView === 'profile'}
          />
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;