import type { Metadata } from "next";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";

export const metadata: Metadata = {
  title: "Abhishek Kumar — Python Backend Developer",
  description:
    "Portfolio of Abhishek Kumar, a Computer Science & Engineering graduate (2026) from SMVIT Bengaluru, specializing in Python backend development with FastAPI, PostgreSQL, and Docker.",
  keywords: [
    "Abhishek Kumar",
    "Python Backend Developer",
    "FastAPI",
    "PostgreSQL",
    "Software Engineer",
    "Computer Science",
    "SMVIT",
    "Bengaluru",
    "Portfolio",
  ],
  authors: [{ name: "Abhishek Kumar" }],
  creator: "Abhishek Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Abhishek Kumar — Python Backend Developer",
    description:
      "Portfolio of Abhishek Kumar, a Computer Science & Engineering graduate specializing in Python backend development with FastAPI, PostgreSQL, and Docker.",
    siteName: "Abhishek Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Kumar — Python Backend Developer",
    description:
      "Portfolio of Abhishek Kumar, a Computer Science & Engineering graduate specializing in Python backend development with FastAPI, PostgreSQL, and Docker.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-[#111110] text-[#e8e8e6] antialiased">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
