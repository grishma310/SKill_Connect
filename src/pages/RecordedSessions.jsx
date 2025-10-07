import React, { useState } from "react";
import "../styles/features.css";

const recordedData = [
  { title: "React Hooks", link: "https://www.youtube.com/embed/f687hBjwFcM" },
  { title: "ML Basics", link: "https://www.youtube.com/embed/GwIo3gDZCVQ" },
  { title: "NodeJS API Tutorial", link: "https://www.youtube.com/embed/L72fhGm1tfE" },
  { title: "Advanced Python", link: "https://www.youtube.com/embed/HGOBQPFzWKo" },
  { title: "JavaScript ES6+", link: "https://www.youtube.com/embed/NCwa_xi0Uuc" },
  { title: "Database Design", link: "https://www.youtube.com/embed/OqjJjpjDRLc" },
];

function RecordedSessions() {
  const [videos] = useState(recordedData);
  const [activeVideo, setActiveVideo] = useState(null);

  const watchVideo = (video) => {
    setActiveVideo(video); // show the video player
  };

  return (
    <div className="features-page">
      <h1>🎥 Recorded Sessions</h1>

      {/* Video Player */}
      {activeVideo && (
        <div className="video-player">
          <h2>{activeVideo.title}</h2>
          <iframe
            width="800"
            height="450"
            src={activeVideo.link}
            title={activeVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <br />
          <button onClick={() => setActiveVideo(null)}>❌ Close Video</button>
        </div>
      )}

      {/* Session Grid */}
      <div className="features-grid">
        {videos.map((v, idx) => (
          <div key={idx} className="feature-card">
            <h3>{v.title}</h3>
            <button onClick={() => watchVideo(v)}>Watch Video</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecordedSessions;
