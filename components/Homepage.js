"use client";
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Background from "./BackgroundSq.js";
const quantumfont = localFont({
  src: "../fonts/Quantum.woff",
  display: "swap",
});

function Homepage() {
  return (
    <div className="home flex sm:flex-row flex-col-reverse p-4  w-full h-[600px] relative overflow-hidden">
      <Background />
      <div className="sm:w-1/2 w-full  sm:p-20 flex items-center flex-col justify-center z-10">
        <h1 className="flex gap-1">
          <p
            className={`${quantumfont.className} text-3xl  text-center text-white `}
          >
            JULIUS NAVAL ABUCEJO
          </p>
        </h1>
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
      <div className="sm:w-1/2 w-full flex flex-col items-center justify-center z-10 ">
        <div className="border-blue-300 border-8 rounded-full p-1">
          <Image
            src="/IMG_20230629_111756.jpg"
            width="150"
            height="150"
            alt="profilepic"
            className="flex border-2 p-1 border-white aspect-square rounded-full self-center object-cover"
          />
        </div>
        <div className="flex felx-row my-1 p-2 gap-3">
          <a href="https://www.facebook.com/abucejojul/" target="_blank">
            <FaFacebookSquare
              size={25}
              color="#fff"
              className="cursor-pointer"
            />
          </a>
          <a href="https://github.com/jurisukun" target="_blank">
            <FaGithubSquare size={25} color="#fff" className="cursor-pointer" />
          </a>
          <a href="https:www.github.com">
            <FaLinkedin size={25} color="#fff" className="cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
