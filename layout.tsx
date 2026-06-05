import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: 'Digi seniori — Internet bez strachu a podvodov',
  description:
    'Bezplatné prednášky o bezpečnosti na internete pre seniorov v Bratislave.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk" className={nunito.variable}>
      <body className="font-nunito bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
