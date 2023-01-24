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

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            email,
            username,
            password
        });
        setToken(token);
        console.log("")
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
                        onChange={e => setEmail(e.target.value)}
                    />
                    <div className='empty-div'></div>
                    <input
                        type="username"
                        className="login-username login-input"
                        placeholder="Username"
                        onChange={e => setUserName(e.target.value)}
                    />
                    <div className='empty-div'></div>
                    <input
                        type="password"
                        className="login-password login-input"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <div className='empty-div'></div>
                </form>
                <button type='submit' className='login-button' onClick={() => handleSubmit}>Login</button>
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