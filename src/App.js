import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller",
      posterURL: "https://shunrize.com/blog/wp-content/uploads/2010/07/Inception.jpg",
      rating: 8.8,
    },
    {
      title: "Interstellar",
      description: "A space exploration epic",
      posterURL: "https://media.senscritique.com/media/000008299751/0/interstellar.jpg",
      rating: 9.0,
    },
    {
      title: "The Dark Knight",
      description: "Batman faces the Joker in this gritty action drama.",
      posterURL: "https://medias.boutique.lab.arte.tv/prod/69209_vod_thumb_315491.jpg",
      rating: 9.1,
    },
    {
      title: "The Matrix",
      description: "A hacker discovers the truth about reality.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
      rating: 8.7,
    },
  ]);

  const [filter, setFilter] = useState({ title: "", rating: 0 });

  const handleAddMovie = (e) => {
    e.preventDefault();
    const newMovie = {
      title: e.target.title.value,
      description: e.target.description.value,
      posterURL: e.target.posterURL.value,
      rating: parseFloat(e.target.rating.value),
    };
    setMovies([...movies, newMovie]);
    e.target.reset();
  };

  return (
    <div>
      <h1>🎬 Movie App</h1>

      <form onSubmit={handleAddMovie}>
        <h3>Add a new movie</h3>
        <input name="title" type="text" placeholder="Title" required />
        <input name="description" type="text" placeholder="Description" required />
        <input name="posterURL" type="text" placeholder="Poster URL" required />
        <input name="rating" type="number" step="0.1" placeholder="Rating" required />
        <button type="submit">Add Movie</button>
      </form>

      <Filter setFilter={setFilter} />
      <MovieList movies={movies} filter={filter} />
    </div>
  );
};

export default App;
