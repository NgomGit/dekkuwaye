import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dekkuwaye - GIS-GIS IMMOBILIER",
  description: "Acquérez votre terrain au Sénégal en douceur et payez en plusieurs tranches adaptées à votre budget.",
  icons: {
    icon: "/favicon.ico", // Placez votre fichier favicon.ico ou favicon.png dans le dossier /public/
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // Optionnel : icône pour les appareils Apple (iOS/macOS)
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50">
        {children}
      </body>
    </html>
  );
}