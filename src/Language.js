import React from "react";
import "./Language.css";
import swedishFlag from "./images/swedishFlag.png";
import englishFlag from "./images/englishFlag.png";

export default function Language() {
  return (
    <div className="Language">
      <a>
        <img src={swedishFlag} alt="Swedish flag" />
      </a>
      <a>
        <img src={englishFlag} alt="Union Jack" />
      </a>
    </div>
  );
}
