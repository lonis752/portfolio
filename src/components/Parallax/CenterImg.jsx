import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ParallaxImages from "./ParallaxImages";

function CenterImg() {
  const ref = useRef(null); // Fix: Create a ref for tracking
  const { scrollY } = useScroll({
    target: ref, // Attach scroll tracking to the correct container
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollY, [0, 750, 1700], [0, 1, 0]);
  const backgroundSize = useTransform(scrollY, [0, 1700], ["170%", "100%"]);

  const clip1 = useTransform(scrollY, [0, 1500], [50, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [50, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  return (
    <div ref={ref} className="relative"> {/* Fix: Wrap everything in a relative div */}
      <motion.div
        style={{
          opacity,
          backgroundSize,
          clipPath, // Temporarily remove this to debug if necessary
          backgroundImage: `url('/Parallax/aditya-chinchure-vancouver-unsplash.jpg')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="sticky top-0 h-screen w-full flex items-center justify-center"
      >
        <h1 className="font-extrabold text-5xl">About Me</h1>
      </motion.div>

      <ParallaxImages /> {/* Fix: Ensure this scrolls properly */}
    </div>
  );
}

export default CenterImg;