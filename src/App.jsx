import React from 'react';
import Search from './components/search.jsx'
import  {useState,useEffect} from 'react';
import './App.css'
import { Spinner } from "flowbite-react";
import {useDebounce} from 'react-use';
import MovieCard from './components/MovieCard,.jsx';
import { updateSearchCount } from './appwrite.js';
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
  const [searchTerm,setSearchTerm]=useState("");
  const [errorMessage,setErrorMessage]=useState("");
  const [movies,setMovies]=useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm,setDebouncedSearchTerm] = useState('');
  
  useDebounce(() => {
    setDebouncedSearchTerm(searchTerm);
  }, 500, [searchTerm]);
  useEffect(()=>{
    fetchmovies(debouncedSearchTerm)
  },[debouncedSearchTerm])
 
  const fetchmovies=async(query="")=>{
    setIsLoading(true);
    setErrorMessage(""); 
    try{
      const endpoint=query
       ?  `${API_BASE_URL}/search/movie?query=${encodeURI(query)}&include_adult=false`
       : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
   const  response=await fetch(endpoint,API_OPTIONS);
   
   if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
   }
   const data=await response.json();
   
   setMovies(data.results);
   if(data.response="False"){
    setErrorMessage
   }
   if(query && data.results.length > 0){
     await updateSearchCount(
        query,
        data.results[0]
      )
    }
  } catch(error){
      console.error("Error fetching movies:", error);
      setErrorMessage(error.message)
    }finally{
      setIsLoading(false );
    }
  }
  return (
    <main>
      <div className="pattern"/>
      <div className="wrapper">

        <header>
          <img src="./hero.png" alt="hero"></img>
          <h1>Find <span className='text-gradient'>Movies</span> you'll Enjoy without the Hassle</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <h1 className='text-white text-3xl'>{
searchTerm ? `Search results for "${searchTerm}"` : "Search for a movie, actor, or director"
        }</h1>
        </header>
        <section className="all-movies">
        <h2 className='mt-[40px]'>All movies</h2>
        {
          isLoading ?(<Spinner />):errorMessage?(<div className="text-red-500">{errorMessage}</div>):
          (
            <ul>
              {movies.map((movie) => (
                 <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )
                }
                </section>
      </div>
     
      
    </main>
  )
}

export default App

