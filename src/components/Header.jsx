import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // optional CSS file for styling

function Header() {
  return (
    <header className="navbar">
      <div className="logo">SkillConnect</div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/marketplace">Marketplace</Link>
        <Link to="/matches">Matches</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/calendar">Calendar</Link>
      </nav>
    </header>
  );
}

export default Header;
