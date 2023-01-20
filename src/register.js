import './Register.css';
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    return (
        <div className='register'>
            <div className='register-box'>
                <div className='register-text'>Register</div>
                <form className='register-boxes'>
                    <input
                        type="email"
                        className="register-email register-input"
                        placeholder="Email"
                    />
                    <div className='empty-div'></div>
                    <input
                        type="username"
                        className="register-username register-input"
                        placeholder="Username"
                    />
                    <div className='empty-div'></div>
                    <input
                        type="password"
                        className="register-password register-input"
                        placeholder="Password"
                    />
                    <div className='empty-div'></div>
                    <input
                        type="password"
                        className="register-confirm-password register-input"
                        placeholder="Confirm Password"
                    />
                    <div className='empty-div'></div>
                </form>
                <button className='register-button'>Login</button>
                <div className='register-bottom-links'>
                    <div className='forgot-password'>Forgot your password?</div>
                    <div className='no-account' onClick={() => {navigate("/login")}}>Already have an account?</div>
                </div>
            </div>
        </div>
    );
}