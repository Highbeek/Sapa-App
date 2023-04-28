import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";

function LoginPage({ onClose }) {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleToggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Sign In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {showSignUp ? <SignUpForm autoFocus /> : <SignInForm autoFocus />}
        <Button variant="link" onClick={handleToggleSignUp}>
          {showSignUp ? "Sign In" : "Sign Up"}
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </>
  );
}

export default LoginPage;
