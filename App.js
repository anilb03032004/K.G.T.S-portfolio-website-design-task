import React from "react";
import "./Home.css";
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Contact from "./Contact";
import Project from "./Project";
import Skill from "./Skill";
import Home from "./Home";




function App() {
  
  return (
    <Router>
    <div>
      <header>
        <h1>Happy Coding</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Skill">Skills</Link>
            </li>
            <li>
              <Link to="/Project">Projects</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skill" element={<Skill />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

        <div className="last-block">
          <p className="contact-detail-social-media">Social Media Handles</p>
          <nav>
            <ul id="social-handles">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
