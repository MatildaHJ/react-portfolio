import React from "react";

export default function ProjectCard({
  isNight,
  title,
  description,
  websiteUrl,
  imgUrl,
  githubUrl,
}) {
  return (
    <div className="border-section">
      <h2>{title}</h2>
      <div className="text-block">
        <p>{description}</p>
      </div>
      <a
        href={websiteUrl}
        className="project-link"
        target="_blank"
        rel="noreferrer"
      >
        <img src={imgUrl} alt="Project Icon" className="project-icon" />
      </a>
      <div className="project-links">
        <button style={{ backgroundColor: isNight ? "#211b23" : "#665D68" }}>
          <a
            href={websiteUrl}
            className="project-link"
            target="_blank"
            rel="noreferrer"
          >
            Launch website
          </a>
        </button>
        <button style={{ backgroundColor: isNight ? "#211b23" : "#665D68" }}>
          <a
            href={githubUrl}
            className="project-link"
            target="_blank"
            rel="noreferrer"
          >
            Open on github
          </a>
        </button>
      </div>
    </div>
  );
}
