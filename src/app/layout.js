import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ViewTransitions } from "next-view-transitions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Revival Studio",
  description: "Living canvases for a regenerative tomorrow",
};

export default function RootLayout({ children }) {
  return (
    
    <ViewTransitions>
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
    </ViewTransitions>
    
  );
}
