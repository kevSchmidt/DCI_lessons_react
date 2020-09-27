import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Navbar.css";

const Navbar = ({ saved }) => {
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
            <span className="saved__count">{saved.length}</span>
            <Link className="header__link" to="/saved">
              Saved
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

// ----- connect component with redux ----
const getSavedItems = (state) => {
  return {
    saved: state.savedList.saved,
  };
};

export default connect(getSavedItems)(Navbar);
