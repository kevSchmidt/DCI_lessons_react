import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <Link className="header__link" to="/home">
              Home
            </Link>
          </li>

          <li className="header__item">
            <Link className="header__link" to="/about">
              About
            </Link>
          </li>

          <li className="header__item">
            <Link className="header__link" to="/blog">
              Blog
            </Link>
          </li>

          <li className="header__item">
            <Link className="header__link" to="/saved">
              Saved
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
