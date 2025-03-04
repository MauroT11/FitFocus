import { K2D } from 'next/font/google'
import "./globals.css";
import Head from 'next/head'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AuthProvider } from '@/context/AuthContext'

const k2d = K2D({ subsets: ['latin'], weight: ['300', '400', '500'], style: ['normal', 'italic'] })

export const metadata = {
  title: "FitFocus",
  description: "Your Fitness, Your Focus",
  icon: {
    icon: "/public/favicon1.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/public/favicon1.png" sizes="any" />
      </Head>
      <AuthProvider>
        <body className={k2d.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}
