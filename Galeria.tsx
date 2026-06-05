'use client';
import { useState } from 'react';
import Image from 'next/image';

const galleries = [
  {
    title: 'DD Pažítkova — 21. 5. 2026',
    description:
      'Prvý workshop prebehol v Domove dôchodcov Pažítkova v Ružinove. Seniori sa aktívne zapájali do diskusie a skupinových aktivít.',
    photos: Array.from({ length: 7 }, (_, i) => `/fotky/foto-${i + 1}.jpg`),
  },
  {
    title: 'Domov jesene života — 3. 6. 2026',
    description:
      'Druhá prednáška prebehla v Domove jesene života v Dúbravke. Seniori sa aktívne zapájali a kladli veľa otázok.',
    photos: ['/images/workshop2-1.jpg', '/images/workshop2-2.jpg'],
  },
];

export default function Galeria() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-24 bg-white px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-green-600 mb-3 block">
            Galéria
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-green-900">
            Z našich prednášok
          </h2>
        </div>

        <div className="space-y-16">
          {galleries.map((gallery) => (
            <div key={gallery.title}>
              <h3 className="text-xl font-extrabold text-green-900 mb-2">{gallery.title}</h3>
              <p className="text-gray-600 mb-6">{gallery.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {gallery.photos.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setActive(src)}
                    className={`relative overflow-hidden rounded-xl group bg-green-50 ${
                      i === 0 && gallery.photos.length > 2 ? 'col-span-2 aspect-video' : 'aspect-square'
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`${gallery.title} foto ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 bg-black/88 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-4 right-5 text-white text-3xl font-black opacity-80 hover:opacity-100 leading-none"
            onClick={() => setActive(null)}
          >
            ✕
          </button>
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active}
              alt="Workshop foto"
              width={1200}
              height={900}
              className="rounded-xl object-contain max-h-[88vh] w-auto mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}
