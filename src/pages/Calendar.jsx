import React, { useState } from "react";
import "../styles/calendar.css";

function Calendar() {
  const [slots, setSlots] = useState([
    { time: "10:00 AM - 11:00 AM", booked: false },
    { time: "12:00 PM - 1:00 PM", booked: false },
    { time: "3:00 PM - 4:00 PM", booked: false },
    { time: "5:00 PM - 6:00 PM", booked: false },
  ]);

  const [calendarUpdated, setCalendarUpdated] = useState(false);

  const bookSlot = (index) => {
    if (!calendarUpdated) {
      alert("⚠️ Please update your calendar in the system before booking!");
      return;
    }

    if (slots[index].booked) {
      alert("This slot is already booked!");
      return;
    }

    setSlots((prev) =>
      prev.map((slot, i) =>
        i === index ? { ...slot, booked: true } : slot
      )
    );
    alert(`✅ You have booked the slot: ${slots[index].time}`);
  };

  return (
    <div className="calendar-page">
      <h1>📅 Book a Slot</h1>
      <p>
        {calendarUpdated
          ? "You have updated your calendar."
          : "⚠️ You haven't updated your calendar yet."}
      </p>
      <button onClick={() => setCalendarUpdated(true)} className="update-btn">
        Update Calendar
      </button>

      <div className="slots">
        {slots.map((slot, idx) => (
          <div
            key={idx}
            className={`slot-card ${slot.booked ? "booked" : ""}`}
            onClick={() => bookSlot(idx)}
          >
            <p>{slot.time}</p>
            <p>{slot.booked ? "✅ Booked" : "Available"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
