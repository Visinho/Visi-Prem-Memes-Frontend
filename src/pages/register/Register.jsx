import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Visi-Prem-Memes</h3>
          <span className="loginDesc">
            Ready to unlock the comedy vault? Register now and let the laughter
            begin!
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username..." className="loginInput" />
            <input placeholder="Email..." className="loginInput" />
            <input placeholder="Password..." className="loginInput" />
            <input placeholder="Password Again..." className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <span className="loginForgot">
              Already a member of the cruise party??? Sign in and let's make some
              waves of laughter! <b className="loginForgotPassword">Sign In</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
