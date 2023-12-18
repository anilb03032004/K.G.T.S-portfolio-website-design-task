import React from 'react';
import './Home'; // Assuming your CSS file is in the same directory

const Skill = () => {
  return (
    <div>
      
      <main>
        <div id="container">
          <img src="/images/mylogo.jpg" alt="logo" className="img-para" />
          <p>
            In the journey of web development, I learned the necessary skills to solve real-world problems, gaining a comprehensive understanding of the tools and technologies essential for creating effective solutions.
          </p>
        </div>
        <div className="bottom">
          <span>
            <em>HTML</em>
          </span>
          <span>
            <em>CSS</em>
          </span>
          <span>
            <em>JAVASCRIPT</em>
          </span>
        </div>
      </main>
    </div>
  );
};

export default Skill;