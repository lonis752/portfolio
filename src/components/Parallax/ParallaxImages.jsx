import ParallaxImg from "./ParallaxImg";

function ParallaxImages() {
  return (
    <div className="mx-auto flex flex-wrap gap-1 max-w-5xl px-4 relative z-10">
      <ParallaxImg
        src="/Parallax/css-3.png"
        alt="logo"
        start={-100}
        end={-700}
        className="w-30 h-30"
      />
      <ParallaxImg
        src="/Parallax/GraphQL.png"
        alt="logo"
        start={-250}
        end={-600}
        className="w-30 h-30"
      />
      <ParallaxImg
        src="/Parallax/HTML5.png"
        alt="logo"
        start={-400}
        end={-900}
        className="w-30 h-30"
      />
      <ParallaxImg
        src="/Parallax/hydrogen.png"
        alt="logo"
        start={-300}
        end={-500}
        className="w-30 h-30"
      />
      <ParallaxImg
        src="/Parallax/js.png"
        alt="logo"
        start={-500}
        end={-800}
        className="w-30 h-30"
      />
      <ParallaxImg
        src="/Parallax/MongoDB.png"
        alt="logo"
        start={0}
        end={-512}
        className="w-30 h-30"
      />
      <ParallaxImg
        src="/Parallax/Next.js.png"
        alt="logo"
        start={-55}
        end={-490}
        className="w-30 h-30"
      />
      <ParallaxImg
        src="/Parallax/postgresql.png"
        alt="logo"
        start={-350}
        end={-600}
        className="w-30 h-30"
      />
      <ParallaxImg
        src="/Parallax/react.png"
        alt="logo"
        start={25}
        end={-700}
        className="w-30 h-30"
      />
      <ParallaxImg
        src="/Parallax/remix.png"
        alt="logo"
        start={-200}
        end={-600}
        className="w-30 h-30"
      />
      <ParallaxImg
        src="/Parallax/Tailwind.png"
        alt="logo"
        start={10}
        end={-550}
        className="w-30 h-30"
      />
      <ParallaxImg
        src="/Parallax/TypeScript.png"
        alt="logo"
        start={-150}
        end={-600}
        className="w-30 h-30"
      />
    </div>
  );
}

export default ParallaxImages;
