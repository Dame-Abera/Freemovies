import React from 'react'

const MovieCard = ({movie:{id,title,vote_average,poster_path,release_date,original_language}}) => {
  return (
    <div className='movie-card'>
      <img
        src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'}
        alt={title}
        
      />
      <p key={id} className='text-white'>{title}</p>
      <p className='text-gray-400'>Rating: {vote_average}</p>
    </div>
  )
}

export default MovieCard        
