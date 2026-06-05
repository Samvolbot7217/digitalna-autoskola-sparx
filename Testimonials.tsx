const testimonials = [
  {
    quote:
      'Veľmi som sa bál, že nezvládnem ovládať telefón, ale lektori všetko vysvetlili pomaly a zrozumiteľne. Teraz viem, čo mám robiť, keď mi príde podozrivá správa.',
    author: 'Účastník prednášky',
    place: 'DD Pažítkova',
  },
  {
    quote:
      'Workshopy ako tento by mali byť povinné pre každého seniora. Praktické, príjemné a skutočne užitočné.',
    author: 'Sociálna pracovníčka',
    place: 'Domov jesene života',
  },
  {
    quote:
      'Oceňujem iniciatívu mladých ľudí, ktorí prišli priamo k nám. Seniori boli nadšení a aktívne sa zapájali.',
    author: 'Riaditeľ zariadenia',
    place: 'Domov jesene života',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-green-50 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-green-600 mb-3 block">
            Ohlasy
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-green-900">
            Čo hovoria účastníci
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white rounded-2xl border-2 border-green-200 p-7 flex flex-col gap-4"
            >
              <span className="text-5xl font-black text-green-300 leading-none select-none">"</span>
              <p className="text-gray-700 font-semibold leading-relaxed flex-1">{t.quote}</p>
              <div className="border-t border-green-100 pt-4">
                <p className="font-extrabold text-green-900 text-sm">{t.author}</p>
                <p className="text-green-600 text-xs font-semibold mt-0.5">{t.place}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
