import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import FloatingWidget from "@/components/ui/FloatingWidget";
import Preloader from "@/components/ui/Preloader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DENT | Expert Aesthetic & Restorative Dental Studio",
  description:
    "Experience next-generation clinical dentistry designed around your smile. Expert orthodontic aligners, cosmetic veneers, and premium restorations with a human touch.",
  keywords: [
    "dental studio",
    "cosmetic dentistry",
    "clear aligners",
    "veneers",
    "implant solutions",
    "luxury dentist",
    "orthodontics",
  ],
  authors: [{ name: "DENT Dental Aesthetics" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased selection:bg-luxury-gold selection:text-white bg-luxury-charcoal">
        <LenisProvider>
          
          {/* Preloader overlay sequence */}
          <Preloader />
          
          {/* Global Background Video - Fixed persistent background across every page/section */}
          <div className="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none select-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-80"
            >
              <source src="/hero.mp4" />
            </video>
            {/* Subtle dark overlay to reduce highlight brightness for readability */}
            <div className="absolute inset-0 bg-black/25" />
          </div>

          {/* Smoky Ambient Gradient Backdrop & Glowing Blobs */}
          <div className="smoky-gradient-bg">
            <div className="smoky-blob blob-1" />
            <div className="smoky-blob blob-2" />
            <div className="smoky-blob blob-3" />
          </div>

          {/* Global Floating Glass Navbar */}
          <Navbar />

          {/* Global Floating Communication Widget */}
          <FloatingWidget />

          {/* Content Layout Sections */}
          <div className="relative w-full z-[2] min-h-screen flex flex-col justify-between">
            <main className="flex-grow w-full flex flex-col">
              {children}
            </main>
            <Footer />
          </div>

        </LenisProvider>
      </body>
    </html>
  );
}
