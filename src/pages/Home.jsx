import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

function Home() {
  const navigate = useNavigate();

  const features = [
    { title: "🔴 Live Sessions", desc: "Join real-time interactive classes with mentors and peers.", path: "/live" },
    { title: "🎥 Recorded Sessions", desc: "Access previous lessons anytime and learn at your own pace.", path: "/recorded" },
    { title: "📝 Notes Sharing", desc: "Share and download detailed notes for better understanding.", path: "/notes" },
    { title: "💬 Discussion Forms", desc: "Connect with learners and mentors in topic-specific forums.", path: "/discussion" },
    { title: "📊 Progress Tracking", desc: "Monitor your learning progress and achievements.", path: "/progress" },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to SkillConnect</h1>
        <p>Learn, share, and connect through live classes, recordings, notes, and mentorship.</p>
      </section>

      {/* Features Section */}
      <section className="features">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="feature-card clickable"
            onClick={() => navigate(f.path)}
          >
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
