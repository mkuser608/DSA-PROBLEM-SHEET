import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full z-50 bg-slate-300/30 dark:bg-slate-400/50">
      <nav className="w-full p-4 flex justify-between items-center backdrop-blur-xl">
        <div className="text-2xl font-bold text-white">DSA 450 Questions</div>
        <ThemeSwitcher />
      </nav>
    </div>
  );
};

export default Navbar;
