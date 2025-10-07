import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "../styles/profile.css";

function Profile() {
  const users = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    offered: "Web Development, JavaScript",
    wanted: "Machine Learning, Data Science",
    badges: "⭐ Mentor, 🏆 Top Contributor"
  }));

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookedSlots, setBookedSlots] = useState([]);

  const openModal = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const bookSlot = () => {
    const slot = selectedDate.toLocaleString();
    setBookedSlots([...bookedSlots, { user: selectedUser.name, slot }]);

    if (!window.confirm("Have you updated your system calendar? Click OK if yes, Cancel if not.")) {
      alert("Reminder: Please update your system calendar to avoid missing the booked slot!");
    } else {
      alert(`Slot booked successfully for ${selectedUser.name} at ${slot}`);
    }

    setModalOpen(false);
  };

  return (
    <div className="profile-grid">
      {users.map((user) => (
        <div key={user.id} className="profile-card">
          <img src={`https://i.pravatar.cc/150?img=${user.id}`} alt={user.name} />
          <h2>{user.name}</h2>
          <p><strong>Skills Offered:</strong> {user.offered}</p>
          <p><strong>Skills Wanted:</strong> {user.wanted}</p>
          <p><strong>Badges:</strong> {user.badges}</p>
          <button onClick={() => openModal(user)}>Book Slot</button>
        </div>
      ))}

      {/* Modal with Calendar */}
      {modalOpen && selectedUser && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Book Slot for {selectedUser.name}</h3>
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              minDate={new Date()}
            />
            <div className="modal-buttons">
              <button onClick={bookSlot}>Confirm Booking</button>
              <button className="close-btn" onClick={() => setModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Booked Slots List */}
      <div className="slots-list">
        <h3>Booked Slots:</h3>
        <ul>
          {bookedSlots.map((s, idx) => (
            <li key={idx}>{s.user}: {s.slot}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
