"use client";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 01.993.883L11 3v2a1 1 0 01-1.993.117L9 5V3a1 1 0 011-1zm-4.707.293a1 1 0 011.414 0L8 4.586 5.707 6.879a1 1 0 01-1.414-1.414L6.586 4 5.293 2.707a1 1 0 010-1.414zM10 15a1 1 0 01.993.883L11 16v2a1 1 0 01-1.993.117L9 18v-2a1 1 0 011-1zm7.707-2.293a1 1 0 010 1.414L15.414 16l1.293 1.293a1 1 0 01-1.414 1.414L14 17.414l-1.293 1.293a1 1 0 01-1.414-1.414L12.586 16l-1.293-1.293a1 1 0 011.414-1.414L14 14.586l1.293-1.293a1 1 0 011.414 0zm0 0a1 1 0 011.414 0L19 10.586l1.293-1.293a1 1 0 011.414 1.414L20.414 12l1.293 1.293a1 1 0 01-1.414 1.414L18 13.414l-1.293 1.293a1 1 0 01-1.414-1.414L16.586 12 15.293 10.707a1 1 0 011.414-1.414z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800 dark:text-gray-200"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12a1 1 0 01-.707 1.707H9a1 1 0 010-2h1.293A1 1 0 0111 14zm-3-4a1 1 0 110 2H7a1 1 0 110-2h1zm4-1a1 1 0 11-2 0V7a1 1 0 012 0v1zm-3-1H7a1 1 0 010-2h1a1 1 0 010 2z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeSwitcher;
