import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PortParallaxImages from "./PortParallaxImages";
import PortParallaxImages2 from "./PortParallaxImages2";

function PortCenterImg() {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 1500], [0, 1]);
  const backgroundSize = useTransform(scrollY, [0, 1500], ["170%", "100%"]);

  return (
    <div ref={ref} className="relative">
      <motion.div
        style={{
          opacity,
          backgroundSize,
          backgroundImage: `url('/Parallax/folder.png')`,
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
        className="sticky top-0 h-200 w-full flex flex-col items-center justify-center"
      >
        <PortParallaxImages />
        <PortParallaxImages2 />
        <h1 className="font-extrabold text-5xl relative left-5">What I've Done.</h1>
      </motion.div>
    </div>
  );
}

export default PortCenterImg;
