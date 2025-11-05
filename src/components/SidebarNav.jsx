import React from 'react';
import { Home, Library, FilePlus2, BarChart2, User, HelpCircle, LogOut } from 'lucide-react';

const items = [
  { key: 'dashboard', label: 'Beranda', icon: Home },
  { key: 'collections', label: 'Koleksi', icon: Library },
  { key: 'input', label: 'Input Data', icon: FilePlus2 },
  { key: 'reports', label: 'Laporan', icon: BarChart2 },
  { key: 'profile', label: 'Profil', icon: User },
  { key: 'help', label: 'Bantuan', icon: HelpCircle },
];

const SidebarNav = ({ current, onChange, onLogout }) => {
  return (
    <aside className="hidden lg:flex lg:flex-col w-64 h-[calc(100vh-4rem)] sticky top-16 border-r border-gray-200 bg-white">
      <nav className="flex-1 p-4 space-y-1">
        {items.map(({ key, label, icon: Icon }) => {
          const active = current === key;
          return (
            <button
              key={key}
              onClick={() => onChange(key)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition ${
                active
                  ? 'bg-red-50 text-red-700 border border-red-100'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon size={18} />
              <span>{label}</span>
            </button>
          );
        })}
      </nav>
      <div className="p-4 border-t border-gray-200">
        <button onClick={onLogout} className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm text-white" style={{ backgroundColor: '#C60000' }}>
          <LogOut size={16} /> Keluar
        </button>
      </div>
    </aside>
  );
};

export default SidebarNav;
