import { StyledForm } from "./StyledForm";
import { Link } from "react-router-dom";
import { validationFields } from "../../constants/constants";
import { useState, useEffect } from "react";
import padlock from "../../padlock.png";

const RegisterForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  // const [adAgree, setAdAgree] = useState(false);
  const [allowed, setAllowed] = useState("none");

  const checkColorField = (e) =>
    validationFields[e.target.classList[0]].test(e.target.value)
      ? (e.target.closest(".input-wrapper").style.border = "2px solid green")
      : (e.target.closest(".input-wrapper").style.border = "2px solid red");

  const checkValueFields = () =>
    validationFields.email.test(email) &&
    validationFields.pw.test(pw) &&
    validationFields.firstname.test(firstname) &&
    validationFields.lastname.test(lastname);

  const checkAuthorisation = () =>
    checkValueFields() ? setAllowed("auto") : setAllowed("none");

  const saveData = () => {
    localStorage.clear();
    const userData = {
      firstname,
      lastname,
      email,
      pw,
    };
    localStorage.setItem("user", JSON.stringify(userData));
  };

  useEffect(() => {
    document.title = "Register";
    checkAuthorisation();
  }, [email, pw, firstname, lastname, allowed]);

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
                className="firstname"
                placeholder="First Name *"
                value={firstname}
                onChange={(e) => {
                  checkColorField(e);
                  setFirstname(e.target.value);
                }}
              />
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                className="lastname"
                placeholder="Last Name *"
                value={lastname}
                onChange={(e) => {
                  checkColorField(e);
                  setLastname(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              className="email"
              placeholder="Email Address *"
              value={email}
              onChange={(e) => {
                checkColorField(e);
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              className="pw"
              placeholder="Password *"
              value={pw}
              onChange={(e) => {
                checkColorField(e);
                setPw(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="remember-container">
          <input type="checkbox" className="ad-agree" />
          <p>
            I want to receive inspiration, marketing promotions and updates via
            email.
          </p>
        </div>
        <Link
          to="/home"
          className="sign-up-btn"
          style={{ pointerEvents: allowed }}
          onClick={saveData}
        >
          SIGN UP
        </Link>
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
