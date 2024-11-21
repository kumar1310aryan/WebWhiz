function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.2"
      className="w-full h-[170vh] bg-[#CDEA68] rounded-t-3xl text-black"
    >
      <h1 className="text-[3.5vw] font-sans pl-16 pt-24 tracking-tight leading-none">
        Ochi is a strategic presentation agency for forward- <br /> thinking
        businesses that need to <u>raise funds, sell</u>
        <br /> <u>products, explain complex ideas,</u> and{" "}
        <u>hire great peo-</u> <br />
        <u>ple</u>.
      </h1>
      <hr className="mt-16 border-t border-zinc-500" />
      <div className="w-full h-[40vh]  mt-5 flex">
        <div className="w-[50%] h-[100%] pl-10 text-[1.2vw]">
          What you can expect:
        </div>
        <div className="w-[50%]  flex gap-[6%]">
          <div className="w-[44%] text-[1.2vw]">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people. <br />
            <br /> We believe the mix of strategy and design (with a bit of
            coffee) is what makes your message clear, convincing, and
            captivating.
          </div>
          <div className="w-[50%] flex flex-col pt-[7%] pl-10 text-[1.2vw]">
            S:
            <br />
            <br />
            <br />
            {["Instagram", "facebook", "behance", "linkedin"].map(
              (item, index) => (
                <a key={index} className="underline">
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
      <hr className="mt-8 border-t border-zinc-500" />
      <div className="w-full flex h-[65vh] mt-8">
        <div className="w-[50%] pl-12 text-[4vw] -mt-4  font-normal leading-none tracking-tighter text-zinc-800">
          Our approach:
        </div>
        <div className="w-[50%] h-[100%]  flex align-middle justify-center">
          <div className="image w-[90%] h-[100%]  rounded-2xl overflow-hidden">
            <img
              src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
