import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar/Header always visible */}
        <header className="navbar" style={{ backgroundColor: "#2563eb", padding: "1rem" }}>
          <div className="logo" style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>
            SkillConnect
          </div>
          <nav>
            <Link to="/home" style={{ color: "white", margin: "0 10px" }}>Home</Link>
            <Link to="/profile" style={{ color: "white", margin: "0 10px" }}>Profile</Link>
            <Link to="/login" style={{ color: "white", margin: "0 10px" }}>Login</Link>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
