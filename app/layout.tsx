import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'BeeRad LLC | Mobile Heavy Equipment Diagnostics & Repair',
  description: 'Professional mobile diagnostics and repair services for heavy equipment in Lubbock, Texas. We specialize in electrical, hydraulic, HVAC, and general repair.',
  keywords: 'heavy equipment repair, diagnostics, Lubbock Texas, equipment maintenance',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}