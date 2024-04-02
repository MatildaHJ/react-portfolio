import React from "react";

import "./Theme.css";
import lightColor from "./images/lightColor.png";
import darkColor from "./images/darkColor.png";

export default function Theme({ onColorChange }) {
  return (
    <div className="Theme">
      <img
        src={lightColor}
        onClick={onColorChange}
        className="light-color"
        alt="Light color"
      />
      <img
        src={darkColor}
        onClick={onColorChange}
        className="dark-color"
        alt="Dark Color"
      />
    </div>
  );
}
