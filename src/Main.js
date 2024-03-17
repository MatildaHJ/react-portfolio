import React from "react";
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
            src="./images/react-weather.png"
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
            •
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
          <img
            src="src/images/AI-project.png"
            alt="AI project"
            className="project-img"
          />
          <div className="project-links">
            <a
              href="https://movie-quote-generator.netlify.app/"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              Launch website
            </a>{" "}
            •
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
          <img
            src="src/images/shp-projects.png"
            alt="Shiny Happy People"
            width="400px"
            className="project-img"
          />
          <div className="project-links">
            <a
              href="https://shinyhappypeople.se/"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              Launch website
            </a>{" "}
            •
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
      <section className="grid grid-4-columns">
        <div className="border-section-4">
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
            •
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
        <div className="border-section-4">
          <h2>Vanilla JS weather app</h2>
          <p>This project was done as a part of SheCodes React workshop</p>

          <div className="project-links">
            <a
              href="https://reliable-weather.netlify.app/"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              Launch website
            </a>{" "}
            •
            <a
              href="https://github.com/MatildaHJ/vanilla-weather-app"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              Open on github
            </a>
          </div>
        </div>
        <div className="border-section-4">
          <h2>World Clock</h2>
          <p>This project was done as a part of SheCodes React workshop</p>
          <div className="project-links">
            <a
              href="https://reliable-world-clock.netlify.app/"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              Launch website
            </a>{" "}
            •
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
        <div className="border-section-4">
          <h2>Responsive travel website</h2>
          <p>This project was done as a part of SheCodes React workshop</p>
          <div className="project-links">
            <a
              href="https://galapagosislands.netlify.app/"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              Launch website
            </a>{" "}
            •
            <a
              href="https://github.com/MatildaHJ/responsive-travel-project"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              Open on github
            </a>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="border-section">
          <h3>Let's work together!</h3>
          <p>Send me a message and I'll get back to you asap</p>
          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control no-background"
                id="emailInput"
                placeholder="Enter your email here"
                fdprocessedid="5rahu7"
              />
              <label htmlFor="emailInput">Email</label>
            </div>
            <div className="form-group">
              <input
                type="name"
                className="form-control no-background"
                id="nameInput"
                placeholder="Enter your name here"
                fdprocessedid="vn5tda"
              />
              <label htmlFor="nameInput">Name</label>
            </div>
            <div className="form-group">
              <textarea
                className="form-control no-background"
                id="messageInput"
                rows="8"
                placeholder="Write your message here"
              ></textarea>
              <label htmlFor="messageInput">Message</label>
            </div>
            <div>
              <button type="submit" className="btn" fdprocessedid="svevfm">
                Send
              </button>
            </div>
          </form>
          <br />
          <h3>Find me on my socials</h3>
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/matilda-larsson-0176a3289/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin fa-2xl"></i>
            </a>
            <a
              href="https://github.com/MatildaHJ"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-square-github fa-2xl"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
