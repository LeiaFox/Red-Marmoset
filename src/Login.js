import './Login.css';
import React from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    return (
        <div className='login'>
            <div className='login-box'>
                <div className='login-text'>Login</div>
                <form className='login-boxes'>
                    <input
                        type="email"
                        className="login-email login-input"
                        placeholder="Email"
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
                <button type='submit' className='login-button'>Login</button>
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