import './globals.css';



import Navbar from '../components/Navbar'; // ✅ Adjust path as needed
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My App',
  description: 'Navbar challenge',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
