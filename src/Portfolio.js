import React from "react";
import "./Portfolio.css";
import ProjectCard from "./ProjectCard";

import WeatherIcon from "./images/WeatherIcon.svg";
import bookIcon from "./images/bookIcon.png";
import shpLogo from "./images/shpLogo.svg";
import AIIcon from "./images/AIIcon.svg";
import clockIcon from "./images/clockIcon.svg";

export default function Portfolio({ isNight }) {
  const projects = [
    {
      title: "portfolio 1: React Weather app",
      description:
        "A weather app with real-time weather data, icons and forecast data from any city around the world. It was done as a part of SheCodes React workshop.",
      websiteUrl: "https://reliable-react-weather.netlify.app/",
      imgUrl: WeatherIcon,
      githubUrl: "https://github.com/MatildaHJ/weather-react",
    },
    {
      title: "Portfolio 2: React Dictionary",
      description:
        "Word search dictionary with meanings, phonetics, synonyms and images. Done as part of the React Add-on workshop. I got to practice all I learned of the first React course and also add some new tricks.",
      websiteUrl: "https://reliable-dictionary.netlify.app/",
      imgUrl: bookIcon,
      githubUrl: "https://github.com/MatildaHJ/dictionary-react",
    },
    {
      title: "Portfolio 3: Shiny Happy People",
      description:
        "I was hired to build the website for the concept agency Shiny Happy People. It was built with HTML5, CSS and vanilla JS. I really enjoyed this project and client was very pleased with the result which was cool.",
      websiteUrl: "https://reliable-dictionary.netlify.app/",
      imgUrl: shpLogo,
      githubUrl: "https://github.com/MatildaHJ/dictionary-react",
    },
    {
      title: "Portfolio 4: AI Movie quote generator",
      description:
        "An AI companion that gives you movie quotes from any move you'd like. Made this as a project for my AI-programming workshop. HTML5, CSS & Vanilla JS",
      websiteUrl: "https://reliable-dictionary.netlify.app/",
      imgUrl: AIIcon,
      githubUrl: "https://github.com/MatildaHJ/dictionary-react",
    },
    {
      title: "Portfolio 5: World clock",
      description:
        "  Played with time and built a world clock using Javascript. This project was done as a part of SheCodes Plus add-on workshop. HTML5, CSS & Vanilla JS.",
      websiteUrl: "https://reliable-dictionary.netlify.app/",
      imgUrl: clockIcon,
      githubUrl: "https://github.com/MatildaHJ/dictionary-react",
    },
  ];

  return (
    <div className="Portfolio">
      <section id="portfolio">
        <div className="border-section">
          <h2>PORTFOLIO</h2>
          <p>
            Below are some of the project I've been working on lately. I also
            have some exciting and fun things coming up. Both professionaly and
            just for practice. I was recently hired by a restaurat to build a
            merch web shop for them, and re-build a website for a retail/PR
            agency.
          </p>
        </div>
      </section>

      <section className="grid grid-2-columns">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            isNight={isNight}
            title={project.title}
            description={project.description}
            websiteUrl={project.websiteUrl}
            imgUrl={project.imgUrl}
            githubUrl={project.githubUrl}
          />
        ))}
        <div className="border-section more-frame">
          <h2>More to come...</h2>
        </div>
      </section>
    </div>
  );
}
