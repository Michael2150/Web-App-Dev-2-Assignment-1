import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function AuthPage({ isLogin }) {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const errors = {
        uname: "Invalid username",
        pass: "Invalid password",
        confpass: "Password does not match"
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        var { uname, pass } = document.forms[0];

        const userData = {}//database.find((user) => user.username === uname.value);
        if (userData) {
          if (userData.password !== pass.value) {
            setErrorMessages({ name: "pass", message: errors.pass });
          } else {
            setIsSubmitted(true);
          }
        } else {
          setErrorMessages({ name: "uname", message: errors.uname });
        }
      };
    
      const renderErrorMessage = (name) =>
        name === errorMessages.name && (
          <div className="error">{errorMessages.message}</div>
        );
    
      const renderForm = (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username* </label>
              <input type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Password* </label>
              <input type="password" name="pass" required />
              {renderErrorMessage("pass")}
            </div>
            {!isLogin ? (<div className="input-container">
              <label>Confirm Password* </label>
              <input type="password" name="confpass" required />
              {renderErrorMessage("confpass")}
            </div>): null}
            <div>
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <Link to={isLogin ? "/sign-up" : "/login"}>{isLogin ? "Sign Up" : "Login"}</Link>
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      );
    
      return (
        <div className="app">
          <div className="login-form">
            <div className="title">{isLogin? "Login" : "Sign up"}</div>
                {renderForm}
          </div>
        </div>
      );
}