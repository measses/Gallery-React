import React from "react";

const Navbar = () => {

  const handleLogoClick = () => {
    window.location.href = "/";
  };
  return (
    <nav className="bg-gradient-to-r from-blue-100 via-blue-200 to-purple-100 p-3 w-max mt- rounded-lg mt-2">
      <div className="container mx-auto flex items-center justify-between" onClick={handleLogoClick}>
        <div className="flex items-center cursor-pointer">
          <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-2">
            <span className="text-4xl font-extrabold text-blue-500 bg-white rounded-full w-12 h-12 flex items-center justify-center mr-2 shadow-lg">
              PG
            </span>
          </div>
          <div className="text-blue-400 text-2xl font-semibold">
            Pix<span className="text-purple-400">Gallery</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
