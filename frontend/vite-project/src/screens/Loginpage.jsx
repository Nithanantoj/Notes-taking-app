import React, { useState } from 'react';
import './Loginpage.css';
import { useNavigate } from 'react-router-dom';

const Loginpage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate('/signup');
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('https://notes-web-nfpq.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                navigate('/notes');
            } else {
                
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>

        </div>
    );
};

export default Loginpage;
