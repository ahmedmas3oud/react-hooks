import React from 'react';

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <h2>{movie.title}</h2>
    <img src={movie.posterURL} alt={movie.title} />
    <p>{movie.description}</p>
    <p>⭐ {movie.rating}</p>
  </div>
);

export default MovieCard;
