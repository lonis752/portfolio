import PortParallaxImg from "./PortParallaxImg";

function PortParallaxImages2() {
  return (
    <div className="mx-auto flex gap-1 max-w-xl px-4 relative items-center justify-center">
      
      <PortParallaxImg
        src="/Parallax/Next.js.png"
        alt="logo"
        start={-200}
        end={-800}
        className="w-30 h-30"
      />
      <PortParallaxImg
        src="/Parallax/postgresql.png"
        alt="logo"
        start={-200}
        end={-850}
        className="w-30 h-30"
      />
      <PortParallaxImg
        src="/Parallax/react.png"
        alt="logo"
        start={-200}
        end={-1000}
        className="w-30 h-30"
      />
      <PortParallaxImg
        src="/Parallax/remix.png"
        alt="logo"
        start={-200}
        end={-1000}
        className="w-30 h-30"
      />
      <PortParallaxImg
        src="/Parallax/Tailwind.png"
        alt="logo"
        start={-200}
        end={-900}
        className="w-30 h-30"
      />
      <PortParallaxImg
        src="/Parallax/TypeScript.png"
        alt="logo"
        start={-200}
        end={-900}
        className="w-30 h-30"
      />
    </div>
  );
}

export default PortParallaxImages2;
