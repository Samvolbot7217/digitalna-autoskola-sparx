const topics = [
  {
    icon: '🎣',
    title: 'Phishing',
    desc: 'Falošné e-maily a SMS správy, ktoré sa tvária ako od banky, pošty alebo štátnych inštitúcií.',
  },
  {
    icon: '💬',
    title: 'WhatsApp podvody',
    desc: 'Správy od „príbuzných" alebo neznámych čísel žiadajúce peniaze alebo osobné údaje.',
  },
  {
    icon: '📱',
    title: 'Falošné správy',
    desc: 'Hoaxy, falošné súťaže a nebezpečné zdieľanie osobných informácií na sociálnych sieťach.',
  },
];

const stats = [
  { value: '2', label: 'Prednášky prebehli', sub: 'DD Pažítkova 21. 5. 2026 · Domov jesene života 3. 6. 2026' },
  { value: '100%', label: 'Bezplatné', sub: 'Pre všetkých záujemcov' },
  { value: '2026', label: 'Rok projektu', sub: 'Stredoškolský tím' },
];

export default function OProjekte() {
  return (
    <section id="o-projekte" className="py-24 bg-white px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-green-600 mb-3 block">
            O projekte
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-green-900 mb-5">
            Prečo Digi seniori?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Seniori sú najčastejšími obeťami internetových podvodov. Tím stredoškolských študentov
            organizuje bezplatné
            interaktívne prednášky priamo v komunitách, kde seniori žijú. Naučíme ich rozpoznať
            nebezpečenstvo skôr, než sa stanú obeťou.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {topics.map((t) => (
            <div key={t.title} className="bg-green-50 rounded-2xl p-7 border border-green-100">
              <div className="text-4xl mb-4">{t.icon}</div>
              <h3 className="font-extrabold text-green-900 text-xl mb-2">{t.title}</h3>
              <p className="text-gray-600 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-green-700 rounded-3xl p-8 sm:p-12 text-white">
          <div className="grid sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-green-600">
            {stats.map((s) => (
              <div key={s.value} className="py-4 sm:py-0 sm:px-6 first:pt-0 last:pb-0">
                <div className="text-4xl sm:text-5xl font-black mb-1">{s.value}</div>
                <div className="font-bold text-green-100">{s.label}</div>
                <div className="text-green-300 text-sm mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
