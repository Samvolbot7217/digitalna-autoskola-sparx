import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import OProjekte from '@/components/OProjekte';
import Workshopy from '@/components/Workshopy';
import Galeria from '@/components/Galeria';
import Testimonials from '@/components/Testimonials';
import InterestForm from '@/components/InterestForm';
import Kontakt from '@/components/Kontakt';
import OTime from '@/components/OTime';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <OProjekte />
        <Workshopy />
        <Galeria />
        <Testimonials />
        <InterestForm />
        <Kontakt />
        <OTime />
      </main>
      <footer className="bg-green-950 text-white text-center py-6 px-4 text-sm font-semibold">
        <p>© 2026 Digi seniori</p>
      </footer>
    </>
  );
}
