import React from 'react'

const Search = ({searchTerm,setSearchTerm}) => {
  return (
    <div className="search">
      <div>
        <img src="./search.svg" alt="" />
        <input 
          type="text"
          placeholder='Search for a song, artist, or album'
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}>
        </input>
      </div>
    </div>
  )
}

export default Search;
