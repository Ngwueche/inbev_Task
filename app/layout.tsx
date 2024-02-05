import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";
import CartProvider from "@/providers/cartProvider";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InBev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster toastOptions={{
          style:{
            background: "#000000",//"#1F2937",
            color: "#fff"
          }
        }}/>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <div className="flex-grow">{children}</div>
          </div>
          <Footer/>
        </CartProvider>
      </body>
    </html>
  );
}
