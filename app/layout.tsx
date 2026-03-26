"use client";
import { usePathname } from "next/navigation";
import "./globals.css";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body key={pathname}>
        <div className="page-transition">
          {children}
        </div>
      </body>
    </html>
  );
}
