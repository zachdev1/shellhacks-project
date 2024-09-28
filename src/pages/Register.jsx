import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import app from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                // Signed up
                window.alert("Successful Register")
                navigate('/');
                // ...
            })
            .catch((error) => {
                window.alert(error.message)
            });
    }

    return (
        <>
            <form onSubmit={handleRegister}>
                <label htmlFor="">email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>

                <label htmlFor="">password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <button type='submit'>Register</button>
            </form>
        </>
    )
}