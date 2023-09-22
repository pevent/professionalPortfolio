import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div className="skill">
      <div className="skill-item">
          <h1>Skills</h1>
        <div className="skill-grid">
          <div className="skill-card">
            <h2>Programming Languages</h2>
            <ul className="skill-list">
              <li>Python</li>
              <li>Java</li>
              <li>PHP</li>
              <li>SQL</li>
              <li>NoSQL</li>
              <li>C</li>
              <li>C++</li>
              <li>JavaScript</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="skill-card">
            <h2>Technologies/Tools</h2>
            <ul className="skill-list">
              <li>Git</li>
              <li>Docker</li>
              <li>React</li>
              <li>MongoDB</li>
              <li>Laravel</li>
              <li>Vue.js</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;