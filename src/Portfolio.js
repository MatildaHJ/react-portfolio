import React from "react";
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
            Below are some of the project I've been working on lately. I also
            have some exciting and fun things coming up. Both professionaly and
            just for practice. I was just hired by a restaurat to build a merch
            web shop for them, and re-build a website for a retail/PR agency.
          </p>
        </div>
      </section>
      <section className="grid grid-2-columns">
        <div className="border-section">
          <h2>React Weather app</h2>
          <p>
            A weather app with real-time weather data, icons and forecast data
            from any city around the world. It was done as a part of SheCodes
            React workshop.
          </p>
          <a
            href="https://reliable-react-weather.netlify.app/"
            className="project-link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={reactWeather}
              alt="React weather app"
              className="project-img"
            />
          </a>
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
          <h2>React Dictionary</h2>
          <p>
            Word search dictionary with meanings, phonetics, synonyms and
            images. Done as part of the React Add-on workshop. I got to practice
            all I learned of the first React course and also add some new
            tricks.
          </p>

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
      </section>
      <section className="grid">
        <div className="border-section">
          <h2>Shiny Happy People</h2>
          <p>
            My first professional freelance project. I was hired to build the
            website for the marketing/concept agency Shiny Happy People. This
            earned me SO much experience and insight on how it could be to
            actually work as a developer. I had a lot of fun and my relatively
            new found passion for coding sparked enormously. Client was very
            pleased with the result too which was cool.
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
          <h2>AI movie quote generator</h2>
          <p>
            An AI companion that gives you movie quotes from any move you'd
            like. Made this as a project for my AI-programming workshop.
          </p>{" "}
          <a
            href="https://movie-quote-generator.netlify.app/"
            className="project-link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={aiImage} alt="AI project" className="project-img" />
          </a>
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
        <div className="border-section">
          <h2>World Clock</h2>
          <p>
            Played with time and built a world clock using Javascript. This
            project was done as a part of SheCodes Plus add-on workshop
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
    </div>
  );
}
