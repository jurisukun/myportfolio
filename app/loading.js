"use client";
import React from "react";
import "../styles/loading.css";
import { motion } from "framer-motion";
import { quantumfont } from "@/components/Homepage";

function Loading() {
  return (
    <motion.div
      className="h-[100vh] w-[100vw] loadingcont absolute"
      animate={{
        background:
          "linear-gradient(to top, #475395e3, #479594, #476f95, #475395e3)",
        opacity: 1,
        transition: { duration: 1 },
      }}
    >
      <motion.div
        className="container2 relative items-center
        p-6"
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        <span className="text-left w-full text-[min(5vw,3rem)]">
          Full Stack
        </span>

        <div className="stack" style={{ "--stacks": 3 }}>
          <motion.span className="flex flex-row " style={{ "--index": 0 }}>
            <motion.h1
              className={`${quantumfont.className} text-[max(10vw,3rem)] text-center font-extrabold`}
            >
              {"<JNA/>"}
            </motion.h1>
          </motion.span>
          <motion.span className="flex flex-row" style={{ "--index": 1 }}>
            <motion.h1
              className={`${quantumfont.className} text-[max(10vw,3rem)] text-center font-extrabold`}
            >
              {"<JNA/>"}
            </motion.h1>
          </motion.span>
          <motion.span className="flex flex-row" style={{ "--index": 2 }}>
            <motion.h1
              className={`${quantumfont.className} text-[max(10vw,3rem)] text-center font-extrabold`}
            >
              {"<JNA/>"}
            </motion.h1>
          </motion.span>
        </div>
        <motion.span className="right text-[min(5vw,3rem)]">
          Developer
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

export default Loading;
