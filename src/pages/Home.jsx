import "../styles/home.css";
import Header from "../components/Header";
function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to SkillConnect</h1>
        <p>
          Learn, share, and connect with others through live classes, recorded
          sessions, and handwritten notes.
        </p>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature-card">
          <h3>🔴 Live Sessions</h3>
          <p>
            Join real-time interactive classes and connect with mentors and
            peers instantly.
          </p>
        </div>
        <div className="feature-card">
          <h3>🎥 Recorded Sessions</h3>
          <p>
            Access previously recorded lessons anytime and learn at your own
            pace.
          </p>
        </div>
        <div className="feature-card">
          <h3>📝 Handwritten Notes</h3>
          <p>
            Share and download detailed handwritten notes for better
            understanding.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 SkillConnect | All Rights Reserved</p>
      </footer>
    </>
  );
}

export default Home;
