import React from "react";
import "./Project.scss";

export default function Projects() {
  return (
    <div className="main" id="projects">
      <p className="subTitle project-subtitle"></p>

      <a
        href="https://github.com/n1yxz?tab=repositories"
        className="more-projects-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        MORE PROJECTS
      </a>

      {/* Removed duplicate Button */}
    </div>
  );
}
