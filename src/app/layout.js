import { K2D } from 'next/font/google'
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const k2d = K2D({ subsets: ['latin'], weight: ['300', '400', '500'], style: ['normal', 'italic'] })

export const metadata = {
  title: "Fit Focus",
  description: "Your Fitness, Your Focus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={k2d.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
