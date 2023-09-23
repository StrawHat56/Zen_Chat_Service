import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a User'/>
      </div>
      <div className="userChat">
        <img src="../img/person.jpg" alt="" />
        <div className="userChatInfo">
          <span>Avaneesh</span>
        </div>
      </div>
    </div>
  )
}

export default Search