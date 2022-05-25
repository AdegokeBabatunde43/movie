import React from 'react'
const imgPath = 'https://image.tmdb.org/t/p/w500/';

const unavailable = 'https://www.movienewz.com/img/films/poster-holder.jpg';

const MovieCard = ({movie}) => {
  return (
    <div className="movie-card">
      <img
        src={movie.poster_path ?`${imgPath}${movie.poster_path}` : unavailable}
        alt={movie.title}
        className="movie-cover"
      />
      <h3 className="movie-title">{movie.title}</h3>
      <span className="rating">{movie.vote_average.toFixed(1)}</span>
    </div>
  );
}

export default MovieCard