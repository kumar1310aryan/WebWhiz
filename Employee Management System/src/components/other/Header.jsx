function Header() {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-[1.5vw] font-medium ">
        Hello <br />{" "}
        <span className="text-[1.8vw] font-semibold">Aryan 🙋‍♂️</span>
      </h1>
      <button className="bg-red-500 text-white pl-1 pr-1 rounded-sm">
        Logout
      </button>
    </div>
  );
}

export default Header;
