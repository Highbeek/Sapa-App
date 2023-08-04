import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";
import "../App.css";

function LoginPage({ onClose }) {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleToggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <>
      <Modal.Header closeButton={false}>
        <Modal.Title>
          {showSignUp ? (
            <>
              <span
                className="sign-up-text"
                onClick={handleToggleSignUp}
                style={{ cursor: "pointer", color: "white" }}
              >
                Don't have an account?
              </span>{" "}
              <span
                className="sign-up-text"
                onClick={handleToggleSignUp}
                style={{ cursor: "pointer", color: "yellow" }}
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              <span
                className="sign-in-text"
                onClick={handleToggleSignUp}
                style={{ cursor: "pointer", color: "white" }}
              >
                Already have an account?
              </span>{" "}
              <span
                className="sign-in-text"
                onClick={handleToggleSignUp}
                style={{ cursor: "pointer", color: "yellow" }}
              >
                Sign In
              </span>
            </>
          )}
          <button className="cancel__btn" onClick={onClose}>
            X
          </button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ width: "100%", paddingRight: "0 !important" }}>
        {showSignUp ? (
          <>
            <SignInForm />
          </>
        ) : (
          <>
            <SignUpForm />
          </>
        )}
      </Modal.Body>
    </>
  );
}

export default LoginPage;
