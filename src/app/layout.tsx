import type { Metadata } from "next";
import { Libre_Caslon_Display, Poppins } from "next/font/google"
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Suspense } from "react"

const libreCaslonDisplay = Libre_Caslon_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-libre-caslon-display',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Belvo Realty - Luxury Real Estate',
  description: 'Premium real estate development and investment opportunities',

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${libreCaslonDisplay.variable} ${poppins.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <Navigation />
          {children}

          <Footer />
        </Suspense>

      </body>
    </html>
  );
}
