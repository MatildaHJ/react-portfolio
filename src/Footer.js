import React from "react";
import "./styles/Footer.css";
import MLLogo from "./assets/images/ML-logo.png";
import MatildaLarssonResume from "./assets/MatildaLarssonResume.pdf";

export default function Footer({ isNight }) {
  return (
    <div
      className="Footer px-10 py-38 text-sm"
      style={{ backgroundColor: isNight ? "#211b23" : "#665D68" }}
    >
      <footer className="grid grid-cols-2 gap-20 uppercase">
        <div>
          <img src={MLLogo} alt="logo" className="mb-2" width="130px" />
          <p className="mb-0 text-left">
            16751 Bromma
            <br />
            <a
              className="email-link"
              href="mailto:matilda.hj.larsson@gmail.com"
            >
              matilda.hj.larsson@gmail.com
            </a>
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
        <div className="mt-7">
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
