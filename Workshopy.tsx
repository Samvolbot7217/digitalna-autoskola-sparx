const prednasky = [
  {
    location: 'DD Pažítkova, Ružinov',
    website: 'https://ddpazitkovaba.sk',
    date: '21. 5. 2026',
    capacity: '~15 seniorov',
    done: true,
  },
  {
    location: 'Domov jesene života – Dúbravka',
    website: 'https://domovjesenezivota.bratislava.sk',
    date: '3. 6. 2026',
    capacity: '~XX seniorov',
    done: true,
  },
];

export default function Workshopy() {
  return (
    <section id="prednasky" className="py-24 bg-green-50 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-green-600 mb-3 block">
            Prednášky
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-green-900 mb-4">Kde nás nájdete</h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Prednášky organizujeme v domovoch dôchodcov a komunitných centrách v Bratislave.
            Účasť je vždy bezplatná.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {prednasky.map((w, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-green-200 p-6 shadow-sm opacity-80"
            >
              <span className="inline-block bg-green-100 text-green-700 text-xs font-extrabold px-3 py-1 rounded-full mb-4">
                ✓ Prebehla
              </span>
              <h3 className="font-extrabold text-green-900 text-lg mb-1">{w.location}</h3>
              <a
                href={w.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-green-600 hover:underline font-semibold mb-3 block"
              >
                {w.website.replace('https://', '')}
              </a>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2.5">
                  <span>🗓</span>
                  <span className="font-bold">{w.date}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span>👥</span>
                  <span>{w.capacity}</span>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-white rounded-2xl border-2 border-dashed border-green-200 p-6 flex flex-col items-center justify-center text-center min-h-[160px] gap-2">
            <div className="text-3xl">📅</div>
            <p className="font-bold text-green-700 text-sm">Ďalší termín</p>
            <p className="text-gray-400 text-xs">Čoskoro</p>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm font-semibold">
          Ďalšie termíny budú čoskoro pridané · Sledujte nás na{' '}
          <a
            href="https://instagram.com/digiseniori"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:underline font-bold"
          >
            @digiseniori
          </a>
        </p>
      </div>
    </section>
  );
}
