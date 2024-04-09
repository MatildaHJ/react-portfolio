import React from "react";
import MLLogo from "./images/ML-logo.png";
import "./Navbar.css";

export default function Navbar({ isNight }) {
  return (
    <div className={`Navbar ${isNight ? "navbar-day" : "navbar-night"}`}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
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
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="./Main.js#portfolio"
                >
                  PROJECTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./Main.js#about">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./Main.js#contact">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
