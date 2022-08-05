import { StyledForm } from "./styles/StyledForm";
import { Link } from "react-router-dom";
import { useState } from "react";
import padlock from "../padlock.png";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  return (
    <StyledForm>
      <form>
        <div className="icon-container">
          <img src={padlock} className="icon-main" alt="main-icon" />
        </div>
        <h2>Sign Up</h2>
        <div className="user-creds">
          <div className="fullname">
            <div className="input-wrapper">
              <input
                type="text"
                className="user-firstname"
                placeholder="First Name *"
              />
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                className="user-lastname"
                placeholder="Last Name *"
              />
            </div>
          </div>
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
          <p>
            I want to receive inspiration, marketing promotions and updates via
            email.
          </p>
        </div>
        <button className="sign-in-btn">SIGN UP</button>
        <div className="form-additional">
          <Link to="/" className="form-link reg-additional">
            Already have an account? Sign in
          </Link>
        </div>
        <p className="form-copyright">Copyright © Website 2022.</p>
      </form>
    </StyledForm>
  );
};

export default RegisterForm;
