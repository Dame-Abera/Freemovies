import React from 'react';
import Search from './components/search.jsx'
import  {useState} from 'react';
// import { useState } from 'react'
import './App.css'
const App = () => {
  const [searchTerm,setSearchTerm]=useState("to  do  list");
  return (
    <main>
      <div className="pattern"/>
      <div className="wrapper">

        <header>
          <img src="./hero.png" alt="hero"></img>
          <h1>Find <span className='text-gradient'>Movies</span> you'll Enjoy without the Hassle</h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>
     
      
    </main>
  )
}

export default App

