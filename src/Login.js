import './Login.css';
import React, { useState } from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({ setToken }) {
    const [email, setEmail] = useState();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // send a POST request to the backend with the login credentials
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, email, password}),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                  // show error message
                  alert(data.error);
                } else {
                  // set the token and redirect to the dashboard
                  setToken(data.token);
                  //redirect
                  console.log("Redirecting...")
                  navigate("/forum");
                }
            });
    };

    return (
        <div className='login'>
            <div className='login-box'>
                <div className='login-text'>Login</div>
                <form className='login-boxes' onSubmit={handleSubmit}>
                    <input
                        type="email"
                        className="login-email login-input"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <div className='empty-div'></div>
                    <input
                        type="username"
                        className="login-username login-input"
                        placeholder="Username"
                        value={username}
                        onChange={e => setUserName(e.target.value)}
                    />
                    <div className='empty-div'></div>
                    <input
                        type="password"
                        className="login-password login-input"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <div className='empty-div'></div>
                <button type='submit' className='login-button' onClick={() => handleSubmit}>Login</button>
                </form>
                <div className='login-bottom-links'>
                    <div className='forgot-password'>Forgot your password?</div>
                    <div className='no-account' onClick={() => {navigate("/register")}}>Don't have an account?</div>
                </div>
            </div>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}