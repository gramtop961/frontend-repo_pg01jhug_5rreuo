import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroCover = () => {
  return (
    <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-xl shadow-inner">
      <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold" style={{ color: '#222222' }}>
          Selamat Datang di Open Library Telkom
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-700 max-w-2xl">
          Akses, unggah, dan kelola koleksi digital akademik Anda dengan cepat dan mudah dalam satu platform terpadu.
        </p>
      </div>
    </div>
  );
};

export default HeroCover;
