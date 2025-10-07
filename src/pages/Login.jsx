import React, { useState } from "react";
import "../styles/login.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-page">
      <div className="container">
        {isLogin ? (
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
              Don't have an account? <span onClick={() => setIsLogin(false)}>Sign up</span>
            </p>
          </div>
        ) : (
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
              Already have an account? <span onClick={() => setIsLogin(true)}>Login</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
