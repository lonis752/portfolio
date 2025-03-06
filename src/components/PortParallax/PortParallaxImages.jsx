import PortParallaxImg from "./PortParallaxImg";

function PortParallaxImages() {
  return (
    <div className="mx-auto flex gap-1 max-w-xl px-4 relative items-center justify-center">
      <PortParallaxImg
        src="/Parallax/css-3.png"
        alt="logo"
        start={-80}
        end={-900}
        className="w-30 h-30"
      />
      <PortParallaxImg
        src="/Parallax/GraphQL.png"
        alt="logo"
        start={-80}
        end={-1400}
        className="w-30 h-30"
      />
      <PortParallaxImg
        src="/Parallax/HTML5.png"
        alt="logo"
        start={-80}
        end={-950}
        className="w-30 h-30"
      />
      <PortParallaxImg
        src="/Parallax/hydrogen.png"
        alt="logo"
        start={-80}
        end={-700}
        className="w-30 h-30"
      />
      <PortParallaxImg
        src="/Parallax/js.png"
        alt="logo"
        start={-80}
        end={-600}
        className="w-30 h-30"
      />
      <PortParallaxImg
        src="/Parallax/MongoDB.png"
        alt="logo"
        start={-80}
        end={-900}
        className="w-30 h-30"
      />
    </div>
  );
}

export default PortParallaxImages;
