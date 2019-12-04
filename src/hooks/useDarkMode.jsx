import { useState } from 'react'

import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = initialValue => {
  const [darkMode, setDarkMode] = useLocalStorage('darkmode', initialValue)

  const setMode = () => {
    setDarkMode(!darkMode)
  }

  return [darkMode, setMode]
}