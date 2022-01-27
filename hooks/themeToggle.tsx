import { useEffect, useState } from "react"

const useTheme = () => {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (window.localStorage.theme === 'dark' || (!('theme' in window.localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = (): void => {
    const current = window.localStorage.theme

    if (current === 'light') {
      window.localStorage.theme = 'dark'
      setTheme('dark')
    } else if (current === 'dark') {
      window.localStorage.theme = 'light'
      setTheme('light')
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        window.localStorage.theme = 'light'
        setTheme('light')
      } else {
        window.localStorage.theme = 'dark'
        setTheme('dark')
      }
    }
  }

  return [toggleTheme]
}

export { useTheme }
