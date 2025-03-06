import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

function Services() {
  return (
    <motion.div variants={variants} initial="initial" whileInView="animate" className="bg-[linear-gradient(180deg, #0c0c1d, #111132)] h-full flex flex-col justify-between gap-3">
      <motion.div variants={variants} className="flex-1 self-end flex items-center gap-2">
        <p className="w-full text-right text-gray-400">
          I focus on helping your brand grow and move forward.
        </p>
        <hr className="w-3/4 text-gray-500" />
      </motion.div>
      <motion.div variants={variants} className="flex-2 flex flex-col items-center gap-5">
        <div className="flex items-center gap-10">
          <img
            className="w-80 h-[100px] rounded-4xl object-cover"
            src="/people.webp"
            alt=""
          />
          <h1 className="text-8xl">
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <div>
            <h1 className="text-8xl">
              <b>For Your</b> Business.
            </h1>
          </div>
          <div>
            <button className="text-black text-2xl px-10 py-5 bg-orange-300 rounded-4xl cursor-pointer">
              WHAT I'VE DONE.
            </button>
          </div>
        </div>
      </motion.div>
      <motion.div variants={variants} className="flex-2 flex max-w-[1366px] m-auto gap-3">
        <motion.div className="p-5 max-w-96 hover:bg-gray-300 hover:text-black border border-gray-600 flex flex-col justify-between rounded-2xl">
          <h2 className="font-bold text-xl">Full-Stack Web App Development</h2>
          <p>
            I build fast, scalable web applications using React, Next.js, and
            Node.js. Whether you need a dashboard, a SaaS product, or a custom
            business tool, I handle everything from front-end design to back-end
            functionality, including databases, authentication, and API
            integrations.
          </p>
          <button className="bg-orange-400 rounded-2xl">Go</button>
        </motion.div>
        <motion.div className="p-5 max-w-96 hover:bg-gray-300 hover:text-black border border-gray-600 flex flex-col justify-between rounded-2xl">
          <h2 className="font-bold text-xl">Shopify Store & App Development</h2>
          <p>
            I help businesses customize and enhance their Shopify stores with
            Hydrogen-powered storefronts, custom themes, and Shopify app
            development. Whether you need a unique design, advanced
            functionality, or third-party API integrations, I’ll make your
            e-commerce experience seamless and efficient.
          </p>
          <button className="bg-orange-400 rounded-2xl">Go</button>
        </motion.div>
        <motion.div className="p-5 max-w-96 hover:bg-gray-300 hover:text-black border border-gray-600 flex flex-col justify-between rounded-2xl">
          <h2 className="font-bold text-xl">
            Website Optimization & Maintenance
          </h2>
          <p>
            I optimize websites for speed, SEO, and user experience, ensuring
            they load fast and perform well across devices. I also fix bugs,
            update designs, and provide ongoing maintenance to keep websites
            secure, modern, and running smoothly.
          </p>
          <button className="bg-orange-400 rounded-2xl">Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
