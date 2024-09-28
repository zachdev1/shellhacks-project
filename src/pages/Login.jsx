import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import app from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';

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
            <form onSubmit={handleLogin}>
                <label htmlFor="">email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

                <label htmlFor="">password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type='submit'>Login</button>
            </form>
        </>
    )
}