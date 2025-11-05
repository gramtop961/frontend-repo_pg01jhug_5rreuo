import React, { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';

const Input = (props) => (
  <input
    {...props}
    className={`mt-1 w-full border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500 ${props.className || ''}`}
  />
);

const Select = (props) => (
  <select
    {...props}
    className={`mt-1 w-full border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500 ${props.className || ''}`}
  />
);

const AuthModal = ({ open, mode: initialMode = 'login', onClose, onLoginSuccess }) => {
  const [mode, setMode] = useState(initialMode);
  const [role, setRole] = useState('Mahasiswa');
  const [name, setName] = useState('');

  useEffect(() => setMode(initialMode), [initialMode]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white w-full max-w-md rounded-xl shadow-xl border border-gray-200 p-6 mx-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-lg font-semibold" style={{ color: '#222222' }}>
              {mode === 'login' ? 'Masuk ke Open Library Telkom' : 'Daftar Akun Baru'}
            </div>
            <div className="text-xs text-gray-500">Selamat datang di perpustakaan digital akademik</div>
          </div>
          <button aria-label="Close" onClick={onClose} className="p-2 rounded hover:bg-gray-100">
            <X size={18} />
          </button>
        </div>

        {mode === 'login' ? (
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-700">Peran</label>
              <Select value={role} onChange={(e) => setRole(e.target.value)}>
                <option>Mahasiswa</option>
                <option>Dosen</option>
                <option>Staf Open Library</option>
              </Select>
            </div>
            <div>
              <label className="text-sm text-gray-700">Email / NIM</label>
              <Input placeholder="email@telkomuniv.ac.id / 1101xxxx" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Kata Sandi</label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <button
              onClick={() => {
                const derivedName = role === 'Mahasiswa' ? 'Mahasiswa' : role === 'Dosen' ? 'Dosen Telkom' : 'Staf Open Library';
                onLoginSuccess?.({ name: derivedName, role });
                onClose?.();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-white font-medium"
              style={{ backgroundColor: '#C60000' }}
            >
              Masuk <ArrowRight size={16} />
            </button>
            <div className="flex items-center justify-between text-sm">
              <button className="text-red-700 hover:underline">Lupa Kata Sandi?</button>
              <button onClick={() => setMode('register')} className="text-gray-700 hover:underline">Buat Akun</button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700">Nama Lengkap</label>
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama sesuai KTP/KTM" />
              </div>
              <div>
                <label className="text-sm text-gray-700">NIM</label>
                <Input placeholder="1101xxxx" />
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-700">Peran</label>
              <Select value={role} onChange={(e) => setRole(e.target.value)}>
                <option>Mahasiswa</option>
                <option>Dosen</option>
                <option>Staf Open Library</option>
              </Select>
            </div>
            <div>
              <label className="text-sm text-gray-700">Email</label>
              <Input type="email" placeholder="email@telkomuniv.ac.id" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700">Kata Sandi</label>
                <Input type="password" placeholder="Minimal 8 karakter" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Konfirmasi Kata Sandi</label>
                <Input type="password" placeholder="Ulangi kata sandi" />
              </div>
            </div>
            <button
              onClick={() => {
                onLoginSuccess?.({ name: name || 'Pengguna Baru', role });
                onClose?.();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-white font-medium"
              style={{ backgroundColor: '#C60000' }}
            >
              Daftar
            </button>
            <div className="text-sm text-center">
              Sudah punya akun?{' '}
              <button onClick={() => setMode('login')} className="text-red-700 hover:underline">Masuk</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
