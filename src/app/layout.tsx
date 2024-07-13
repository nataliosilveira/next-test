import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-inter min-h-screen flex flex-col">
        <div className="bg-slate-800 p-3">
          <h3 className="text-white font-bold">Aplication teste</h3>
        </div>
        <div className="grid grid-cols-8 flex-grow">
          <div className="bg-slate-100 col-span-2 md:col-span-1 flex flex-col gap-4 p-3">
            <Link href={'/'}>DashBoard</Link>
            <Link href={'/list'}>List</Link>
          </div>
          <div className="col-span-6 md:col-span-7 p-3">{children}</div>
        </div>
      </body>
    </html>
  );
}
