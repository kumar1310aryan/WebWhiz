import { motion } from "framer-motion";

function Marquee() {
  return (
    <div className="w-full py-20 bg-[#004D43] rounded-t-3xl">
      <div className="text border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap gap-[4vw] overflow-hidden pb-8 ">
        <motion.h1 className="text-[15vw] leading-none font-semibold uppercase">
          we are ochi
        </motion.h1>
        <motion.h1 className="text-[15vw] leading-none font-semibold uppercase">
          we are ochi
        </motion.h1>
        <motion.h1 className="text-[15vw] leading-none font-semibold uppercase">
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
