import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Visi-Prem-Memes</h3>
          <span className="loginDesc">
            Where your humor credentials come to life! Let's get giggling!
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email..." className="loginInput" />
            <input placeholder="Password..." className="loginInput" />
            <button className="loginButton">Log in</button>
            <span className="loginForgot">
              Password's playing hide and seek with you? No worries, we gat you
              covered! <b className="loginForgotPassword">Click Here</b>
            </span>
            <button className="loginRegisterButton">Join the laughter parade! 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
