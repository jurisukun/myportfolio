"use client";
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { motion, steps } from "framer-motion";
import Background from "./BackgroundSq.js";
const quantumfont = localFont({
  src: "../fonts/Quantum.woff",
  display: "swap",
});

function Homepage() {
  return (
    <div
      id="hero"
      className="home top-0 flex sm:flex-row flex-col-reverse p-4  w-full h-[600px]  relative overflow-hidden "
    >
      <Background />
      <div className="sm:w-[60%] w-full flex items-center flex-col justify-center z-10">
        <div className={`grid  place-items-center   `}>
          <motion.p
            initial={{ width: 0, borderRight: "2px solid white" }}
            whileInView={{
              width: "100%",
              borderRight: 0,
              transition: { duration: 1 },
              steps: 40,
            }}
            className={`${quantumfont.className}   lg:text-4xl md:text-3xl sm:text-2xl text-[25px] text-center  text-white overflow-hidden whitespace-nowrap w-0`}
          >
            JULIUS NAVAL ABUCEJO
          </motion.p>
        </div>

        <h2 className="text-center my-1">I am a freelance Web Developer</h2>
        <div className="flex mt-5 items-center justify-center gap-4 p-4">
          <button
            onClick={() => {
              alert("Maghintay ka di pa tapos");
            }}
            className="flex-nowrap whitespace-nowrap cvbutton border-2 text-white rounded-md p-2 "
          >
            My Resume
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
