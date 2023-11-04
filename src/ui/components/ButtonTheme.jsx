import { Moon, Sun, useTheme } from "..";
// import { useTheme } from "../hooks/ThemeProvider";

export const ButtonTheme = () => {

  const { darkMode, setDarkMode } = useTheme()

  return (
      <button onClick={() => setDarkMode(!darkMode)}>
        {
          darkMode ? <Sun /> : <Moon />
        }
      </button>  
  );
};
