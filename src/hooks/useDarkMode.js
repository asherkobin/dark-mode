import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage("DARK_MODE", initialValue);

  useEffect(() => {
    darkMode ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode");
  }, [darkMode]);

  return [darkMode, setDarkMode];
}