"use client";
import React from "react";
import Homepage from "@/components/Homepage";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";
import Nav from "@/components/Nav";
import { motion } from "framer-motion";
import { averox } from "@/components/Nav";

function Home() {
  return (
    <div className="h-full w-full flex flex-col items-center relative">
      <Nav />
      <Homepage />
      <AboutMe />
      <Projects />

      <Contacts />

      <div className="flex flex-row botsection w-[85%]  sticky bottom-16 h-[70px] z-[100]   items-center justify-center bg-gradient-to-b from-[transparent] to-[#194a7a] px-3 rounded-xl">
        <motion.ul className="flex-row w-[100%] m-2 flex gap-3 items-center justify-center  absolute p-5">
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
            <motion.a href="#contacts">Contacts</motion.a>
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
}

export default Home;
