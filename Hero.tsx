export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white pt-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-7">
          <div className="w-20 h-20 bg-green-700 rounded-full flex items-center justify-center shadow-xl shadow-green-200">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <rect x="11" y="5" width="22" height="34" rx="4" fill="white" opacity="0.95" />
              <path d="M17 24l4.5 4.5L27 18" stroke="#15803D" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-green-900 leading-tight mb-5">
          Internet bez strachu
          <br className="hidden sm:block" />
          <span className="text-green-700"> a podvodov</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 font-semibold max-w-2xl mx-auto mb-10 leading-relaxed">
          Digi seniori organizuje{' '}
          <strong className="text-green-800">bezplatné prednášky</strong> o bezpečnosti na internete
          pre seniorov v Bratislave. Naším cieľom je pomôcť seniorom rozpoznávať internetové podvody
          a bezpečne sa pohybovať v online svete.
        </p>

        <div className="flex justify-center mb-12">
          <a
            href="#zaujem"
            className="bg-green-700 text-white font-extrabold text-lg px-8 py-3.5 rounded-full hover:bg-green-800 transition-colors shadow-lg shadow-green-200"
          >
            Mám záujem o prednášku →
          </a>
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          {['100% zadarmo', 'Bratislava', 'Pre seniorov'].map((badge) => (
            <span
              key={badge}
              className="bg-white border border-green-200 text-green-800 font-bold text-sm px-4 py-1.5 rounded-full shadow-sm"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
