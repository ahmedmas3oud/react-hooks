import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDescription from './components/MovieDescription';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller",
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
      posterURL: "https://shunrize.com/blog/wp-content/uploads/2010/07/Inception.jpg",
      rating: 8.8,
    },
    {
      title: "Interstellar",
      description: "A space exploration epic",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
      posterURL: "https://media.senscritique.com/media/000008299751/0/interstellar.jpg",
      rating: 9.0,
    },
    {
      title: "The Dark Knight",
      description: "Batman faces the Joker in this gritty action drama.",
      trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
      posterURL: "https://medias.boutique.lab.arte.tv/prod/69209_vod_thumb_315491.jpg",
      rating: 9.1,
    },
    {
      title: "The Matrix",
      description: "A hacker discovers the truth about reality.",
      trailer: "https://www.youtube.com/embed/vKQi3bBA1y8",
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
      trailer: e.target.trailer.value,
    };
    setMovies([...movies, newMovie]);
    e.target.reset();
  };

  return (
    <div>
      <h1>🎬 Movie App</h1>

      <form onSubmit={handleAddMovie}>
        <h3>Add a new movie</h3>
        <input name="title" placeholder="Title" required />
        <input name="description" placeholder="Description" required />
        <input name="posterURL" placeholder="Poster URL" required />
        <input name="trailer" placeholder="Trailer URL (embed link)" required />
        <input name="rating" type="number" step="0.1" placeholder="Rating" required />
        <button type="submit">Add Movie</button>
      </form>

      <Filter setFilter={setFilter} />

      <Routes>
        <Route path="/" element={<MovieList movies={movies} filter={filter} />} />
        <Route path="/movie/:title" element={<MovieDescription movies={movies} />} />
      </Routes>
    </div>
  );
};

export default App;
