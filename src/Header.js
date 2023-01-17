import logo from './Red-Logo.png';
import './Header.css';
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    return (
        <div className='header'>
            <div className='forum-link' onClick={() => {navigate("/forum")}}>Forum</div>
            <img className='logo' src={logo} alt="Logo"/>
            <div className='empty-div'>Forum</div>
        </div>
    );
}