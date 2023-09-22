import React from 'react'
import Add from "../img/icon.png";

const Register = () => {
  return (
    <div class="FormContainer">
        <div class="FormWrapper">
            <span className="logo">Zen Chat</span>
            <span className="title">Register</span>
            <form>
                <input type ="text" placeholder='display name'></input>
                <input type = "email" placeholder='email'></input>
                <input type = "password" placeholder='password'></input>
                <input style={{display:"none"}}type = "file" id="file"></input>
                <label htmlfor="file">
                    <img src={Add} alt="Icon" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Do you have an account? Login</p>
        </div> 
    </div>
  )
}

export default Register