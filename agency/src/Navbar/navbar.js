import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav-main">
      <nav className="navbar navbar-expand-lg  nav-bg-c">
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">
            WeForBrands
          </Link> */}
          <Link className="navbar-brand" to="/">
            <img
              src="./assets/images/logo-1.png"
              alt="feature banner"
              style={{ maxWidth: "116px" }}
            />
          </Link>

          <button
            className="navbar-toggler"
            style={{ backgroundColor: "yellow !important" }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{ backgroundColor: "yellow !important" }}
            ></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNavDropdown"
            style={{ marginLeft: "680px" }}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/industries">
                  Industries
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <button type="button" className="custom-btn">
                    Contact Us
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
