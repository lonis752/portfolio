import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

function Parallax({ type }) {
  const { scrollY } = useScroll({
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollY, [0, 750, 1700], [0, 1, 0]);

  const backgroundSize = useTransform(scrollY, [0, 1700], ["170%", "100%"]);

  const clip1 = useTransform(scrollY, [0, 1500], [50, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [50, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  return (
    <div className="relative w-full h-[calc(1500px + 100vh)]">
      <motion.div
        style={{
          opacity,
          backgroundSize,
          clipPath,
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1723860011127-5029e9b914be?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="sticky top-0 h-screen w-full flex items-center justify-center bg-[linear-gradient(180deg,_#111132,_#0c0c1d)]"
      >
        <h1 className="font-extrabold text-5xl">About Me</h1>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-#111132 to-#0c0c1d"></div>
    </div>
  );
}

export default Parallax;
