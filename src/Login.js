import './Login.css';
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Forum() {
    const navigate = useNavigate();
    return (
        <div className='login'>
            <div className='login-box'>
                <div className='login-text'>Login</div>
                <form className='login-boxes'>
                    <input
                        type="email"
                        className="login-email"
                        placeholder="Email"
                    />
                    <input
                        type="username"
                        className="login-username"
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        className="login-password"
                        placeholder="Password"
                    />
                </form>
            </div>
        </div>
    );
}