import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { portfolioConfig } from "@/config/config";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: portfolioConfig.title,
  description: portfolioConfig.description,
  keywords: portfolioConfig.seo.keywords,
  authors: portfolioConfig.seo.authors,
  openGraph: {
    title: "Huynh Tien Di - Front-end Developer",
    description: "Huynh Tien Di - A passionate Front-end Developer from Ho Chi Minh City, Viet Nam",
    url: "https://di-huynh-blogs.vercel.app",
    siteName: "Huynh Tien Di - Front-end Developer",
    images: [
      {
        url: "https://di-huynh-blogs.vercel.app/logo.ico",
        width: 1200,
        height: 630,
        alt: "Huynh Tien Di Portfolio",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Taquiimam14",
    creator: "@Taquiimam14",
    title: "Huynh Tien Di - Front-end Developer",
    description: "Huynh Tien Di - A passionate Front-end Developer from Ho Chi Minh City, Viet Nam",
    images: ["https://di-huynh-blogs.vercel.app/logo.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <main
        >
          {children}
        </main>
      </body>
    </html>
  );
}
