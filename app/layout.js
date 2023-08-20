import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio made with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-full w-full h-auto">
        <main>{children}</main>
      </body>
    </html>
  );
}
