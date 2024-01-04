"use client"

import {useTheme} from "./ThemeCotext"

export const ThemeToggleComponent = () => {
  const [theme, setTheme] = useTheme()

  return (
    <button
      onClick={() => setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))}
      className="rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100 hover:bg-gray-500 hover:text-white"
    >
      {theme} Clicks
    </button>
  )
}

export const ThemeComponent = () => {
  const [theme] = useTheme()

  return (
    <div className="span text-xl font-bold text-white">
      <span className="tabular-nums">{theme}</span> Clicks
    </div>
  )
}
