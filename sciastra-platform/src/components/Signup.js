import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/admin/signup', { username, password });
            alert("Signup successful! You can now log in.");
            setUsername('');
            setPassword('');
        } catch (error) {
            console.error("Error signing up:", error);
            alert("Signup failed. Please try again.");
        }
    };

    return (
        <div className="signup">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;