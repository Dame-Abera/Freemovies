import React from 'react';
import Search from './components/search.jsx'
import  {useState,useEffect} from 'react';
import './App.css'
// import { useState } from 'react' https://api.themoviedb.org/3/trending/movie/{time_window}
const  API_BASE_URL=`https://api.themoviedb.org/3`;
const API_KEY=import.meta.env.VITE_TMDB_API_KEY;
// console.log(API_KEY);
const API_OPTIONS={
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`}
}

const App = () => {
  const [searchTerm,setSearchTerm]=useState("to  do  list");
  const [errorMessage,setErrorMessage]=useState("");
  useEffect(()=>{
    
  },[])
  const fetchmovies=async()=>{
    try{

    }catch(error){
      console.error("Error fetching movies:", error);
      setErrorMessage(error.message)
    }
  }
  return (
    <main>
      <div className="pattern"/>
      <div className="wrapper">

        <header>
          <img src="./hero.png" alt="hero"></img>
          <h1>Find <span className='text-gradient'>Movies</span> you'll Enjoy without the Hassle</h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <h1 className='text-white text-3xl'>{
searchTerm ? `Search results for "${searchTerm}"` : "Search for a movie, actor, or director"
        }</h1>
      </div>
     
      
    </main>
  )
}

export default App

