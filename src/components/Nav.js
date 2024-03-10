/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div id="nav">
        <div className="nav__arrow"></div>

        <input id="toggle" type="checkbox" />

        <Link to="/">
          <span className="nav__logo"><span>Game</span> Planet</span>
        </Link>

        <label className="hamburger" htmlFor="toggle" aria-label="Toggle Navigation">
          <MenuIcon className="burger_icon" />
        </label>

        <ul className="menu">
          <span className="menu__logo"><span>Game</span> Planet</span>

          <Link to="/browse">
            <li><span className="navlink">Browse</span></li>
          </Link>

          <Link to="/">
            <li><span className="navlink">Home</span></li>
          </Link>

          <Link to="/organize">
            <li><span className="navlink">Organize</span></li>
          </Link>

          <Link to="/register">
            <li><span className="navlink login">Login</span></li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
