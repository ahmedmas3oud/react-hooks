import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, filter }) => {
  const filtered = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rating
  );

  return (
    <div className="movie-list">
      {filtered.map((movie, i) => (
        <MovieCard key={i} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
