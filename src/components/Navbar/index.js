import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
        The Collection
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/band-members"
              className="nav-link"
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