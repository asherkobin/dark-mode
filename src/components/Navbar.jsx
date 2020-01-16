import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = ({darkMode, setDarkMode, coinNames}) => {
  
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      { 
        coinNames.map(name => 
          <NavLink key={name}
            style={{ textDecoration: "none", fontSize: "20px" }} 
            activeStyle={{ textDecoration: "underline", fontWeight: "bold" }} 
            to={`/${name}`}>{name}</NavLink>)
      }
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
