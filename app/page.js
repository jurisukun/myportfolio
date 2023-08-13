"use client";
import React from "react";
import Homepage from "@/components/Homepage";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";
import Nav from "@/components/Nav";
import { motion } from "framer-motion";
import { averox } from "@/components/Nav";
import {
  AiOutlineProfile,
  AiOutlineHome,
  AiOutlineFolder,
  AiOutlinePhone,
} from "react-icons/ai";

function Home() {
  return (
    <div className="h-full w-full flex flex-col items-center relative">
      <Nav />
      <Homepage />
      <AboutMe />
      <Projects />

      <Contacts />

      <div className="flex flex-row botsection min-w-[85%] w-auto sticky bottom-16 h-[70px] z-[100]   items-center justify-center bg-gradient-to-b from-[transparent] to-[#194a7a] px-3 rounded-xl">
        <motion.ul className="flex-row w-[100%] m-2 flex gap-3 items-center absolute p-5 justify-evenly">
          <motion.li whileHover={{ scale: 1.2 }}>
            <motion.a href="#hero">
              <AiOutlineHome
                color={this ? "black" : "white"}
                size={35}
                className="aspect-square w-[50px]  hover:border-b-2 border-[#f9f9f9] transition-border     "
              />
            </motion.a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <motion.a href="#aboutme">
              <AiOutlineProfile
                color="white"
                size={35}
                className="aspect-square w-[50px]  hover:border-b-2 border-[#f9f9f9] transition-border     "
              />
            </motion.a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <motion.a href="#projects">
              <AiOutlineFolder
                color="white"
                size={35}
                className="aspect-square w-[50px]  hover:border-b-2 border-[#f9f9f9] transition-border     "
              />
            </motion.a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <motion.a href="#contacts">
              <AiOutlinePhone
                color="white"
                size={35}
                className="aspect-square w-[50px]  hover:border-b-2 border-[#f9f9f9] transition-border     "
              />
            </motion.a>
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
}

export default Home;
