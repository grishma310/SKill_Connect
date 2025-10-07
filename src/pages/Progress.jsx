import React, { useState } from "react";
import "../styles/features.css";

const progressData = [
  { skill: "ReactJS", completed: 40 },
  { skill: "Python ML", completed: 60 },
  { skill: "NodeJS", completed: 25 },
];

function Progress() {
  const [progress] = useState(progressData);

  return (
    <div className="features-page">
      <h1>📊 Progress Tracking</h1>
      <div className="features-grid">
        {progress.map((p, idx) => (
          <div key={idx} className="feature-card">
            <h3>{p.skill}</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${p.completed}%` }}></div>
            </div>
            <p>{p.completed}% Completed</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Progress;
