import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import app from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import "../styles/register.css";

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
            <form onSubmit={handleRegister} className='registerForm'>
                <h2>Register</h2>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>

                <label htmlFor="">Password</label>
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <button type='submit'>Register</button>
                <p>Already registered <a href="/">Login!</a></p>

            </form>
        </>
    )
}