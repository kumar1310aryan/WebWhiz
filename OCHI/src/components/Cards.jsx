function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-100 flex items-center justify-center">
      <div className="w-full p-[3vw] h-[60vh] flex gap-5">
        <div className="cardContainer w-[50%] h-full">
          <div className="card w-full h-full bg-[#004d43] rounded-xl flex items-center justify-center">
            <h1 className="text-[4vw] text-[#cdea68] font-bold">Ochi</h1>
          </div>
        </div>
        <div className="cardContainer w-[50%] h-full flex gap-5">
          <div className="card w-[50%]  h-full bg-zinc-800 rounded-xl flex items-center justify-center">
            <h1 className="text-[3vw] text-[#fff] font-semibold">Clutch</h1>
          </div>
          <div className="card w-[50%]  h-full bg-zinc-800 rounded-xl flex items-center justify-center"><h1 className="text-[2.5vw] text-[#fff] font-semibold">T F A</h1></div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
