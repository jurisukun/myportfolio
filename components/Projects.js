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
      id: 0,
      title: "Coords Converter",
      description:
        "Simple web app that converts latitude and longitude coordinates into degrees, minutes and seconds. Built using Vite, Tailwind CSS and Node (Fastify) for backend.",
      image: "/coords.png",
      url: "https://assesment-coords-converter.vercel.app/",
      date: "2023",
    },

    {
      id: 2,
      title: "Machine Inventory System",
      description:
        "A system that manages the inventory of machines in a company. Built using HTML, CSS, JavaScript, jQuery, PHP, and MySQL.",
      image: "/asti.png",
      url: "https://machineinventorysystem.000webhostapp.com/",
      date: "2022",
    },
    {
      id: 1,
      title: "Construction Company Business Directory",
      description:
        "Business Directory for Construction Companies in Cavite. Displays the list of companies and their contact information. Built using HTML, CSS, JavaScript, jQuery, and JSON files.",
      image: "/project1.png",
      url: "https://jurisukun.github.io/Cavite-Construction-Companies/index.html",
      date: "2021",
    },
    {
      id: 3,
      title: "Event Management System for School Organizations",
      description:
        "A system that manages the events of school organizations. Organization accounts send event requests on specified date and the Admin account chooses whether to accept the requests or not. Built using PHP, CSS, JavaScript, jQuery, and MySQL.",
      image: "/dummy.jpg",
      date: "2020",
    },
  ];

  return (
    <div id="projects" className="aboutme gap-3 p-5 py-10 min-h-[100vh]">
      <motion.h1
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 2 } }}
        className={`${sharyfont.className} font-extrabold text-center text-3xl sm:text-4xl text-white mb-10 drop-shadow-2xl mt-10`}
      >
        Projects
      </motion.h1>
      <div className=" flex items-center justify-center flex-wrap ">
        {projects.map((project, key) => (
          <motion.div
            key={key}
            className=" flex sm:flex-row flex-col w-full border-2 m-3 items-center sm:py-3 rounded-xl lg:p-8"
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
                  href={project?.url}
                  target="_blank"
                  className="hover:text-yellow-600 "
                >
                  {project.title}
                </a>
              </h1>
              <p className=" text-justify text-white font-medium ">
                {project.description}
              </p>
              <div className="flex w-full items-start justify-start mt-2 gap-2">
                <p className="text-green-400 font-medium">Date: </p>
                <p className="text-slate-100 tracking-wide ">{project.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* <AnimatePresence>
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
      </AnimatePresence> */}
    </div>
  );
}

export default Projects;
