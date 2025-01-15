import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn }) => {
  return (
    <header className="bg-[#528540] text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        {/* Yellow circle */}
        <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-xl font-bold">

        </div>
        {/* Text next to the circle */}
        <span className="ml-6 text-4xl font-semibold">Plate Pal</span>
      </div>
    </header>
  );
};

export default Header;
