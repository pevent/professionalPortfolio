import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div className="Skills">
      <div className="Skill-card">
        <h2>Programming Languages</h2>
        <ul className="Skill-list">
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
      <div className="Skill-card">
        <h2>Technologies/Tools</h2>
        <ul className="Skill-list">
          <li>Git</li>
          <li>Docker</li>
          <li>Reactjs</li>
          <li>MongoDB</li>
          <li>Laravel</li>
          <li>Vue.js</li>
          <li>Node.js</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;