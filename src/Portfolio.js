import React from "react";

import "./Portfolio.css";
import bookIcon from "./images/bookIcon.png";

export default function Portfolio({ isNight }) {
  return (
    <div className="Portfolio">
      <section id="portfolio">
        <div className="border-section">
          <h2>PORTFOLIO</h2>
          <p>
            Below are some of the project I've been working on lately. I also
            have some exciting and fun things coming up. Both professionaly and
            just for practice. I was just hired by a restaurat to build a merch
            web shop for them, and re-build a website for a retail/PR agency.
          </p>
        </div>
      </section>
      <section className="grid grid-2-columns">
        <div className="border-section">
          <h2>Portfolio: React Weather app</h2>
          <div className="text-block">
            <p>
              A weather app with real-time weather data, icons and forecast data
              from any city around the world. It was done as a part of SheCodes
              React workshop.
            </p>
          </div>
          <a
            href="https://reliable-react-weather.netlify.app/"
            className="project-link"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img src={bookIcon} alt="Book Icon" className="project-icon" />
          </a>
          <div className="project-links">
            <button
              style={{ backgroundColor: isNight ? "#665D68" : "#211b23" }}
            >
              <a
                href="https://reliable-react-weather.netlify.app/"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                Launch website
              </a>
            </button>
            <button
              style={{ backgroundColor: isNight ? "#665D68" : "#211b23" }}
            >
              <a
                href="https://github.com/MatildaHJ/weather-react"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                Open on github
              </a>
            </button>
          </div>
        </div>
        <div className="border-section">
          <h2>Portfolio: React Dictionary</h2>
          <div className="text-block">
            <p>
              Word search dictionary with meanings, phonetics, synonyms and
              images. Done as part of the React Add-on workshop. I got to
              practice all I learned of the first React course and also add some
              new tricks.
            </p>
          </div>
          <a
            href="https://reliable-dictionary.netlify.app/"
            className="project-link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={bookIcon} alt="Book Icon" className="project-icon" />
          </a>
          <div className="project-links">
            <button
              style={{ backgroundColor: isNight ? "#665D68" : "#211b23" }}
            >
              <a
                href="https://reliable-dictionary.netlify.app/"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                Launch website
              </a>
            </button>
            <button
              style={{ backgroundColor: isNight ? "#665D68" : "#211b23" }}
            >
              <a
                href="https://github.com/MatildaHJ/dictionary-react"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                Open on github
              </a>
            </button>
          </div>
        </div>
      </section>
      <section className="grid grid-2-columns">
        <div className="border-section">
          <h2>Portfolio: Shiny Happy People</h2>
          <div className="text-block">
            <p>
              I was hired to build the website for the marketing/concept agency
              Shiny Happy People. .................. Client was very pleased
              with the result too which was cool.
            </p>
          </div>
          <a
            href="https://shinyhappypeople.se/"
            className="project-link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={bookIcon} alt="Book Icon" className="project-icon" />
          </a>
          <div className="project-links">
            <button
              style={{ backgroundColor: isNight ? "#665D68" : "#211b23" }}
            >
              <a
                href="https://shinyhappypeople.se/"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                Launch website
              </a>
            </button>
            <button
              style={{ backgroundColor: isNight ? "#665D68" : "#211b23" }}
            >
              <a
                href="https://github.com/MatildaHJ/shiny-happy-people"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                Open on github
              </a>
            </button>
          </div>
        </div>
        <div className="border-section">
          <h2>AI movie quote generator</h2>
          <div className="text-block">
            <p>
              An AI companion that gives you movie quotes from any move you'd
              like. Made this as a project for my AI-programming workshop.
            </p>
          </div>
          <a
            href="https://movie-quote-generator.netlify.app/"
            className="project-link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={bookIcon} alt="Book Icon" className="project-icon" />
          </a>
          <div className="project-links">
            <button
              style={{ backgroundColor: isNight ? "#665D68" : "#211b23" }}
            >
              <a
                href="https://movie-quote-generator.netlify.app/"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                Launch website
              </a>
            </button>
            <button
              style={{ backgroundColor: isNight ? "#665D68" : "#211b23" }}
            >
              <a
                href="https://github.com/MatildaHJ/movie-quote-generator"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                Open on github
              </a>
            </button>
          </div>
        </div>
      </section>
      <section className="grid grid-2-columns">
        <div className="border-section">
          <h2>World Clock</h2>
          <div className="text-block">
            <p>
              Played with time and built a world clock using Javascript. This
              project was done as a part of SheCodes Plus add-on workshop
            </p>
          </div>

          <a
            href="https://reliable-world-clock.netlify.app/"
            className="project-link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={bookIcon} alt="Book Icon" className="project-icon" />
          </a>
          <div className="project-links">
            <button
              style={{ backgroundColor: isNight ? "#665D68" : "#211b23" }}
            >
              <a
                href="https://reliable-world-clock.netlify.app/"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                Launch website
              </a>
            </button>
            <button
              style={{ backgroundColor: isNight ? "#665D68" : "#211b23" }}
            >
              <a
                href="https://github.com/MatildaHJ/world-clock"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                Open on github
              </a>
            </button>
          </div>
        </div>
        <div className="border-section">
          <h2>More to come...</h2>
        </div>
      </section>
    </div>
  );
}
