import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sachin Tiwari | Full Stack Java Developer",
  description:
    "Portfolio of Sachin Tiwari, a Full Stack Java Developer specializing in building scalable, secure, and modern web applications.",
  keywords: [
    "Sachin Tiwari",
    "Java Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
