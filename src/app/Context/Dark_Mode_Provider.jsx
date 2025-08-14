import { createContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const getInitialMode = () => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) return storedTheme === "dark";
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      };
  const [darkMode, setDarkMode] = useState(getInitialMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContext;
