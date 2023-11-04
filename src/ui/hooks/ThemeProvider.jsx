import { useEffect } from 'react';
import { useContext, createContext, useState } from 'react'

export const useTheme = () => useContext(ThemeContext)

const ThemeContext = createContext({
  darkMode: false,
  setDarkMode: () => {}
})

export function ThemeProvider({ children }) {

  const inicialStateDarkMode = localStorage.getItem("theme") === "dark";
  const [darkMode, setDarkMode] = useState(inicialStateDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])


  return (
    <ThemeContext.Provider value={ { darkMode, setDarkMode } }>
      {children}
    </ThemeContext.Provider>
  )
}