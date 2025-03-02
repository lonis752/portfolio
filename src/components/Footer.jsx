import { useEffect, useState } from "react";

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <div className="flex flex-col items-center p-5 gap-1 max-w-screen">
        <p>{`© ${year} Lonis Kwacke All Rights Reserved.`}</p>
      </div>
    </>
  );
}

export default Footer;
