import "./globals.css";
import Image from "next/image";
import { Inter } from "next/font/google";

import { GiHamburgerMenu } from "react-icons/gi";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio made with Next.js",
};

export default function RootLayout({ children }) {
  const burgermenu = false;

  return (
    <html lang="en">
      <body className={inter.className}>
        <section className=" sticky top-0 navbar p-6 flex z-50 h-24 items-center">
          <div className="w-1/2 flex gap-3">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
            <h1>My Portfolio</h1>
          </div>
          <div className="w-1/2">
            <ul className="hidden sm:flex  whitespace-nowrap gap-5">
              <li className="listmenu">Home</li>
              <li className="listmenu">About Me</li>
              <li className="listmenu">
                <a href="#projects">Projects</a>
              </li>
              <li className="listmenu">Contacts</li>
            </ul>
            <div className=" sm:hidden flex items-end justify-end cursor-pointer">
              <GiHamburgerMenu
                color={"#fff"}
                size={35}
                className="text-2xl border-2 border-slate-300 "
              />
            </div>
            {burgermenu && (
              <div className=" absolute z-10 bg-slate-100 w-1/2 flex sm:hidden rounded-md shadow-md border-gray-300 border shadow-cyan-50 ">
                <ul className="flex-col w-full m-2">
                  <li className="burgerlist">Home</li>
                  <li className="burgerlist">About Me</li>
                  <li className="burgerlist">Projects</li>
                  <li className="burgerlist">Contacts</li>
                </ul>
              </div>
            )}
          </div>
        </section>

        {children}
      </body>
    </html>
  );
}
