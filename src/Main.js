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
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3-alt"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-react"></i>
            <i className="fab fa-bootstrap"></i>
            <i className="fab fa-figma"></i>
            <i className="fab fa-wordpress-simple"></i>
          </div>
        </div>
      </section>
      <Portfolio id="portfolio" />
    </div>
  );
}
