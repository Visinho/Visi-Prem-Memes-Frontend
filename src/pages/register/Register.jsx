import React from "react";
import "./register.css";
import { useRef } from "react";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    if(passwordAgain.current.value !== password.current.value){
      password.current.setCustomValidity("Passwords do not match!!!")
    }
  };

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
          <form onSubmit={handleClick} className="loginBox">
            <input
              placeholder="Username..."
              ref={username}
              className="loginInput"
              required
            />
            <input
              placeholder="Email..."
              ref={email}
              className="loginInput"
              required
              type="email"
            />
            <input
              placeholder="Password..."
              ref={password}
              className="loginInput"
              required
              type="password"
              minLength={6}
            />
            <input
              placeholder="Password Again..."
              ref={passwordAgain}
              className="loginInput"
              required
              type="password"
              minLength={6}
            />
            <button className="loginButton" type="submit">Sign Up</button>
            <span className="loginForgot">
              Already a member of the cruise party??? Sign in and let's make
              some waves of laughter!{" "}
              <b className="loginForgotPassword">Sign In</b>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
