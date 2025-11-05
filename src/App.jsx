import React, { useState } from 'react';
import HeaderBar from './components/HeaderBar';
import SidebarNav from './components/SidebarNav';
import Pages from './components/Pages';
import AuthModal from './components/AuthModal';

function App() {
  const [page, setPage] = useState('dashboard');
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: 'Mahasiswa', role: 'Mahasiswa' });
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F5F5F5' }}>
      <HeaderBar
        onSearch={(q) => console.log('search:', q)}
        onProfileClick={() => setPage('profile')}
        user={user}
        loggedIn={loggedIn}
        onLoginClick={() => { setAuthMode('login'); setAuthOpen(true); }}
        onRegisterClick={() => { setAuthMode('register'); setAuthOpen(true); }}
        onLogout={() => { setLoggedIn(false); setUser({ name: 'Mahasiswa', role: 'Mahasiswa' }); setPage('dashboard'); }}
      />

      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-6 py-6">
        <SidebarNav current={page} onChange={setPage} onLogout={() => setLoggedIn(false)} />

        <main className="flex-1 min-w-0">
          <Pages page={page} />
        </main>
      </div>

      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-gray-600 flex flex-wrap gap-2 items-center justify-between">
          <div>
            © {new Date().getFullYear()} Open Library Telkom — All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:underline">Kebijakan Privasi</a>
            <a href="#" className="hover:underline">Syarat Layanan</a>
          </div>
        </div>
      </footer>

      <AuthModal
        open={authOpen}
        mode={authMode}
        onClose={() => setAuthOpen(false)}
        onLoginSuccess={(payload) => {
          setLoggedIn(true);
          setUser({ name: payload?.name || 'Akun Telkom', role: payload?.role || 'Mahasiswa' });
        }}
      />
    </div>
  );
}

export default App;
