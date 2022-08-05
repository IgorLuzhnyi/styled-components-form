import { StyledForm } from "./styles/StyledForm";
import { Link } from "react-router-dom";
import padlock from "../padlock.png";
import { useState } from "react";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  return (
    <StyledForm>
      <form>
        <div className="icon-container">
          <img src={padlock} className="icon-main" alt="main-icon" />
        </div>
        <h2>Sign in</h2>
        <div className="user-creds">
          <div className="input-wrapper">
            <input
              type="text"
              className="user-email"
              placeholder="Email Address *"
            />
          </div>
          <div className="input-wrapper">
            <input type="text" className="user-pw" placeholder="Password *" />
          </div>
        </div>
        <div className="remember-container">
          <input type="checkbox" className="remember_me" />
          <p>Remember me</p>
        </div>
        <button className="sign-in-btn">SIGN IN</button>
        <div className="form-additional">
          <p className="form-link">Forgot Password?</p>
          <Link to="/register" className="form-link">
            Don't have an account? Sign up
          </Link>
        </div>
        <p className="form-copyright">Copyright © Website 2022.</p>
      </form>
    </StyledForm>
  );
};

export default SignInForm;
