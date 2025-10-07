import React, { useState } from "react";
import "../styles/features.css";

const sessionsData = [
  { id: 1, title: "React Basics", instructor: "Alice", time: "10:00 AM" },
  { id: 2, title: "Python for ML", instructor: "Bob", time: "12:00 PM" },
  { id: 3, title: "NodeJS Crash Course", instructor: "Charlie", time: "2:00 PM" },
  { id: 4, title: "Data Structures in Java", instructor: "David", time: "4:00 PM" },
  { id: 5, title: "SQL for Beginners", instructor: "Eva", time: "6:00 PM" },
  { id: 6, title: "AI with TensorFlow", instructor: "Frank", time: "8:00 PM" },
  { id: 7, title: "Web Security Essentials", instructor: "Grace", time: "9:30 PM" },
  { id: 8, title: "Cloud Computing Basics", instructor: "Henry", time: "11:00 PM" },
];

function LiveSessions() {
  const [sessions] = useState(sessionsData);
  const [activeSession, setActiveSession] = useState(null);

  const joinSession = (session) => {
    setActiveSession(session);
  };

  const leaveSession = () => {
    setActiveSession(null);
  };

  return (
    <div className="features-page">
      <h1>🔴 Live Sessions</h1>

      {activeSession ? (
        <div className="video-environment">
          <div className="video-screen">
            <p>📺 {activeSession.title} - Live Video Session</p>
          </div>

          <div className="session-info">
            <h2>{activeSession.title}</h2>
            <p><strong>Instructor:</strong> {activeSession.instructor}</p>
            <p><strong>Time:</strong> {activeSession.time}</p>
          </div>

          <div className="chat-box">
            <p><strong>{activeSession.instructor}:</strong> Welcome to the session!</p>
            <p><strong>You:</strong> Hi, excited to join 🚀</p>
          </div>

          <div className="video-controls">
            <button className="control-btn">🎤 Mute</button>
            <button className="control-btn">📷 Camera</button>
            <button className="leave-btn" onClick={leaveSession}>❌ Leave</button>
          </div>
        </div>
      ) : (
        <div className="features-grid">
          {sessions.map((s) => (
            <div key={s.id} className="feature-card">
              <h3>{s.title}</h3>
              <p>Instructor: {s.instructor}</p>
              <p>Time: {s.time}</p>
              <button onClick={() => joinSession(s)}>Join Session</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LiveSessions;
