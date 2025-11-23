
import React from 'react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false }) => (
  <a href="#" className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-white' : 'text-gray-500 hover:text-white'}`}>
    {icon}
    <span className="text-xs font-medium">{label}</span>
  </a>
);

interface BottomNavProps {
  onUploadClick: () => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ onUploadClick }) => {
  const iconClasses = "w-6 h-6";

  return (
    <nav className="absolute bottom-0 left-0 right-0 z-10 bg-black/50 backdrop-blur-md px-4 py-2 border-t border-white/10">
      <div className="flex justify-around items-center">
        <NavItem
          label="Home"
          icon={<svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>}
          active
        />
        <NavItem
          label="For You"
          icon={<svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg>}
        />
        <button 
          onClick={onUploadClick}
          className="w-14 h-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-400 to-purple-600 shadow-lg shadow-purple-600/50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
        </button>
        <NavItem
          label="Communities"
          icon={<svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a3.002 3.002 0 013.39-2.142 3.002 3.002 0 013.39 2.142m0 0A3 3 0 0112 18c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3z" /></svg>}
        />
        <NavItem
          label="Profile"
          icon={<svg xmlns="http://www.w3.org/2000/svg" className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
        />
      </div>
    </nav>
  );
};

export default BottomNav;
