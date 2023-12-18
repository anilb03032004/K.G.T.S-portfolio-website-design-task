import React from 'react';
import './Home.css';

const Project = () => {
  return (
    <div>
      
      <div>
        <p id="project-paragraph">
          Working on web development without projects is wortless. Projects not only validate theoretical knowledge but serve as the proving ground where skills are refined and lessons are learned
          <br />Have a glance at the projects that I have worked on:
        </p>
      </div>
      <div className="bottom">
        <ul id="projects">
          <li>
            <a href="">Project-1</a>
          </li>
          <li>
            <a href="">Project-2</a>
          </li>
          <li>
            <a href="">Project-3</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
