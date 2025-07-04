import React from 'react'

const MovieCard = ({movie:{ title,vote_average,poster_path,release_date,original_language}}) => {
  return (
    <div>
      <p key={movie.id} className='text-white'>{movie.title}</p>
      <p className='text-gray-400'>Rating: {movie.vote_average}</p>
    </div>
  )
}

export default MovieCard        
