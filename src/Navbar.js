import React from "react";
import { Link } from "react-router-dom";
import MLLogo from "./assets/images/ML-logo.png";
import "./styles/Navbar.css";

export default function Navbar({ isNight }) {
  return (
    <div className={`Navbar ${isNight ? "navbar-night" : "navbar-day"}`}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top ">
        <div className="container-fluid">
          <a className="navbar-brand" href="../public/index.html">
            <img src={MLLogo} alt="logo" className="mlLogo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div
            className={`collapse navbar-collapse justify-content-end ${
              isNight ? "navbar-night-collapse" : "navbar-day-collapse"
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/portfolio"
                >
                  PROJECTS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
