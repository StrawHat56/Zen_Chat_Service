
import React, { useState, useContext } from 'react'
import { db } from '../firebase'
import { doc, collection, query, where, getDocs, getDoc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { AuthContext } from '../context/AuthContext';



const Search = () => {

  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const {currentUser} = useContext(AuthContext);

  const handleSearch = async () => {

    const q = query(collection(db, "users"), where("displayName", "==", username));
    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        console.log(doc.data());
      });
    }
    catch(err){
      setErr(true);
    }
  };
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };
  const handleSelect = async () => {
    const combineId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
    
    try{
      const res = await getDoc(doc(db, "chats", combineId));
      if(!res.exists()){
        await setDoc(doc(db, "chats", combineId), { messages: [] });

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combineId+".userInfo"]:{
            displayName: user.displayName,
            photoURL: user.photoURL,
            uid: user.uid,
          },
          [combineId+".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combineId+".userInfo"]:{
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
            uid: currentUser.uid,
          },
          [combineId+".date"]: serverTimestamp()
        });
      }
    }
    catch(err){
      console.log(err.message);
    }
    setUser(null);
    setUsername("")
  };

  return (
    <div className='search'>
      <div className="searchForm">
        <input 
        type="text" 
        placeholder='Find a User' 
        onKeyDown={handleKey} 
        onChange={e=>setUsername(e.target.value)}
        value = {username}
        />
      </div>
      {err && <span>User Not Found</span>}
      {user && <div className="userChat" onClick={handleSelect}>
        <img src={user.photoURL} alt="" />
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}

export default Search