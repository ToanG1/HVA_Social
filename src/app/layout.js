import { Inter } from 'next/font/google';
import './globals.css';
import { SideNav } from '@/components/SideNav';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Hoc Voi Ai Social Media',
  description: 'A social media for Hoc Voi Ai to connect with self leaners',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideNav />
        {children}
      </body>
    </html>
  );
}
