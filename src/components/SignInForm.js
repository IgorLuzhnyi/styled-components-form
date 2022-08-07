import { StyledForm } from "./styles/StyledForm";
import { Link } from "react-router-dom";
import { validationFields } from "../constants/constants";
import { useEffect, useState } from "react";
import padlock from "../padlock.png";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const [rememberMe, setRememberMe] = useState(false);
  const [allowed, setAllowed] = useState("none");

  const checkColorField = (e) =>
    validationFields[e.target.classList[0]].test(e.target.value)
      ? (e.target.closest(".input-wrapper").style.border = "2px solid green")
      : (e.target.closest(".input-wrapper").style.border = "2px solid red");

  const checkAuthorisation = () => {
    if (validationFields.email.test(email) && validationFields.pw.test(pw)) {
      setAllowed("auto");
    } else {
      setAllowed("none");
    }
  };

  const storageData = JSON.parse(localStorage.getItem("user"));

  const removeData = () => !rememberMe && localStorage.clear();

  useEffect(() => {
    document.title = "Log in";
    if (storageData) {
      setEmail(storageData.email);
      setPw(storageData.pw);
    }
    checkAuthorisation();
  }, [email, pw, allowed]);

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
          <input
            type="checkbox"
            className="remember_me"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <p>Remember me</p>
        </div>
        <Link
          to="/home"
          className="sign-in-btn"
          style={{ pointerEvents: allowed }}
          onClick={removeData}
        >
          SIGN IN
        </Link>
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
