"use client";
import Image from "next/image";
import localFont from "next/font/local";

const sharyfont = localFont({
  src: "../fonts/SHARY-Bold.woff",
  display: "swap",
});

const nuerosmall = localFont({
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
    <div className="aboutme sm:m:0 relative py-10">
      <div className=" absolute z-[-1] w-full h-full overflow-hidden top-[-25%] sm:top-[0]">
        <Image
          src="/react.png"
          layout="fill"
          objectFit="contain"
          className="aboutbg overflow-hidden rounded-full "
        />
      </div>

      <h1
        className={`${sharyfont.className} font-extrabold text-center text-2xl text-white mb-10 drop-shadow-2xl `}
      >
        ABOUT ME
      </h1>
      <div className=" h-auto flex sm:flex-row flex-col-reverse justify-center   items-center sm:p-4 ">
        <div className="h-full sm:w-1/3 w-full">
          <div className="h-3/4 flex justify-center items-center shadow-inner">
            <Image
              src={"/IMG_20230629_111750.jpg"}
              width="200"
              height="200"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 h-full sm:w-full items-center my-2 justify-center px-8">
          <h1 className="text-yellow-500">Julius N. Abucejo</h1>
          <div className=" flex flex-col justify-center items center gap-8 sm:gap-3">
            <h4 className="self-center">Web Developer</h4>
            <p className=" text-white text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, voluptates, quia voluptate quod quos
              exercitationem voluptatibus quas quibusdam, voluptates, quia
              voluptate quod quos exercitationem voluptatibus quas
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col p-3 sm:h-auto">
        <h1
          className={`${nuerosmall.className} self-center p-3 text-amber-400 text-xl text-center shadow-white`}
        >
          Skills
        </h1>
        <div className="flex flex-col sm:flex-row gap-2 ">
          <div className="frontend skills flex sm:w-1/2  w-full rounded-md gap-3 p-3 flex-wrap justify-evenly">
            {frontend.map((skill, index) => {
              return (
                <div className="flex flex-col w-24 rounded-md bg-slate-300 p-2 justify-center self-center items-center text-center">
                  <Image
                    src={frontimages[index] ?? "/HTML5.png"}
                    width="50"
                    height="50"
                    alt="HTML"
                    className="flex justify-center items-center self-center rounded-full "
                  />
                  <h1>{skill}</h1>
                </div>
              );
            })}
          </div>
          <div className="backend skills flex sm:w-1/2  w-full rounded-md gap-3 p-3 flex-wrap justify-evenly">
            {backend.map((skill, index) => {
              return (
                <div className="flex flex-col w-24 aspect-square rounded-md bg-slate-300 p-2 justify-center self-center items-center text-center">
                  <Image
                    src={backimages[index] ?? "/HTML5.png"}
                    width="50"
                    height="50"
                    alt="HTML"
                    className="flex justify-center items-center self-center rounded-full "
                  />
                  <h1 className="flex-nowrap whitespace-nowrap">{skill}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
