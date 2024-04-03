import React from "react";
import "./Footer.css";
import MLLogo from "./images/ML-logo.png";

export default function Footer({ isNight }) {
  return (
    <div
      className="Footer"
      style={{ backgroundColor: isNight ? "#211b23" : "#665D68" }}
    >
      <footer className="grid grid-2-columns">
        <div>
          <img src={MLLogo} alt="logo" className="mlLogoSmall" />
          <p className="footer-text">
            16751 Bromma
            <br />
            matilda.hj.larsson@gmail.com
            <br />
            <br />
            <strong>Open résumé</strong>
          </p>
        </div>
        <div>
          <small className="footer-right">
            <a
              href="https://github.com/MatildaHJ/react-portfolio"
              className="gitLink"
              target="_blank"
              rel="noreferrer"
            >
              Open this code on GitHub
            </a>
          </small>
        </div>
      </footer>
    </div>
  );
}
