import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <Link to={`/movie/${movie.title}`}>
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <img src={movie.posterURL} alt={movie.title} />
      <p>{movie.description}</p>
      <p>⭐ {movie.rating}</p>
    </div>
  </Link>
);

export default MovieCard;
