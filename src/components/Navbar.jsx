import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'; 

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        NMF Dashboard 
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/info">App Info</NavLink>
        </li>
      </ul>
      
    </nav>
  );
};
