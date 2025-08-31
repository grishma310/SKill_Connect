import "../styles/profile.css";
import Header from "../components/Header";
v
function Profile() {
  return (
    <section className="profile">
      <div className="profile-card">
        <img src="https://via.placeholder.com/150" alt="User" />
        <h2>John Doe</h2>
        <p>
          <strong>Skills Offered:</strong> Web Development, JavaScript
        </p>
        <p>
          <strong>Skills Wanted:</strong> Machine Learning, Data Science
        </p>
        <p>
          <strong>Badges:</strong> ⭐ Mentor, 🏆 Top Contributor
        </p>
        <button>Edit Profile</button>
      </div>
    </section>
  );
}

export default Profile;
