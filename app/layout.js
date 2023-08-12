import "./globals.css";
import Image from "next/image";
import { Inter } from "next/font/google";

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio made with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
