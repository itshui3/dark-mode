import React, { useContext } from 'react';

//contexts
import { DarkModeContext } from '../contexts/DarkModeContext'


const Navbar = () => {
  const value = useContext(DarkModeContext)

  console.log(value)

  const toggleMode = e => {
    e.preventDefault();
    value.setDarkMode();
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={value.darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
