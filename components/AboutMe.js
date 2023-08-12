"use client";
import Image from "next/image";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import { Exo_2 } from "next/font/google";

export const sharyfont = localFont({
  src: "../fonts/SHARY-Bold.woff",
  display: "swap",
});

export const nuerosmall = localFont({
  src: "../fonts/neuropolitical/neuropolitical-rg-small.woff",
  display: "swap",
});

function AboutMe() {
  const frontend = ["HTML", "CSS", "JavaScript", "jQuery", "React", "Next JS"];
  const frontimages = [
    "/HTML5.png",
    "/CSS.png",
    "/javascript.png",
    "/jquery.png",
    "/react.png",
  ];
  const backend = ["Node JS", "Express JS", "MySQL", "PHP", "Git"];
  const backimages = [
    "/node.png",
    "/express2.png",
    "/mysql.png",
    "/php.png",
    "/git.png",
  ];
  return (
    <div
      id="aboutme"
      className="flex flex-col justify-center aboutme sm:m:0 relative py-10 min-h-[100vh] h-auto"
    >
      <div className=" absolute z-[-1] w-full h-full overflow-hidden top-[-25%] sm:top-[0]">
        <Image
          alt="reactbg"
          src="/react.png"
          fill="responsive"
          sizes="100%"
          className="aboutbg overflow-hidden rounded-full object-contain "
        />
      </div>

      <motion.h1
        initial={{ opacity: 0, x: -250 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        className={`${sharyfont.className} font-extrabold text-center text-3xl text-white mb-10 drop-shadow-2xl `}
      >
        ABOUT ME
      </motion.h1>
      <div className="  h-auto flex sm:flex-row flex-col-reverse justify-center   items-center sm:p-4 ">
        <div className="h-full sm:w-1/3 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 1, duration: 1 },
            }}
            className="h-3/4 flex justify-center items-center shadow-inner"
          >
            <Image
              src={"/IMG_20230629_111750.jpg"}
              width="200"
              height="200"
              className="rounded-xl"
              alt="profilepic"
            />
          </motion.div>
        </div>
        <div className="flex flex-col gap-3 h-full sm:w-full items-center my-2 justify-center px-8">
          <motion.h1
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1.6,
              transition: { delay: 2, duration: 0.5 },
            }}
            className="text-yellow-500"
          >
            Julius N. Abucejo
          </motion.h1>
          <div className=" flex flex-col justify-center items center gap-8 sm:gap-3">
            <motion.h4
              initial={{ scale: 0 }}
              whileInView={{
                scale: 1.3,
                transition: { delay: 2, duration: 0.5 },
              }}
              className="self-center"
            >
              Web Developer
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, y: -100, scale: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              className=" text-white text-justify"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, voluptates, quia voluptate quod quos
              exercitationem voluptatibus quas quibusdam, voluptates, quia
              voluptate quod quos exercitationem voluptatibus quas
            </motion.p>
          </div>
        </div>
      </div>
      <div className=" flex justify-center flex-col p-3 sm:h-auto">
        <h1
          className={`${nuerosmall.className} self-center p-3 text-amber-400 text-xl text-center shadow-white`}
        >
          Skills
        </h1>
        <div className="flex flex-col sm:flex-row gap-2 ">
          <div className="frontend skills flex sm:w-1/2  w-full rounded-md gap-3 p-3 flex-wrap justify-evenly">
            {frontend.map((skill, index) => {
              return (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{
                    scale: 1,
                  }}
                  transition={{ delay: index / 16 }}
                  key={index}
                  className="flex flex-col w-24 rounded-md bg-slate-300 p-2 justify-center self-center items-center text-center"
                >
                  <Image
                    src={frontimages[index] ?? "/HTML5.png"}
                    width="50"
                    height="50"
                    alt="HTML"
                    className="flex w-auto justify-center items-center self-center rounded-full "
                  />
                  <h1>{skill}</h1>
                </motion.div>
              );
            })}
          </div>
          <div className="backend skills flex sm:w-1/2  w-full rounded-md gap-3 p-3 flex-wrap justify-evenly">
            {backend.map((skill, index) => {
              return (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{
                    scale: 1,
                  }}
                  transition={{ delay: index / 16 + 1 }}
                  key={index}
                  className="flex flex-col w-24 aspect-square rounded-md bg-slate-300 p-2 justify-center self-center items-center text-center"
                >
                  <Image
                    src={backimages[index] ?? "/HTML5.png"}
                    width="50"
                    height="50"
                    alt="HTML"
                    className="flex w-auto justify-center items-center self-center rounded-full "
                  />
                  <h1 className="flex-nowrap whitespace-nowrap">{skill}</h1>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
