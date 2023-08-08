import React from "react";
import Image from "next/image";

function Projects() {
  return (
    <div id="projects" className="aboutme gap-3 p-5">
      <div>Projects</div>
      <div className=" flex items-center justify-center flex-wrap ">
        <div className=" flex sm:flex-row flex-col border-2 m-3 items-center rounded-xl lg:p-8">
          <div className="sm:w-1/2 w-full justify-center items-center flex  ">
            <Image
              src="/../public/express.png"
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
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className=" flex items-center justify-center flex-wrap ">
          <div className=" flex sm:flex-row flex-col border-2 m-3 items-center rounded-xl lg:p-8">
            <div className="sm:w-1/2 w-full justify-center items-center flex  ">
              <Image
                src="/../public/express.png"
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
          </div>{" "}
          <div className=" flex items-center justify-center flex-wrap ">
            <div className=" flex sm:flex-row flex-col border-2 m-3 items-center rounded-xl lg:p-8">
              <div className="sm:w-1/2 w-full justify-center items-center flex  ">
                <Image
                  src="/../public/express.png"
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
