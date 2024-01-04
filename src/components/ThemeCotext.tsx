"use client"

import React, {useEffect} from "react"

type Theme = "dark" | "light"

const ThemeContext = React.createContext<[Theme, React.Dispatch<React.SetStateAction<Theme>>] | undefined>(undefined)

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const [theme, setTheme] = React.useState<Theme>("light")

  const enableDarkMode = () => {
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
  }

  const disableDarkMode = () => {
    localStorage.removeItem("theme")
    document.documentElement.classList.remove("dark")
  }

  useEffect(() => {
    if (
      (localStorage.getItem("theme") && localStorage.getItem("theme") === "dark") ||
      (!localStorage.getItem("theme") && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
      setTheme("dark")
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") enableDarkMode()
    else disableDarkMode()
  }, [theme])

  return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = React.useContext(ThemeContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
