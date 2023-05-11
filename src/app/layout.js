import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Test Frontend v2",
  description: "for test technical",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-[74vh] m-5 md:mt-9 md:ml-56 2xl:ml-[16%]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
