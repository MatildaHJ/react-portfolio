import React from "react";
import "./Footer.css";
import MLLogo from "./images/ML-logo.png";
import MatildaLarssonResume from "./MatildaLarssonResume.pdf";

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
            <a
              className="Resume-link"
              href={MatildaLarssonResume}
              target="_blank"
              rel="noreferrer"
            >
              Résumé
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
