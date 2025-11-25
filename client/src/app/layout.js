import { Geist, Geist_Mono } from "next/font/google";
import { ToastContainer } from 'react-toastify';

import "./globals.css";
import { Navbar } from "@/shared/ui";
import { Footer } from "@/shared/ui";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Quotes App",
  description: "FE app for quotes management using API",
};
const toasterParams = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light"
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen flex flex-col ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <ToastContainer {...toasterParams}/>
      </body>
    </html>
  );
}
