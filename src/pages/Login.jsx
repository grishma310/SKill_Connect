import React, { useState } from "react";
import "./Login.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const showSignup = () => setIsLogin(false);
  const showLogin = () => setIsLogin(true);

  return (
    <div className="container">
      {/* Login Form */}
      {isLogin && (
        <div className="form-box active">
          <h2>Login</h2>
          <form>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit" className="btn">Login</button>
          </form>
          <p className="toggle-text">
            Don't have an account? <span onClick={showSignup}>Sign up</span>
          </p>
        </div>
      )}

      {/* Signup Form */}
      {!isLogin && (
        <div className="form-box active">
          <h2>Register</h2>
          <form>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit" className="btn">Register</button>
          </form>
          <p className="toggle-text">
            Already have an account? <span onClick={showLogin}>Login</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
