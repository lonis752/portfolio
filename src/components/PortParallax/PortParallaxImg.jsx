import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ParallaxImg({ className, alt, src, start, end }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${-end}px`], // Ensure correct offset syntax
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [end, start]); // Reversed for downward motion
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      style={{ opacity, transform }} // Ensure styles are passed as an object
      ref={ref}
      src={src}
      alt={alt}
      className={className}
    />
  );
}

export default ParallaxImg;
