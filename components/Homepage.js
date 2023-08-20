"use client";
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Background from "./BackgroundSq.js";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: "800",
  subsets: ["latin"],
});

export const poppinslight = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const quantumfont = localFont({
  src: "../fonts/Quantum.woff",
  display: "swap",
});

function Homepage() {
  return (
    <div
      id="hero"
      className="home flex sm:flex-row flex-col-reverse p-4  w-full min-h-[100vh] h-auto relative overflow-hidden "
    >
      <Background />
      <div className="sm:w-[60%] w-full flex items-center flex-col justify-center z-10">
        <div className={`${poppins.className} grid  place-items-center`}>
          <h1 className="text-[min(8vw,86px)] font-bold bg-gradient-to-b from-transparent to-[#00fbff] sm:to-[#194a7a] bg-clip-text text-transparent bg-blend-overlay tracking-wider ">
            Hello,
          </h1>
          <p className="text-cyan-950 opacity-70 tracking-wider text-2xl">
            I am
          </p>
          <motion.p
            initial={{ width: 0, borderRight: "2px solid white" }}
            whileInView={{
              width: "100%",
              borderRight: 0,
              transition: { duration: 2, ease: "linear", staggerChildren: 0.5 },
            }}
            className={`${quantumfont.className}  2xl:text-6xl  xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-[25px] text-center  text-white overflow-hidden whitespace-nowrap w-0 `}
          >
            JULIUS NAVAL ABUCEJO
          </motion.p>
        </div>

        <h2
          className={`${poppinslight.className} text-center text-[min(4vw,1.6rem)] text-yellow-400  my-2 tracking-wide`}
        >
          a passsionate and driven Web Developer enthusiast. Feel free to look
          around and know me better.
        </h2>

        <div className="flex mt-5 items-center justify-center gap-4 p-4">
          <button
            // onClick={() => {
            //   alert("Maghintay ka di pa tapos");
            // }}
            className="flex-nowrap whitespace-nowrap cvbutton border-2 text-white rounded-md p-2 "
          >
            <a download href={"/Abucejo_Julius_Resume.docx"}>
              My Resume
            </a>
          </button>
          <button className="others border-2 bg-slate-100 rounded-md p-2 ">
            Others
          </button>
        </div>
      </div>
      <div className="sm:w-1/2 w-full flex flex-col items-center justify-center  z-10 ">
        <div className="border-yellow-400 border-[12px]  relative rounded-full p-1 aspect-square sm:w-3/4 w-1/2  max-w-[300px] ">
          <Image
            src="/IMG_20230629_111756.jpg"
            // width="150"
            // height="150"
            fill="responsive"
            sizes="100%"
            alt="profilepic"
            className="flex border-2 p-1 border-white aspect-square rounded-full self-center  object-cover"
          />
        </div>
        <div className="flex felx-row my-1 p-2 gap-3">
          <a href="https://www.facebook.com/abucejojul/" target="_blank">
            <FaFacebookSquare
              size={"100%"}
              color="#fff"
              className="cursor-pointer aspect-square w-[max(30px,3vw)]"
            />
          </a>
          <a href="https://github.com/jurisukun" target="_blank">
            <FaGithubSquare
              size={"100%"}
              color="#fff"
              className="cursor-pointer aspect-square w-[max(30px,3vw)]"
            />
          </a>
          <a href="https:www.github.com">
            <FaLinkedin
              size={"100%"}
              color="#fff"
              className="cursor-pointer aspect-square w-[max(30px,3vw)]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
