import React, { useMemo, useState } from 'react';
import { ArrowRight, Download, Edit2, Trash2, ChevronDown } from 'lucide-react';
import HeroCover from './HeroCover';

const StatCard = ({ label, value, accent = '#C60000' }) => (
  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 sm:p-5">
    <div className="text-sm text-gray-600">{label}</div>
    <div className="mt-2 text-2xl font-semibold" style={{ color: '#222222' }}>{value}</div>
    <div className="mt-3 h-1.5 rounded-full" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="h-1.5 rounded-full" style={{ width: '64%', backgroundColor: accent }} />
    </div>
  </div>
);

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-4 sm:mb-6">
    <h3 className="text-lg sm:text-xl font-semibold" style={{ color: '#444444' }}>{title}</h3>
    {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
  </div>
);

const SimpleBarChart = ({ data }) => {
  const max = useMemo(() => Math.max(...data.map(d => d.value), 1), [data]);
  return (
    <div className="w-full h-48 flex items-end gap-3 bg-white border border-gray-200 rounded-md p-3">
      {data.map((d) => (
        <div key={d.label} className="flex-1 flex flex-col items-center">
          <div
            className="w-full rounded-t-md"
            style={{
              height: `${(d.value / max) * 100}%`,
              backgroundColor: '#C60000',
            }}
            title={`${d.label}: ${d.value}`}
          />
          <span className="mt-2 text-xs text-gray-600 truncate w-full text-center">{d.label}</span>
        </div>
      ))}
    </div>
  );
};

const SimplePieChart = ({ data }) => {
  const total = useMemo(() => data.reduce((s, d) => s + d.value, 0) || 1, [data]);
  let cumulative = 0;
  const colors = ['#C60000', '#444444', '#999999', '#F5F5F5'];
  return (
    <svg viewBox="0 0 42 42" className="w-48 h-48">
      {data.map((d, i) => {
        const dash = (d.value / total) * 100;
        const dashArray = `${dash} ${100 - dash}`;
        const dashOffset = 100 - cumulative;
        cumulative += dash;
        return (
          <circle
            key={d.label}
            r="15.915"
            cx="21"
            cy="21"
            fill="transparent"
            stroke={colors[i % colors.length]}
            strokeWidth="6"
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
          />
        );
      })}
    </svg>
  );
};

