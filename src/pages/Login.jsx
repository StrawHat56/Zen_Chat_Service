import React from 'react'
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom"; 
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase.js";

const Login   = () => {

  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;

    try{
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    }
    catch (err) {
      console.log(err.message);
      setErr(true);
    }
  };

  return (
    <div class="FormContainer">
        <div class="FormWrapper">
            <span className="logo">Zen Chat</span>
            <span className="title">Login</span>
            <form onSubmit={handleSubmit}> 
                <input type = "email" placeholder='email'></input>
                <input type = "password" placeholder='password'></input>
                <button>Sign in</button>
            </form>
            <p>You don't have an account? <Link to="/register">Register</Link></p>
            {err && <span>Something went wrong</span>}
        </div> 
    </div>
  )
}

export default Login