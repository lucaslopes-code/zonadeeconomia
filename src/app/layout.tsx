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
  title: "Zona de Economia - Melhores Ofertas e Descontos Online",
  description: "Encontre as melhores ofertas e achados online! Promoções exclusivas de roupas, acessórios, itens para casa e muito mais. Lojas confiáveis e preços imperdíveis.",
  openGraph: {
    title: "Zona de Economia - Melhores Ofertas e Descontos Online",
    description: "Encontre as melhores ofertas e achados online! Promoções exclusivas de roupas, acessórios, itens para casa e muito mais.",
    images: ["/imagens/logo.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
