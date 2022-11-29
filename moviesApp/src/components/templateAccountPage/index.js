import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import "../templateAuthPage/login.css";

export default function AccountPageTemplate() {
    const { currentUser } = useAuth();
    const email = currentUser.email;

    const handleSubmit = () => {
        
    };

    return (
        <div className="app">
          <div className="login-form">
            <div className="title"></div>
                <div className="login">
                    <div className="login__container">
                        <h1>Account Details</h1>
                        <h5>Email: {email}</h5>
                        <form onSubmit={handleSubmit}>
                            <h3>Enable premium features</h3>
                            <input type="checkbox" id="premium" name="premium"/>
                            <label for="premium"> Enabled</label>
                            <div className="button-container">
                              <input type="submit" value="Save"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
          </div>

    );
}