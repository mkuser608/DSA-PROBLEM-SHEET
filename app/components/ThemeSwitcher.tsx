"use client";
import { useState, useEffect } from "react";
import { useTheme } from "./context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Toggle to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeSwitcher;
