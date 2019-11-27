import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = boolean => {
  const [storedValue, setValue] = useLocalStorage('darkmode', boolean);

  const toggle = () => {
    setValue(!storedValue);
  }

  useEffect(() => {

    storedValue ?
      document.querySelector('body').classList.add('dark-mode')
      : document.querySelector('body').classList.remove('dark-mode')

  }, [storedValue]);

  return [storedValue, toggle]
}

export default useDarkMode;