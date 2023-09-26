import './globals.css';
import type { Metadata } from 'next';
import Footer from './component/Footer';

export const metadata: Metadata = {
  title: 'OnChainBet',
  description: 'Make the game fun and fair',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="flex justify-center h-screen">
      <body className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-cc1 to-cc2 w-screen h-screen flex flex-col justify-between lg:max-w-7xl">
        {children}
        <Footer />
      </body>
    </html>
  );
}

//bg-gradient-to-br from-cc1 from-30% via-cc2/50 via-50% to-cc1 to-70%
//bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600
//bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600
