import React, { useMemo, useState, useRef } from 'react';
import { ArrowRight, Download, Edit2, Trash2, ChevronDown, Printer } from 'lucide-react';

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-4 sm:mb-6">
    <h3 className="text-lg sm:text-xl font-semibold" style={{ color: '#444444' }}>{title}</h3>
    {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
  </div>
);

// 1) Home hero: solid pink background, no images/animations
const HomeHero = () => {
  return (
    <section className="relative w-full rounded-xl overflow-hidden shadow p-10 sm:p-14 md:p-20" style={{ background: 'linear-gradient(135deg, #fda4af 0%, #f43f5e 100%)' }}>
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
          Selamat Datang di Open Library Telkom
        </h1>
        <p className="mt-4 text-base sm:text-lg text-white/90">
          Akses perpustakaan digital akademik Telkom University. Jelajahi jurnal, e-book, dan repositori ilmiah dengan cepat dan mudah.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <a href="#koleksi" className="px-4 py-2 rounded-md text-rose-600 bg-white font-medium">
            Jelajahi Koleksi
          </a>
          <a href="#bantuan" className="px-4 py-2 rounded-md border border-white text-white/90 hover:bg-white/10">
            Pusat Bantuan
          </a>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ label, value, accent = '#C60000' }) => (
  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 sm:p-5">
    <div className="text-sm text-gray-600">{label}</div>
    <div className="mt-2 text-2xl font-semibold" style={{ color: '#222222' }}>{value}</div>
    <div className="mt-3 h-1.5 rounded-full" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="h-1.5 rounded-full" style={{ width: '64%', backgroundColor: accent }} />
    </div>
  </div>
);

// 2) Collections: no welcome/integrated text. Show stats and book list with readers
const sampleBooks = [
  {
    id: 1,
    title: 'The Adventures of Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    type: 'E-Book',
    href: 'https://www.gutenberg.org/cache/epub/1661/pg1661-images.html',
  },
  {
    id: 2,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    type: 'E-Book',
    href: 'https://www.gutenberg.org/files/1342/1342-h/1342-h.htm',
  },
  {
    id: 3,
    title: 'A Brief History of Time (Sample PDF)',
    author: 'Stephen Hawking',
    type: 'PDF',
    href: 'https://arxiv.org/pdf/2102.13067.pdf',
  },
  {
    id: 4,
    title: 'Machine Learning Basics (PDF)',
    author: 'Open Source',
    type: 'PDF',
    href: 'https://arxiv.org/pdf/1811.12808.pdf',
  },
];

const Collections = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard label="Total Koleksi" value="12.430" />
        <StatCard label="File Terunggah" value="3.214" accent="#f43f5e" />
        <StatCard label="Akses Bulan Ini" value="2.187" accent="#fb7185" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <SectionTitle title="Koleksi Buku Asli" subtitle="Klik buku untuk membaca" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sampleBooks.map((b) => (
            <a key={b.id} href={b.href} target="_blank" rel="noreferrer" className="p-4 rounded-lg border border-gray-200 bg-white hover:shadow-sm transition">
              <div className="text-xs uppercase tracking-wide text-gray-500">{b.type}</div>
              <div className="mt-1 font-medium" style={{ color: '#222222' }}>{b.title}</div>
              <div className="text-sm text-gray-600">{b.author}</div>
              <div className="mt-3 inline-flex items-center gap-1 text-rose-600 font-medium">Baca <ArrowRight size={14} /></div>
            </a>
          ))}
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
  const colors = ['#C60000', '#f43f5e', '#fb7185', '#F5F5F5'];
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

