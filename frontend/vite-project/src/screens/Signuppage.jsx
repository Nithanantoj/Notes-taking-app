import React, { useState } from 'react';
import './Signuppage.css'; // Assuming you have a CSS file named SignupPage.css for styling
import {useNavigate} from 'react-router-dom'


const SignupPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = () => {
        // Add your signup logic here
        console.log('Signing up with:', username, password);
        navigate('/login')
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <input
                type="username"
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
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={handleSignup}>Sign Up</button>

            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    );
};

export default SignupPage;
