import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">register</span>
      <form className="registerForm">
        <label>username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
        />
        <label>email</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Enter your email..."
        />
        <label>password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
        />
        <button className="registerButton" type="submit">
          register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          login
        </Link>
      </button>
    </div>
  );
}
