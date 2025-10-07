import React from "react";
import "../styles/features.css";

const topics = [
  "ReactJS Queries",
  "Machine Learning Basics",
  "NodeJS Tips",
  "Frontend Design Patterns",
];

function Discussion() {
  const openForum = (topic) => {
    alert(`Opening forum for: ${topic}`);
  };

  return (
    <div className="features-page">
      <h1>💬 Discussion Forums</h1>
      <div className="features-grid">
        {topics.map((t, idx) => (
          <div key={idx} className="feature-card">
            <h3>{t}</h3>
            <button onClick={() => openForum(t)}>Open Forum</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discussion;
