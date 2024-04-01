import React from "react";
import Contact from "./Contact";
import reactWeather from "./images/react-weather.png";
import shpImage from "./images/shp-projects.png";
import aiImage from "./images/AI-project.png";

import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <section id="portfolio">
        <div className="border-section">
          <h2>PORTFOLIO</h2>
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum Consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </div>
      </section>
      <section className="grid grid-2-columns">
        <div className="border-section">
          <h2>React Weather app</h2>
          <p>This project was done as a part of SheCodes React workshop</p>
          <img
            src={reactWeather}
            alt="React weather app"
            className="project-img"
          />
          <div className="project-links">
            <a
              href="https://reliable-react-weather.netlify.app/"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              Launch website
            </a>{" "}
            •{" "}
            <a
              href="https://github.com/MatildaHJ/weather-react"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              Open on github
            </a>
          </div>
        </div>
        <div className="border-section">
          <h2>AI movie quote generator</h2>
          <p>This project was done as a part of SheCodes AI workshop</p>
          <img src={aiImage} alt="AI project" className="project-img" />
          <div className="project-links">
            <a
              href="https://movie-quote-generator.netlify.app/"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              Launch website
            </a>{" "}
            •{" "}
            <a
              href="https://github.com/MatildaHJ/movie-quote-generator"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              Open on github
            </a>
          </div>
        </div>
      </section>
      <section className="grid">
        <div className="border-section">
          <h2>Shiny Happy People</h2>
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum Consectetur adipiscing elit, sed do eiusmod tempor
          </p>
          <a
            href="https://shinyhappypeople.se/"
            className="project-link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={shpImage}
              alt="Shiny Happy People"
              className="project-img"
            />
          </a>
          <div className="project-links">
            <a
              href="https://shinyhappypeople.se/"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              Launch website
            </a>{" "}
            •{" "}
            <a
              href="https://github.com/MatildaHJ/shiny-happy-people"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              Open on github
            </a>
          </div>
        </div>
      </section>
      <section className="grid grid-2-columns">
        <div className="border-section">
          <h2>React Dictionary</h2>
          <p>Under construction...</p>

          <div className="project-links">
            <a
              href="https://reliable-dictionary.netlify.app/"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              Launch website
            </a>{" "}
            •{" "}
            <a
              href="https://github.com/MatildaHJ/dictionary-react"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              Open on github
            </a>
          </div>
        </div>

        <div className="border-section">
          <h2>World Clock</h2>
          <p>
            This project was done as a part of SheCodes Plus add-on workshop
          </p>
          <div className="project-links">
            <a
              href="https://reliable-world-clock.netlify.app/"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              Launch website
            </a>{" "}
            •{" "}
            <a
              href="https://github.com/MatildaHJ/world-clock"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              Open on github
            </a>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}
