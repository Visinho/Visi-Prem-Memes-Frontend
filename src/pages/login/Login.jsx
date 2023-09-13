import React, {useRef} from "react";
import "./login.css";

const Login = () => {
  const email = useRef();
  const password = useRef();

  const handleclick = (e) => {
    e.preventDefault();
    alert("Clicked!")
  }

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
            <input placeholder="Email..." type="email" className="loginInput" ref={email} required/>
            <input placeholder="Password..." type="password" className="loginInput" ref={password} required minLength={6}/>
            <button className="loginButton">Log in</button>
            <span className="loginForgot">
              Password's playing hide and seek with you? No worries, we gat you
              covered! <b className="loginForgotPassword">Click Here</b>
            </span>
            <button className="loginRegisterButton">Join the laughter parade! 
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
