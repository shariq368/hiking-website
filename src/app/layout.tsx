import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const roboto = Roboto({ subsets: ["latin"] ,
  weight: ['100','300', '400', '700'],
  style:"italic",
  variable:'--font-roboto'


 });

export const metadata: Metadata = {
  title: "Hiking Web",
  description: "Generated by MS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${roboto.className} bg-[#e1e6ea]`}>
        <div className="max-w-[90%] mx-auto">
          <Navbar/>
        {children}
        <Footer/>
        </div>
        </body>
    </html>
  );
}
