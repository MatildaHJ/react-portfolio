import React, { useState } from "react";
import Theme from "./Theme";
import "./Footer.css";
import MLLogo from "./images/ML-logo.png";

export default function Footer() {
  const [bgColor, setBgColor] = useState("#211b23");

  const handleColorChange = () => {
    const newColor = bgColor === "#211b23" ? "#665D68" : "#211b23";
    setBgColor(newColor);
  };

  return (
    <div className="Footer" style={{ backgroundColor: bgColor }}>
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
          <p className="footer-text footer-right change-theme">
            Change theme:
            <span>
              <Theme onColorChange={handleColorChange} />
            </span>
          </p>
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
