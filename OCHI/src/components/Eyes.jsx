function Eyes() {
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  flex justify-between align-middle gap-11">
          <div className="w-[14vw] h-[14vw] bg-white rounded-full flex items-center justify-center">
            <div className="relative w-3/5 h-3/5 rounded-full bg-zinc-900">
              <div className="line w-full h-8 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[14vw] h-[14vw] bg-white rounded-full flex items-center justify-center">
            <div className="relative w-3/5 h-3/5 rounded-full bg-zinc-900">
              <div className="absolute line w-full h-8 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
