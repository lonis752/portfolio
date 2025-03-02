function Parallax({ type }) {
  return (
    <div className={type === 'About' ? 'relative overflow-hidden flex items-center justify-center bg-[linear-gradient(180deg,_#111132,_#0c0c1d)] h-full w-full' : 'relative overflow-hidden flex items-center justify-center bg-[linear-gradient(180deg,_#111132,_#505064)] h-full w-full'}>
      <h1 className="font-bold">{type === "About" ? "About Me" : "What I Did"}</h1>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Parallax;
