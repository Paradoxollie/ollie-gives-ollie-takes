import { Cormorant_Garamond, Manrope } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const uiFont = Manrope({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ollie Gives, Ollie Takes",
  description: "Prototype jouable de combat tactique par cartes a rounds pour Ollie Gives, Ollie Takes.",
  icons: {
    icon: "/ollie.png",
    apple: "/ollie.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${uiFont.variable} ${displayFont.variable}`}>{children}</body>
    </html>
  );
}
