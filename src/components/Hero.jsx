import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 60,
    },
  },
};

function Hero() {
  return (
    <div className="relative overflow-hidden h-[calc(100vh-100px)] bg-[#0c0c1d]">
      <div className="max-w-[1366px] h-full m-auto z-1">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="h-full flex flex-col justify-center gap-10 w-1/2"
        >
          <motion.h2 variants={textVariants} className="font-bold text-2xl">
            Hi! I'm Lonis Kwacke
          </motion.h2>
          <motion.h2
            variants={textVariants}
            className="font-extrabold text-5xl"
          >
            Full-Stack Developer
          </motion.h2>
          <motion.p variants={textVariants} className="font-bold text-xl">
            I specialize in building fast, user-friendly web applications with
            modern technologies like React, Next.js, and more. Let’s
            create something great together!"
          </motion.p>
          <motion.div variants={textVariants} className="flex gap-3 z-10">
            <motion.button
              variants={textVariants}
              className="border-2 p-3 rounded-2xl cursor-pointer hover:bg-white hover:text-black"
            >
              Latest Work
            </motion.button>
            <motion.button
              variants={textVariants}
              className="border-2 p-3 rounded-2xl cursor-pointer hover:bg-white hover:text-black"
            >
              <a href="Contact" className="cursor-pointer">
                Contact Me
              </a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
            className="w-10"
          />
        </motion.div>
      </div>
      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="flex absolute -bottom-35 whitespace-nowrap opacity-2 font-bold text-[40vh] cursor-default z-0"
      >
        React Node.JS Remix Tailwind PostgreSQL Hydrogen
      </motion.div>
      <div className="h-full absolute top-0 right-0">
        <img className="h-full" src="/heroimg.png" alt="Photo of myself" />
      </div>
    </div>
  );
}

export default Hero;
