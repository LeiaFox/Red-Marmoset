import './Forum.css';
import React from "react";
import { useNavigate } from "react-router-dom";
import announcements from "./announcements.png";

export default function Forum() {
    const navigate = useNavigate();
    return (
        <div className='forum'>
            <div className='forum-body'>
                <div className='forum-header'>
                    <img/>
                    <div>Hello, username</div>
                    <div>January 13, 2023, 04:45:45 AM</div>
                </div>
            </div>
        </div>
    );
}