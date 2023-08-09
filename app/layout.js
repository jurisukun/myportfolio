"use client";
import "./globals.css";
import Image from "next/image";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const zeniq = localFont({
  src: "../fonts/Zeniq.woff",
  display: "swap",
});

const averox = localFont({
  src: "../fonts/averox.woff",
  display: "swap",
});

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio made with Next.js",
};

export default function RootLayout({ children }) {
  const [burgermenu, setBurgermenu] = useState(false);

  return (
    <html lang="en">
      <body>
        <section className=" sticky top-0 navbar p-4 flex z-50  items-center">
          <div className="flex sm:flex-col flex-row gap-3 sm:w-[unset] w-full  items-center object-contain">
            <Image
              src="/mylogo2.png"
              alt="Logo"
              width={100}
              height={100}
              objectPosition="center"
              objectFit="cover"
              zoom={4}
              className="rounded-full"
            />
            <h1
              className={
                zeniq.className + ` text-yellow-400 text-xl whitespace-nowrap`
              }
            >
              My Portfolio
            </h1>
          </div>
          <div className="w-[90%]">
            <ul
              className={`w-full  hidden sm:flex justify-center   whitespace-nowrap md:gap-[5%] sm:gap-0`}
            >
              <li className={`listmenu`}>
                <h1 className={averox.className}>Home</h1>
              </li>
              <li className={`listmenu`}>
                <h1 className={averox.className}>About Me</h1>
              </li>
              <li className={`listmenu`}>
                <h1 className={averox.className}>Projects</h1>
              </li>
              <li className={`listmenu`}>
                <h1 className={averox.className}>Contacts</h1>
              </li>
            </ul>
            <div className=" sm:hidden relative flex items-end justify-end cursor-pointer">
              <GiHamburgerMenu
                color={"#fff"}
                size={35}
                className="text-2xl border-2 border-slate-300 "
                onClick={() => {
                  setBurgermenu((burgermenu) => {
                    burgermenu = !burgermenu;
                    return burgermenu;
                  });
                }}
              />
            </div>
            {burgermenu && (
              <div className="left-[50%] absolute  z-10 w-1/2 bg-slate-100  mt-3 flex sm:hidden rounded-md shadow-md border-gray-300 border shadow-cyan-50 bg-opacity-50">
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
