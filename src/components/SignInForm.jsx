import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SignInForm.css";
import Love from "../assets/love.png";

const SignInForm = ({ onToggle, onClose }) => {
  // state variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showSignUp, setShowSignUp] = useState(false);

  // event handlers
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    console.log(`Signing in with email ${email} and password ${password}`);

    if (!email || !password) {
      setError("Email and password are required.");
    } else {
      setError(null);
    }
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    console.log(`Signing up with email ${email} and password ${password}`);
    // Add sign-up logic here
    setShowSignUp(true);
  };

  const handleForgetPassword = () => {
    console.log("Forgot password");
    // Add forgot password logic here
  };

  // render
  return (
    <div className="modal__content">
      <button className="cancel__btn sign-in" onClick={onClose}>
        X
      </button>
      <div className="modal__Section">
        <div className="modal__hero">
          <img src={Love} alt="" />
          saPA
        </div>

        <form className="signIn__form">
          <h2>Sign In</h2>
          {/* Email */}
          <div>
            <label>Email:</label>
            <input
              className="signIn__input"
              type="email"
              value={email}
              onChange={handleEmailChange}
              autoComplete="username"
            />
          </div>

          {/* Password */}
          <div>
            <label>Password:</label>
            <input
              className="signIn__input"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              autoComplete="current-password"
            />
          </div>

          {/* Error */}
          {error && <div className="error">{error}</div>}

          {/* Sign in button */}
          <button
            className="sign-in__btn sign-in "
            type="submit"
            onClick={handleSignIn}
          >
            Sign In
          </button>

          {/* Sign up button */}
          <button
            className="sign-up__btn sign-in  signIn"
            type="submit"
            // onClick={handleSignUp}
            onClick={onToggle}
          >
            Sign Up
          </button>

          {/* Forget password */}
          <div className="forget__password" onClick={handleForgetPassword}>
            Forget your Password?
          </div>
        </form>
      </div>

      {/* Sign up page */}
      {showSignUp && <div>Sign Up page</div>}
    </div>
  );
};

SignInForm.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default SignInForm;
