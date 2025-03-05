import ParallaxImages from "./ParallaxImages";
import CenterImg from "./CenterImg";

function Parallax() {
  return (
    <div className="relative w-full h-[calc(1500px + 100vh)]">
      <CenterImg />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from zinc-950/0 to-#0c0c1d"></div>
    </div>
  );
}

export default Parallax;
