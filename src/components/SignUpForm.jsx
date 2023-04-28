import React, { useState } from "react";
import {PropTypes} from "prop-types";
import "./SignUpForm.css";

const SignUpForm = ({ onToggle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSignUp = () => {
    console.log(`Signing up with email ${email} and password ${password}`);

    if (!email || !password || !confirmPassword) {
      setError("Email, password, and confirm password are required.");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError(null);
    }
    
  };

  return (
    <div className="modal__content">
      <button className="cancel__btn signUp" onClick={onToggle}>
        X
      </button>
      <h2>Sign Up</h2>
      <form className="signUp__form">
        <div>
          <label>Email:</label>
          <input
            className="signUp__input"
            type="email"
            value={email}
            onChange={handleEmailChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            className="signUp__input"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="new-password"
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            className="signUp__input"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            autoComplete="new-password"
          />
        </div>
        {error && <div className="error">{error}</div>}

        {/* Sign up button */}
        <button
          className="signIn__btn signIn"
          type="submit"
          // onClick={handleSignUp}
          onClick={onToggle}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

SignUpForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SignUpForm;
