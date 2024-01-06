import { motion } from "framer-motion";
import { quantumfont } from "@/components/Homepage";

export default function Footer() {
  return (
    <motion.footer
      onViewportLeave={(e) => {
        document.querySelector(".botsection").classList.add("show");
      }}
      onViewportEnter={(e) => {
        document.querySelector(".botsection").classList.remove("show");
      }}
      className=" min-h-[100px] w-full navbar"
    >
      <div className="w-full p-8 flex flex-wrap justify-between">
        <div className=" border-r-2 h-full px-3 justify-center items-center">
          <h1
            className={`${quantumfont.className} text-white text-xl text-center tracking-wide`}
          >
            JNA
          </h1>
        </div>
        <div className=" justify-center items-center flex flex-row">
          <p className="text-center text-sm text-white">
            All rights reserve &copy; 2023
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
