import './Forum.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import announcements from "./announcements.png";
import avatar from "./avatar.png"

export default function Forum() {
    const navigate = useNavigate();
    const [search, setSearch] = useState();
    return (
        <div className='forum'>
            <div className='forum-body'>
                <div className='forum-header'>
                    <div className='forum-profile-full'>
                        <img src={avatar} className='forum-profile-image' />
                        <div className='forum-profile-text'>
                            <div className='forum-welcome-message'>Hello, username</div>
                            <div className='empty-div-profile'></div>
                            <div className='forum-time-text'>January 13, 2023, 04:45:45 AM</div>
                        </div>
                        <div className='empty-div-header'></div>
                        <input
                            type="search"
                            className="forum-search-input"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                        <div className='empty-div-header-2'></div>
                        <button type='submit' className='forum-search-button'>Search</button>
                    </div>
                    <div className='empty-div-links-space'></div>
                    <div className='forum-links'>
                        <button type='button' className='forum-home-button link-buttons'>home</button><div className='forum-link-space'></div>
                        <button type='button' className='forum-help-button link-buttons'>Help</button><div className='forum-link-space'></div>
                        <button type='button' className='forum-profile-button link-buttons'>Profile</button><div className='forum-link-space'></div>
                        <button type='button' className='forum-messages-button link-buttons'>Messages</button><div className='forum-link-space'></div>
                        <button type='button' className='forum-members-button link-buttons'>Members</button><div className='forum-link-space'></div>
                        <button type='button' className='forum-logout-button link-buttons'>Logout</button><div className='forum-link-space'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}