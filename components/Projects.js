"use client";
import React from "react";
import Image from "next/image";
import { sharyfont } from "./AboutMe";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function Projects() {
  const [selectedId, setSelectedId] = useState(null);
  const projects = [
    {
      id: 1,
      title: "Construction Company Business Directory",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/project1.png",
      url: "https://jurisukun.github.io/Cavite-Construction-Companies/index.html",
    },
    {
      id: 2,
      title: "Machine Inventory System",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/asti.png",
      url: "https://machineinventorysystem.000webhostapp.com/",
    },
    {
      id: 3,
      title: "Construction Company Business Directory",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/project1.png",
    },
  ];

  return (
    <div id="projects" className="aboutme gap-3 p-5">
      <motion.h1
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 2 } }}
        className={`${sharyfont.className} font-extrabold text-center text-3xl sm:text-4xl text-white mb-10 drop-shadow-2xl `}
      >
        Projects
      </motion.h1>
      <div className=" flex items-center justify-center flex-wrap ">
        {projects.map((project, key) => (
          <motion.div
            key={key}
            className=" flex sm:flex-row flex-col border-2 m-3 items-center sm:py-3 rounded-xl lg:p-8"
            onClick={() => {
              setSelectedId(project.id);
            }}
          >
            <div className="sm:w-1/2 w-full sm:h-[300px] h-48 justify-center items-center flex ">
              <Image
                src={project.image}
                alt="Project 1"
                width={"300"}
                height={"300"}
                className="rounded-lg  sm:w-[90%] sm:max-w-[500px] w-full md:h-full sm:h-full h-48  sm:object-fill md:object-fit object-cover border-4 border-yellow-400 "
              />
            </div>

            <div className="sm:w-1/2 justify-center items-center flex flex-col p-5">
              <h1 className="text-lg mb-2 text-yellow-400 font-bold">
                <a
                  href={project.url}
                  target="_blank"
                  className="hover:text-yellow-600 "
                >
                  {project.title}
                </a>
              </h1>
              <p className=" text-justify text-white font-medium ">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
        <div className=" flex items-center justify-center flex-wrap ">
          <div className=" flex sm:flex-row flex-col border-2 m-3 items-center rounded-xl lg:p-8">
            <div className="sm:w-1/2 w-full justify-center items-center flex  ">
              <Image
                src="/express.png"
                alt="Project 1"
                width={"300"}
                height={"300"}
                className="rounded-lg  sm:w-2/3 w-full sm:h-full h-48 max-h-[300px] sm:object-fill md:object-cover object-cover"
              />
            </div>

            <div className="sm:w-1/2 justify-center items-center flex flex-col p-5">
              <h1 className="text-lg mb-2 text-yellow-400 font-bold">
                Project 1
              </h1>
              <p className=" text-justify text-white font-medium ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.h5>Ewan ko sa inyo</motion.h5>
            <motion.h2></motion.h2>
            <motion.button onClick={() => setSelectedId(null)}>
              Exit
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
