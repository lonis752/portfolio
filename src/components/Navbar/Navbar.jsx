import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import Links from "./Links";

function Navbar() {
  return (
    <>
      <Sidebar />
      <div className="h-25 flex justify-center">
        <div className="max-w-[1366px] flex items-center justify-between w-full h-full px-5">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-3xl pl-10 md:pl-0  tracking-[5px] text-purple-700"
          >
            Lonis Kwacke
          </motion.h1>
          <div className="flex gap-3">
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              href="#"
            >
              <img className="h-10 m-2" src="/twitter.png" alt="by Freepik" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              href="#"
            >
              <img
                className="h-10 m-2 bg-white rounded-4xl"
                src="/github.png"
                alt="by Pixel perfect"
              />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              href="#"
            >
              <img
                className="h-10 m-2 bg-white rounded-4xl"
                src="/linkedin.png"
                alt="by Freepik"
              />
            </motion.a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
