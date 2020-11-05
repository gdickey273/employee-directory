import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
        The Collection
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                ? "nav-link-active"
                : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/band-members"
              className={
                window.location.pathname === "/band-members" ? "nav-link-active" : "nav-link"
              }
            >
              Band Members
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;