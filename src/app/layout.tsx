import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

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
  title: "Huynh Tien Di- Front-end Developer",
  description:
    "Huynh Tien Di - A passionate Front-end Developer from Ho Chi Minh City, Viet Nam",
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
