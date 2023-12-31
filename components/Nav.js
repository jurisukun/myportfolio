import { motion } from "framer-motion";
import localFont from "next/font/local";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Image from "next/image";

export const zeniq = localFont({
  src: "../fonts/Zeniq.woff",
  display: "swap",
});

export const averox = localFont({
  src: "../fonts/averox.woff",
  display: "swap",
});

function Nav() {
  const [burgermenu, setBurgermenu] = useState(false);
  return (
    <motion.section
      onViewportLeave={(e) => {
        document.querySelector(".botsection").classList.add("show");
      }}
      onViewportEnter={(e) => {
        document.querySelector(".botsection").classList.remove("show");
      }}
      className=" navbar relative p-4 flex z-50  items-center max-h-[100px] w-full "
    >
      <div className="flex  flex-row gap-3 sm:w-[unset] w-full  items-center object-contain">
        <Image
          src="/mylogo2.png"
          alt="Logo"
          width={100}
          height={100}
          className="rounded-full aspect-square w-16"
        />
        <motion.h1
          className={
            zeniq.className +
            ` text-yellow-400 text-xl whitespace-nowrap md:flex hidden`
          }
        >
          My Portfolio
        </motion.h1>
      </div>
      <div className="w-[90%] relative px-7">
        <ul
          className={`w-full  hidden sm:flex justify-center   whitespace-nowrap md:gap-[5%] sm:gap-0`}
        >
          <li className={`listmenu`}>
            <h1 className={averox.className}>
              <a href="#hero">Home</a>
            </h1>
          </li>
          <li className={`listmenu`}>
            <h1 className={averox.className}>
              <a href="#aboutme">About Me</a>
            </h1>
          </li>
          <li className={`listmenu`}>
            <h1 className={averox.className}>
              <a href="#projects">Projects</a>
            </h1>
          </li>
          <li className={`listmenu`}>
            <h1 className={averox.className}>
              <a href="#contacts">Contact</a>
            </h1>
          </li>
        </ul>
        <div className=" sm:hidden relative flex items-end justify-end ">
          <GiHamburgerMenu
            color={"#fff"}
            size={35}
            className="text-2xl border-2 aspect-square border-slate-300  cursor-pointer hover:rounded-full  hover:bg-slate-300 hover:bg-opacity-60 transition"
            onClick={() => {
              setBurgermenu((burgermenu) => {
                burgermenu = !burgermenu;
                return burgermenu;
              });
            }}
          />
        </div>
        {burgermenu && (
          <motion.div className="right-0 absolute  z-[100] w-[200px] bg-slate-100  mt-3 flex sm:hidden rounded-md shadow-md border-gray-300 border shadow-cyan-50 bg-opacity-50">
            <motion.ul className="flex-col w-full m-2 flex  items-center justify-center">
              <motion.li
                className={`${averox.className} burgerlist font-bold tracking-[2px]`}
                whileHover={{ scale: 1.1 }}
              >
                <motion.a href="#hero">Home</motion.a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                className={`${averox.className} burgerlist font-bold  tracking-[2px]`}
              >
                <motion.a href="#aboutme">About Me</motion.a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                className={`${averox.className} burgerlist font-bold tracking-[2px]`}
              >
                <motion.a href="#projects">Projects</motion.a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                className={`${averox.className} burgerlist font-bold tracking-[2px]`}
              >
                <motion.a href="#contacts">Contact</motion.a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}

export default Nav;
