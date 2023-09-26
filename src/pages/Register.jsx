import React, { useState } from 'react'
import Add from "../img/icon.png";
import { createUserWithEmailAndPassword , updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom"; 

const Register = () => {

  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try{
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);
      
      const storageRef = ref(storage, displayName); 
      const uploadTask = uploadBytesResumable(storageRef, file);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } 
          catch (err) {
            console.log(err.message);
            setErr(true);
          }
        });
      });
    } 
    catch (err) {
      console.log(err.message);
      setErr(true);
    }
  }

  return (
    <div class="FormContainer">
        <div class="FormWrapper">
            <span className="logo">Zen Chat</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type ="text" placeholder='display name'></input>
                <input type = "email" placeholder='email'></input>
                <input type = "password" placeholder='password'></input>
                <input style={{display:"none"}}type = "file" id="file"/>
                <label htmlFor="file">
                  <img src={Add} alt="Icon" />
                  <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>Do you have an account? <Link to="/Login">Login</Link></p>
        </div> 
    </div>
  )
}

export default Register