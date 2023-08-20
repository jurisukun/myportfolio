import {
  AiOutlineProfile,
  AiOutlineHome,
  AiOutlineFolder,
  AiOutlinePhone,
} from "react-icons/ai";
import { motion } from "framer-motion";

export default function FloatingNav() {
  return (
    <div className=" botsection w-[85%] sticky bottom-16 h-[70px] z-[100]   items-center justify-center bg-gradient-to-b from-[#0c57a2] to-[#194a7a] px-3 rounded-xl">
      <motion.ul className=" w-[100%] m-2 flex gap-3 items-center  p-5 justify-evenly">
        <motion.li whileHover={{ scale: 1.2 }}>
          <motion.a href="#hero">
            <AiOutlineHome
              color={this ? "black" : "white"}
              size={35}
              className="aspect-square w-[50px]  hover:border-b-2 border-[#f9f9f9] transition-border     "
            />
          </motion.a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }}>
          <motion.a href="#aboutme">
            <AiOutlineProfile
              color="white"
              size={35}
              className="aspect-square w-[50px]  hover:border-b-2 border-[#f9f9f9] transition-border     "
            />
          </motion.a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }}>
          <motion.a href="#projects">
            <AiOutlineFolder
              color="white"
              size={35}
              className="aspect-square w-[50px]  hover:border-b-2 border-[#f9f9f9] transition-border     "
            />
          </motion.a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }}>
          <motion.a href="#contacts">
            <AiOutlinePhone
              color="white"
              size={35}
              className="aspect-square w-[50px]  hover:border-b-2 border-[#f9f9f9] transition-border     "
            />
          </motion.a>
        </motion.li>
      </motion.ul>
    </div>
  );
}
