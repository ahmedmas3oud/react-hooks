import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find(m => m.title === title);

  if (!movie) return <p>Movie not found.</p>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe width="560" height="315" src={movie.trailer} title="YouTube trailer" frameBorder="0" allowFullScreen></iframe>
      <p>⭐ {movie.rating}</p>
      <Link to="/">← Back to home</Link>
    </div>
  );
};

export default MovieDescription;
