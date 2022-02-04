import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">login</span>
      <form className="loginForm">
        <label>username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
        />
        <label>password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
        />
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          register
        </Link>
      </button>
    </div>
  );
}
