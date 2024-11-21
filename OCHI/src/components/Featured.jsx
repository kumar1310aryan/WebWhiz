function Featured() {
  return (
    <div className="w-full py-20 ">
      <div className="w-full px-20 border-b-[1px] border-zinc-500 pb-20">
        <h1 className="text-6xl">Featured projects</h1>
      </div>
      <div className="px-14">
        <div className="cards w-full flex gap-6 mt-16">
          <div className="card-container w-1/2 h-[80vh] relative">
            <h1 className="text-[#cdea68] absolute w-full  z-[9] text-[4vw] font-bold tracking-tighter transform scale-y-200 right-full translate-x-[50%] top-1/2 -translate-y-[100%]">
              {"CARDBOARD SPACESHIP".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full bg-zinc-50 rounded-xl overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="card-container w-1/2 h-[80vh] relative">
            <h1 className="text-[#cdea68] absolute w-full  z-[9] text-[4vw] font-bold tracking-tighter transform scale-y-200 right-full translate-x-[50%] top-1/2 -translate-y-[100%]">
              {"AH2 & MATT HORN".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full bg-zinc-50 rounded-xl overflow-hidden">
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
