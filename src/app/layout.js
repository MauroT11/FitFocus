import { K2D } from 'next/font/google'
import "./globals.css";
import Head from 'next/head'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism } from '@clerk/themes'

const k2d = K2D({ subsets: ['latin'], weight: ['300', '400', '500'], style: ['normal', 'italic'] })

export const metadata = {
  title: "FitFocus",
  description: "Your Fitness, Your Focus",
  icon: {
    icon: "/public/favicon1.png"
  },
};

export default async function RootLayout({ children }) {

  return (
    <ClerkProvider
      appperance={{
        baseTheme: dark,
        signin: {
          baseTheme: neobrutalism
        }
      }}
    >
      <html lang="en">
        <Head>
          <link rel="icon" href="/public/favicon1.png" sizes="any" />
        </Head>
        <body className={k2d.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
