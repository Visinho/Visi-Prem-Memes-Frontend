import React, { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleclick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);

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
          <form className="loginBox" onSubmit={handleclick}>
            <input
              placeholder="Email..."
              type="email"
              className="loginInput"
              ref={email}
              required
            />
            <input
              placeholder="Password..."
              type="password"
              className="loginInput"
              ref={password}
              required
              minLength={6}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress style={{color: "white"}} size={20} />
              ) : (
                "Log in"
              )}
            </button>
            <span className="loginForgot">
              Password's playing hide and seek with you? No worries, we gat you
              covered! <b className="loginForgotPassword">Click Here</b>
            </span>
            <button className="loginRegisterButton">
            {isFetching ? (
                <CircularProgress style={{color: "white"}} size={20} />
              ) : (
                "Join the laughter parade!"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
