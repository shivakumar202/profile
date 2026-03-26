import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shiva Kumar | Full-Stack Developer",
  description: "Full-Stack Developer | Expert in Laravel, React, Next.js | Building Digital Experiences with Modern Tech Stack",
  keywords: "Developer, Portfolio, Full-Stack, React, Laravel, Next.js, Web Development, Mumbai",
  author: "Shiva Kumar",
  robots: "index, follow",
  openGraph: {
    title: "Shiva Kumar | Full-Stack Developer",
    description: "Crafting exceptional digital experiences with modern technologies",
    image: "https://avatars.githubusercontent.com/u/137149601?v=4",
    url: "https://your-portfolio-url.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Momo+Trust+Display&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Headland+One&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0a0e27" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-blue-950 via-slate-950 to-purple-950 min-h-screen`}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
