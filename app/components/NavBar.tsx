import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <div className=" backdrop-blur-md sticky top-0  w-full  z-50 bg-slate-300/5 dark:bg-slate-200/5">
      <nav className="w-full p-4 flex justify-between items-center backdrop-blur-md">
        <div className="text-2xl font-bold text-white">DSA 450 Questions</div>
        <ThemeSwitcher />
      </nav>
    </div>
  );
};

export default Navbar;
