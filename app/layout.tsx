import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TContextProvider } from "./context/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OnChainBet",
  description: "Make the game fun and fair",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TContextProvider>
        {children}
        </TContextProvider>
      </body>
    </html>
  );
}
