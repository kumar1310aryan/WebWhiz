import { motion } from "framer-motion";
import { useState } from "react";

function Featured() {
  const [isHovering, setHovering] = useState(false);
  const [isHovering2, setHovering2] = useState(false);

  return (
    <div className="w-full py-20 ">
      <div className="w-full px-20 border-b-[1px] border-zinc-500 pb-20">
        <h1 className="text-6xl">Featured projects</h1>
      </div>
      <div className="px-14">
        <div className="cards w-full flex gap-6 mt-16">
          <div className="card-container w-1/2 h-[80vh] relative">
            <h1 className="text-[#cdea68] absolute w-full   z-[9] text-[4vw] font-bold tracking-tighter transform scale-y-200 right-full translate-x-[160%] top-1/2 -translate-y-[100%] overflow-hidden">
              {"CARDBOARD SPACESHIP".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: isHovering2 ? "0%" : "100%" }}
                  transition={{ ease: [0, 0.55, 0.45, 1], delay: index * 0.04 }}
                  className="inline-block "
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div
              onMouseEnter={() => setHovering2(true)}
              onMouseLeave={() => setHovering2(false)}
              className="card w-full h-full bg-zinc-50 rounded-xl overflow-hidden"
            >
              <img
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="card-container w-1/2 h-[80vh] relative">
            <h1 className="text-[#cdea68] absolute w-full  z-[9] text-[4vw] font-bold tracking-tight transform scale-y-200 right-full translate-x-[70%] top-1/2 -translate-y-[100%] overflow-hidden">
              {"AH2 & MATT HORN".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: isHovering ? "0%" : "100%" }}
                  transition={{ ease: [0, 0.55, 0.45, 1], delay: index * 0.04 }}
                  className="inline-block "
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className="card w-full h-full bg-zinc-50 rounded-xl overflow-hidden"
            >
              <img
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
