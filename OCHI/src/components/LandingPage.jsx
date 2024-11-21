import { FaArrowUp } from "react-icons/fa6";
import "./LandingPage.css";
import { motion } from "framer-motion";
function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-48 px-20">
        {["we create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.11, 0, 0.5, 0], duration: 1 }}
                    className="w-[8vw] h-[4.9vw] bg-red-50 mt-2 overflow-hidden rounded-md bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url(https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg)",
                    }}
                  ></motion.div>
                )}
                <h1 className="uppercase text-[6.5vw] leading-[5.6vw] tracking-tighter font-semibold ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1.5px] border-zinc-600 mt-32 flex justify-between items-center py-3 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p key={index} className="text-md font-light tracking-tight">
              {item}
            </p>
          );
        })}

        <div className="start flex items-center gap-1">
          <div className="px-4 py-1 border-[2px] border-zinc-600 rounded-full uppercase flex items-center justify-center relative overflow-hidden wave-hover-effect hover:text-black transition-colors duration-300 hover:cursor-pointer">
            <span className="relative z-10 text-white hover:text-black">
              start the project
            </span>
          </div>

          <div className="px-2 py-2 border-[2px] border-zinc-600 rounded-full items-center justify-center relative overflow-hidden icon-wave-hover-effect transition-colors duration-300">
            <FaArrowUp className="rotate-45 relative z-10 text-white hover:text-black hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
