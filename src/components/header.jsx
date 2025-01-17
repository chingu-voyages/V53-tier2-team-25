const Header = () => {
  return (
    <header className="bg-[#528540] text-white p-3 flex justify-between items-center">
      <div className="flex items-center w-full sm:justify-start justify-between">
        <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center text-xl font-bold">
          {/* Logo or Icon */}
        </div>
        <span className="ml-6 text-4xl font-semibold">Plate Pal</span>
      </div>
    </header>
  );
};

export default Header;
