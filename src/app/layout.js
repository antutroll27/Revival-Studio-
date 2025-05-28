import { Geist, Geist_Mono, Inter_Tight } from "next/font/google";
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

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Weights from 100 to 900
  style: ['normal', 'italic'], // Include normal and italic styles
});

export const metadata = {
  title: "Revival Studio",
  description: "Living canvases for a regenerative tomorrow",
};

export default function RootLayout({ children }) {
  return (
    
    <ViewTransitions>
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${interTight.variable}`} suppressHydrationWarning>
        <div className="background-video-container">
          <video autoPlay loop muted playsInline className="background-video">
            <source src="/backgroundvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Navbar />
        {children}
      </body>
    </html>
    </ViewTransitions>
    
  );
}