const LoginRegister = ({ onLogin }) => {
  const [mode, setMode] = useState('login');
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="hidden md:block">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop"
            alt="Library illustration"
            className="w-full h-96 object-cover rounded-lg"
          />
          <p className="mt-3 text-sm text-gray-600">
            Jelajahi ribuan koleksi digital, jurnal, dan karya ilmiah di satu tempat.
          </p>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: '#C60000' }}>
            <span className="text-white font-bold">OL</span>
          </div>
          <div>
            <div className="font-semibold text-lg" style={{ color: '#222222' }}>Open Library Telkom</div>
            <div className="text-xs text-gray-500">Masuk untuk melanjutkan</div>
          </div>
        </div>

        {mode === 'login' ? (
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-700">Email / NIM</label>
                <input className="mt-1 w-full border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Kata Sandi</label>
                <input type="password" className="mt-1 w-full border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500" />
              </div>
              <button
                onClick={() => onLogin?.()}
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
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700">Nama Lengkap</label>
                <input className="mt-1 w-full border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500" />
              </div>
              <div>
                <label className="text-sm text-gray-700">NIM</label>
                <input className="mt-1 w-full border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Email</label>
                <input className="mt-1 w-full border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Kata Sandi</label>
                <input type="password" className="mt-1 w-full border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-gray-700">Konfirmasi Kata Sandi</label>
                <input type="password" className="mt-1 w-full border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500" />
              </div>
            </div>
            <button
              onClick={() => onLogin?.()}
              className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-white font-medium"
              style={{ backgroundColor: '#C60000' }}
            >
              Daftar
            </button>
            <div className="mt-3 text-sm text-center">
              Sudah punya akun?{' '}
              <button onClick={() => setMode('login')} className="text-red-700 hover:underline">Masuk</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <HeroCover />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard label="Total Koleksi" value="12.430" />
        <StatCard label="File Terunggah" value="3.214" accent="#444444" />
        <StatCard label="Aktivitas Terbaru" value="57" accent="#999999" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <SectionTitle title="Koleksi Terbaru" subtitle="Tambahan koleksi dalam 7 hari terakhir" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-4 rounded-lg border border-gray-200 bg-white hover:shadow-sm transition">
                <div className="text-sm text-gray-500">Jurnal</div>
                <div className="mt-1 font-medium" style={{ color: '#222222' }}>Riset Telekomunikasi #{i}</div>
                <button className="mt-3 text-sm text-red-700 hover:underline">Lihat Detail</button>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <SectionTitle title="Rekomendasi Bacaan" subtitle="Dipersonalisasi untuk Anda" />
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start justify-between p-4 rounded-lg border border-gray-200">
                <div>
                  <div className="text-sm text-gray-500">E-Book</div>
                  <div className="mt-0.5 font-medium" style={{ color: '#222222' }}>Data Science Fundamentals {i}</div>
                </div>
                <button className="text-sm inline-flex items-center gap-1 text-red-700 hover:underline">
                  Baca <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const InputMonitoring = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <SectionTitle title="Input / Monitoring Koleksi Digital" subtitle="Tambahkan informasi koleksi baru" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-700">Judul</label>
            <input className="mt-1 w-full border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500" />
          </div>
          <div>
            <label className="text-sm text-gray-700">Penulis</label>
            <input className="mt-1 w-full border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500" />
          </div>
          <div>
            <label className="text-sm text-gray-700">Tahun</label>
            <input type="number" className="mt-1 w-full border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500" />
          </div>
          <div>
            <label className="text-sm text-gray-700">Kategori</label>
            <select className="mt-1 w-full border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500">
              <option>Jurnal</option>
              <option>E-Book</option>
              <option>Repositori</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm text-gray-700">Deskripsi</label>
            <textarea rows={3} className="mt-1 w-full border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm text-gray-700">Unggah Berkas</label>
            <input type="file" className="mt-1 w-full text-sm" />
          </div>
        </div>
        <button className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-md text-white" style={{ backgroundColor: '#C60000' }}>
          Tambah Koleksi Baru
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <SectionTitle title="Monitoring Koleksi" subtitle="Lihat status unggahan terbaru" />
        <div className="overflow-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-600">
                <th className="py-2">Judul</th>
                <th className="py-2">Tanggal</th>
                <th className="py-2">Status</th>
                <th className="py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {[1,2,3,4].map((i) => (
                <tr key={i} className="border-t border-gray-100">
                  <td className="py-2 pr-4">Publikasi Penelitian #{i}</td>
                  <td className="py-2 pr-4">2025-01-0{i}</td>
                  <td className="py-2 pr-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-50 text-green-700 border border-green-200">Selesai</span>
                  </td>
                  <td className="py-2">
                    <div className="inline-flex items-center gap-2">
                      <button className="p-1.5 rounded hover:bg-gray-100" aria-label="Edit"><Edit2 size={16} /></button>
                      <button className="p-1.5 rounded hover:bg-gray-100" aria-label="Hapus"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Reports = () => {
  const barData = [
    { label: 'Jurnal', value: 120 },
    { label: 'E-Book', value: 90 },
    { label: 'Repositori', value: 60 },
    { label: 'Tesis', value: 40 },
  ];
  const pieData = [
    { label: 'Unduhan', value: 55 },
    { label: 'Pratinjau', value: 25 },
    { label: 'Favorit', value: 20 },
  ];
  const [range, setRange] = useState('Mingguan');
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h3 className="text-xl font-semibold" style={{ color: '#444444' }}>Laporan & Analisis Aktivitas Pengguna</h3>
        <div className="flex items-center gap-2">
          <select value={range} onChange={(e) => setRange(e.target.value)} className="border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500 text-sm">
            <option>Harian</option>
            <option>Mingguan</option>
            <option>Bulanan</option>
          </select>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border text-sm" style={{ borderColor: '#C60000', color: '#C60000' }}>
            Download Report (PDF) <Download size={16} />
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-white text-sm" style={{ backgroundColor: '#C60000' }}>
            Cetak
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SectionTitle title="Unduhan per Kategori" />
          <SimpleBarChart data={barData} />
        </div>
        <div>
          <SectionTitle title="Distribusi Aktivitas" />
          <div className="bg-white rounded-xl border border-gray-200 p-5 flex items-center justify-center">
            <SimplePieChart data={pieData} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <SectionTitle title="Ringkasan" subtitle={`Periode: ${range}`} />
        <div className="overflow-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-600">
                <th className="py-2">Metrix</th>
                <th className="py-2">Nilai</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Total Pengguna Aktif', '1.240'],
                ['Total Unduhan', '6.532'],
                ['Rata-rata Durasi Sesi', '12m 45s'],
              ].map(([k, v]) => (
                <tr key={k} className="border-t border-gray-100">
                  <td className="py-2 pr-4">{k}</td>
                  <td className="py-2 pr-4">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <SectionTitle title="Foto Pengguna" />
        <div className="flex flex-col items-center">
          <img
            src="https://api.dicebear.com/7.x/initials/svg?seed=OT"
            alt="avatar"
            className="w-28 h-28 rounded-full border border-gray-200"
          />
          <button className="mt-3 px-3 py-2 rounded-md text-sm border" style={{ borderColor: '#C60000', color: '#C60000' }}>
            Ubah Foto
          </button>
        </div>
      </div>
      <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-5">
        <SectionTitle title="Pengaturan Akun" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-700">Nama</label>
            <input className="mt-1 w-full border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500" />
          </div>
          <div>
            <label className="text-sm text-gray-700">NIM</label>
            <input className="mt-1 w-full border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500" />
          </div>
          <div>
            <label className="text-sm text-gray-700">Email</label>
            <input type="email" className="mt-1 w-full border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500" />
          </div>
          <div>
            <label className="text-sm text-gray-700">Fakultas</label>
            <select className="mt-1 w-full border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500">
              <option>Informatika</option>
              <option>Teknik Elektro</option>
              <option>Ilmu Terapan</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm text-gray-700">Kata Sandi Baru</label>
            <input type="password" className="mt-1 w-full border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500" />
          </div>
        </div>
        <button className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-md text-white" style={{ backgroundColor: '#C60000' }}>
          Simpan Perubahan
        </button>
      </div>
    </div>
  );
};

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-md">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4">
        <span className="text-sm font-medium" style={{ color: '#222222' }}>{q}</span>
        <ChevronDown className={`transition ${open ? 'rotate-180' : ''}`} size={18} />
      </button>
      {open && <div className="px-4 pb-4 text-sm text-gray-600">{a}</div>}
    </div>
  );
};

