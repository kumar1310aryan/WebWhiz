import { motion } from "framer-motion";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.1"
      className="w-full py-20 bg-[#004D43] rounded-t-3xl"
    >
      <div className="text border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap overflow-hidden pb-8 ">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className="text-[15vw] leading-none font-bold uppercase tracking-tight transform scale-y-150"
        >
          we are ochi &nbsp;
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className="text-[15vw] leading-none font-bold uppercase tracking-tight transform scale-y-150"
        >
          we are ochi &nbsp;
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
