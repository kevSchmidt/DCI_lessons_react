import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="header__nav">
      {/* ---- logo and navigation ---- */}
      <div className="header__content">
        <h2 className="logo">kevSchmidt</h2>

        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/home" className="nav__link">
                Home
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink to="/courses" className="nav__link">
                Courses
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink to="/about" className="nav__link">
                About
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink to="/jobs" className="nav__link">
                Jobs
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* ---- login and signup ---- */}
      <div className="header__buttons">
        <Link to="/login" className="btn btn-login">
          Login
        </Link>

        <Link to="/signup" className="btn btn-signup">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
