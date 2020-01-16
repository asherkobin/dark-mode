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
          <NavLink key={name} exact
            style={{ textDecoration: "none", fontSize: "20px", color: darkMode ? "white" : "black" }} 
            activeStyle={{ textDecoration: "underline", fontWeight: "bold", color: darkMode ? "white" : "black" }} 
            to={`/${name.replace("/", "_")}`}>{name}</NavLink>)
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
