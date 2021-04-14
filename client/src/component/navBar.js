import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="#" className="navbar-brand">
          ExerTracker
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link">
              Exercises
            </Link>
            <Link to="/create" className="nav-item nav-link">
              Create-Exercise-Log
            </Link>
            <Link to="/user" className="nav-item nav-link">
              Create-User
            </Link>
            <Link className="nav-item nav-link disabled" to="#" tabIndex="-1">
              Disabled
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
