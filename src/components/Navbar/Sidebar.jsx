import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Links from "./Links";
import "./sidebar.scss";
import ToggleButton from "./toggleBtn";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(22px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let handler = (event) => {
      if (!event.target.closest(".sidebar")) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div
        className={open ? "bg bg-white" : "bg bg-white/90"}
        variants={variants}
      >
        <Links setOpen={setOpen} />
      </motion.div>
      <ToggleButton open={open} setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
