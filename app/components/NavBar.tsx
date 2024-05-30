// components/Navbar.tsx
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-200 dark:bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-gray-900 dark:text-white">
        DSA 450 Questions
      </div>
      <ThemeSwitcher />
    </nav>
  );
};

export default Navbar;
