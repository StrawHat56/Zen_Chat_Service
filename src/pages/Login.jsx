import React from 'react'
import Add from "../img/icon.png";

const Login   = () => {
  return (
    <div class="FormContainer">
        <div class="FormWrapper">
            <span className="logo">Zen Chat</span>
            <span className="title">Register</span>
            <form> 
                <input type = "email" placeholder='email'></input>
                <input type = "password" placeholder='password'></input>
                <button>Sign in</button>
            </form>
            <p>You don't have an account? Register</p>
        </div> 
    </div>
  )
}

export default Login