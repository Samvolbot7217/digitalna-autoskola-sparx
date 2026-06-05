export default function Kontakt() {
  return (
    <section id="kontakt" className="py-24 bg-white px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-extrabold uppercase tracking-widest text-green-600 mb-3 block">
          Kontakt
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-green-900 mb-4">Máte otázky?</h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Sme tím stredoškolských študentov z Bratislavy. Radi odpovieme na akékoľvek otázky
          o projekte, prednáškach alebo spolupráci.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <a
            href="mailto:digiseniori@gmail.com"
            className="flex items-center justify-center gap-3 border-2 border-green-300 text-green-800 font-extrabold px-7 py-3.5 rounded-full hover:border-green-500 transition-colors"
          >
            <span className="text-xl">✉️</span>
            digiseniori@gmail.com
          </a>
          <a
            href="https://www.instagram.com/digi.seniori/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border-2 border-green-300 text-green-800 font-extrabold px-7 py-3.5 rounded-full hover:border-green-500 transition-colors"
          >
            <span className="text-xl">📸</span>
            @digiseniori
          </a>
        </div>
      </div>
    </section>
  );
}
