function Header() {
  return (
    <div className="flex items-end justify-between mb-10">
      <h1 className="text-xl font-light">
        Hello <br /> <span className="text-2xl font-semibold">Aryan 🙋‍♂️</span>
      </h1>
      <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600">
        Logout
      </button>
    </div>
  );
}

export default Header;
