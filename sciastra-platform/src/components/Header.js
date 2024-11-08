import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <h1>SciAstra</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/admin">Admin</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <button className="login-btn">Login/Signup</button>
        </header>
    );
}

export default Header;