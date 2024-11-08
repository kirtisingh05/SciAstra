import React, { useState } from 'react';
import axios from 'axios';
import './AdminLogin.css';


function AdminLogin({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/admin/login', { username, password });
            localStorage.setItem('token', response.data.token);
            onLogin();
        } catch (error) {
            console.error("Error logging in:", error);
            alert("Invalid username or password. Please try again.");
        }
    };

    return (
        <div className="admin-login">
            <h2 className="login-title">Admin Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="login-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="login-input"
                />
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>

    );
}

export default AdminLogin;