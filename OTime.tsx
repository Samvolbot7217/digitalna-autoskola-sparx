const team = [
  { name: 'Samuel Valčák', role: 'Pán vedúcko' },
  { name: 'Luděk Vrtík', role: 'Dizajnér' },
  { name: 'Jakub Pach', role: 'Koordinátor' },
  { name: 'Boris Kobza', role: 'Prednášajúci' },
  { name: 'Jana Peráčková', role: 'Mentor' },
];

export default function OTime() {
  return (
    <section className="py-16 bg-green-900 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-extrabold uppercase tracking-widest text-green-400 mb-3 block">
          O tíme
        </span>
        <p className="text-green-100 text-lg font-semibold leading-relaxed mb-10">
          Sme tím študentov{' '}
          <a
            href="https://lyceum.sk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline underline-offset-2 hover:text-green-300 transition-colors"
          >
            Lýcea C. S. Lewisa
          </a>{' '}
          v rámci podnikateľskej súťaže{' '}
          <a
            href="https://sparx.sk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline underline-offset-2 hover:text-green-300 transition-colors"
          >
            Sparx 2026
          </a>
          . Sparx je súťaž pre stredoškolákov, kde budujeme reálne projekty s reálnym dopadom.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-green-800 rounded-xl px-4 py-4"
            >
              <p className="font-extrabold text-white text-sm">{member.name}</p>
              <p className="text-green-400 text-xs font-semibold mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
