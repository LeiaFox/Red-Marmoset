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

    const testUsers = [
        {username: "testuser", email: "test@example.com", password: "password123"},
        {username: "anotheruser", email: "another@example.com", password: "password456"},
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const userExists = testUsers.some((user) => user.username === username && user.email === email && user.password === password);
        if (userExists) {
            // create and set token
            const newToken = "your_token_here";
            setToken(newToken);
        } else {
            // show error message
            alert("Invalid login credentials. Please try again.");
        }
    }

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