const Reports = () => {
  const [category, setCategory] = useState('Semua');
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
  const printRef = useRef(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Print styles to export only the report area */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #report-print-area, #report-print-area * { visibility: visible; }
          #report-print-area { position: absolute; left: 0; top: 0; width: 100%; }
        }
      `}</style>

      <div className="flex items-center justify-between flex-wrap gap-3">
        <h3 className="text-xl font-semibold" style={{ color: '#444444' }}>Laporan & Analisis Aktivitas Pengguna</h3>
        <div className="flex items-center gap-2">
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500 text-sm">
            <option>Semua</option>
            <option>Jurnal</option>
            <option>E-Book</option>
            <option>Repositori</option>
            <option>Tesis</option>
          </select>
          <select value={range} onChange={(e) => setRange(e.target.value)} className="border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500 text-sm">
            <option>Harian</option>
            <option>Mingguan</option>
            <option>Bulanan</option>
          </select>
          <button onClick={handlePrint} className="inline-flex items-center gap-2 px-3 py-2 rounded-md border text-sm" style={{ borderColor: '#C60000', color: '#C60000' }}>
            Download PDF <Download size={16} />
          </button>
          <button onClick={handlePrint} className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-white text-sm" style={{ backgroundColor: '#C60000' }}>
            Cetak <Printer size={16} />
          </button>
        </div>
      </div>

      <div id="report-print-area" ref={printRef} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SectionTitle title={`Unduhan per Kategori (${category})`} />
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
    </div>
  );
};

const Profile = () => {
  const [avatar, setAvatar] = useState('https://api.dicebear.com/7.x/initials/svg?seed=OT');
  const fileRef = useRef(null);

  const onPick = () => fileRef.current?.click();
  const onFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = (evt) => setAvatar(String(evt.target?.result || ''));
    reader.readAsDataURL(f);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <SectionTitle title="Foto Pengguna" />
        <div className="flex flex-col items-center">
          <img
            src={avatar}
            alt="avatar"
            className="w-28 h-28 rounded-full border border-gray-200 object-cover"
          />
          <input ref={fileRef} onChange={onFile} type="file" accept="image/*" className="hidden" />
          <button onClick={onPick} className="mt-3 px-3 py-2 rounded-md text-sm border" style={{ borderColor: '#C60000', color: '#C60000' }}>
            Ubah Foto
          </button>
        </div>
      </div>
      <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-5">
        <SectionTitle title="Pengaturan Akun" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-700">Nama</label>
            <input defaultValue="Akun Telkom" className="mt-1 w-full border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500" />
          </div>
          <div>
            <label className="text-sm text-gray-700">NIM</label>
            <input defaultValue="1101xxxx" className="mt-1 w-full border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500" />
          </div>
          <div>
            <label className="text-sm text-gray-700">Email</label>
            <input type="email" defaultValue="email@telkomuniv.ac.id" className="mt-1 w-full border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500" />
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
            <label className="text-sm text-gray-700">Kata Sandi Baru (opsional)</label>
            <input type="password" placeholder="Biarkan kosong jika tidak ingin mengubah" className="mt-1 w-full border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500" />
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
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [subjek, setSubjek] = useState('');
  const [pesan, setPesan] = useState('');

  const handleEmail = () => {
    const to = 'openlibrary@telkomuniv.ac.id';
    const subject = encodeURIComponent(subjek || 'Pertanyaan Open Library');
    const body = encodeURIComponent(`Nama: ${nama}\nEmail: ${email}\n\nPesan:\n${pesan}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  const faqs = [
    ['Bagaimana cara mengunggah koleksi?', 'Buka menu Input Data, lengkapi formulir, lalu klik Tambah Koleksi Baru.'],
    ['Bagaimana mencari koleksi?', 'Gunakan kolom pencarian di bagian atas untuk mencari berdasarkan judul, penulis, atau kategori.'],
    ['Perbedaan peran akun', 'Mahasiswa: akses baca; Dosen: unggah/kurasi; Staf: administrasi penuh.'],
    ['Cara mengunduh laporan PDF', 'Buka menu Laporan, pilih kategori dan periode, lalu klik Download PDF untuk mencetak sebagai PDF.'],
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold" style={{ color: '#444444' }}>Pusat Bantuan Open Library Telkom</h3>
        <p className="text-sm text-gray-600 mt-1">Pertanyaan umum dan panduan cepat.</p>
        <div className="mt-4 space-y-3">
          {faqs.map(([q, a]) => (
            <FAQItem key={q} q={q} a={a} />
          ))}
        </div>
      </div>

      <div id="bantuan" className="bg-white rounded-xl border border-gray-200 p-5">
        <SectionTitle title="Hubungi Kami" subtitle="Kirimkan pertanyaan melalui email" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-700">Nama</label>
            <input value={nama} onChange={(e) => setNama(e.target.value)} className="mt-1 w-full border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500" />
          </div>
          <div>
            <label className="text-sm text-gray-700">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm text-gray-700">Subjek</label>
            <input value={subjek} onChange={(e) => setSubjek(e.target.value)} className="mt-1 w-full border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm text-gray-700">Pesan</label>
            <textarea rows={4} value={pesan} onChange={(e) => setPesan(e.target.value)} className="mt-1 w-full border-gray-200 rounded-md focus:ring-red-500 focus:border-red-500" />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <button onClick={handleEmail} className="px-4 py-2 rounded-md text-white" style={{ backgroundColor: '#C60000' }}>Kirim Email</button>
          <a href="mailto:openlibrary@telkomuniv.ac.id" className="px-4 py-2 rounded-md border text-sm" style={{ borderColor: '#C60000', color: '#C60000' }}>openlibrary@telkomuniv.ac.id</a>
        </div>
      </div>
    </div>
  );
};

const Pages = ({ page }) => {
  if (page === 'dashboard') return <HomeHero />;
  if (page === 'collections') return <Collections />;
  if (page === 'input') return <InputMonitoring />;
  if (page === 'reports') return <Reports />;
  if (page === 'profile') return <Profile />;
  if (page === 'help') return <Help />;
  return <HomeHero />;
};

export default Pages;
