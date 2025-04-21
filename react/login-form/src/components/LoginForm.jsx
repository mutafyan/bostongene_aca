import { useState } from "react";
import "../styles/LoginForm.css";
const LoginForm = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const submit = () => {
    if (validateEmail(emailValue)&& validatePassword(passwordValue)) {
      alert("Validation passed");
    }
  };

  const handleEmailInput = (e) => {
    const value = e.target.value;
    setEmailValue(value);
    validateEmail(value);
  };

  const handlePasswordInput = (e) => {
    const value = e.target.value;
    setPasswordValue(value);
    validatePassword(value);
  }
  const validateEmail = (email) => {
    /** for email
     * include @
     * include .
     * include domain after @
     */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const res = emailRegex.test(email);
    if (!res) {
      setEmailError(
        "Please enter a valid email, \ncontaining @ and domain name with a ."
      );
    } else {
        setEmailError('');
    }
    return res;
  };

  const validatePassword = (password) => {
    /** for password
     * at least 8 characters
     * one lowercase letter
     * one uppercase letter
     * one number
     * one special character (@$!%*?&)
     */
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const res = passwordRegex.test(password);
    if (!res) {
      setPasswordError(
        "Password must contain at least 8 chars, \none lowercase, one uppercase and one number"
      );
    } else {
        setPasswordError('');
    }

    return res;
  };

  const clear = () => {
    setPasswordValue("");
    setEmailValue("");
  };
  return (
    <div className="login-box">
      {emailError && <div style={{ color: "red" }}>{emailError}</div>}
      <input
        value={emailValue}
        onChange={handleEmailInput}
        id="login-input"
        type="email"
        placeholder="Enter your email"
      />
      {passwordError && <div style={{ color: "red" }}>{passwordError}</div>}
      <input
        value={passwordValue}
        onChange={handlePasswordInput}
        type="password"
        placeholder="Enter your password"
      />
      <div className="buttons-container">
        <button onClick={clear}>Cancel</button>
        <button style={{ backgroundColor: "#3486eb" }} onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
