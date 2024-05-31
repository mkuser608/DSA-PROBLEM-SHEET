import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <div className="bg-gray-200/70 dark:bg-gray-800/70 backdrop-blur-none sticky top-0  w-full  z-50">
      <nav className="w-full p-4 flex justify-between items-center backdrop-blur-md">
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          DSA 450 Questions
        </div>
        <ThemeSwitcher />
      </nav>
    </div>
  );
};

export default Navbar;
