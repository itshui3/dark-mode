import { useState } from 'react';

export default function useLocalStorage(key, initialValue) {
  // checks if it exists in local store based on key first
  // if not, then initialValue is used as storedValue
  const [storedValue, setStoredValue] = 
    useState(() => {
      const itemInStorage = window.localStorage.getItem(key);

      return itemInStorage ?
        JSON.parse(itemInStorage)
        : initialValue;
  });

  const setValue = value => {
    window.localStorage.setItem(key, value);
    setStoredValue(value);
  }

  return [storedValue, setValue];
}

// const [storedValue] = useLocalStorage(key, initialValue);