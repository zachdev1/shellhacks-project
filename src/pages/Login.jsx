import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import app from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import "../styles/login.css";


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {  
        e.preventDefault();
    
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                // Signed in 
                window.alert(`Welcome ${email}`);
                navigate('/dashboard');
                // ...
            })
            .catch((error) => {
                window.alert(error.message)
            });
    };

    return (
        <>
            <form className='loginForm' onSubmit={handleLogin}>
                <h2>Login</h2>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required></input>

                <label htmlFor="">Password</label>
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                <button type='submit'>Login</button>
                <p>Dont have an account? <a href="register">Register here!</a></p>
            </form>
        </>
    )
}