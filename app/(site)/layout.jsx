import localFont from 'next/font/local';
import '../globals.css';

import Header from '@/components/header/Header';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Car Dealer',
  description: 'Find your best car',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-full w-full flex flex-col min-h-screen overflow-hidden">
          <Header />
          <main className="main" role="main">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
