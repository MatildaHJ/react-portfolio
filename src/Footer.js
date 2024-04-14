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
        <div className="footer-right">
          <div className="contact-icons">
            <a
              href="https://www.linkedin.com/in/matilda-larsson-0176a3289/"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa-brands fa-linkedin fa-2xl"
                style={{ color: isNight ? "#888" : "#ffff" }}
              ></i>
            </a>
            <a
              href="https://github.com/MatildaHJ"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa-brands fa-square-github fa-2xl"
                style={{ color: isNight ? "#888" : "#ffff" }}
              ></i>
            </a>
          </div>
          <div className="git">
            <a
              href="https://github.com/MatildaHJ/react-portfolio"
              className="git-link"
              target="_blank"
              rel="noreferrer"
            >
              Open this website on GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
