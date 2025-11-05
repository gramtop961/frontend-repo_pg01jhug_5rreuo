import React from 'react';
import { Search, Bell, User } from 'lucide-react';

const HeaderBar = ({ onSearch, onProfileClick, user }) => {
  return (
    <header className="sticky top-0 z-20 w-full bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: '#C60000' }}>
            <span className="text-white font-bold">OL</span>
          </div>
          <div className="leading-tight">
            <div className="font-semibold tracking-tight" style={{ color: '#222222' }}>Open Library Telkom</div>
            <div className="text-xs text-gray-500">Academic Digital Library</div>
          </div>
        </div>

        <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              onChange={(e) => onSearch?.(e.target.value)}
              type="text"
              className="w-full pl-9 pr-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm"
              placeholder="Cari koleksi, penulis, atau kategori..."
            />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button className="relative p-2 rounded-md hover:bg-gray-100" aria-label="Notifications">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">3</span>
          </button>
          <button onClick={onProfileClick} className="flex items-center space-x-2 px-2 py-1 rounded-md hover:bg-gray-100">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <User size={18} className="text-gray-600" />
            </div>
            <div className="hidden sm:block text-left">
              <div className="text-sm font-medium" style={{ color: '#444444' }}>{user?.name || 'Tamu'}</div>
              <div className="text-xs text-gray-500">{user?.role || 'Guest'}</div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
