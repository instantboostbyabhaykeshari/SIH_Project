import React, { useState } from 'react';
import './CSS/Header.css'; // Create a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsersRectangle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleClickOutside = (e) => {
        if (!e.target.closest('.user-profile')) {
            setDropdownVisible(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <header className="header">
            <div className="logo">
                <img src="/logo.png" alt="Institute Logo" />
                <h1>Annual Report Portal</h1>
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Reports</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </nav>
            <div className="user-profile">
                <div className="user">
                    <FontAwesomeIcon icon={faUser} size="2x"/>
                    <span>User Profile</span>
                </div>
                <button
                    id="dropdownToggle"
                    className="dropdown-toggle"
                    onClick={toggleDropdown}
                >
                    &#x25BC;
                </button>
                <div className={`dropdown ${dropdownVisible ? 'show' : ''}`} id="userDropdown">
                    <ul>
                        <li><a href="#">Account Settings</a></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
