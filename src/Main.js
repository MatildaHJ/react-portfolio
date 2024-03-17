import React from "react";
import Portfolio from "./Portfolio";
import "./Main.css";

export default function Main() {
  return (
    <div className="Main">
      <section className="grid grid-2-columns">
        <div className="border-section-img"></div>
        <div className="border-section">
          <h2>SKILLS</h2>
          <p>
            During my studies I've learned HTML, CSS, JavaScript & React. We've
            studied different techniques on how to make a website/app
            responsive, how to use Bootstrap, make API-calls and incorporate
            plug-ins. We also hade a mini course in AI and on the side I've
            developed some skills in Figma. I'm cool with Wordpress and
            currently getting familiar with Next.js.
          </p>
          <div className="icons">
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-css3-alt"></i>
            <i className="fa-brands fa-js"></i>
            <i className="fa-brands fa-react"></i>
            <i className="fa-brands fa-bootstrap"></i>
            <i className="fa-brands fa-figma"></i>
            <i className="fa-brands fa-wordpress-simple"></i>
          </div>
        </div>
      </section>
      <Portfolio />
    </div>
  );
}