const Help = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold" style={{ color: '#444444' }}>Pusat Bantuan Open Library Telkom</h3>
      <div className="space-y-3">
        {[
          ['Bagaimana cara mengunggah koleksi?', 'Buka menu Input Data, lengkapi formulir, lalu klik Tambah Koleksi Baru.'],
          ['Bagaimana mencari koleksi?', 'Gunakan kolom pencarian di bagian atas untuk mencari berdasarkan judul, penulis, atau kategori.'],
          ['Siapa yang dapat mengakses?', 'Mahasiswa dan dosen dengan akun aktif dapat masuk dan mengelola koleksi sesuai peran.'],
        ].map(([q, a]) => (
          <FAQItem key={q} q={q} a={a} />
        ))}
      </div>
      <div className="flex items-center gap-3">
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 rounded-md text-sm border"
          style={{ borderColor: '#C60000', color: '#C60000' }}
        >
          Dokumentasi (PDF)
        </a>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 rounded-md text-sm text-white"
          style={{ backgroundColor: '#C60000' }}
        >
          Hubungi Kami
        </a>
      </div>
    </div>
  );
};

const Pages = ({ page, loggedIn, onLoginSuccess }) => {
  if (!loggedIn) {
    return <LoginRegister onLogin={onLoginSuccess} />;
  }
  if (page === 'input') return <InputMonitoring />;
  if (page === 'reports') return <Reports />;
  if (page === 'profile') return <Profile />;
  if (page === 'help') return <Help />;
  // Collections can reuse dashboard sections for now
  return <Dashboard />;
};

export default Pages;
