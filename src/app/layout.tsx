import type { Metadata } from "next";

import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
// import WhatsAppButton from "@/components/WhatsAppButton";
import { Suspense } from "react"
import localFont from "next/font/local"

const libreCaslonDisplay = localFont({
  src: "./fonts/LibreCaslonDisplay-Regular.ttf",
  variable: "--font-libre-caslon",
  weight: "400"
})

const poppins = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-poppins",
  weight: "400"
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
        className={`${libreCaslonDisplay.variable} ${poppins.variable} antialiased overflow-x-hidden`}
      >
        <Suspense fallback={null}>
          <Navigation />
          {children}
          <Footer />
          {/* <WhatsAppButton /> */}
        </Suspense>

      </body>
    </html>
  );
}
